let pipelineSteps = [];
let variableColorMap = {};
let isTimelineActive = false;
let currentFrameIndex = 0;
let predictionTarget = null;
let activeLessonId = "accumulator";
let activeTaskId = "sum-three";
let activeContentMode = "practice-task";
let lastLessonResult = null;
let predictionAttempts = [];
let predictionAttemptCounts = {};
let revealedPredictionKeys = new Set();
let studentActionLog = [];
let exerciseTrainingRecords = [];
let presentationMode = false;
let activeLearningMode = "mission";
let activeView = "practice";
let selectedBugLine = null;
let debugReportFeedback = null;
let reviewSelections = new Set();
let reviewFeedback = null;
let engineReady = false;
let activeWalkthroughMode = null;
let walkthroughFeedback = null;
let revealedMissionFixes = new Set();

const GUIDE_KEY = "ssp_first_run_guide_completed";
const MISSION_PROGRESS_KEY = "ssp_v7_completed_levels";
const SKILL_PROGRESS_KEY = "ssp_v7_skill_progress";
const BRIGHT_PALETTE = ["#ff7b72", "#3fb950", "#d29922", "#a5d6ff", "#f274c5", "#58a6ff", "#ffc600", "#e2a6ff"];
const STUDENT_TOPIC_ORDER = ["assignment", "ifElse", "forLoop", "whileLoop", "listTraversal", "accumulator", "nestedLoop", "functionCall", "recursion", "complex"];

const LESSONS = {
    assignment: {
        title: "Variable Assignment",
        concept: "Variable assignment",
        objective: "Store and update values using variable names.",
        starterCode: `student_name = ""`,
        checks: [
            { type: "noErrors" },
            { type: "variableEquals", variable: "student_name", expected: "Ada" },
            { type: "conceptSeen", concept: "Variable assignment" }
        ]
    },
    ifElse: {
        title: "If / Else",
        concept: "Condition",
        objective: "Use conditions to choose the correct branch.",
        starterCode: `score = 55

if score >= 60:
    result = "pass"
else:
    result = "retry"`,
        checks: [
            { type: "noErrors" },
            { type: "variableEquals", variable: "result", expected: "pass" },
            { type: "conceptSeen", concept: "Condition" }
        ]
    },
    forLoop: {
        title: "For Loop",
        concept: "Loop",
        objective: "Use for loops to repeat work over a sequence.",
        starterCode: `last_number = 0

for number in range(1, 3):
    last_number = number`,
        checks: [
            { type: "noErrors" },
            { type: "variableEquals", variable: "last_number", expected: "3" },
            { type: "conceptSeen", concept: "Loop" }
        ]
    },
    whileLoop: {
        title: "While Loop",
        concept: "Loop",
        objective: "Use while loops that stop when a condition changes.",
        starterCode: `count = 0

while count < 3:
    count += 1`,
        checks: [
            { type: "noErrors" },
            { type: "variableEquals", variable: "count", expected: "5" },
            { type: "conceptSeen", concept: "Loop" }
        ]
    },
    listTraversal: {
        title: "List Traversal",
        concept: "List traversal",
        objective: "Visit list items in order and track useful information.",
        starterCode: `numbers = [2, 6, 4]
largest = 0

for number in numbers:
    largest = number`,
        checks: [
            { type: "noErrors" },
            { type: "variableEquals", variable: "largest", expected: "6" },
            { type: "conceptSeen", concept: "List traversal" }
        ]
    },
    accumulator: {
        title: "Accumulator Pattern",
        concept: "Accumulator",
        objective: "Keep a running result across repeated steps.",
        starterCode: `total_sum = 0
numbers = [10, 20, 30]

for number in numbers:
    total_sum = number`,
        checks: [
            { type: "noErrors" },
            { type: "variableEquals", variable: "total_sum", expected: "60" },
            { type: "conceptSeen", concept: "Accumulator" }
        ]
    },
    nestedLoop: {
        title: "Nested Loop",
        concept: "Nested loop",
        objective: "Use one loop inside another loop.",
        starterCode: `pair_count = 0
rows = ["A", "B"]
cols = [1, 2, 3]

for row in rows:
    for col in cols:
        pair_count += 0`,
        checks: [
            { type: "noErrors" },
            { type: "variableEquals", variable: "pair_count", expected: "6" },
            { type: "conceptSeen", concept: "Nested loop" }
        ]
    },
    functionCall: {
        title: "Function Call",
        concept: "Function call",
        objective: "Call reusable functions and store returned values.",
        starterCode: `def square(number):
    result = number * number
    return result

answer = square(3)`,
        checks: [
            { type: "noErrors" },
            { type: "variableEquals", variable: "answer", expected: "16" },
            { type: "conceptSeen", concept: "Function call" }
        ]
    },
    recursion: {
        title: "Recursion Intro",
        concept: "Recursion",
        objective: "Use a function that calls itself on a smaller problem.",
        starterCode: `def factorial(n):
    if n == 1:
        return 1
    return n * factorial(n - 1)

answer = factorial(4)`,
        checks: [
            { type: "noErrors" },
            { type: "variableEquals", variable: "answer", expected: "120" },
            { type: "conceptSeen", concept: "Recursion" }
        ]
    },
    simple: {
        title: "Simple",
        concept: "Two-concept practice",
        objective: "Combine two programming ideas in one short task.",
        starterCode: `numbers = [2, 5, 8]
total = 0

for number in numbers:
    if number > 4:
        total = number`,
        checks: [
            { type: "noErrors" },
            { type: "variableEquals", variable: "total", expected: "13" },
            { type: "conceptSeen", concept: "Loop" },
            { type: "conceptSeen", concept: "Condition" }
        ]
    },
    medium: {
        title: "Medium",
        concept: "Four-concept practice",
        objective: "Combine four programming ideas in a moderate task.",
        starterCode: `def discount(price):
    return price - 2

prices = [8, 12, 6]
discounted_total = 0

for price in prices:
    if price >= 8:
        discounted_total = discount(price)`,
        checks: [
            { type: "noErrors" },
            { type: "variableEquals", variable: "discounted_total", expected: "24" },
            { type: "conceptSeen", concept: "List traversal" },
            { type: "conceptSeen", concept: "Condition" },
            { type: "conceptSeen", concept: "Accumulator" },
            { type: "conceptSeen", concept: "Function call" }
        ]
    },
    complex: {
        title: "Complex",
        concept: "Algorithmic practice",
        objective: "Complete longer algorithmic tasks, including fill-in-the-blank code.",
        starterCode: `numbers = [2, 4, 6, 8, 10, 12]
target = 8
left = 0
right = len(numbers) - 1
found_index = -1

while left <= right:
    mid = (left + right) // 2
    if numbers[mid] == ___1___:
        found_index = ___2___
        break
    elif numbers[mid] < target:
        left = mid + 1
    else:
        right = mid - 1`,
        checks: [
            { type: "noErrors" },
            { type: "variableEquals", variable: "found_index", expected: "3" },
            { type: "conceptSeen", concept: "Loop" },
            { type: "conceptSeen", concept: "Condition" }
        ]
    }
};

const PRACTICE_TASKS = {
    assignment: [
        {
            id: "set-ada",
            title: "Set a student name",
            objective: "Set the final value of student_name to Ada.",
            starterCode: `student_name = ""`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "student_name", expected: "Ada" },
                { type: "conceptSeen", concept: "Variable assignment" }
            ]
        },
        {
            id: "update-score",
            title: "Update a score",
            objective: "Change score so its final value is 95.",
            starterCode: `score = 70
score = 80`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "score", expected: "95" },
                { type: "conceptSeen", concept: "Variable assignment" }
            ]
        },
        {
            id: "copy-display-name",
            title: "Copy a display name",
            objective: "Make display_name finish as Grace by using the existing first_name value.",
            starterCode: `first_name = "Grace"
display_name = ""`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "display_name", expected: "Grace" },
                { type: "conceptSeen", concept: "Variable assignment" }
            ]
        },
        {
            id: "calculate-total",
            title: "Calculate a total",
            objective: "Make total finish as 30.",
            starterCode: `price = 10
quantity = 3
total = 0`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "total", expected: "30" },
                { type: "conceptSeen", concept: "Variable assignment" }
            ]
        },
        {
            id: "undefined-variable",
            title: "Find an undefined variable",
            objective: "Run the code and identify the undefined variable error.",
            starterCode: `price = 20
total = price + tax
print(total)`,
            checks: [{ type: "errorCategory", expected: "undefined-variable" }]
        },
        {
            id: "debug-tax-total",
            title: "Debug a missing tax update",
            objective: "Fix the assignment so total finishes as 22.",
            starterCode: `price = 20
tax = 2
total = price
print(total)`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "total", expected: "22" },
                { type: "conceptSeen", concept: "Variable assignment" }
            ]
        }
    ],
    ifElse: [
        {
            id: "pass-or-retry",
            title: "Choose pass or retry",
            objective: "Modify the code so result finishes as pass.",
            starterCode: `score = 55

if score >= 60:
    result = "pass"
else:
    result = "retry"`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "result", expected: "pass" },
                { type: "conceptSeen", concept: "Condition" }
            ]
        },
        {
            id: "discount-eligible",
            title: "Check discount eligibility",
            objective: "Make discount_status finish as eligible.",
            starterCode: `items_bought = 2

if items_bought >= 3:
    discount_status = "eligible"
else:
    discount_status = "not eligible"`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "discount_status", expected: "eligible" },
                { type: "conceptSeen", concept: "Condition" }
            ]
        },
        {
            id: "umbrella-message",
            title: "Choose an umbrella message",
            objective: "Make message finish as take umbrella.",
            starterCode: `is_raining = False

if is_raining:
    message = "take umbrella"
else:
    message = "leave umbrella"`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "message", expected: "take umbrella" },
                { type: "conceptSeen", concept: "Condition" }
            ]
        },
        {
            id: "print-result",
            title: "Trace a printed decision",
            objective: "Run the condition so stdout finishes with pass.",
            starterCode: `score = 72

if score >= 60:
    result = "pass"
else:
    result = "try again"

print(result)`,
            checks: [
                { type: "noErrors" },
                { type: "stdoutContains", text: "pass" },
                { type: "conceptSeen", concept: "Condition" }
            ]
        },
        {
            id: "boundary-score",
            title: "Fix a boundary condition",
            objective: "Make result finish as pass when score is exactly 60.",
            starterCode: `score = 60

if score > 60:
    result = "pass"
else:
    result = "retry"`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "result", expected: "pass" },
                { type: "conceptSeen", concept: "Condition" }
            ]
        }
    ],
    forLoop: [
        {
            id: "last-number",
            title: "Track the last number",
            objective: "Use the for loop so last_number finishes as 3.",
            starterCode: `last_number = 0

for number in range(1, 3):
    last_number = number`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "last_number", expected: "3" },
                { type: "conceptSeen", concept: "Loop" }
            ]
        },
        {
            id: "loop-count",
            title: "Count loop passes",
            objective: "Make loop_count finish as 4.",
            starterCode: `loop_count = 0

for number in range(4):
    loop_count = number`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "loop_count", expected: "4" },
                { type: "conceptSeen", concept: "Loop" }
            ]
        },
        {
            id: "last-color",
            title: "Track the last color",
            objective: "Make current_color finish as blue.",
            starterCode: `colors = ["red", "green"]
current_color = ""

for color in colors:
    current_color = color`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "current_color", expected: "blue" },
                { type: "conceptSeen", concept: "Loop" }
            ]
        },
        {
            id: "range-total",
            title: "Add a small range",
            objective: "Make total finish as 10.",
            starterCode: `total = 0

for number in range(1, 5):
    total = number`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "total", expected: "10" },
                { type: "conceptSeen", concept: "Loop" },
                { type: "conceptSeen", concept: "Accumulator" }
            ]
        },
        {
            id: "not-iterable",
            title: "Loop over the wrong object",
            objective: "Run the code and identify why a single number cannot be looped over.",
            starterCode: `for item in 5:
    print(item)`,
            checks: [{ type: "errorCategory", expected: "not-iterable" }]
        },
        {
            id: "debug-loop-total",
            title: "Debug a loop total",
            objective: "Fix the loop so total finishes as 6.",
            starterCode: `total = 0

for number in range(1, 4):
    total = number`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "total", expected: "6" },
                { type: "conceptSeen", concept: "Loop" },
                { type: "conceptSeen", concept: "Accumulator" }
            ]
        }
    ],
    whileLoop: [
        {
            id: "count-to-five",
            title: "Count to five",
            objective: "Modify the while loop so count finishes as 5.",
            starterCode: `count = 0

while count < 3:
    count += 1`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "count", expected: "5" },
                { type: "conceptSeen", concept: "Loop" }
            ]
        },
        {
            id: "fuel-down",
            title: "Drain the fuel",
            objective: "Make fuel finish as 0.",
            starterCode: `fuel = 3

while fuel > 0:
    fuel -= 2`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "fuel", expected: "0" },
                { type: "conceptSeen", concept: "Loop" }
            ]
        },
        {
            id: "reach-target",
            title: "Reach the target",
            objective: "Make current finish as 12.",
            starterCode: `current = 0

while current < 12:
    current += 5`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "current", expected: "12" },
                { type: "conceptSeen", concept: "Loop" }
            ]
        },
        {
            id: "while-total",
            title: "Accumulate with while",
            objective: "Make total finish as 10.",
            starterCode: `number = 1
total = 0

while number <= 4:
    total += number
    number += 2`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "total", expected: "10" },
                { type: "conceptSeen", concept: "Loop" },
                { type: "conceptSeen", concept: "Accumulator" }
            ]
        },
        {
            id: "infinite-risk",
            title: "Spot an infinite-loop risk",
            objective: "Run the code and identify why the while loop does not finish.",
            starterCode: `count = 0

while count < 3:
    print(count)`,
            checks: [{ type: "errorCategory", expected: "infinite-loop-risk" }]
        },
        {
            id: "debug-while-total",
            title: "Debug a while total",
            objective: "Fix the while loop so total finishes as 10.",
            starterCode: `number = 1
total = 0

while number <= 4:
    total = number
    number += 1`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "total", expected: "10" },
                { type: "conceptSeen", concept: "Loop" },
                { type: "conceptSeen", concept: "Accumulator" }
            ]
        }
    ],
    listTraversal: [
        {
            id: "largest-value",
            title: "Trace the largest value",
            objective: "Traverse the list so largest finishes as 6.",
            starterCode: `numbers = [2, 6, 4]
largest = 0

for number in numbers:
    largest = number`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "largest", expected: "6" },
                { type: "conceptSeen", concept: "List traversal" }
            ]
        },
        {
            id: "smallest-value",
            title: "Find the smallest value",
            objective: "Make smallest finish as 2.",
            starterCode: `numbers = [4, 2, 7]
smallest = 0

for number in numbers:
    smallest = number`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "smallest", expected: "2" },
                { type: "conceptSeen", concept: "List traversal" },
                { type: "conceptSeen", concept: "Condition" }
            ]
        },
        {
            id: "count-items",
            title: "Count list items",
            objective: "Make item_count finish as 4.",
            starterCode: `items = ["pen", "book", "bag", "key"]
item_count = 0

for item in items:
    item_count = 1`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "item_count", expected: "4" },
                { type: "conceptSeen", concept: "List traversal" },
                { type: "conceptSeen", concept: "Accumulator" }
            ]
        },
        {
            id: "first-item",
            title: "Read the first item",
            objective: "Make first_color finish as red.",
            starterCode: `colors = ["red", "green", "blue"]
first_color = ""`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "first_color", expected: "red" },
                { type: "conceptSeen", concept: "List / sequence" }
            ]
        },
        {
            id: "sum-list",
            title: "Sum list values",
            objective: "Make total finish as 12.",
            starterCode: `numbers = [3, 4, 5]
total = 0

for number in numbers:
    total = number`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "total", expected: "12" },
                { type: "conceptSeen", concept: "List traversal" },
                { type: "conceptSeen", concept: "Accumulator" }
            ]
        }
    ],
    accumulator: [
        {
            id: "sum-three",
            title: "Build the sum",
            objective: "Make the final total_sum equal 60.",
            starterCode: `total_sum = 0
numbers = [10, 20, 30]

for number in numbers:
    total_sum = number`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "total_sum", expected: "60" },
                { type: "conceptSeen", concept: "Accumulator" }
            ]
        },
        {
            id: "sum-four",
            title: "Add four prices",
            objective: "Make the final total_sum equal 100.",
            starterCode: `total_sum = 0
prices = [10, 20, 30, 40]

for price in prices:
    total_sum = price`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "total_sum", expected: "100" },
                { type: "conceptSeen", concept: "Accumulator" }
            ]
        },
        {
            id: "product-values",
            title: "Build a product",
            objective: "Make product finish as 24.",
            starterCode: `numbers = [2, 3, 4]
product = 0

for number in numbers:
    product *= number`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "product", expected: "24" },
                { type: "conceptSeen", concept: "Accumulator" }
            ]
        },
        {
            id: "total-length",
            title: "Accumulate word lengths",
            objective: "Make total_length finish as 9.",
            starterCode: `words = ["cat", "tree", "go"]
total_length = 0

for word in words:
    total_length = len(word)`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "total_length", expected: "9" },
                { type: "conceptSeen", concept: "Accumulator" }
            ]
        },
        {
            id: "count-positives",
            title: "Count positive numbers",
            objective: "Make positive_count finish as 3.",
            starterCode: `numbers = [-2, 5, 0, 8, 1]
positive_count = 0

for number in numbers:
    if number > 0:
        positive_count = 1`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "positive_count", expected: "3" },
                { type: "conceptSeen", concept: "Accumulator" },
                { type: "conceptSeen", concept: "Condition" }
            ]
        }
    ],
    nestedLoop: [
        {
            id: "count-pairs",
            title: "Count row and column pairs",
            objective: "Count every row/column pair so pair_count finishes as 6.",
            starterCode: `pair_count = 0
rows = ["A", "B"]
cols = [1, 2, 3]

for row in rows:
    for col in cols:
        pair_count += 0`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "pair_count", expected: "6" },
                { type: "conceptSeen", concept: "Nested loop" }
            ]
        },
        {
            id: "grid-total",
            title: "Add grid values",
            objective: "Make grid_total finish as 21.",
            starterCode: `rows = [[1, 2, 3], [4, 5, 6]]
grid_total = 0

for row in rows:
    for value in row:
        grid_total = value`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "grid_total", expected: "21" },
                { type: "conceptSeen", concept: "Nested loop" },
                { type: "conceptSeen", concept: "Accumulator" }
            ]
        },
        {
            id: "label-count",
            title: "Count labels",
            objective: "Make label_count finish as 4.",
            starterCode: `letters = ["A", "B"]
numbers = [1, 2]
label_count = 0

for letter in letters:
    for number in numbers:
        label_count = 1`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "label_count", expected: "4" },
                { type: "conceptSeen", concept: "Nested loop" }
            ]
        },
        {
            id: "last-product",
            title: "Track a multiplication table",
            objective: "Make last_product finish as 6.",
            starterCode: `last_product = 0

for row in range(1, 3):
    for col in range(1, 4):
        last_product = row + col`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "last_product", expected: "6" },
                { type: "conceptSeen", concept: "Nested loop" }
            ]
        },
        {
            id: "even-grid-count",
            title: "Count even grid values",
            objective: "Make even_count finish as 3.",
            starterCode: `rows = [[1, 2], [3, 4], [5, 6]]
even_count = 0

for row in rows:
    for value in row:
        if value % 2 == 0:
            even_count = 1`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "even_count", expected: "3" },
                { type: "conceptSeen", concept: "Nested loop" },
                { type: "conceptSeen", concept: "Condition" }
            ]
        }
    ],
    functionCall: [
        {
            id: "square-call",
            title: "Call a square function",
            objective: "Call square so answer finishes as 16.",
            starterCode: `def square(number):
    result = number * number
    return result

answer = square(3)`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "answer", expected: "16" },
                { type: "conceptSeen", concept: "Function call" }
            ]
        },
        {
            id: "double-call",
            title: "Call a double function",
            objective: "Make answer finish as 14.",
            starterCode: `def double(number):
    return number * 2

answer = double(6)`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "answer", expected: "14" },
                { type: "conceptSeen", concept: "Function call" }
            ]
        },
        {
            id: "greeting-call",
            title: "Build a greeting",
            objective: "Make message finish as Hello Ada.",
            starterCode: `def greet(name):
    return "Hello " + name

message = greet("Ava")`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "message", expected: "Hello Ada" },
                { type: "conceptSeen", concept: "Function call" }
            ]
        },
        {
            id: "area-call",
            title: "Compute an area",
            objective: "Make area finish as 20.",
            starterCode: `def rectangle_area(width, height):
    return width + height

area = rectangle_area(4, 5)`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "area", expected: "20" },
                { type: "conceptSeen", concept: "Function call" }
            ]
        },
        {
            id: "call-twice",
            title: "Use a function twice",
            objective: "Make result finish as 25.",
            starterCode: `def add_five(number):
    return number + 5

first = add_five(10)
result = add_five(first)`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "result", expected: "25" },
                { type: "conceptSeen", concept: "Function call" }
            ]
        }
    ],
    recursion: [
        {
            id: "factorial-five",
            title: "Trace factorial",
            objective: "Use recursion so answer finishes as 120.",
            starterCode: `def factorial(n):
    if n == 1:
        return 1
    return n * factorial(n - 1)

answer = factorial(4)`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "answer", expected: "120" },
                { type: "conceptSeen", concept: "Recursion" }
            ]
        },
        {
            id: "sum-to-four",
            title: "Recursive sum",
            objective: "Make answer finish as 10.",
            starterCode: `def sum_to(n):
    if n == 1:
        return 1
    return n + sum_to(n - 1)

answer = sum_to(3)`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "answer", expected: "10" },
                { type: "conceptSeen", concept: "Recursion" }
            ]
        },
        {
            id: "power-two-three",
            title: "Recursive power",
            objective: "Make result finish as 8.",
            starterCode: `def power(base, exponent):
    if exponent == 0:
        return 1
    return base + power(base, exponent - 1)

result = power(2, 3)`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "result", expected: "8" },
                { type: "conceptSeen", concept: "Recursion" }
            ]
        },
        {
            id: "fibonacci-five",
            title: "Recursive Fibonacci",
            objective: "Make answer finish as 5.",
            starterCode: `def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)

answer = fib(4)`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "answer", expected: "5" },
                { type: "conceptSeen", concept: "Recursion" }
            ]
        },
        {
            id: "recursive-countdown",
            title: "Recursive countdown",
            objective: "Make final_value finish as 0.",
            starterCode: `def countdown(n):
    if n == 0:
        return n
    return countdown(n - 1)

final_value = countdown(2)`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "final_value", expected: "0" },
                { type: "conceptSeen", concept: "Recursion" }
            ]
        }
    ],
    simple: [
        {
            id: "simple-filter-total",
            title: "Filter and add",
            objective: "Use a loop and a condition so total finishes as 13.",
            concepts: ["Loop", "Condition"],
            starterCode: `numbers = [2, 5, 8]
total = 0

for number in numbers:
    if number > 4:
        total = number`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "total", expected: "13" },
                { type: "conceptSeen", concept: "Loop" },
                { type: "conceptSeen", concept: "Condition" }
            ]
        },
        {
            id: "simple-function-assignment",
            title: "Function and assignment",
            objective: "Use assignment and a function call so final_score finishes as 18.",
            concepts: ["Variable assignment", "Function call"],
            starterCode: `def add_bonus(score):
    return score + 3

base_score = 15
final_score = add_bonus(12)`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "final_score", expected: "18" },
                { type: "conceptSeen", concept: "Variable assignment" },
                { type: "conceptSeen", concept: "Function call" }
            ]
        },
        {
            id: "simple-list-count",
            title: "List and accumulator",
            objective: "Use list traversal and an accumulator so item_count finishes as 4.",
            concepts: ["List traversal", "Accumulator"],
            starterCode: `items = ["pen", "book", "bag", "key"]
item_count = 0

for item in items:
    item_count = 1`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "item_count", expected: "4" },
                { type: "conceptSeen", concept: "List traversal" },
                { type: "conceptSeen", concept: "Accumulator" }
            ]
        },
        {
            id: "simple-while-assignment",
            title: "While and assignment",
            objective: "Use a while loop and assignment so count finishes as 3.",
            concepts: ["Loop", "Variable assignment"],
            starterCode: `count = 0

while count < 3:
    count = 3`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "count", expected: "3" },
                { type: "conceptSeen", concept: "Loop" },
                { type: "conceptSeen", concept: "Variable assignment" }
            ]
        },
        {
            id: "simple-recursive-call",
            title: "Function call and recursion",
            objective: "Use recursion and a function call so answer finishes as 6.",
            concepts: ["Recursion", "Function call"],
            starterCode: `def sum_to(n):
    if n == 1:
        return 1
    return n + sum_to(n - 1)

answer = sum_to(2)`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "answer", expected: "6" },
                { type: "conceptSeen", concept: "Recursion" },
                { type: "conceptSeen", concept: "Function call" }
            ]
        }
    ],
    medium: [
        {
            id: "medium-discount-total",
            title: "Discounted total",
            objective: "Use traversal, condition, accumulator, and function call so discounted_total finishes as 24.",
            concepts: ["List traversal", "Condition", "Accumulator", "Function call"],
            starterCode: `def discount(price):
    return price - 2

prices = [8, 12, 6]
discounted_total = 0

for price in prices:
    if price >= 8:
        discounted_total = discount(price)`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "discounted_total", expected: "24" },
                { type: "conceptSeen", concept: "List traversal" },
                { type: "conceptSeen", concept: "Condition" },
                { type: "conceptSeen", concept: "Accumulator" },
                { type: "conceptSeen", concept: "Function call" }
            ]
        },
        {
            id: "medium-grid-count",
            title: "Count matching grid cells",
            objective: "Use nested loops, condition, accumulator, and assignment so match_count finishes as 3.",
            concepts: ["Nested loop", "Condition", "Accumulator", "Variable assignment"],
            starterCode: `grid = [[1, 4], [6, 3], [8, 2]]
match_count = 0

for row in grid:
    for value in row:
        if value >= 4:
            match_count = 1`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "match_count", expected: "3" },
                { type: "conceptSeen", concept: "Nested loop" },
                { type: "conceptSeen", concept: "Condition" },
                { type: "conceptSeen", concept: "Accumulator" },
                { type: "conceptSeen", concept: "Variable assignment" }
            ]
        },
        {
            id: "medium-average-score",
            title: "Average passing scores",
            objective: "Use traversal, condition, accumulator, and function call so passing_total finishes as 170.",
            concepts: ["List traversal", "Condition", "Accumulator", "Function call"],
            starterCode: `def is_passing(score):
    return score >= 60

scores = [55, 80, 90]
passing_total = 0

for score in scores:
    if is_passing(score):
        passing_total = score`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "passing_total", expected: "170" },
                { type: "conceptSeen", concept: "List traversal" },
                { type: "conceptSeen", concept: "Condition" },
                { type: "conceptSeen", concept: "Accumulator" },
                { type: "conceptSeen", concept: "Function call" }
            ]
        },
        {
            id: "medium-while-list-limit",
            title: "While through a list",
            objective: "Use while loop, list access, condition, and accumulator so total finishes as 9.",
            concepts: ["Loop", "List / sequence", "Condition", "Accumulator"],
            starterCode: `numbers = [3, 6, 10]
index = 0
total = 0

while index < len(numbers):
    if numbers[index] < 10:
        total = numbers[index]
    index += 1`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "total", expected: "9" },
                { type: "conceptSeen", concept: "Loop" },
                { type: "conceptSeen", concept: "List / sequence" },
                { type: "conceptSeen", concept: "Condition" },
                { type: "conceptSeen", concept: "Accumulator" }
            ]
        },
        {
            id: "medium-recursive-filter",
            title: "Recursive filtered sum",
            objective: "Use recursion, condition, accumulator-style return, and function call so answer finishes as 9.",
            concepts: ["Recursion", "Condition", "Accumulator", "Function call"],
            starterCode: `def sum_positive(values, index):
    if index == len(values):
        return 0
    if values[index] > 0:
        return values[index]
    return sum_positive(values, index + 1)

answer = sum_positive([4, -2, 5], 0)`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "answer", expected: "9" },
                { type: "conceptSeen", concept: "Recursion" },
                { type: "conceptSeen", concept: "Condition" },
                { type: "conceptSeen", concept: "Accumulator" },
                { type: "conceptSeen", concept: "Function call" }
            ]
        }
    ],
    complex: [
        {
            id: "complex-binary-search-fill",
            title: "Complete binary search",
            objective: "Fill every blank, then run the code so found_index finishes as 3.",
            taskType: "fill-blank",
            concepts: ["While loop", "Condition", "List traversal", "Algorithmic search"],
            starterCode: `numbers = [2, 4, 6, 8, 10, 12]
target = 8
left = 0
right = len(numbers) - 1
found_index = -1

while left <= right:
    mid = (left + right) // 2
    if numbers[mid] == ___1___:
        found_index = ___2___
        break
    elif numbers[mid] < target:
        left = mid + 1
    else:
        right = mid - 1`,
            blanks: [
                { token: "___1___", label: "comparison target" },
                { token: "___2___", label: "index to store when the target is found" }
            ],
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "found_index", expected: "3" },
                { type: "conceptSeen", concept: "Loop" },
                { type: "conceptSeen", concept: "Condition" }
            ]
        },
        {
            id: "complex-two-pointer-fill",
            title: "Complete two-pointer pair search",
            objective: "Fill every blank so pair_found finishes as True.",
            taskType: "fill-blank",
            concepts: ["While loop", "Condition", "List traversal", "Algorithmic search"],
            starterCode: `numbers = [1, 2, 4, 7, 11]
target = 9
left = 0
right = len(numbers) - 1
pair_found = False

while left < right:
    current_sum = numbers[left] + numbers[right]
    if current_sum == ___1___:
        pair_found = ___2___
        break
    elif current_sum < target:
        left += 1
    else:
        right -= 1`,
            blanks: [
                { token: "___1___", label: "target sum" },
                { token: "___2___", label: "boolean value when a pair is found" }
            ],
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "pair_found", expected: "True" },
                { type: "conceptSeen", concept: "Loop" },
                { type: "conceptSeen", concept: "Condition" }
            ]
        },
        {
            id: "complex-frequency-fill",
            title: "Complete a frequency counter",
            objective: "Fill every blank so count_a finishes as 3.",
            taskType: "fill-blank",
            concepts: ["Loop", "Condition", "Accumulator", "Dictionary"],
            starterCode: `letters = ["a", "b", "a", "c", "a"]
counts = {}

for letter in letters:
    if letter not in counts:
        counts[letter] = ___1___
    counts[letter] += ___2___

count_a = counts["a"]`,
            blanks: [
                { token: "___1___", label: "starting count" },
                { token: "___2___", label: "amount to add each time" }
            ],
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "count_a", expected: "3" },
                { type: "conceptSeen", concept: "Loop" },
                { type: "conceptSeen", concept: "Condition" },
                { type: "conceptSeen", concept: "Accumulator" }
            ]
        },
        {
            id: "complex-dp-fill",
            title: "Complete a dynamic programming table",
            objective: "Fill every blank so ways finishes as 8.",
            taskType: "fill-blank",
            concepts: ["Loop", "List / sequence", "Accumulator", "Dynamic programming"],
            starterCode: `steps = 5
dp = [0] * (steps + 1)
dp[0] = 1
dp[1] = 1

for index in range(2, steps + 1):
    dp[index] = dp[index - ___1___] + dp[index - ___2___]

ways = dp[steps]`,
            blanks: [
                { token: "___1___", label: "previous step offset" },
                { token: "___2___", label: "two-step offset" }
            ],
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "ways", expected: "8" },
                { type: "conceptSeen", concept: "Loop" },
                { type: "conceptSeen", concept: "List / sequence" },
                { type: "conceptSeen", concept: "Accumulator" }
            ]
        },
        {
            id: "complex-write-linear-search",
            title: "Write linear search",
            objective: "Write the missing loop body so found_index finishes as 2.",
            concepts: ["Loop", "Condition", "List traversal", "Algorithmic search"],
            starterCode: `numbers = [5, 9, 12, 20]
target = 12
found_index = -1

for index in range(len(numbers)):
    # Write code here to update found_index when target is found.
    pass`,
            checks: [
                { type: "noErrors" },
                { type: "variableEquals", variable: "found_index", expected: "2" },
                { type: "conceptSeen", concept: "Loop" },
                { type: "conceptSeen", concept: "Condition" }
            ]
        }
    ]
};

const TOPIC_DETAILS = {
    assignment: {
        brief: "A variable name points to the latest value assigned to it. Reassigning the same name replaces the old value.",
        algorithm: "Read the right side first, compute that value, then store it under the name on the left side."
    },
    ifElse: {
        brief: "A condition lets a program choose between branches. Python runs the indented block under the first true condition.",
        algorithm: "Evaluate the condition, follow the matching branch, then continue after the branch."
    },
    forLoop: {
        brief: "A for loop repeats a block once for each item in a sequence, range, or collection.",
        algorithm: "Create the sequence, take one item, run the indented block, then repeat until no items remain."
    },
    whileLoop: {
        brief: "A while loop repeats while its condition remains true. The loop body must usually update something that can stop the loop.",
        algorithm: "Initialize a control value, test the condition, run the body, update the control value, and stop when the test fails."
    },
    listTraversal: {
        brief: "List traversal means visiting each list item in order so the program can inspect or use every value.",
        algorithm: "Start with a tracking variable, visit one item at a time, update the tracker, and read the final tracker value."
    },
    accumulator: {
        brief: "An accumulator keeps a running total, count, product, or combined result across repeated steps.",
        algorithm: "Initialize the accumulator, loop through values, update it each time, and read the final result after the loop."
    },
    nestedLoop: {
        brief: "A nested loop runs one loop inside another. The inner loop completes for each pass of the outer loop.",
        algorithm: "Choose an outer item, run the full inner loop for it, update the result for each pair, then move to the next outer item."
    },
    functionCall: {
        brief: "A function stores reusable instructions. A function call runs those instructions and can return a value.",
        algorithm: "Pass input values into the function, run its body, return a result, and store or use the returned result."
    },
    recursion: {
        brief: "Recursion is when a function calls itself on a smaller version of the same problem.",
        algorithm: "Handle the base case first, reduce the problem size on each recursive call, then combine returned values as calls finish."
    },
    simple: {
        brief: "Simple tasks combine two topics in a short program, such as a loop plus a condition or a function call plus assignment.",
        algorithm: "Identify the two concepts, trace the small program, then make the final variable match the goal."
    },
    medium: {
        brief: "Medium tasks combine about four topics, so students must connect traversal, conditions, accumulators, functions, and assignments.",
        algorithm: "Break the task into parts: input data, repeated work, decision logic, result update, and final value check."
    },
    complex: {
        brief: "Complex tasks include algorithmic patterns, code-writing prompts, and fill-in-the-blank code that must be completed before compiling.",
        algorithm: "Understand the algorithm goal first, fill or write the missing logic, run the trace, and inspect how the state changes over time."
    }
};

const LEARNING_MODES = {
    mission: {
        title: "Practice Path",
        panelTitle: "Practice Path",
        summary: "Complete topic levels in order. Each passed level unlocks the next one and updates skill progress."
    },
    prediction: {
        title: "Prediction Game",
        panelTitle: "Prediction Game",
        summary: "Run the code, pause on each trace step, and predict the next variable value before revealing it."
    },
    debug: {
        title: "Debug Detective",
        panelTitle: "Bug Report",
        summary: "Treat the starter code as suspicious. Pick the line that causes the goal gap, explain it, then fix it."
    },
    aiReview: {
        title: "AI Code Review",
        panelTitle: "AI Review Lab",
        summary: "Review a prewritten AI-style answer, identify quality problems, and improve the code with trace evidence."
    },
    skillTree: {
        title: "Growth Map",
        panelTitle: "Growth Map",
        summary: "See which programming skills this task trains and where the learner is building strength."
    }
};

const SKILL_DEFINITIONS = [
    { id: "tracing", label: "Trace Reading" },
    { id: "prediction", label: "Prediction" },
    { id: "variables", label: "Variables" },
    { id: "conditions", label: "Conditions" },
    { id: "loops", label: "Loops" },
    { id: "lists", label: "Lists" },
    { id: "accumulators", label: "Accumulators" },
    { id: "functions", label: "Functions" },
    { id: "debugging", label: "Debugging" },
    { id: "quality", label: "Code Quality" },
    { id: "aiReview", label: "AI Review" }
];

const CONCEPT_SKILL_MAP = {
    "Variable assignment": "variables",
    "Condition": "conditions",
    "Loop": "loops",
    "While loop": "loops",
    "List traversal": "lists",
    "List / sequence": "lists",
    "Accumulator": "accumulators",
    "Nested loop": "loops",
    "Function call": "functions",
    "Function definition": "functions",
    "Recursion": "functions"
};

const TASK_ENRICHMENTS = {
    "assignment:debug-tax-total": {
        story: "A receipt total ignores the tax value even though tax is available.",
        skills: ["variables", "debugging", "quality"],
        debug: {
            line: 3,
            cause: "total stores only price, so the tax value never reaches the final total.",
            fixHint: "Use both values on the right side, such as total = price + tax."
        }
    },
    "accumulator:sum-three": {
        story: "A warehouse counter is only remembering the last box instead of the full shipment.",
        missionOrder: 1,
        skills: ["loops", "accumulators", "prediction", "debugging"],
        debug: {
            line: 5,
            cause: "total_sum is overwritten with the current number instead of adding the number into the running total.",
            fixHint: "Use total_sum += number so the accumulator keeps its history."
        },
        aiReview: {
            prompt: "The AI draft runs, but it fails the real goal because it confuses assignment with accumulation.",
            concerns: [
                { id: "overwrites-total", label: "It overwrites the accumulator instead of updating it.", expected: true },
                { id: "missing-trace-evidence", label: "It needs trace evidence to prove total_sum is 60.", expected: true },
                { id: "syntax-problem", label: "It has a Python syntax error.", expected: false }
            ]
        }
    },
    "forLoop:range-total": {
        story: "The range scanner visits the right numbers, but the total is not keeping the previous values.",
        missionOrder: 2,
        skills: ["loops", "accumulators", "prediction", "debugging"],
        debug: {
            line: 4,
            cause: "total is replaced by each number, so only the final loop item remains.",
            fixHint: "Add number into total on each loop pass."
        }
    },
    "forLoop:debug-loop-total": {
        story: "The loop visits every number, but the total forgets earlier visits.",
        skills: ["loops", "accumulators", "debugging"],
        debug: {
            line: 4,
            cause: "total is overwritten with each number instead of accumulating the running total.",
            fixHint: "Replace the overwrite with an accumulator update such as total += number."
        }
    },
    "whileLoop:debug-while-total": {
        story: "The while loop reaches the right values, but the total remembers only the last value.",
        skills: ["loops", "accumulators", "debugging"],
        debug: {
            line: 5,
            cause: "total is assigned the current number each pass, so earlier values are lost.",
            fixHint: "Use total += number before number increases."
        }
    },
    "listTraversal:largest-value": {
        story: "A list scanner needs to remember the largest item, not just the last item it saw.",
        missionOrder: 3,
        skills: ["lists", "conditions", "debugging", "prediction"],
        debug: {
            line: 5,
            cause: "largest is updated every time, even when the new number is smaller.",
            fixHint: "Only update largest when number is greater than the current largest."
        }
    },
    "listTraversal:sum-list": {
        story: "The list traversal sees every value, but the running total gets overwritten.",
        skills: ["lists", "accumulators", "debugging"],
        debug: {
            line: 5,
            cause: "total is replaced by each list item instead of adding the item into the total.",
            fixHint: "Use total += number inside the loop."
        }
    },
    "ifElse:boundary-score": {
        story: "A grading gate is rejecting a score exactly on the pass boundary.",
        missionOrder: 4,
        skills: ["conditions", "debugging"],
        debug: {
            line: 3,
            cause: "The condition uses >, so a score of exactly 60 falls into the retry branch.",
            fixHint: "Use >= when the boundary value should pass."
        }
    },
    "accumulator:count-positives": {
        story: "The condition finds positive values, but the counter resets to one each time.",
        skills: ["conditions", "accumulators", "debugging"],
        debug: {
            line: 6,
            cause: "positive_count is assigned 1 for every positive number, so it never counts past one.",
            fixHint: "Use positive_count += 1 inside the if block."
        }
    },
    "nestedLoop:even-grid-count": {
        story: "The nested loop finds even values, but the counter is reset instead of increased.",
        skills: ["loops", "conditions", "debugging"],
        debug: {
            line: 7,
            cause: "even_count is set to 1 for each even value, so it does not count all matches.",
            fixHint: "Use even_count += 1 inside the nested condition."
        }
    },
    "functionCall:call-twice": {
        story: "The function calls are valid, but the final result has not applied enough increments for the goal.",
        skills: ["functions", "debugging", "quality"],
        debug: {
            line: 5,
            cause: "result adds five to first only once, so the final value is 20 instead of 25.",
            fixHint: "Make the second step apply add_five one more time, for example result = add_five(add_five(first))."
        }
    },
    "recursion:fibonacci-five": {
        story: "The recursive function is correct, but the call asks for the wrong Fibonacci position.",
        skills: ["functions", "debugging", "quality"],
        debug: {
            line: 7,
            cause: "fib(4) returns 3, while the goal needs the value at fib(5).",
            fixHint: "Call fib(5) so answer finishes as 5."
        }
    },
    "complex:complex-write-linear-search": {
        story: "The search loop is present, but the important condition and update are still missing.",
        skills: ["loops", "conditions", "debugging", "quality"],
        debug: {
            line: 6,
            cause: "pass leaves the loop body empty, so found_index never changes when the target appears.",
            fixHint: "Inside the loop, check numbers[index] == target, set found_index = index, then break."
        }
    },
    "simple:simple-filter-total": {
        story: "The filter finds eligible numbers, but the result forgets earlier matches.",
        missionOrder: 5,
        skills: ["loops", "conditions", "accumulators", "quality"],
        debug: {
            line: 6,
            cause: "total is replaced by each matching number instead of adding matching numbers together.",
            fixHint: "Use total += number inside the condition."
        }
    },
    "medium:medium-discount-total": {
        story: "A checkout assistant applies discounts, but only the last discount reaches the total.",
        missionOrder: 6,
        skills: ["lists", "conditions", "accumulators", "functions", "aiReview", "quality"],
        debug: {
            line: 9,
            cause: "discounted_total is set to one discounted price instead of accumulating every eligible discounted price.",
            fixHint: "Use discounted_total += discount(price)."
        },
        aiReview: {
            prompt: "The AI draft is plausible, but a reviewer should ask whether it handles every eligible price and proves the final total.",
            concerns: [
                { id: "not-accumulating", label: "It stores only the latest eligible discount instead of accumulating all eligible prices.", expected: true },
                { id: "needs-boundary", label: "It should keep the >= 8 boundary because price 8 is eligible.", expected: true },
                { id: "bad-function-name", label: "The function name is unreadable.", expected: false }
            ]
        }
    },
    "simple:simple-list-count": {
        story: "An AI helper counted one item repeatedly instead of tracking the whole list.",
        missionOrder: 7,
        skills: ["lists", "accumulators", "aiReview", "quality"],
        debug: {
            line: 5,
            cause: "item_count is set to 1 on every pass, so it never grows.",
            fixHint: "Increment item_count on each loop pass."
        },
        aiReview: {
            prompt: "The AI draft has the right loop shape, but its state update does not match the counting goal.",
            concerns: [
                { id: "constant-assignment", label: "The counter is assigned a constant instead of incremented.", expected: true },
                { id: "clear-names", label: "The variable names are reasonably clear.", expected: false },
                { id: "needs-empty-list-thinking", label: "A reviewer should ask what the result should be for an empty list.", expected: true }
            ]
        }
    }
};

const LEVEL_STAGE_LABELS = [
    "Fill a small blank",
    "Complete one missing line",
    "Complete the key block",
    "Write the program logic",
    "Debug Detective"
];

const TOPIC_LEVEL_PATHS = {
    assignment: ["set-ada", "copy-display-name", "calculate-total", "update-score", "debug-tax-total"],
    ifElse: ["pass-or-retry", "discount-eligible", "umbrella-message", "print-result", "boundary-score"],
    forLoop: ["last-number", "loop-count", "range-total", "last-color", "debug-loop-total"],
    whileLoop: ["count-to-five", "fuel-down", "reach-target", "while-total", "debug-while-total"],
    listTraversal: ["first-item", "largest-value", "smallest-value", "count-items", "sum-list"],
    accumulator: ["sum-three", "sum-four", "total-length", "product-values", "count-positives"],
    nestedLoop: ["count-pairs", "grid-total", "label-count", "last-product", "even-grid-count"],
    functionCall: ["square-call", "double-call", "greeting-call", "area-call", "call-twice"],
    recursion: ["factorial-five", "sum-to-four", "power-two-three", "recursive-countdown", "fibonacci-five"],
    complex: ["complex-binary-search-fill", "complex-two-pointer-fill", "complex-frequency-fill", "complex-dp-fill", "complex-write-linear-search"]
};

const WALKTHROUGH_DEMOS = {
    mission: {
        topicId: "accumulator",
        taskId: "sum-three",
        solutionCode: `total_sum = 0
numbers = [10, 20, 30]

for number in numbers:
    total_sum += number`,
        summary: "The walkthrough opens Level 1, fixes the accumulator, runs it, and shows the auto-check feedback.",
        steps: ["Open Level 1", "Replace the broken accumulator update", "Run the trace", "Read the pass/fail feedback"]
    },
    prediction: {
        topicId: "accumulator",
        taskId: "sum-three",
        solutionCode: `total_sum = 0
numbers = [10, 20, 30]

for number in numbers:
    total_sum += number`,
        summary: "The walkthrough runs the trace, predicts the first changed variable value, and checks the answer.",
        steps: ["Run the corrected code", "Pause on the first trace step", "Fill the predicted value", "Check the prediction"]
    },
    debug: {
        topicId: "accumulator",
        taskId: "sum-three",
        solutionCode: `total_sum = 0
numbers = [10, 20, 30]

for number in numbers:
    total_sum += number`,
        bugLine: 5,
        bugReason: "Line 5 overwrites total_sum with one number, so it forgets the earlier loop values.",
        summary: "The walkthrough reports the bug line, explains the state problem, fixes the code, and runs the trace.",
        steps: ["Select the suspicious line", "Write the bug explanation", "Submit the bug report", "Fix and run the code"]
    },
    aiReview: {
        topicId: "accumulator",
        taskId: "sum-three",
        solutionCode: `total_sum = 0
numbers = [10, 20, 30]

for number in numbers:
    total_sum += number`,
        summary: "The walkthrough selects the correct review concerns, fixes the AI-style draft, and verifies the result.",
        steps: ["Select the real review concerns", "Submit the AI review", "Improve the code", "Run the trace as evidence"]
    },
    skillTree: {
        topicId: "accumulator",
        taskId: "sum-three",
        solutionCode: `total_sum = 0
numbers = [10, 20, 30]

for number in numbers:
    total_sum += number`,
        summary: "The walkthrough completes one task so the growth map has progress to display.",
        steps: ["Open the growth map", "Complete one trace task", "Update skill progress", "Inspect the progress bars"]
    }
};

const btnRun = document.getElementById('btn-run');
const btnOpenGuide = document.getElementById('btn-open-guide');
const slider = document.getElementById('trace-slider');
const consoleOutput = document.getElementById('console-output');
const scopeGrid = document.getElementById('scope-grid');
const variablesBox = document.getElementById('variables-box');
const traceLayout = document.getElementById('trace-layout');
const stepCounter = document.getElementById('step-counter');
const conceptPanel = document.getElementById('concept-panel');
const exampleSelect = document.getElementById('example-select');
const lessonSelect = document.getElementById('lesson-select');
const modeSelect = document.getElementById('mode-select');
const modeContext = document.getElementById('mode-context');
const btnResetView = document.getElementById('btn-reset-view');
const btnCheckLesson = document.getElementById('btn-check-lesson');
const lessonGoal = document.getElementById('lesson-goal');
const lessonStatus = document.getElementById('lesson-status');
const exercisePanelTitle = document.getElementById('exercise-panel-title');
const teacherInsights = document.getElementById('teacher-insights');
const btnPracticeView = document.getElementById('btn-practice-view');
const btnDashboardView = document.getElementById('btn-dashboard-view');
const dashboardSummary = document.getElementById('dashboard-summary');
const dashboardSkillCloud = document.getElementById('dashboard-skill-cloud');
const dashboardTopicTable = document.getElementById('dashboard-topic-table');
const btnExportReport = document.getElementById('btn-export-report');
const btnPresentationMode = document.getElementById('btn-presentation-mode');
const predictionLab = document.getElementById('prediction-lab');
const predictionPrompt = document.getElementById('prediction-prompt');
const predictionInput = document.getElementById('prediction-input');
const predictionFeedback = document.getElementById('prediction-feedback');
const btnCheckPrediction = document.getElementById('btn-check-prediction');
const btnRevealAnswer = document.getElementById('btn-reveal-answer');
const guideOverlay = document.getElementById('guide-overlay');
const guideCard = document.getElementById('guide-card');
const guideTitle = document.getElementById('guide-title');
const guideBody = document.getElementById('guide-body');
const guideStep = document.getElementById('guide-step');
const btnGuideNext = document.getElementById('btn-guide-next');
const btnGuidePrev = document.getElementById('btn-guide-prev');
const btnGuideSkip = document.getElementById('btn-guide-skip');

const codeInput = document.getElementById('code-input');
const codeViewer = document.getElementById('code-viewer');
const gutterZone = document.getElementById('gutter-zone');
const editorTitle = document.getElementById('editor-title');
const workspaceBody = document.getElementById('workspace-body');
const topicBrief = document.getElementById('topic-brief');
const algorithmIntro = document.getElementById('algorithm-intro');

const GUIDE_STEPS = [
    {
        title: "1. Choose a topic",
        body: "Choose the programming topic you want to practice. The app will load the next unfinished level for that topic.",
        focus: "#lesson-select",
        placement: "bottom"
    },
    {
        title: "2. Understand the path",
        body: "This strip explains the practice flow. Code is controlled by the active Level card, so the level you choose is the task you edit.",
        focus: "#mode-context",
        placement: "bottom"
    },
    {
        title: "3. Read the current level",
        body: "The current level tells you the goal, what type of task it is, and whether it is already complete.",
        focus: "#lesson-goal",
        placement: "left"
    },
    {
        title: "4. Edit the code",
        body: "Change only what the current level asks for. The active level is the task that Code is trying to solve.",
        focus: "#code-input",
        placement: "right"
    },
    {
        title: "5. Run the code",
        body: "Use Compile & Run from the code panel when the code is ready.",
        focus: "#btn-run",
        placement: "bottom"
    },
    {
        title: "6. Read the feedback",
        body: "After the run, the current level tells you whether it passed. If it failed, use Show fix on the failed item.",
        focus: "#lesson-goal",
        placement: "left"
    },
    {
        title: "7. Move through the run",
        body: "Drag the timeline to inspect each executed step.",
        focus: "#trace-slider",
        placement: "top"
    },
    {
        title: "8. Read evidence",
        body: "The bottom display shows variable values and the explanation for the selected step.",
        focus: "#timeline-panel",
        placement: "top"
    },
    {
        title: "9. Check growth",
        body: "Open Dashboard to see topic progress, completed levels, and the skills that have been trained.",
        focus: "#btn-dashboard-view",
        placement: "bottom"
    }
];

let guideIndex = 0;

function escapeHtml(value) {
    return String(value ?? '')
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function renderInitialConsole() {
    consoleOutput.innerHTML = `
        <div class="console-row muted">Run the code to see the explanation for each executed step.</div>
    `;
}

function escapeRegExp(value) {
    return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function normalizeValue(value) {
    return String(value ?? '').trim();
}

function getTasksForTopic(topicId) {
    return PRACTICE_TASKS[topicId] || [];
}

function getTaskKey(topicId, taskId) {
    return `${topicId}:${taskId}`;
}

function getActiveTask() {
    const tasks = getTasksForTopic(activeLessonId);
    return tasks.find(task => task.id === activeTaskId) || tasks[0] || null;
}

function getTaskMeta(task = getActiveTask(), topicId = activeLessonId) {
    if (!task) return {};

    const enrichment = TASK_ENRICHMENTS[getTaskKey(topicId, task.id)] || {};
    const conceptSkills = (task.concepts || [LESSONS[topicId]?.concept || "tracing"])
        .map(concept => CONCEPT_SKILL_MAP[concept] || "tracing");
    const skills = [...new Set([...(enrichment.skills || []), ...conceptSkills, "tracing"])];

    return {
        story: enrichment.story || `Trace this ${LESSONS[topicId]?.title || "programming"} task and use the result as evidence.`,
        missionOrder: enrichment.missionOrder || null,
        skills,
        debug: enrichment.debug || null,
        aiReview: enrichment.aiReview || null
    };
}

function readJsonStorage(key, fallback) {
    try {
        return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
    } catch {
        return fallback;
    }
}

function writeJsonStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

function getCompletedMissions() {
    return new Set(readJsonStorage(MISSION_PROGRESS_KEY, []));
}

function markMissionCompleted(topicId, taskId) {
    const completed = getCompletedMissions();
    completed.add(getTaskKey(topicId, taskId));
    writeJsonStorage(MISSION_PROGRESS_KEY, [...completed]);
}

function getSkillProgress() {
    const stored = readJsonStorage(SKILL_PROGRESS_KEY, {});
    return SKILL_DEFINITIONS.reduce((progress, skill) => {
        progress[skill.id] = Math.max(0, Math.min(100, Number(stored[skill.id] || 0)));
        return progress;
    }, {});
}

function updateSkillProgressForTask(task, result) {
    if (!task || !result?.passed) return;

    const progress = getSkillProgress();
    const skills = getTaskMeta(task).skills || [];
    skills.forEach(skillId => {
        progress[skillId] = Math.min(100, (progress[skillId] || 0) + 12);
    });
    writeJsonStorage(SKILL_PROGRESS_KEY, progress);
}

function resetModeInteractionState() {
    selectedBugLine = null;
    debugReportFeedback = null;
    reviewSelections = new Set();
    reviewFeedback = null;
    revealedMissionFixes = new Set();
}

function clearWalkthroughState() {
    activeWalkthroughMode = null;
    walkthroughFeedback = null;
}

function logStudentAction(actionType, label, details = {}) {
    const task = getActiveTask();
    studentActionLog.push({
        timestamp: new Date().toISOString(),
        actionType,
        label,
        topicId: activeLessonId,
        topicTitle: LESSONS[activeLessonId]?.title || "",
        taskId: task?.id || "",
        taskTitle: task?.title || "",
        contentMode: activeContentMode,
        stepIndex: pipelineSteps.length ? currentFrameIndex + 1 : null,
        ...details
    });
}

function getPredictionTarget(frame) {
    const changes = frame?.changes || [];
    return changes.find(change => change.changeType !== "removed") || changes[0] || null;
}

function getPredictionKey(frame, target) {
    if (!frame || !target) return "";
    return [
        frame.stepNumber ?? currentFrameIndex + 1,
        frame.line ?? "",
        frame.scopeName ?? "",
        target.name ?? ""
    ].join("|");
}

function shouldShowPredictionAnswer(frame, target) {
    if (activeLearningMode !== "prediction" || !frame || !target) return true;
    return revealedPredictionKeys.has(getPredictionKey(frame, target));
}

function setPredictionLabVisible(isVisible) {
    if (!predictionLab) return;
    predictionLab.style.display = isVisible ? "grid" : "none";
}

function shouldHideVariablesForPrediction(frame, target = getPredictionTarget(frame)) {
    return activeLearningMode === "prediction" && frame && target && !shouldShowPredictionAnswer(frame, target);
}

function getMaskedValue(value, hidden = false) {
    return hidden ? "hidden until checked" : value;
}

const EDITOR_LINE_HEIGHT = 22.4;
const EDITOR_VERTICAL_PADDING = 40;
const EDITOR_MAX_VISIBLE_LINES = 10;

function updateEditorViewport(lineCount) {
    const safeLineCount = Math.max(1, lineCount);
    const visibleLines = Math.min(safeLineCount, EDITOR_MAX_VISIBLE_LINES);
    const height = Math.round(EDITOR_VERTICAL_PADDING + visibleLines * EDITOR_LINE_HEIGHT);

    if (workspaceBody) {
        workspaceBody.style.setProperty("--workspace-height", `${height}px`);
        workspaceBody.classList.toggle("scrolling-code", safeLineCount > EDITOR_MAX_VISIBLE_LINES);
    }

    if (editorTitle) {
        const plural = safeLineCount === 1 ? "line" : "lines";
        const scrollNote = safeLineCount > EDITOR_MAX_VISIBLE_LINES ? ", scroll" : "";
        editorTitle.textContent = `Code (${safeLineCount} ${plural}${scrollNote})`;
    }
}

function scrollHighlightedLineIntoView(lineNumber, totalLines) {
    if (totalLines <= EDITOR_MAX_VISIBLE_LINES) {
        codeInput.scrollTop = 0;
        codeViewer.scrollTop = 0;
        gutterZone.scrollTop = 0;
        return;
    }

    if (!lineNumber || lineNumber < 1) return;

    const topLine = Math.max(1, lineNumber - Math.floor(EDITOR_MAX_VISIBLE_LINES / 2));
    const nextTop = Math.max(0, (topLine - 1) * EDITOR_LINE_HEIGHT);

    codeInput.scrollTop = nextTop;
    codeViewer.scrollTop = nextTop;
    gutterZone.scrollTop = nextTop;
}

function shouldColorCodeVariables() {
    return isTimelineActive
        && pipelineSteps.length > 0
        && !pipelineSteps.some(step => step.error)
        && Object.keys(variableColorMap).length > 0;
}

function syncEditorRendering(highlightLineNum = -1) {
    const lines = codeInput.value.split('\n');
    updateEditorViewport(lines.length);
    const shouldColorVariables = shouldColorCodeVariables();

    if (workspaceBody) {
        workspaceBody.classList.toggle("variable-colored", shouldColorVariables);
    }

    gutterZone.innerHTML = '';
    codeViewer.innerHTML = '';

    lines.forEach((lineText, index) => {
        const lineNum = index + 1;

        const gutterNum = document.createElement('div');
        gutterNum.className = 'gutter-num';
        gutterNum.textContent = lineNum;
        if (lineNum === highlightLineNum) {
            gutterNum.classList.add('active-num');
        }
        gutterZone.appendChild(gutterNum);

        const row = document.createElement('div');
        row.className = 'render-line-row';
        if (lineNum === highlightLineNum) {
            row.classList.add('active-row');
        }

        if (shouldColorVariables) {
            let renderedLine = escapeHtml(lineText);
            for (const [varName, color] of Object.entries(variableColorMap)) {
                const regex = new RegExp(`\\b${escapeRegExp(varName)}\\b`, 'g');
                renderedLine = renderedLine.replace(regex, `<span class="code-variable-token" style="--variable-color: ${color};">${escapeHtml(varName)}</span>`);
            }
            row.innerHTML = renderedLine === '' ? ' ' : renderedLine;
        } else {
            row.textContent = lineText === '' ? ' ' : lineText;
        }

        codeViewer.appendChild(row);
    });

    scrollHighlightedLineIntoView(highlightLineNum, lines.length);
}

function resetTimelineState() {
    isTimelineActive = false;
    pipelineSteps = [];
    variableColorMap = {};
    currentFrameIndex = 0;
    predictionTarget = null;
    predictionAttemptCounts = {};
    revealedPredictionKeys = new Set();
    lastLessonResult = null;
    slider.max = 0;
    slider.value = 0;
    slider.disabled = true;
    stepCounter.textContent = "0/0";
    syncEditorRendering();
    renderScopeGrid({});
    renderConceptTags([]);
    resetPredictionPanel();
    renderLessonStatus(null);
    renderTeacherInsights();
    renderInitialConsole();
}

function populateLessonSelect() {
    lessonSelect.innerHTML = STUDENT_TOPIC_ORDER
        .filter(id => LESSONS[id])
        .map(id => `<option value="${id}">${escapeHtml(LESSONS[id].title)}</option>`)
        .join('');
    lessonSelect.value = activeLessonId;
}

function populateModeSelect() {
    modeSelect.innerHTML = Object.entries(LEARNING_MODES)
        .map(([id, mode]) => `<option value="${id}">${escapeHtml(mode.title)}</option>`)
        .join('');
    modeSelect.value = activeLearningMode;
}

function populateTaskSelect(topicId) {
    const tasks = getTasksForTopic(topicId);
    exampleSelect.innerHTML = tasks
        .map(task => `<option value="${task.id}">${escapeHtml(task.title)}</option>`)
        .join('');

    if (!tasks.some(task => task.id === activeTaskId)) {
        activeTaskId = tasks[0]?.id || "";
    }

    exampleSelect.value = activeTaskId;
}

function getMissionIndex(topicId = activeLessonId, taskId = activeTaskId) {
    return getPracticePath(topicId).findIndex(mission => mission.topicId === topicId && mission.taskId === taskId);
}

function getPracticePath(topicId = activeLessonId) {
    const tasks = getTasksForTopic(topicId);
    const taskMap = new Map(tasks.map(task => [task.id, task]));
    const configuredIds = TOPIC_LEVEL_PATHS[topicId] || tasks.slice(0, 5).map(task => task.id);
    return configuredIds
        .map((taskId, index) => {
            const task = taskMap.get(taskId);
            if (!task) return null;
            return {
                topicId,
                taskId,
                level: index + 1,
                stage: LEVEL_STAGE_LABELS[index] || `Level ${index + 1}`
            };
        })
        .filter(Boolean);
}

function isMissionLevelAccessible(index, completed = getCompletedMissions(), path = getPracticePath()) {
    if (index < 0) return false;
    const mission = path[index];
    if (!mission) return false;
    const key = getTaskKey(mission.topicId, mission.taskId);
    const previousMission = index > 0 ? path[index - 1] : null;
    const previousKey = previousMission ? getTaskKey(previousMission.topicId, previousMission.taskId) : null;
    return index === 0 || completed.has(previousKey) || completed.has(key);
}

function getFirstAvailableMission(topicId = activeLessonId) {
    const completed = getCompletedMissions();
    const path = getPracticePath(topicId);
    return path.find((mission, index) => {
        const key = getTaskKey(mission.topicId, mission.taskId);
        return !completed.has(key) && isMissionLevelAccessible(index, completed, path);
    }) || path[path.length - 1];
}

function getTopicProgress(topicId) {
    const completed = getCompletedMissions();
    const path = getPracticePath(topicId);
    const completedCount = path.filter(mission => completed.has(getTaskKey(mission.topicId, mission.taskId))).length;
    const nextMission = path.find((mission, index) => {
        const key = getTaskKey(mission.topicId, mission.taskId);
        return !completed.has(key) && isMissionLevelAccessible(index, completed, path);
    });

    return {
        path,
        completedCount,
        totalCount: path.length,
        nextMission,
        percent: path.length ? Math.round((completedCount / path.length) * 100) : 0
    };
}

function setActiveView(view) {
    activeView = view === "dashboard" ? "dashboard" : "practice";
    syncModeShell();
    renderDashboard();
}

function ensureMissionTaskSelected() {
    if (activeLearningMode !== "mission") return;

    const currentMissionIndex = getMissionIndex();
    if (isMissionLevelAccessible(currentMissionIndex)) return;

    const mission = getFirstAvailableMission(activeLessonId);
    if (!mission) return;

    activeLessonId = mission.topicId;
    lessonSelect.value = mission.topicId;
    populateTaskSelect(mission.topicId);
    setActiveTask(mission.taskId, false);
}

function syncModeShell() {
    document.body.classList.toggle("dashboard-active", activeView === "dashboard");
    btnPracticeView?.classList.toggle("active", activeView === "practice");
    btnDashboardView?.classList.toggle("active", activeView === "dashboard");

    if (!modeContext) return;

    modeContext.innerHTML = `<strong>Practice flow:</strong> choose a Practice Topic, then complete its Level cards in order. The active Level card owns Code; changing topic loads that topic's Level 1 or next unfinished level.`;
}

function setActiveLesson(id, shouldLog = true) {
    activeContentMode = "practice-task";
    activeLessonId = id;
    lessonSelect.value = id;
    const firstMission = getFirstAvailableMission(id);
    activeTaskId = firstMission?.taskId || getTasksForTopic(id)[0]?.id || "";
    clearWalkthroughState();
    resetModeInteractionState();
    populateTaskSelect(id);
    setActiveTask(activeTaskId, false);

    if (shouldLog) {
        logStudentAction("select", "Topic", {
            selectedTopicId: id,
            selectedTopicTitle: LESSONS[id].title
        });
    }
}

function setActiveTask(taskId, shouldLog = true) {
    const task = getTasksForTopic(activeLessonId).find(item => item.id === taskId);
    if (!task) return;

    activeContentMode = "practice-task";
    activeTaskId = taskId;
    exampleSelect.value = taskId;
    codeInput.value = task.starterCode;
    clearWalkthroughState();
    resetModeInteractionState();
    resetTimelineState();
    renderLessonGoal();
    updateRunAvailability();

    if (shouldLog) {
        logStudentAction("select", "Practice Task", {
            selectedTaskId: taskId,
            selectedTaskTitle: task.title
        });
    }
}

function renderLessonGoal() {
    syncModeShell();
    const task = getActiveTask();
    if (!task) return;

    const mode = LEARNING_MODES[activeLearningMode] || LEARNING_MODES.mission;
    const meta = getTaskMeta(task);

    renderTopicInfo();
    if (exercisePanelTitle) {
        exercisePanelTitle.textContent = mode.panelTitle;
    }

    lessonGoal.innerHTML = `
        ${renderLearningModePanel(task, meta)}
        ${renderBlankRequirements(task)}
    `;
}

function getSkillLabel(skillId) {
    return SKILL_DEFINITIONS.find(skill => skill.id === skillId)?.label || skillId;
}

function renderLearningModePanel(task, meta) {
    if (activeLearningMode === "prediction") return renderPredictionModePanel(meta);
    if (activeLearningMode === "debug") return renderDebugDetectivePanel(meta);
    if (activeLearningMode === "aiReview") return renderAiReviewPanel(task, meta);
    if (activeLearningMode === "skillTree") return renderSkillTreePanel(meta);
    return renderMissionModePanel();
}

function renderWalkthroughControls(modeId, options = {}) {
    const demo = WALKTHROUGH_DEMOS[modeId];
    const steps = (demo?.steps || []).map((step, index) => `
        <div class="walkthrough-step"><strong>${index + 1}</strong><span>${escapeHtml(step)}</span></div>
    `).join("");
    const feedback = activeWalkthroughMode === modeId && walkthroughFeedback
        ? `<div class="walkthrough-banner">${escapeHtml(walkthroughFeedback)}</div>`
        : "";
    const compact = options.compact === true;
    return `
        <div class="walkthrough-steps">
            ${compact ? `<div class="walkthrough-step"><strong>Optional</strong><span>Watch one sample level complete automatically, then continue with the real current level.</span></div>` : `
                <div class="walkthrough-step"><strong>Demo</strong><span>${escapeHtml(demo?.summary || "Run a guided example for this mode.")}</span></div>
                ${steps}
            `}
            <div class="mode-actions">
                <button class="secondary-btn walkthrough-button" type="button" data-walkthrough-mode="${escapeHtml(modeId)}">Walkthrough This Mode</button>
            </div>
            ${feedback}
        </div>
    `;
}

function renderPredictionModePanel(meta) {
    return `
        <div class="mode-panel">
            <div class="mode-panel-title">Prediction Game</div>
            <div class="mode-panel-copy">${escapeHtml(LEARNING_MODES.prediction.summary)}</div>
            <div class="mode-panel-copy">Run the code, use the timeline, and answer the Prediction Lab before the current value is revealed.</div>
            ${renderWalkthroughControls("prediction")}
            ${renderSkillMiniGrid(meta.skills)}
        </div>
    `;
}

function renderMissionModePanel() {
    const completed = getCompletedMissions();
    const path = getPracticePath(activeLessonId);
    const activeMissionIndex = path.findIndex(mission => mission.topicId === activeLessonId && mission.taskId === activeTaskId);
    const activeTask = getActiveTask();
    const meta = getTaskMeta(activeTask);
    const currentKey = getTaskKey(activeLessonId, activeTaskId);
    const currentCompleted = completed.has(currentKey);
    const firstMissionKey = path[0] ? getTaskKey(path[0].topicId, path[0].taskId) : "";
    const showWalkthrough = activeMissionIndex <= 0 && !completed.has(firstMissionKey);
    const missionCards = path.map((mission, index) => {
        const task = getTasksForTopic(mission.topicId).find(item => item.id === mission.taskId);
        const key = getTaskKey(mission.topicId, mission.taskId);
        const unlocked = isMissionLevelAccessible(index, completed, path);
        const active = mission.topicId === activeLessonId && mission.taskId === activeTaskId;
        const state = completed.has(key) ? "Completed" : active ? "Current" : unlocked ? "Ready" : "Locked";
        return `
            <button class="mission-card ${active ? "active" : ""} ${completed.has(key) ? "completed" : ""}" type="button"
                data-mission-topic="${escapeHtml(mission.topicId)}" data-mission-task="${escapeHtml(mission.taskId)}" ${unlocked ? "" : "disabled"}>
                <strong>Level ${index + 1}: ${escapeHtml(mission.stage)}</strong>
                <span>${escapeHtml(task?.title || "Practice task")}</span>
                <span>${state}</span>
            </button>
        `;
    }).join("");

    const activeLevelText = activeMissionIndex >= 0 ? `Level ${activeMissionIndex + 1}` : "Selected practice";
    const totalLevels = Math.max(path.length, 1);
    const nextReadyMission = path.find((mission, index) => {
        if (index <= activeMissionIndex) return false;
        const key = getTaskKey(mission.topicId, mission.taskId);
        return !completed.has(key) && isMissionLevelAccessible(index, completed, path);
    });
    const completeLine = currentCompleted
        ? nextReadyMission
            ? "This level is already completed. Click the next Ready level card to continue."
            : "This topic path is complete. Open Dashboard to review your growth."
        : "This level is not completed yet. Edit the code, then click Compile & Run.";

    return `
        <div class="mode-panel">
            <div class="mission-current">
                <strong>${escapeHtml(LESSONS[activeLessonId]?.title || "Practice")} - ${escapeHtml(activeLevelText)}: ${escapeHtml(path[activeMissionIndex]?.stage || "Practice")}</strong>
                <span>${escapeHtml(activeTask?.title || "Practice task")}</span>
                <span>${escapeHtml(activeTask?.objective || "Make the program meet the task goal.")}</span>
                <span>${escapeHtml(completeLine)}</span>
            </div>
            ${renderMissionRules("mission-panel-rules", totalLevels)}
            ${renderMissionRunFeedback(lastLessonResult)}
            ${activeMissionIndex === 4 ? renderDebugDetectiveActivity(meta) : ""}
            ${showWalkthrough ? renderWalkthroughControls("mission", { compact: true }) : ""}
            <div class="mission-grid">${missionCards}</div>
        </div>
    `;
}

function renderMissionRules(extraClass = "", totalLevels = getPracticePath(activeLessonId).length || 5) {
    return `
        <div class="mission-rules ${escapeHtml(extraClass)}">
            <div><strong>Goal:</strong> complete Level 1 to Level ${totalLevels} in order for the selected topic.</div>
            <div><strong>How to complete a level:</strong> fix the code, then click Compile & Run.</div>
            <div><strong>Auto-check:</strong> the app marks a level Completed automatically when Compile & Run meets all task checks.</div>
        </div>
    `;
}

function renderMissionRunFeedback(result) {
    if (!result) {
        return `<div class="mission-feedback">After you click Compile & Run, this box will say whether the current level passed or what still needs fixing.</div>`;
    }

    const statusClass = result.passed ? "passed" : "failed";
    const path = getPracticePath(activeLessonId);
    const activeMissionIndex = getMissionIndex(activeLessonId, activeTaskId);
    const completed = getCompletedMissions();
    const hasNextReady = path.some((mission, index) => {
        if (index <= activeMissionIndex) return false;
        const key = getTaskKey(mission.topicId, mission.taskId);
        return !completed.has(key) && isMissionLevelAccessible(index, completed, path);
    });
    const heading = result.passed
        ? hasNextReady ? "Level passed. The next level is now unlocked." : "Level passed. This topic path is complete."
        : "Level not completed yet. Fix the items below, then run again.";
    const rows = result.criteria.map((item, index) => {
        const revealed = revealedMissionFixes.has(index);
        const fix = item.fix || getDefaultCriterionFix(item);
        return `
            <div class="mission-criterion-row">
                <div class="${item.passed ? "ok" : "fix"}">${item.passed ? "[ok]" : "[fix]"} ${escapeHtml(item.label)}</div>
                ${item.passed ? "" : `<button class="mini-fix-button mission-fix-button" type="button" data-fix-index="${index}">${revealed ? "Hide fix" : "Show fix"}</button>`}
                ${!item.passed && revealed ? `<div class="mission-fix-answer">${escapeHtml(fix)}</div>` : ""}
            </div>
        `;
    }).join("");

    return `
        <div class="mission-feedback ${statusClass}">
            <strong>${heading}</strong>
            ${rows}
        </div>
    `;
}

function getDefaultCriterionFix(item) {
    if (item.type === "variableEquals") {
        return `Expected answer: ${item.variable} should finish as ${item.expected}. Use the program steps to produce that value, not a direct final assignment.`;
    }
    if (item.type === "conceptSeen" && item.concept === "Accumulator") {
        return "Correct pattern: keep the old running total and add the current item, for example total_sum = total_sum + number, total_sum += number, or accumulator = total_sum + number followed by total_sum = accumulator.";
    }
    if (item.type === "antiShortcut") {
        return "Remove the direct final answer assignment. The trace must show the value being produced by the required algorithm, such as a loop, condition, function call, recursion, or accumulator update.";
    }
    if (item.type === "noErrors") {
        return "Read the raw error in Step Explanation, fix that line, then run again.";
    }
    return "Use the trace evidence above to repair this item, then click Compile & Run again.";
}

function renderDebugDetectiveActivity(meta) {
    const codeLines = codeInput.value.split('\n');
    const lineButtons = codeLines.map((lineText, index) => {
        const lineNumber = index + 1;
        const label = lineText.trim() || "(blank)";
        return `<button class="bug-line-button ${selectedBugLine === lineNumber ? "selected" : ""}" type="button" data-bug-line="${lineNumber}">${lineNumber}: ${escapeHtml(label.slice(0, 18))}</button>`;
    }).join("");
    const feedback = debugReportFeedback
        ? `<div class="mode-feedback ${debugReportFeedback.kind}">${escapeHtml(debugReportFeedback.text)}</div>`
        : `<div class="mode-feedback">Level 5 asks you to inspect the code like a reviewer: pick the suspicious line, explain the state problem, then repair and run it.</div>`;

    return `
        <div class="debug-activity">
            <div class="mode-panel-title">Level 5 Debug Detective</div>
            <div class="mode-panel-copy">${escapeHtml(meta.debug?.fixHint || "Find the line that prevents the program from meeting the goal. Then explain the problem before fixing the code.")}</div>
            <div class="debug-line-grid">${lineButtons}</div>
            <textarea class="mode-textarea" id="debug-reason" placeholder="Why does this line break the goal?"></textarea>
            <div class="mode-actions">
                <button class="secondary-btn debug-submit" type="button">Submit Bug Report</button>
            </div>
            ${feedback}
        </div>
    `;
}

function renderDebugDetectivePanel(meta) {
    const codeLines = codeInput.value.split('\n');
    const lineButtons = codeLines.map((lineText, index) => {
        const lineNumber = index + 1;
        const label = lineText.trim() || "(blank)";
        return `<button class="bug-line-button ${selectedBugLine === lineNumber ? "selected" : ""}" type="button" data-bug-line="${lineNumber}">${lineNumber}: ${escapeHtml(label.slice(0, 18))}</button>`;
    }).join("");
    const feedback = debugReportFeedback
        ? `<div class="mode-feedback ${debugReportFeedback.kind}">${escapeHtml(debugReportFeedback.text)}</div>`
        : `<div class="mode-feedback">Pick the suspicious line, explain the state problem, then repair the code and run again.</div>`;

    return `
        <div class="mode-panel">
            <div class="mode-panel-title">Debug Detective</div>
            <div class="mode-panel-copy">${escapeHtml(meta.debug?.fixHint || LEARNING_MODES.debug.summary)}</div>
            ${renderWalkthroughControls("debug")}
            <div class="debug-line-grid">${lineButtons}</div>
            <textarea class="mode-textarea" id="debug-reason" placeholder="Why does this line break the goal?"></textarea>
            <div class="mode-actions">
                <button class="secondary-btn debug-submit" type="button">Submit Bug Report</button>
            </div>
            ${feedback}
        </div>
    `;
}

function renderAiReviewPanel(task, meta) {
    const review = meta.aiReview || {
        prompt: LEARNING_MODES.aiReview.summary,
        concerns: [
            { id: "trace-needed", label: "The code should be verified with a trace and final-value check.", expected: true },
            { id: "readability", label: "Names and structure should be readable enough for another learner.", expected: true },
            { id: "always-shorter", label: "The shortest possible code is automatically the best code.", expected: false }
        ]
    };
    const concerns = review.concerns.map(item => `
        <label class="review-option">
            <input class="review-check" type="checkbox" value="${escapeHtml(item.id)}" ${reviewSelections.has(item.id) ? "checked" : ""}>
            <span>${escapeHtml(item.label)}</span>
        </label>
    `).join("");
    const feedback = reviewFeedback
        ? `<div class="mode-feedback ${reviewFeedback.kind}">${escapeHtml(reviewFeedback.text)}</div>`
        : `<div class="mode-feedback">Select the issues a reviewer should raise, then improve and run the code.</div>`;

    return `
        <div class="mode-panel">
            <div class="mode-panel-title">AI Code Review</div>
            <div class="mode-panel-copy">${escapeHtml(review.prompt)}</div>
            ${renderWalkthroughControls("aiReview")}
            <div class="review-checklist">${concerns}</div>
            <div class="mode-actions">
                <button class="secondary-btn review-submit" type="button">Submit Review</button>
            </div>
            ${feedback}
            ${renderCodeQualityPanel(task)}
        </div>
    `;
}

function renderSkillTreePanel(meta) {
    return `
        <div class="mode-panel">
            <div class="mode-panel-title">Growth Map</div>
            <div class="mode-panel-copy">${escapeHtml(LEARNING_MODES.skillTree.summary)}</div>
            ${renderWalkthroughControls("skillTree")}
            ${renderSkillMiniGrid(meta.skills, true)}
        </div>
    `;
}

function renderSkillMiniGrid(focusSkills, showAll = false) {
    const progress = getSkillProgress();
    const focus = new Set(focusSkills || []);
    const skills = showAll ? SKILL_DEFINITIONS : SKILL_DEFINITIONS.filter(skill => focus.has(skill.id));
    const rows = skills.map(skill => {
        const value = progress[skill.id] || 0;
        return `
            <div class="skill-row">
                <span>${escapeHtml(skill.label)}</span>
                <div class="skill-track"><div class="skill-fill" style="width: ${value}%"></div></div>
                <strong>${value}%</strong>
            </div>
        `;
    }).join("");

    return `<div class="skill-grid">${rows || `<div class="mode-panel-copy">This task will update trace-reading progress.</div>`}</div>`;
}

function renderDashboard() {
    if (!dashboardSummary || !dashboardSkillCloud || !dashboardTopicTable) return;

    const completed = getCompletedMissions();
    const topicRows = STUDENT_TOPIC_ORDER
        .filter(topicId => LESSONS[topicId])
        .map(topicId => {
            const progress = getTopicProgress(topicId);
            const nextLevel = progress.nextMission
                ? `Level ${progress.nextMission.level}: ${progress.nextMission.stage}`
                : "All levels complete";
            return { topicId, ...progress, nextLevel };
        });
    const totalLevels = topicRows.reduce((sum, topic) => sum + topic.totalCount, 0);
    const completedLevels = topicRows.reduce((sum, topic) => sum + topic.completedCount, 0);
    const skillProgress = getSkillProgress();
    const trainedSkills = Object.values(skillProgress).filter(value => value > 0).length;
    const overallPercent = totalLevels ? Math.round((completedLevels / totalLevels) * 100) : 0;

    dashboardSummary.innerHTML = `
        <div class="dashboard-grid" style="grid-template-columns: repeat(2, minmax(140px, 1fr));">
            <div class="dashboard-stat"><strong>${completedLevels}/${totalLevels}</strong><span>Levels completed</span></div>
            <div class="dashboard-stat"><strong>${overallPercent}%</strong><span>Overall progress</span></div>
            <div class="dashboard-stat"><strong>${trainedSkills}</strong><span>Skills touched</span></div>
            <div class="dashboard-stat"><strong>${completed.size}</strong><span>Verified tasks</span></div>
        </div>
    `;

    dashboardSkillCloud.innerHTML = SKILL_DEFINITIONS
        .map(skill => {
            const value = skillProgress[skill.id] || 0;
            const scale = 12 + Math.round(value / 8);
            const opacity = value > 0 ? 0.95 : 0.42;
            return `<span style="font-size: ${scale}px; opacity: ${opacity};">${escapeHtml(skill.label)} ${value}%</span>`;
        })
        .join("");

    const rows = topicRows.map(topic => {
        const topicTitle = LESSONS[topic.topicId]?.title || topic.topicId;
        return `
            <tr>
                <td>${escapeHtml(topicTitle)}</td>
                <td>${topic.completedCount}/${topic.totalCount}</td>
                <td>${topic.percent}%</td>
                <td>${escapeHtml(topic.nextLevel)}</td>
            </tr>
        `;
    }).join("");

    dashboardTopicTable.innerHTML = `
        <table class="progress-table">
            <thead>
                <tr>
                    <th>Topic</th>
                    <th>Levels</th>
                    <th>Progress</th>
                    <th>Next step</th>
                </tr>
            </thead>
            <tbody>${rows}</tbody>
        </table>
    `;
}

function renderCodeQualityPanel(task) {
    const quality = analyzeCodeQuality(codeInput.value, task, lastLessonResult);
    const rows = quality.items.map(item => `
        <div class="quality-item ${item.passed ? "pass" : "fix"}">
            <span>${escapeHtml(item.label)}</span>
            <span>${item.passed ? "OK" : "Review"}</span>
        </div>
    `).join("");

    return `
        <div class="quality-grid">
            <div class="mode-panel-title">Quality Signal: ${quality.score}/100</div>
            ${rows}
        </div>
    `;
}

function analyzeCodeQuality(code, task, result) {
    const nonEmptyLines = code.split('\n').map(line => line.trim()).filter(Boolean);
    const duplicateLines = nonEmptyLines.length - new Set(nonEmptyLines).size;
    const singleLetterAssignments = nonEmptyLines.filter(line => /^[a-z]\s*=/.test(line)).length;
    const starterLineCount = (task?.starterCode || "").split('\n').filter(line => line.trim()).length;
    const items = [
        { label: "Goal is verified by the trace", passed: Boolean(result?.passed) },
        { label: "No placeholder pass remains", passed: !/\bpass\b/.test(code) },
        { label: "Low duplicate-line noise", passed: duplicateLines <= 1 },
        { label: "Readable variable names", passed: singleLetterAssignments <= 1 },
        { label: "Change size stays focused", passed: nonEmptyLines.length <= starterLineCount + 5 }
    ];
    const score = Math.round((items.filter(item => item.passed).length / items.length) * 100);
    return { score, items };
}

function getMissingBlanks(task = getActiveTask()) {
    if (!task?.blanks?.length) return [];
    return task.blanks.filter(blank => codeInput.value.includes(blank.token));
}

function canCompileActiveTask() {
    return getMissingBlanks().length === 0;
}

function renderBlankRequirements(task) {
    if (!task?.blanks?.length) return "";

    const missingBlanks = getMissingBlanks(task);
    const missingTokens = new Set(missingBlanks.map(blank => blank.token));
    const blankRows = task.blanks.map(blank => {
        const isFilled = !missingTokens.has(blank.token);
        return `<div class="blank-row ${isFilled ? "filled" : "missing"}">
            <span>${escapeHtml(blank.token)}</span>
            <span>${escapeHtml(blank.label)}</span>
            <strong>${isFilled ? "filled" : "required"}</strong>
        </div>`;
    }).join("");

    return `
        <div class="blank-panel" id="blank-panel">
            <div class="blank-title">Fill-in-the-blank gate</div>
            <div class="blank-help">Replace every blank token in the code editor before compiling.</div>
            ${blankRows}
        </div>
    `;
}

function updateRunAvailability() {
    const task = getActiveTask();
    if (task?.blanks?.length && !canCompileActiveTask()) {
        btnRun.disabled = true;
        btnRun.textContent = "Fill Blanks First";
        return;
    }

    btnRun.disabled = false;
    btnRun.textContent = "Compile & Run";
}

function renderTopicInfo() {
    const details = TOPIC_DETAILS[activeLessonId] || {};
    const topic = LESSONS[activeLessonId] || {};

    if (topicBrief) {
        topicBrief.innerHTML = `<strong>${escapeHtml(topic.title || "Topic")}</strong><br>${escapeHtml(details.brief || "No topic summary available.")}`;
    }

    if (algorithmIntro) {
        algorithmIntro.innerHTML = `<strong>Algorithm pattern</strong><br>${escapeHtml(details.algorithm || "No algorithm summary available.")}`;
    }
}

function goToMissionTask(topicId, taskId) {
    if (!LESSONS[topicId]) return;
    activeLessonId = topicId;
    lessonSelect.value = topicId;
    populateTaskSelect(topicId);
    setActiveTask(taskId, false);
    logStudentAction("button", "Mission Level", {
        selectedTopicId: topicId,
        selectedTaskId: taskId
    });
}

function submitDebugReport() {
    const meta = getTaskMeta();
    const reason = document.getElementById("debug-reason")?.value.trim() || "";

    if (!selectedBugLine) {
        debugReportFeedback = { kind: "needs-work", text: "Choose the suspicious line before submitting the report." };
        renderLessonGoal();
        return;
    }

    if (!reason) {
        debugReportFeedback = { kind: "needs-work", text: "Add a short explanation of what goes wrong in the program state." };
        renderLessonGoal();
        return;
    }

    const expectedLine = meta.debug?.line;
    const lineCorrect = expectedLine ? selectedBugLine === expectedLine : true;
    const explanationReady = reason.length >= 12;
    const passed = lineCorrect && explanationReady;
    debugReportFeedback = passed
        ? { kind: "good", text: `Good report. ${meta.debug?.cause || "Now repair the code and confirm it with the trace."}` }
        : { kind: "needs-work", text: "Not quite. Compare the selected line with the final-value goal and the variable change shown in the trace." };

    logStudentAction("button", "Submit Bug Report", {
        selectedBugLine,
        expectedLine,
        reason,
        result: passed ? "passed" : "needs-work"
    });
    renderLessonGoal();
}

function syncReviewSelections() {
    reviewSelections = new Set(
        [...lessonGoal.querySelectorAll(".review-check:checked")].map(input => input.value)
    );
}

function submitReview() {
    const meta = getTaskMeta();
    const review = meta.aiReview || {};
    const concerns = review.concerns || [
        { id: "trace-needed", expected: true },
        { id: "readability", expected: true },
        { id: "always-shorter", expected: false }
    ];
    syncReviewSelections();

    const expected = new Set(concerns.filter(item => item.expected).map(item => item.id));
    const selected = reviewSelections;
    const missed = [...expected].filter(id => !selected.has(id));
    const extras = [...selected].filter(id => !expected.has(id));
    const passed = missed.length === 0 && extras.length === 0;

    reviewFeedback = passed
        ? { kind: "good", text: "Strong review. You identified the important code-quality risks for this task." }
        : { kind: "needs-work", text: "Review again. Look for correctness evidence, accumulator behavior, edge cases, and whether the trace proves the goal." };

    logStudentAction("button", "Submit AI Review", {
        selected: [...selected],
        expected: [...expected],
        missed,
        extras,
        result: passed ? "passed" : "needs-work"
    });
    renderLessonGoal();
}

function recordLearningProgress(task, result) {
    if (!result?.passed || !task) return;
    markMissionCompleted(activeLessonId, task.id);
    updateSkillProgressForTask(task, result);
    renderDashboard();
}

function resetAllProgress() {
    localStorage.removeItem(MISSION_PROGRESS_KEY);
    localStorage.removeItem(SKILL_PROGRESS_KEY);
    localStorage.removeItem("ssp_v6_completed_missions");
    localStorage.removeItem("ssp_v6_skill_progress");
    localStorage.removeItem(GUIDE_KEY);
    predictionAttempts = [];
    exerciseTrainingRecords = [];
    studentActionLog = [];
    resetModeInteractionState();
    const firstMission = getFirstAvailableMission(activeLessonId);
    if (firstMission) {
        populateTaskSelect(activeLessonId);
        setActiveTask(firstMission.taskId, false);
    } else {
        resetTimelineState();
        renderLessonGoal();
    }
    renderDashboard();
    renderTeacherInsights();
    logStudentAction("button", "Reset Progress", { result: "cleared" });
    consoleOutput.innerHTML = `<div class="console-row muted">Progress has been reset. Choose a Practice Topic and run a level to start again.</div>`;
}

function renderExecutionError(message) {
    const isPythonSetupIssue = /Python tracing engine could not start|python|py -3/i.test(message);
    const setupHelp = isPythonSetupIssue
        ? `<div class="console-row muted">Install Python 3, then confirm one of these works in PowerShell: python --version or py --version.</div>`
        : "";

    consoleOutput.innerHTML = `
        <div class="console-row error">Execution could not finish.</div>
        <div class="console-row error-detail">${escapeHtml(message)}</div>
        ${setupHelp}
    `;
}

function setCodeForWalkthrough(code) {
    codeInput.value = code;
    resetTimelineState();
    renderLessonGoal();
    updateRunAvailability();
    syncEditorRendering();
}

async function runWalkthrough(modeId) {
    const demo = WALKTHROUGH_DEMOS[modeId];
    if (!demo) return;

    activeWalkthroughMode = modeId;
    walkthroughFeedback = "Preparing the guided example...";
    activeLearningMode = modeId;
    modeSelect.value = modeId;

    setActiveLesson(demo.topicId, false);
    setActiveTask(demo.taskId, false);
    activeWalkthroughMode = modeId;
    walkthroughFeedback = "The walkthrough is now performing the steps shown above.";
    renderLessonGoal();

    if (modeId === "debug") {
        selectedBugLine = demo.bugLine;
        renderLessonGoal();
        const reasonInput = document.getElementById("debug-reason");
        if (reasonInput) reasonInput.value = demo.bugReason;
        submitDebugReport();
    }

    if (modeId === "aiReview") {
        const meta = getTaskMeta();
        const expectedConcernIds = (meta.aiReview?.concerns || [])
            .filter(item => item.expected)
            .map(item => item.id);
        reviewSelections = new Set(expectedConcernIds);
        renderLessonGoal();
        lessonGoal.querySelectorAll(".review-check").forEach(input => {
            input.checked = reviewSelections.has(input.value);
        });
        submitReview();
    }

    setCodeForWalkthrough(demo.solutionCode);
    activeWalkthroughMode = modeId;
    walkthroughFeedback = "Running the trace with the demonstrated code...";
    renderLessonGoal();

    const didRun = await runCodeFromEditor(`Walkthrough: ${LEARNING_MODES[modeId]?.title || modeId}`, { skipProgress: true });
    if (!didRun) {
        activeWalkthroughMode = modeId;
        walkthroughFeedback = "The walkthrough reached Compile & Run, but the trace engine returned an error. Read the timeline message for setup details.";
        renderLessonGoal();
        return;
    }

    if (modeId === "prediction") {
        renderFrame(0);
        const frame = pipelineSteps[0];
        const target = getPredictionTarget(frame);
        if (target) {
            predictionInput.value = target.changeType === "removed" ? "removed" : String(target.after);
            checkPrediction();
        }
    }

    activeWalkthroughMode = modeId;
    walkthroughFeedback = "Walkthrough complete. The page now shows the expected state after a correct student flow.";
    renderLessonGoal();
    if (pipelineSteps.length) {
        renderFrame(currentFrameIndex);
    }
    logStudentAction("button", "Walkthrough This Mode", {
        selectedMode: modeId,
        result: "completed"
    });
}

codeInput.addEventListener('input', () => {
    clearWalkthroughState();
    revealedMissionFixes = new Set();
    resetTimelineState();
    renderLessonGoal();
    updateRunAvailability();
});

codeInput.addEventListener('scroll', () => {
    codeViewer.scrollTop = codeInput.scrollTop;
    codeViewer.scrollLeft = codeInput.scrollLeft;
    gutterZone.scrollTop = codeInput.scrollTop;
});

exampleSelect.addEventListener('change', () => {
    setActiveTask(exampleSelect.value, true);
});

btnResetView.addEventListener('click', resetAllProgress);
btnPracticeView?.addEventListener('click', () => setActiveView("practice"));
btnDashboardView?.addEventListener('click', () => setActiveView("dashboard"));

modeSelect.addEventListener('change', () => {
    activeLearningMode = modeSelect.value;
    clearWalkthroughState();
    resetModeInteractionState();
    ensureMissionTaskSelected();
    syncModeShell();
    logStudentAction("select", "Learning Mode", {
        selectedMode: activeLearningMode
    });
    resetPredictionPanel();
    renderLessonGoal();
    if (pipelineSteps.length) {
        renderFrame(currentFrameIndex);
    }
});

lessonSelect.addEventListener('change', () => {
    setActiveLesson(lessonSelect.value, true);
});

lessonGoal.addEventListener('click', (event) => {
    const fixButton = event.target.closest(".mission-fix-button");
    if (fixButton) {
        const index = Number(fixButton.dataset.fixIndex);
        if (revealedMissionFixes.has(index)) {
            revealedMissionFixes.delete(index);
        } else {
            revealedMissionFixes.add(index);
        }
        renderLessonGoal();
        return;
    }

    const missionButton = event.target.closest(".mission-card");
    if (missionButton && !missionButton.disabled) {
        goToMissionTask(missionButton.dataset.missionTopic, missionButton.dataset.missionTask);
        return;
    }

    const bugLineButton = event.target.closest(".bug-line-button");
    if (bugLineButton) {
        selectedBugLine = Number(bugLineButton.dataset.bugLine);
        debugReportFeedback = null;
        renderLessonGoal();
        return;
    }

    if (event.target.closest(".debug-submit")) {
        submitDebugReport();
        return;
    }

    if (event.target.closest(".review-submit")) {
        submitReview();
        return;
    }

    const walkthroughButton = event.target.closest(".walkthrough-button");
    if (walkthroughButton) {
        runWalkthrough(walkthroughButton.dataset.walkthroughMode);
    }
});

lessonGoal.addEventListener('change', (event) => {
    if (event.target.classList.contains("review-check")) {
        syncReviewSelections();
    }
});

btnCheckLesson.addEventListener('click', () => {
    if (!pipelineSteps.length) {
        logStudentAction("button", "Student Learning Goal", { result: "no_trace" });
        renderLessonStatus({
            passed: false,
            criteria: [{ passed: false, label: "Run the program before checking the task." }]
        });
        return;
    }
    lastLessonResult = evaluateLesson(getActiveTask(), pipelineSteps, codeInput.value);
    logStudentAction("button", "Student Learning Goal", {
        result: lastLessonResult.passed ? "passed" : "failed",
        criteria: lastLessonResult.criteria
    });
    renderLessonStatus(lastLessonResult);
    renderTeacherInsights();
});

btnExportReport.addEventListener('click', exportTeacherReport);
btnPresentationMode.addEventListener('click', togglePresentationMode);

function initializeVariableColors(steps) {
    variableColorMap = {};
    let colorIndex = 0;

    steps.forEach(frame => {
        const snapshots = [frame.variables || {}, frame.beforeVariables || {}, frame.afterVariables || {}];
        snapshots.forEach(vars => {
            for (const varName of Object.keys(vars)) {
                if (!variableColorMap[varName]) {
                    variableColorMap[varName] = BRIGHT_PALETTE[colorIndex % BRIGHT_PALETTE.length];
                    colorIndex++;
                }
            }
        });
    });
}

async function runCodeFromEditor(actionLabel = "Compile & Run", options = {}) {
    if (!canCompileActiveTask()) {
        renderLessonGoal();
        updateRunAvailability();
        consoleOutput.innerHTML = `<span style="color: #f4c95d;">Fill every blank token before compiling this task.</span>`;
        return false;
    }

    const code = codeInput.value;
    revealedMissionFixes = new Set();
    logStudentAction("button", actionLabel, {
        codeLength: code.length
    });
    btnRun.textContent = "Running...";
    btnRun.disabled = true;

    try {
        const response = await fetch('/api/execution/run', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code: code })
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(errorText || "Backend infrastructure execution alert.");
        }

        pipelineSteps = await response.json();

        if (!pipelineSteps || pipelineSteps.length === 0) {
            throw new Error("No trace telemetry returned.");
        }

        isTimelineActive = true;
        initializeVariableColors(pipelineSteps);

        slider.max = pipelineSteps.length - 1;
        slider.value = 0;
        slider.disabled = pipelineSteps.length <= 1;

        renderFrame(0);
        const task = getActiveTask();
        lastLessonResult = evaluateLesson(task, pipelineSteps, code);
        if (!options.skipProgress) {
            recordLearningProgress(task, lastLessonResult);
        }
        renderLessonStatus(lastLessonResult);
        renderLessonGoal();
        updateRunAvailability();
        exerciseTrainingRecords.push({
            timestamp: new Date().toISOString(),
            topicId: activeLessonId,
            topicTitle: LESSONS[activeLessonId].title,
            taskId: task.id,
            taskTitle: task.title,
            focusConcept: LESSONS[activeLessonId].concept,
            traceSteps: pipelineSteps.length,
            goalPassed: lastLessonResult.passed,
            progressRecorded: !options.skipProgress,
            criteria: lastLessonResult.criteria
        });
        renderTeacherInsights();
        return true;
    } catch (err) {
        isTimelineActive = false;
        variableColorMap = {};
        syncEditorRendering();
        renderConceptTags([]);
        resetPredictionPanel();
        renderLessonStatus(null);
        renderExecutionError(err.message);
        return false;
    } finally {
        updateRunAvailability();
    }
}

btnRun.addEventListener('click', () => runCodeFromEditor());

slider.addEventListener('input', (event) => {
    renderFrame(parseInt(event.target.value));
});

btnCheckPrediction.addEventListener('click', checkPrediction);
btnRevealAnswer.addEventListener('click', revealAnswer);
btnOpenGuide.addEventListener('click', () => startGuide(true));
btnGuideNext.addEventListener('click', advanceGuide);
btnGuidePrev.addEventListener('click', previousGuide);
btnGuideSkip.addEventListener('click', completeGuide);
window.addEventListener('resize', positionGuideCard);
window.addEventListener('scroll', positionGuideCard, true);
window.addEventListener('keydown', (event) => {
    if (event.key === "Escape" && presentationMode) {
        setPresentationMode(false);
    }
});
predictionInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        checkPrediction();
    }
});

function renderFrame(index) {
    if (!pipelineSteps || pipelineSteps.length === 0 || index >= pipelineSteps.length) return;

    currentFrameIndex = index;

    const frame = pipelineSteps[index];
    const beforeVars = frame.beforeVariables || frame.previousVariables || {};
    const afterVars = frame.afterVariables || frame.variables || {};
    const changes = frame.changes || [];
    predictionTarget = getPredictionTarget(frame);

    renderConsole(frame);
    renderConceptTags(frame.concepts || [], frame.scopeName);

    stepCounter.textContent = `${index + 1}/${pipelineSteps.length}`;

    syncEditorRendering(frame.line);
    renderScopeGrid(afterVars, frame);
    renderPredictionPanel(frame);
}

function renderConsole(frame) {
    const source = frame.sourceLine ? frame.sourceLine.trim() : "";
    const target = getPredictionTarget(frame);
    const showPredictionAnswer = shouldShowPredictionAnswer(frame, target);
    const changeSummary = (frame.changes || []).length
        ? frame.changes.map(change => {
            const beforeValue = change.changeType === "initialized" ? "not allocated" : change.before;
            const shouldMask = target && change.name === target.name && !showPredictionAnswer;
            const afterValue = shouldMask
                ? "hidden until prediction is checked"
                : change.changeType === "removed" ? "removed" : change.after;
            return `${change.name}: ${beforeValue} -> ${afterValue}`;
        }).join("; ")
        : "No tracked variable change";

    const rows = [
        `<div class="console-row trace-head">Step ${escapeHtml(frame.stepNumber)} / Line ${escapeHtml(frame.line)}</div>`,
        `<div class="console-row trace-line">code: ${escapeHtml(source || "(program transition)")}</div>`,
        `<div class="console-row trace-change">change: ${escapeHtml(changeSummary)}</div>`
    ];

    if (frame.stdout) {
        const stdoutRows = String(frame.stdout).trimEnd().split('\n');
        rows.push(`<div class="console-row trace-output-label">stdout</div>`);
        rows.push(...stdoutRows.map(line => `<div class="console-row">${escapeHtml(line)}</div>`));
    }

    const explanation = formatExplanation(frame, target, showPredictionAnswer);
    if (explanation) {
        rows.push(`<div class="console-row trace-output-label">step explanation</div>`);
        rows.push(`<div class="console-row trace-explanation">${explanation}</div>`);
    }

    consoleOutput.innerHTML = rows.join('');

    if (frame.error) {
        const title = frame.friendlyErrorTitle || frame.errorType || "Runtime Error";
        const message = frame.friendlyErrorMessage || frame.error;
        consoleOutput.innerHTML += `
            <div class="console-row error">${escapeHtml(title)}</div>
            <div class="console-row error-detail">${escapeHtml(message)}</div>
            <div class="console-row muted">Raw: ${escapeHtml(frame.error)}</div>
        `;
    }
}

function formatExplanation(frame, target = null, showTargetAnswer = true) {
    let processedExplanation = escapeHtml(frame.explanation || "");
    if (target && !showTargetAnswer) {
        const answerText = escapeHtml(String(target.changeType === "removed" ? "removed" : target.after));
        if (answerText) {
            const quotedAnswer = `&quot;${answerText}&quot;`;
            processedExplanation = processedExplanation.replace(
                new RegExp(escapeRegExp(quotedAnswer), "g"),
                "&quot;hidden until prediction is checked&quot;"
            );
        }
    }
    for (const [varName, color] of Object.entries(variableColorMap)) {
        const regex = new RegExp(`\`${escapeRegExp(escapeHtml(varName))}\``, 'g');
        processedExplanation = processedExplanation.replace(regex, `<code style="color: ${color}; background: rgba(255,255,255,0.05); padding: 2px 4px; border-radius:3px;">${escapeHtml(varName)}</code>`);
    }
    return processedExplanation;
}

function renderConceptTags(concepts, scopeName = "") {
    if (!conceptPanel) return;

    const tags = [...(concepts || [])];
    if (scopeName && scopeName !== "<module>") {
        tags.push(`Scope: ${scopeName}`);
    }

    if (tags.length === 0) {
        conceptPanel.innerHTML = `<div class="concept-empty">No concept tag for this step yet.</div>`;
        return;
    }

    conceptPanel.innerHTML = tags
        .map(concept => `<span class="concept-chip">${escapeHtml(concept)}</span>`)
        .join('');
}

function renderScopeGrid(vars, frame = null) {
    scopeGrid.innerHTML = '';
    const target = getPredictionTarget(frame);
    const hideVariables = shouldHideVariablesForPrediction(frame, target);
    if (variablesBox) {
        variablesBox.classList.toggle("hidden-for-prediction", hideVariables);
    }
    if (traceLayout) {
        traceLayout.classList.toggle("prediction-only", hideVariables);
    }

    if (hideVariables) {
        return;
    }

    if (Object.keys(vars).length === 0) {
        scopeGrid.innerHTML = `<div style="color: #91a39a; font-size: 12px; font-style: italic;">Run the code to see variable values.</div>`;
        return;
    }

    const hidePredictionAnswer = target && !shouldShowPredictionAnswer(frame, target);
    const changedNames = new Set((frame?.changes || []).map(change => change.name));

    for (const [key, value] of Object.entries(vars)) {
        const varColor = variableColorMap[key] || "#c9d1d9";
        const displayValue = hidePredictionAnswer && key === target.name ? "hidden until checked" : value;
        const card = document.createElement('div');
        card.className = `variable-card ${changedNames.has(key) ? "changed" : ""}`;
        card.style.border = `1px solid ${varColor}`;
        card.style.background = `rgba(${hexToRgb(varColor)}, 0.04)`;
        card.innerHTML = `<span class="name" style="color: ${varColor}">${escapeHtml(key)}</span> = <span class="value" style="color: #ffffff; font-weight: bold; background: rgba(${hexToRgb(varColor)}, 0.2); padding: 1px 6px; border-radius: 4px;">${escapeHtml(displayValue)}</span>`;
        scopeGrid.appendChild(card);
    }
}

function renderPredictionPanel(frame) {
    if (activeLearningMode !== "prediction") {
        setPredictionLabVisible(false);
        predictionTarget = null;
        predictionInput.value = "";
        predictionFeedback.textContent = "";
        btnCheckPrediction.disabled = true;
        btnRevealAnswer.disabled = true;
        return;
    }

    const target = getPredictionTarget(frame);

    predictionTarget = target || null;
    predictionInput.value = "";
    predictionFeedback.textContent = "";
    predictionFeedback.className = "prediction-feedback";
    btnCheckPrediction.disabled = false;
    btnRevealAnswer.disabled = !target;

    if (!target) {
        setPredictionLabVisible(false);
        return;
    }

    if (shouldShowPredictionAnswer(frame, target)) {
        setPredictionLabVisible(false);
        return;
    }

    setPredictionLabVisible(true);
    const attemptCount = predictionAttemptCounts[getPredictionKey(frame, target)] || 0;
    predictionPrompt.textContent = `Guess the new value of ${target.name}. Attempts used: ${attemptCount}/3.`;
}

function checkPrediction() {
    const frame = pipelineSteps[currentFrameIndex];
    if (!frame) {
        logStudentAction("button", "Check Guess", { result: "no_trace" });
        predictionFeedback.textContent = "Run the code first, then check a prediction.";
        predictionFeedback.className = "prediction-feedback muted";
        return;
    }

    if (!predictionTarget) {
        predictionTarget = getPredictionTarget(frame);
    }

    if (!predictionTarget) {
        logStudentAction("button", "Check Guess", {
            result: "no_variable_change",
            stepNumber: frame.stepNumber,
            line: frame.line
        });
        predictionFeedback.textContent = "This step does not change a tracked variable, so there is nothing to check.";
        predictionFeedback.className = "prediction-feedback muted";
        return;
    }

    const guess = predictionInput.value.trim();
    const expected = predictionTarget.changeType === "removed" ? "removed" : String(predictionTarget.after).trim();
    const isCorrect = guess === expected;
    const predictionKey = getPredictionKey(frame, predictionTarget);
    const attemptNumber = (predictionAttemptCounts[predictionKey] || 0) + 1;
    predictionAttemptCounts[predictionKey] = attemptNumber;
    const answerShouldBeShown = isCorrect || attemptNumber >= 3;

    if (answerShouldBeShown) {
        revealedPredictionKeys.add(predictionKey);
    }

    predictionAttempts.push({
        timestamp: new Date().toISOString(),
        topicId: activeLessonId,
        topicTitle: LESSONS[activeLessonId]?.title || "",
        taskId: getActiveTask()?.id || "",
        taskTitle: getActiveTask()?.title || "",
        contentMode: activeContentMode,
        correct: isCorrect,
        attemptNumber,
        answerShown: answerShouldBeShown,
        stepNumber: frame.stepNumber,
        line: frame.line,
        sourceLine: frame.sourceLine,
        scopeName: frame.scopeName,
        concepts: frame.concepts || [],
        variable: predictionTarget.name,
        guess,
        expected
    });

    logStudentAction("button", "Check Guess", {
        result: isCorrect ? "correct" : "wrong",
        attemptNumber,
        answerShown: answerShouldBeShown,
        stepNumber: frame.stepNumber,
        line: frame.line,
        variable: predictionTarget.name,
        guess
    });

    if (isCorrect) {
        predictionFeedback.textContent = `Correct. The correct answer is ${expected}.`;
        predictionFeedback.className = "prediction-feedback good";
    } else if (attemptNumber >= 3) {
        predictionFeedback.textContent = `Not quite. After 3 tries, the correct answer is ${expected}.`;
        predictionFeedback.className = "prediction-feedback needs-work";
    } else {
        predictionFeedback.textContent = `Not quite. Try again before revealing the answer. Attempt ${attemptNumber}/3.`;
        predictionFeedback.className = "prediction-feedback needs-work";
    }
    predictionPrompt.textContent = `Guess the new value of ${predictionTarget.name}. Attempts used: ${attemptNumber}/3.`;

    if (answerShouldBeShown) {
        setPredictionLabVisible(false);
    }

    if (frame) {
        renderConsole(frame);
        renderScopeGrid(frame.afterVariables || frame.variables || {}, frame);
    }
    renderTeacherInsights();
}

function revealAnswer() {
    const frame = pipelineSteps[currentFrameIndex];
    if (!frame) return;

    const target = predictionTarget || getPredictionTarget(frame);
    if (!target) return;

    const expected = target.changeType === "removed" ? "removed" : String(target.after).trim();
    revealedPredictionKeys.add(getPredictionKey(frame, target));
    logStudentAction("button", "Reveal", {
        stepNumber: frame.stepNumber,
        line: frame.line,
        variable: target.name
    });

    predictionFeedback.textContent = `Answer revealed. The correct answer is ${expected}.`;
    predictionFeedback.className = "prediction-feedback muted";
    setPredictionLabVisible(false);
    renderConsole(frame);
    renderScopeGrid(frame.afterVariables || frame.variables || {}, frame);
}

function resetPredictionPanel() {
    predictionTarget = null;
    setPredictionLabVisible(activeLearningMode === "prediction");
    predictionPrompt.textContent = "Run code to make a prediction.";
    predictionInput.value = "";
    predictionInput.disabled = false;
    predictionFeedback.textContent = "";
    predictionFeedback.className = "prediction-feedback";
    btnCheckPrediction.disabled = false;
    btnRevealAnswer.disabled = true;
}

function evaluateLesson(lesson, steps, code = "") {
    const finalVars = getFinalVariables(steps);
    const stdout = getFinalStdout(steps);
    const concepts = getConceptCoverage(steps);
    const hasError = steps.some(step => step.error);
    const goalVariables = getVariableGoalChecks(lesson).map(check => check.variable);

    const criteria = lesson.checks.map(check => {
        if (check.type === "noErrors") {
            return {
                type: check.type,
                passed: !hasError,
                label: hasError ? "Program must finish without errors." : "Program finished without errors.",
                fix: "Read the error shown in Step Explanation, repair that line, then click Compile & Run again."
            };
        }

        if (check.type === "variableEquals") {
            const actual = normalizeValue(finalVars[check.variable]);
            const expected = normalizeValue(check.expected);
            return {
                type: check.type,
                variable: check.variable,
                expected,
                actual,
                passed: actual === expected,
                label: `${check.variable} should finish as ${expected}. Actual: ${actual || "not allocated"}.`,
                fix: `Correct target: ${check.variable} must finish as ${expected}. Use the program logic to produce that value, then run again.`
            };
        }

        if (check.type === "stdoutContains") {
            const passed = stdout.includes(check.text);
            return {
                type: check.type,
                passed,
                label: `Console output should include ${check.text}.`,
                fix: `Make sure the program prints output containing: ${check.text}.`
            };
        }

        if (check.type === "conceptSeen") {
            const staticConceptEvidence = check.concept === "Accumulator" && hasAccumulatorEvidence(code, goalVariables);
            const passed = concepts.has(check.concept) || staticConceptEvidence;
            const conceptHint = check.concept === "Accumulator"
                ? "Use an accumulator update such as total = total + number, total_sum = total_sum + number, accumulator = total_sum + number followed by total_sum = accumulator, or +=."
                : `Trace should include concept: ${check.concept}.`;
            return {
                type: check.type,
                concept: check.concept,
                passed,
                label: passed ? `Evidence shows concept: ${check.concept}.` : conceptHint,
                fix: conceptHint
            };
        }

        if (check.type === "errorCategory") {
            const passed = steps.some(step => step.errorCategory === check.expected);
            return {
                type: check.type,
                passed,
                label: passed
                    ? `Trace identified expected error: ${check.expected}.`
                    : `Trace should identify error: ${check.expected}.`,
                fix: `Run the code that triggers this expected error category: ${check.expected}.`
            };
        }

        return { passed: false, label: "Unknown check." };
    });

    const shortcutCriteria = getDirectAnswerShortcutCriteria(lesson, code);
    const allCriteria = [...criteria, ...shortcutCriteria];

    return {
        passed: allCriteria.every(item => item.passed),
        criteria: allCriteria,
        finalVars,
        stdout,
        concepts: [...concepts]
    };
}

function getVariableGoalChecks(lesson) {
    return (lesson?.checks || []).filter(check => check.type === "variableEquals");
}

function isDirectAssignmentPractice(lesson) {
    const conceptChecks = (lesson?.checks || []).filter(check => check.type === "conceptSeen");
    return conceptChecks.length === 1 && conceptChecks[0].concept === "Variable assignment";
}

function getCleanCodeLines(code) {
    return String(code || "")
        .split('\n')
        .map((raw, index) => {
            const withoutComment = raw.replace(/#.*$/, "");
            return {
                index: index + 1,
                raw,
                indent: withoutComment.match(/^\s*/)?.[0].length || 0,
                text: withoutComment.trim()
            };
        })
        .filter(line => line.text.length > 0);
}

function hasAccumulatorEvidence(code, goalVariables = []) {
    const lines = getCleanCodeLines(code);
    const goalSet = new Set(goalVariables);

    for (const line of lines) {
        const compoundUpdate = line.text.match(/^([A-Za-z_]\w*)\s*(\+=|-=|\*=|\/=)\s*.+$/);
        if (compoundUpdate && (!goalSet.size || goalSet.has(compoundUpdate[1]))) return true;

        const selfUpdate = line.text.match(/^([A-Za-z_]\w*)\s*=\s*(.+)$/);
        if (selfUpdate) {
            const variable = selfUpdate[1];
            const expression = selfUpdate[2];
            if (
                (!goalSet.size || goalSet.has(variable)) &&
                new RegExp(`\\b${escapeRegExp(variable)}\\b`).test(expression) &&
                /[+\-*]/.test(expression)
            ) {
                return true;
            }
        }
    }

    for (let index = 0; index < lines.length; index += 1) {
        const tempUpdate = lines[index].text.match(/^([A-Za-z_]\w*)\s*=\s*([A-Za-z_]\w*)\s*\+\s*.+$/)
            || lines[index].text.match(/^([A-Za-z_]\w*)\s*=\s*.+\+\s*([A-Za-z_]\w*)$/);
        if (!tempUpdate) continue;

        const tempName = tempUpdate[1];
        const baseName = tempUpdate[2];
        if (goalSet.size && !goalSet.has(baseName)) continue;

        const nearbyLines = lines.slice(index + 1, index + 5);
        if (nearbyLines.some(line => new RegExp(`^${escapeRegExp(baseName)}\\s*=\\s*${escapeRegExp(tempName)}$`).test(line.text))) {
            return true;
        }
    }

    return false;
}

function getDirectAnswerShortcutCriteria(lesson, code) {
    if (isDirectAssignmentPractice(lesson)) return [];

    const lines = getCleanCodeLines(code);
    return getVariableGoalChecks(lesson)
        .map(check => {
            const expected = normalizeValue(check.expected);
            const literalPattern = getPythonLiteralPattern(expected);
            const shortcutLine = lines.find(line => {
                if (line.indent !== 0) return false;
                const pattern = new RegExp(`^${escapeRegExp(check.variable)}\\s*=\\s*${literalPattern}$`);
                return pattern.test(line.text);
            });

            if (!shortcutLine) return null;

            return {
                type: "antiShortcut",
                passed: false,
                label: `Avoid shortcut answers: line ${shortcutLine.index} directly sets ${check.variable} to ${expected}.`,
                fix: `Delete the direct final-answer line "${shortcutLine.text}". The program must produce ${check.variable} = ${expected} through the required process.`
            };
        })
        .filter(Boolean);
}

function getPythonLiteralPattern(expected) {
    if (/^-?\d+(\.\d+)?$/.test(expected) || /^(True|False|None)$/.test(expected)) {
        return escapeRegExp(expected);
    }
    return `["']${escapeRegExp(expected)}["']`;
}

function getFinalVariables(steps) {
    if (!steps.length) return {};
    const last = steps[steps.length - 1];
    return last.afterVariables || last.variables || {};
}

function getFinalStdout(steps) {
    if (!steps.length) return "";
    return String(steps[steps.length - 1].stdout || "");
}

function getConceptCoverage(steps) {
    return new Set(steps.flatMap(step => step.concepts || []));
}

function renderLessonStatus(result) {
    if (!result) {
        lessonStatus.innerHTML = `<div class="lesson-status muted">Run the program to check this task against the trace.</div>`;
        return;
    }

    const statusClass = result.passed ? "passed" : "failed";
    const heading = result.passed ? "Task goal met" : "Task goal not met yet";
    lessonStatus.innerHTML = `
        <div class="lesson-status ${statusClass}">
            <strong>${heading}</strong>
            ${result.criteria.map(item => `<div>${item.passed ? "[ok]" : "[fix]"} ${escapeHtml(item.label)}</div>`).join('')}
        </div>
    `;
}

function renderTeacherInsights() {
    if (!teacherInsights) return;

    const wrongAttempts = predictionAttempts.filter(item => !item.correct);
    const failedCriteria = lastLessonResult?.criteria?.filter(item => !item.passed) || [];
    const totalPredictions = predictionAttempts.length;
    const correctPredictions = predictionAttempts.filter(item => item.correct).length;
    const trainedTasks = new Set(exerciseTrainingRecords.map(item => `${item.topicId}:${item.taskId}`)).size;

    if (!wrongAttempts.length && !failedCriteria.length) {
        teacherInsights.innerHTML = `
            <div class="teacher-empty">
                No misunderstanding signal yet. Trained tasks: ${trainedTasks}. Predictions: ${correctPredictions}/${totalPredictions} correct.
            </div>
        `;
        return;
    }

    const wrongHtml = wrongAttempts.map(item => {
        const expectedText = item.answerShown ? item.expected : "hidden until answer is shown";
        return `
        <div class="teacher-insight">
            <strong>Step ${escapeHtml(item.stepNumber)} / Line ${escapeHtml(item.line)}</strong>
            <span>${escapeHtml(item.variable)} guessed "${escapeHtml(item.guess)}", expected "${escapeHtml(expectedText)}".</span>
            <small>${escapeHtml((item.concepts || []).join(", ") || "No concept tag")}</small>
        </div>
    `;
    }).join('');

    const failedHtml = failedCriteria.map(item => `
        <div class="teacher-insight">
            <strong>Goal gap</strong>
            <span>${escapeHtml(item.label)}</span>
        </div>
    `).join('');

    teacherInsights.innerHTML = wrongHtml + failedHtml;
}

function exportTeacherReport() {
    downloadJson("ssp-student-activity-report.json", {
        exportedAt: new Date().toISOString(),
        operationTimeline: studentActionLog.map((item, index) => ({
            order: index + 1,
            time: item.timestamp,
            actionType: item.actionType,
            label: item.label,
            topicTitle: item.topicTitle,
            taskTitle: item.taskTitle,
            contentMode: item.contentMode,
            stepIndex: item.stepIndex,
            result: item.result || "",
            details: item
        })),
        trainedExerciseTable: exerciseTrainingRecords.map((item, index) => ({
            order: index + 1,
            time: item.timestamp,
            topicId: item.topicId,
            topicTitle: item.topicTitle,
            taskId: item.taskId,
            taskTitle: item.taskTitle,
            focusConcept: item.focusConcept,
            traceSteps: item.traceSteps,
            goalPassed: item.goalPassed,
            criteriaSummary: item.criteria.map(check => `${check.passed ? "pass" : "fix"}: ${check.label}`).join(" | ")
        })),
        predictionResultTable: predictionAttempts.map((item, index) => ({
            order: index + 1,
            time: item.timestamp,
            topicTitle: item.topicTitle,
            taskTitle: item.taskTitle,
            contentMode: item.contentMode,
            stepNumber: item.stepNumber,
            line: item.line,
            variable: item.variable,
            guess: item.guess,
            expectedAnswer: item.expected,
            result: item.correct ? "correct" : "wrong",
            attemptNumber: item.attemptNumber,
            answerShownToStudent: item.answerShown,
            concepts: (item.concepts || []).join(", ")
        }))
    });
}

function togglePresentationMode() {
    setPresentationMode(!presentationMode);
}

function setPresentationMode(enabled) {
    presentationMode = enabled;
    document.body.classList.toggle("presentation-mode", presentationMode);
    btnPresentationMode.textContent = presentationMode ? "Exit Focus" : "Focus Mode";
}

function downloadJson(filename, data) {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
}

function maybeStartGuide() {
    if (localStorage.getItem(GUIDE_KEY) === "true") return;
    startGuide(false);
}

function startGuide(force = false) {
    if (force) {
        localStorage.removeItem(GUIDE_KEY);
    }

    if (!force && localStorage.getItem(GUIDE_KEY) === "true") return;
    guideIndex = 0;
    guideOverlay.classList.add("visible");
    renderGuideStep();
}

function renderGuideStep() {
    const step = GUIDE_STEPS[guideIndex];
    document.querySelectorAll(".guide-focus").forEach(element => element.classList.remove("guide-focus"));

    guideTitle.textContent = step.title;
    guideBody.textContent = step.body;
    guideStep.textContent = `${guideIndex + 1} / ${GUIDE_STEPS.length}`;
    btnGuidePrev.disabled = guideIndex === 0;
    btnGuideNext.textContent = guideIndex === GUIDE_STEPS.length - 1 ? "Finish" : "Next";

    const focusTarget = document.querySelector(step.focus);
    if (focusTarget) {
        focusTarget.classList.add("guide-focus");
        focusTarget.scrollIntoView({ block: "center", inline: "nearest", behavior: "smooth" });
    }

    window.setTimeout(positionGuideCard, 260);
}

function advanceGuide() {
    if (guideIndex >= GUIDE_STEPS.length - 1) {
        completeGuide();
        return;
    }

    guideIndex++;
    renderGuideStep();
}

function previousGuide() {
    if (guideIndex === 0) return;
    guideIndex--;
    renderGuideStep();
}

function positionGuideCard() {
    if (!guideOverlay.classList.contains("visible")) return;

    const step = GUIDE_STEPS[guideIndex];
    const focusTarget = document.querySelector(step.focus);
    const cardRect = guideCard.getBoundingClientRect();
    const margin = 16;

    if (!focusTarget) {
        guideCard.style.left = `${Math.max(margin, (window.innerWidth - cardRect.width) / 2)}px`;
        guideCard.style.top = `${Math.max(margin, (window.innerHeight - cardRect.height) / 2)}px`;
        return;
    }

    const targetRect = focusTarget.getBoundingClientRect();
    const preferred = step.placement || "right";
    const placements = [preferred, "right", "left", "bottom", "top"]
        .filter((placement, index, list) => list.indexOf(placement) === index);

    const candidates = placements.map(placement => {
        let left = targetRect.right + margin;
        let top = targetRect.top + (targetRect.height - cardRect.height) / 2;

        if (placement === "left") {
            left = targetRect.left - cardRect.width - margin;
        } else if (placement === "top") {
            left = targetRect.left + (targetRect.width - cardRect.width) / 2;
            top = targetRect.top - cardRect.height - margin;
        } else if (placement === "bottom") {
            left = targetRect.left + (targetRect.width - cardRect.width) / 2;
            top = targetRect.bottom + margin;
        }

        left = clamp(left, margin, window.innerWidth - cardRect.width - margin);
        top = clamp(top, margin, window.innerHeight - cardRect.height - margin);

        const candidateRect = {
            left,
            top,
            right: left + cardRect.width,
            bottom: top + cardRect.height
        };
        const overlapPenalty = rectsOverlap(candidateRect, targetRect, 10) ? -100000 : 0;
        const distance = distanceBetweenRects(candidateRect, targetRect);
        const preferredBonus = placement === preferred ? 1000 : 0;

        return { left, top, score: overlapPenalty + distance + preferredBonus };
    });

    const best = candidates.sort((a, b) => b.score - a.score)[0];
    guideCard.style.left = `${best.left}px`;
    guideCard.style.top = `${best.top}px`;
}

function clamp(value, min, max) {
    if (max < min) return min;
    return Math.min(Math.max(value, min), max);
}

function rectsOverlap(a, b, padding = 0) {
    return !(
        a.right + padding <= b.left ||
        a.left - padding >= b.right ||
        a.bottom + padding <= b.top ||
        a.top - padding >= b.bottom
    );
}

function distanceBetweenRects(a, b) {
    const ax = (a.left + a.right) / 2;
    const ay = (a.top + a.bottom) / 2;
    const bx = (b.left + b.right) / 2;
    const by = (b.top + b.bottom) / 2;
    return Math.hypot(ax - bx, ay - by);
}

function completeGuide() {
    localStorage.setItem(GUIDE_KEY, "true");
    guideOverlay.classList.remove("visible");
    document.querySelectorAll(".guide-focus").forEach(element => element.classList.remove("guide-focus"));
}

function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    return `${(bigint >> 16) & 255}, ${(bigint >> 8) & 255}, ${bigint & 255}`;
}

populateModeSelect();
populateLessonSelect();
setActiveLesson(activeLessonId, false);
syncEditorRendering();
renderConceptTags([]);
resetPredictionPanel();
renderLessonStatus(null);
renderTeacherInsights();
renderDashboard();
renderInitialConsole();
updateRunAvailability();
maybeStartGuide();
