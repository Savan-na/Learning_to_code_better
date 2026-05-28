window.MVP_EXAM_BANK = {
  "items": [
    {
      "id": "semester-1-examinations-2025-csse1001-q1",
      "source": "Semester 1 Examinations 2025",
      "pdfFile": "Semester_1_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 1,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What is stored in x after only the following is\nevaluated by Python?\n1 x = (1, 2, (3,)) + (4, (5))",
      "options": [
        {
          "label": "A",
          "text": "(1, 2, 3, 4, 5)"
        },
        {
          "label": "B",
          "text": "(1, 2, (3,), 4, 5)"
        },
        {
          "label": "C",
          "text": "(1, 2, (3,), (4, (5)))"
        },
        {
          "label": "D",
          "text": "(1, 2, (3, 4, 5))"
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-1-examinations-2025-csse1001-q2",
      "source": "Semester 1 Examinations 2025",
      "pdfFile": "Semester_1_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 2,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "Suppose a user has typed something at this prompt...\n1 value = input(\"Enter one of: 1, 2, 3, or 4 \")\nWhich of the following statements is True only when the user has typed exactly the string 1,\n2, 3, or 4.",
      "options": [
        {
          "label": "A",
          "text": "value == \"1\" or \"2\" or \"3\" or \"4\""
        },
        {
          "label": "B",
          "text": "value in (1, 2, 3, 4)"
        },
        {
          "label": "C",
          "text": "value in \"1234\""
        },
        {
          "label": "D",
          "text": "\"0\" < value < \"5\""
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-1-examinations-2025-csse1001-q3",
      "source": "Semester 1 Examinations 2025",
      "pdfFile": "Semester_1_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 3,
      "category": "loops",
      "type": "trace_choice",
      "prompt": "What is the value of x when only the following\nis evaluated by Python.\n1 for k in range(3):\n2 x = k\n3 x += k",
      "options": [
        {
          "label": "A",
          "text": "3"
        },
        {
          "label": "B",
          "text": "4"
        },
        {
          "label": "C",
          "text": "5"
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "loop",
        "condition"
      ]
    },
    {
      "id": "semester-1-examinations-2025-csse1001-q4",
      "source": "Semester 1 Examinations 2025",
      "pdfFile": "Semester_1_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 4,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "After starting up the Python interpreter, the following\ncode (and only the following code) is entered.\n1 if True or ans:\n2 ans = 0\n3 else:\n4 ans = 1\nWhat error (if any) will the code produce.",
      "options": [
        {
          "label": "A",
          "text": "IndexError"
        },
        {
          "label": "B",
          "text": "NameError"
        },
        {
          "label": "C",
          "text": "SyntaxError"
        },
        {
          "label": "D",
          "text": "TypeError"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "index"
      ]
    },
    {
      "id": "semester-1-examinations-2025-csse1001-q5",
      "source": "Semester 1 Examinations 2025",
      "pdfFile": "Semester_1_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 5,
      "category": "oop",
      "type": "code_choice",
      "prompt": "What is the value of x after only the following evaluated?\n1 x = \"drake drake\".replace(\"drake\", \"sucks\", count=1)\ngiven that\n1 replace(self, old, new, /, count=-1) unbound builtins.str method\n2 Return a copy with all occurrences of substring old replaced by new.\n3\n4 count\n5 Maximum number of occurrences to replace.\n6 -1 (the default value) means replace all occurrences.\n7\n8 If the optional argument count is given, only the first count occurrences are\n9 replaced.",
      "options": [
        {
          "label": "A",
          "text": "\"drake drake\""
        },
        {
          "label": "B",
          "text": "\"sucks drake\""
        },
        {
          "label": "C",
          "text": "\"drake sucks\""
        },
        {
          "label": "D",
          "text": "\"sucks sucks\""
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "method"
      ]
    },
    {
      "id": "semester-1-examinations-2025-csse1001-q6",
      "source": "Semester 1 Examinations 2025",
      "pdfFile": "Semester_1_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 6,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "Which of the following is not a valid reason to use super() in Python?",
      "options": [
        {
          "label": "A",
          "text": "To access overridden methods."
        },
        {
          "label": "B",
          "text": "To avoid explicit base class names."
        },
        {
          "label": "C",
          "text": "To ensure cooperative multiple inheritance."
        },
        {
          "label": "D",
          "text": "To call a method in a sibling class."
        },
        {
          "label": "E",
          "text": "To simplify constructor chaining."
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "method"
      ]
    },
    {
      "id": "semester-1-examinations-2025-csse1001-q7",
      "source": "Semester 1 Examinations 2025",
      "pdfFile": "Semester_1_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 7,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "Suppose that xs = \"Bears\". What string slice\nreverses this string to \"sraeB\"?",
      "options": [
        {
          "label": "A",
          "text": "xs[0:len(xs):-1]"
        },
        {
          "label": "B",
          "text": "xs[len(xs):0:-1]"
        },
        {
          "label": "C",
          "text": "xs[::-1]"
        },
        {
          "label": "D",
          "text": "xs[-1::]"
        },
        {
          "label": "E",
          "text": "More than one of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "slice"
      ]
    },
    {
      "id": "semester-1-examinations-2025-csse1001-q8",
      "source": "Semester 1 Examinations 2025",
      "pdfFile": "Semester_1_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 8,
      "category": "variables",
      "type": "multiple_choice",
      "prompt": "What code block is equivalent to the follow-\ning?\n1 if a > b and not d >= b:\n2 if a > d:\n3 x = 0\n4 else:\n5 x = 1",
      "options": [
        {
          "label": "A",
          "text": "if a > b and not d <= b:\nx = 0\nelse:\nx = 1"
        },
        {
          "label": "B",
          "text": "if a > b and not d <= b:\nx = 0"
        },
        {
          "label": "C",
          "text": "if a > b:\nx = 0\nelif d <= b:\nx = 1"
        },
        {
          "label": "D",
          "text": "if a > b and not d <= b and a > d:\nx = 0\nelse:\nx = 1"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "value",
        "expression"
      ]
    },
    {
      "id": "semester-1-examinations-2025-csse1001-q9",
      "source": "Semester 1 Examinations 2025",
      "pdfFile": "Semester_1_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 9,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "What can you deduce about the name TAY_TAY\nsupposing that the PEP8 standard has been fol-\nlowed?\nTAY_TAY is . . .",
      "options": [
        {
          "label": "A",
          "text": "a class"
        },
        {
          "label": "B",
          "text": "a local variable"
        },
        {
          "label": "C",
          "text": "a private variable"
        },
        {
          "label": "D",
          "text": "a constant"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "class"
      ]
    },
    {
      "id": "semester-1-examinations-2025-csse1001-q10",
      "source": "Semester 1 Examinations 2025",
      "pdfFile": "Semester_1_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 10,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "What statement is false about programming in Python?",
      "options": [
        {
          "label": "A",
          "text": "We do not check preconditions because it is the user’s fault for breaking them."
        },
        {
          "label": "B",
          "text": "The value of global variables can be changed from inside functions."
        },
        {
          "label": "C",
          "text": "Lists can be keys in dictionaries despite being mutable."
        },
        {
          "label": "D",
          "text": "Every for-loop can be written with a while-loop instead."
        },
        {
          "label": "E",
          "text": "Every if-then-else statement can be written with only if-statements."
        }
      ],
      "answer": null,
      "keywords": [
        "function"
      ]
    },
    {
      "id": "semester-1-examinations-2025-csse1001-q11",
      "source": "Semester 1 Examinations 2025",
      "pdfFile": "Semester_1_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 11,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "Suppose the following assignment has been\nmade.\n1 xs = [0, 1, 2, 3]\nWhich option causes an IndexError to be\nthrown?",
      "options": [
        {
          "label": "A",
          "text": "xs[-len(xs)]"
        },
        {
          "label": "B",
          "text": "xs[1-len(xs)]"
        },
        {
          "label": "C",
          "text": "xs[-1-len(xs)]"
        },
        {
          "label": "D",
          "text": "xs[len(xs)-1]"
        },
        {
          "label": "E",
          "text": "More than one of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "index"
      ]
    },
    {
      "id": "semester-1-examinations-2025-csse1001-q12",
      "source": "Semester 1 Examinations 2025",
      "pdfFile": "Semester_1_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 12,
      "category": "oop",
      "type": "trace_choice",
      "prompt": "What is stored in x after only the following is\nevaluated by Python.\n1 class Counter:\n2 count = 0\n3 def __init__(self):\n4 Counter.count += 1\n5\n6 a = Counter()\n7 b = Counter()\n8 b.count += 1\n9 x = Counter.count, b.count",
      "options": [
        {
          "label": "A",
          "text": "2,2"
        },
        {
          "label": "B",
          "text": "3,3"
        },
        {
          "label": "C",
          "text": "2,3"
        },
        {
          "label": "D",
          "text": "2,1"
        },
        {
          "label": "E",
          "text": "3,1"
        }
      ],
      "answer": null,
      "keywords": [
        "class"
      ]
    },
    {
      "id": "semester-1-examinations-2025-csse1001-q13",
      "source": "Semester 1 Examinations 2025",
      "pdfFile": "Semester_1_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 13,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What is stored in ys after only the following is\nevaluated by Python.\n1 xs = (0,) + (2,)\n2 ys = xs\n3 xs = (3,)\n4 ys[0] = 1",
      "options": [
        {
          "label": "A",
          "text": "(1,)"
        },
        {
          "label": "B",
          "text": "(0, 2)"
        },
        {
          "label": "C",
          "text": "(0, 2, 3)"
        },
        {
          "label": "D",
          "text": "(1, 2, 3)"
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-1-examinations-2025-csse1001-q14",
      "source": "Semester 1 Examinations 2025",
      "pdfFile": "Semester_1_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 14,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "Consider the following function.\n1 def spam(k: int) -> bool:\n2 x = False\n3 while k > 0 or x:\n4 x = k > 905\n5 k -= 1\n6 return bool(k)\nWhich option bests describes the behaviour of\nspam when invoked properly?",
      "options": [
        {
          "label": "A",
          "text": "True only when k < 0."
        },
        {
          "label": "B",
          "text": "False only when k >= 0."
        },
        {
          "label": "C",
          "text": "True only when k > 905."
        },
        {
          "label": "D",
          "text": "always True."
        },
        {
          "label": "E",
          "text": "always False."
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-1-examinations-2025-csse1001-q15",
      "source": "Semester 1 Examinations 2025",
      "pdfFile": "Semester_1_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 15,
      "category": "oop",
      "type": "trace_choice",
      "prompt": "The help for dict.get is as follows.\nget(self, key, default=None, /) unbound builtins.dict method\nReturn the value for key if key is in the dictionary, else default.\nGiven this, what is the value of ys after the following is evaluated?\n1 d = {'YYZ': {1984: 24.1, 1985: 24.2},\n2 'YVR': {1983: 22.1, 1984: 22.6, 1985: 22.8}}\n3 ys = d.get('YYZ', {}).get(1983)",
      "options": [
        {
          "label": "A",
          "text": "None"
        },
        {
          "label": "B",
          "text": "{}"
        },
        {
          "label": "C",
          "text": "{1984: 24.1, 1985: 24.2}"
        },
        {
          "label": "D",
          "text": "[24.1, 22.8]"
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "method"
      ]
    },
    {
      "id": "semester-1-examinations-2025-csse1001-q16",
      "source": "Semester 1 Examinations 2025",
      "pdfFile": "Semester_1_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 16,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "How many of the following statements evaluate toTrue?\n1 bool(True and \"False\")\n2 bool(False or [False])\n3 bool(True > False)\n4 bool(False or not ())",
      "options": [
        {
          "label": "A",
          "text": "0"
        },
        {
          "label": "B",
          "text": "1"
        },
        {
          "label": "C",
          "text": "2"
        },
        {
          "label": "D",
          "text": "3"
        },
        {
          "label": "E",
          "text": "4"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-1-examinations-2025-csse1001-q17",
      "source": "Semester 1 Examinations 2025",
      "pdfFile": "Semester_1_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 17,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "What is the purpose of \"setter\" methods as they pertain to objects?",
      "options": [
        {
          "label": "A",
          "text": "They are used to change the values of private variables."
        },
        {
          "label": "B",
          "text": "They are used to retrieve the values of private variables."
        },
        {
          "label": "C",
          "text": "They allow private variables to be manipulated by multiple instances of the same class."
        },
        {
          "label": "D",
          "text": "They set public variables to private, and vice-versa."
        },
        {
          "label": "E",
          "text": "They are used to write data to files."
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "object",
        "method"
      ]
    },
    {
      "id": "semester-1-examinations-2025-csse1001-q18",
      "source": "Semester 1 Examinations 2025",
      "pdfFile": "Semester_1_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 18,
      "category": "oop",
      "type": "trace_choice",
      "prompt": "What is stored in z after only the following is\nevaluated by Python.\n1 class X():\n2 def foo(self):\n3 return \"Hello\"\n4\n5 class Y(X):\n6 def foo(self):\n7 return f\"{super().foo()}, there\"\n8\n9 y = Y()\n10 z = y.foo()",
      "options": [
        {
          "label": "A",
          "text": "\"Hello\""
        },
        {
          "label": "B",
          "text": "\"there\""
        },
        {
          "label": "C",
          "text": "\"Hello, there\""
        },
        {
          "label": "D",
          "text": "\"Hello Hello, there\""
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "class"
      ]
    },
    {
      "id": "semester-1-examinations-2025-csse1001-q19",
      "source": "Semester 1 Examinations 2025",
      "pdfFile": "Semester_1_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 19,
      "category": "variables",
      "type": "trace_choice",
      "prompt": "What is stored in x after only the following is\nentered into Python?\n1 x = 3 * 4 ** 2 // - 8 % 5",
      "options": [
        {
          "label": "A",
          "text": "0.75"
        },
        {
          "label": "B",
          "text": "2"
        },
        {
          "label": "C",
          "text": "4"
        },
        {
          "label": "D",
          "text": "24"
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "value",
        "expression"
      ]
    },
    {
      "id": "semester-1-examinations-2025-csse1001-q20",
      "source": "Semester 1 Examinations 2025",
      "pdfFile": "Semester_1_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 20,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What is stored in zs when only the following\nis evaluated by Python?\n1 xs = []\n2 ys = xs\n3 zs = [xs, ys]\n4 xs.append(1)\n5 ys.append(2)",
      "options": [
        {
          "label": "A",
          "text": "[[], []]"
        },
        {
          "label": "B",
          "text": "[[1], [2]]"
        },
        {
          "label": "C",
          "text": "[[], [1, 2]]"
        },
        {
          "label": "D",
          "text": "[[1, 2], []]"
        },
        {
          "label": "E",
          "text": "[[1, 2], [1, 2]]"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-1-examinations-2025-csse1001-q21",
      "source": "Semester 1 Examinations 2025",
      "pdfFile": "Semester_1_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 21,
      "category": "loops",
      "type": "trace_choice",
      "prompt": "How many exclamation marks (!) are in output.txt after running (only) the following code?\n1 for k in [1, 2, 3]:\n2 the_file = open(\"output.txt\", 'w')\n3 the_file.write(k * '!')\n4 the_file.close()",
      "options": [
        {
          "label": "A",
          "text": "1"
        },
        {
          "label": "B",
          "text": "3"
        },
        {
          "label": "C",
          "text": "6"
        },
        {
          "label": "D",
          "text": "Impossible to deduce without knowing the initial contents of output.txt."
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "loop",
        "condition"
      ]
    },
    {
      "id": "semester-1-examinations-2025-csse1001-q22",
      "source": "Semester 1 Examinations 2025",
      "pdfFile": "Semester_1_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 22,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "Consider the following function.\n1 def spam(a, b):\n2 for k in a:\n3 if b in k:\n4 return True\n5 return False\nWhich (if any) is a possible type-contract for spam ?",
      "options": [
        {
          "label": "A",
          "text": "def spam(a: int, b: int) -> bool"
        },
        {
          "label": "B",
          "text": "def spam(a: list[int], b: list[int]) -> bool"
        },
        {
          "label": "C",
          "text": "def spam(a: str, b: str) -> bool"
        },
        {
          "label": "D",
          "text": "def spam(a: list[str], b: str) -> bool"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-1-examinations-2025-csse1001-q23",
      "source": "Semester 1 Examinations 2025",
      "pdfFile": "Semester_1_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 23,
      "category": "oop",
      "type": "trace_choice",
      "prompt": "The list method sort does an in-place and as-\ncending sort.\nWhat is stored in xs after the following is exe-\ncuted?\nxs = [1, 3, 2].sort()",
      "options": [
        {
          "label": "A",
          "text": "[1, 3, 2]"
        },
        {
          "label": "B",
          "text": "[1, 2, 3]"
        },
        {
          "label": "C",
          "text": "[3, 2, 1]"
        },
        {
          "label": "D",
          "text": "None"
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "method"
      ]
    },
    {
      "id": "semester-1-examinations-2025-csse1001-q24",
      "source": "Semester 1 Examinations 2025",
      "pdfFile": "Semester_1_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 24,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "Which letters are printed if only the following\nis evaluated by Python.\n1 try:\n2 print(\"A\")\n3 raise ValueError(\"Oops!\")\n4 print(\"B\")\n5 except:\n6 print(\"C\")",
      "options": [
        {
          "label": "A",
          "text": "A"
        },
        {
          "label": "B",
          "text": "A and B"
        },
        {
          "label": "C",
          "text": "A, B, and C."
        },
        {
          "label": "D",
          "text": "A and C."
        },
        {
          "label": "E",
          "text": "None"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-1-examinations-2025-csse1001-q25",
      "source": "Semester 1 Examinations 2025",
      "pdfFile": "Semester_1_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 25,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "What error message is displayed by Python after evaluating only the following code?\n1 def foo(x: int, y: int) -> tuple[int, int]:\n2 \"\"\"\n3 \"\"\"\n4 z = x[0]\n5 x = y\n6 y = z\n7 return (x, y)\n8\n9 foo(\"Drake\", \"Is\" + \"Mid\")",
      "options": [
        {
          "label": "A",
          "text": "TypeError: foo() first positional argument does not have required type"
        },
        {
          "label": "B",
          "text": "TypeError: foo() takes 2 positional arguments but 3 were given"
        },
        {
          "label": "C",
          "text": "TypeError: 'str' object does not support item assignment"
        },
        {
          "label": "D",
          "text": "TypeError: 'int' object does not support item assignment"
        },
        {
          "label": "E",
          "text": "None of the above. This is valid Python code."
        }
      ],
      "answer": null,
      "keywords": [
        "object"
      ]
    },
    {
      "id": "semester-1-examinations-2025-csse1001-q26",
      "source": "Semester 1 Examinations 2025",
      "pdfFile": "Semester_1_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 26,
      "category": "loops",
      "type": "multiple_choice",
      "prompt": "Suppose we have defined the following dictionary mapping letters to numbers.\n1 d = {'a': 1, 'b': -2, 'c': 3, 'd': -4, 'e': 5, 'f': -6}\nWhat list comprehension extracts all keys mapping to positive nonzero values.",
      "options": [
        {
          "label": "A",
          "text": "[k for v in d if d[v] > 0]"
        },
        {
          "label": "B",
          "text": "[v for v in d if d[v] > 0]"
        },
        {
          "label": "C",
          "text": "[v for k in d if d[k] > 0]"
        },
        {
          "label": "D",
          "text": "[d[k] for k in d if d[k] > 0]"
        },
        {
          "label": "E",
          "text": "More than one of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "loop",
        "condition"
      ]
    },
    {
      "id": "semester-1-examinations-2025-csse1001-q27",
      "source": "Semester 1 Examinations 2025",
      "pdfFile": "Semester_1_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 27,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "What kind of relationship does this UML dia-\ngram represent?\nLibrary\n+\nbooks : List<Book>",
      "options": [
        {
          "label": "A",
          "text": "Inheritance"
        },
        {
          "label": "B",
          "text": "Composition"
        },
        {
          "label": "C",
          "text": "Aggregation"
        },
        {
          "label": "D",
          "text": "Association"
        },
        {
          "label": "E",
          "text": "Dependency"
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "object"
      ]
    },
    {
      "id": "semester-1-examinations-2025-csse1001-q28",
      "source": "Semester 1 Examinations 2025",
      "pdfFile": "Semester_1_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 28,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "What statement about testing in Python is incorrect?",
      "options": [
        {
          "label": "A",
          "text": "Tests should include “edge cases” like empty list and tuples."
        },
        {
          "label": "B",
          "text": "doctest testing only compares string output and does not compare values."
        },
        {
          "label": "C",
          "text": "Preconditions should be verified in testing."
        },
        {
          "label": "D",
          "text": "Passing all tests does not guarantee that piece of code is correct."
        },
        {
          "label": "E",
          "text": "All the above statements are correct."
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-1-examinations-2025-csse1001-q29",
      "source": "Semester 1 Examinations 2025",
      "pdfFile": "Semester_1_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 29,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "What exception should be used at <ERROR> to complete the function according to its specifi-\ncation?\n1 def foo() -> int:\n2 \"\"\"\n3 Return the number of times the user was prompted. The prompts\n4 terminate once the user types a valid integer.\n5 \"\"\"\n6 ans = 1\n7 while True:\n8 try:\n9 int(input(\"Prompt> \"))\n10 return ans\n11 except <ERROR>:\n12 ans += 1",
      "options": [
        {
          "label": "A",
          "text": "TypeError"
        },
        {
          "label": "B",
          "text": "NameError"
        },
        {
          "label": "C",
          "text": "ValueError"
        },
        {
          "label": "D",
          "text": "InputError"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-1-examinations-2025-csse1001-q30",
      "source": "Semester 1 Examinations 2025",
      "pdfFile": "Semester_1_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 30,
      "category": "oop",
      "type": "trace_choice",
      "prompt": "What is stored in x when only the following is\nevaluated by Python.\n1 x = 10\n2 def update():\n3 x = 20\n4 update()",
      "options": [
        {
          "label": "A",
          "text": "10"
        },
        {
          "label": "B",
          "text": "20"
        },
        {
          "label": "C",
          "text": "None"
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above.\nThe following will be used to match your exam with your name. Please use BLOCK LETTERS and\nwrite as legibly as possible.\nStudent Number\nFamily Name\nGiven Name\nFill in the Blank\nThe next five questions refer to the following class definitions.\n1 class A(object):\n2 def __init__(self, x):\n3 self._x = 2 * x\n4\n5 def foo(self, x):\n6 return self.bar(x) + 2\n7\n8 def bar(self, x):\n9 return x - 1\n10\n11 class B(A):\n12 def bar(self, y):\n13 self._y = y\n14 return self._x + self._y\n15\n16 class C(B):\n17 def __init__(self, x, y):\n18 super().__init__(x)\n19 self._y = y + 2\n20\n21 def foo(self, x):\n22 return self._x + self._y\n23\n24 class D(B):\n25 def __init__(self, x, y):\n26 super().__init__(x)\n27 self._x += y\n28 self._y = y + 2\n29\n30 def foo(self, y) :\n31 return self._y + y\n32\n33 def bar(self, x):\n34 return super().bar(x) - x\n35\n36 a = A(5)\n37 b = B(4)\n38 c = C(3, 2)\n39 d = D(1, 0)\nWrite a single number in the answer box and nothing else."
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "object"
      ]
    },
    {
      "id": "semester-1-examinations-2025-csse1001-q31",
      "source": "Semester 1 Examinations 2025",
      "pdfFile": "Semester_1_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 31,
      "category": "functions",
      "type": "short_answer",
      "prompt": "What does a.foo(0) return?",
      "options": [],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-1-examinations-2025-csse1001-q32",
      "source": "Semester 1 Examinations 2025",
      "pdfFile": "Semester_1_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 32,
      "category": "functions",
      "type": "short_answer",
      "prompt": "What does b.bar(1) return?",
      "options": [],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-1-examinations-2025-csse1001-q33",
      "source": "Semester 1 Examinations 2025",
      "pdfFile": "Semester_1_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 33,
      "category": "functions",
      "type": "short_answer",
      "prompt": "What does c.bar(2) return?",
      "options": [],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-1-examinations-2025-csse1001-q34",
      "source": "Semester 1 Examinations 2025",
      "pdfFile": "Semester_1_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 34,
      "category": "functions",
      "type": "short_answer",
      "prompt": "What does d.foo(3) return?",
      "options": [],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-1-examinations-2025-csse1001-q35",
      "source": "Semester 1 Examinations 2025",
      "pdfFile": "Semester_1_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 35,
      "category": "functions",
      "type": "short_answer",
      "prompt": "What does d.bar(4) return?\nFull Solution",
      "options": [],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-1-examinations-2025-csse1001-q36",
      "source": "Semester 1 Examinations 2025",
      "pdfFile": "Semester_1_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 36,
      "category": "functions",
      "type": "short_answer",
      "prompt": "Implement the following function according to its specification.\n1 def permuter(xs: list[int], y: int) -> list[int]:\n2 \"\"\"\n3 Return a new list with the members of <xs> that are greater than <y> reversed\n4 in the list.\n5\n6 For example:\n7 With xs = [1, 2, 3, 4, 5, 6] and y = 3\n8 [1, 2, 3, 4, 5, 6]\n9 ^ ^ ^ greater than 3\n10 [1, 2, 3, 6, 5, 4]\n11 ^ ^ ^ reversed\n12\n13 With xs = [1, 4, 2, 5, 3, 6] and y = 3\n14 [1, 4, 2, 5, 3, 6]\n15 ^ ^ ^ greater than 3\n16 [1, 6, 2, 5, 3, 4]\n17 ^ ^ ^ reversed\n18\n19 >>> permuter([1, 2, 3, 4, 5, 6], 3)\n20 [1, 2, 3, 6, 5, 4]\n21 >>> permuter([1, 4, 2, 5, 3, 6], 3)\n22 [1, 6, 2, 5, 3, 4]\n23 >>> permuter([5, 1, 4, 0, 3, 2], 1)\n24 [2 , 1, 3, 0, 4, 5]\n25 \"\"\"\nWrite your answer on the next page.\nWrite your answer on the next page.\nWrite your answer on the next page.\nend of examination",
      "options": [],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-one-examinations-2024-csse1001-q1",
      "source": "Semester One Examinations 2024",
      "pdfFile": "Semester_One_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 1,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What is stored in x after only the following is\nentered into Python?\n1 x = (7, 3, (6,)) + (9, (5))",
      "options": [
        {
          "label": "A",
          "text": "(7, 3, 6, 9, 5)"
        },
        {
          "label": "B",
          "text": "(7, 3, (6,), 9, (5))"
        },
        {
          "label": "C",
          "text": "(7, 3, (6,), (9, (5)))"
        },
        {
          "label": "D",
          "text": "(7, 3, (6,) , 9, 5)"
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-one-examinations-2024-csse1001-q2",
      "source": "Semester One Examinations 2024",
      "pdfFile": "Semester_One_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 2,
      "category": "functions",
      "type": "code_choice",
      "prompt": "The following is a recursive function with a partially im-\nplemented base case; it computes the sum of a list of\nnumbers. What should we replace #sub with to\ncomplete this function?\n1 def sum(xs: list[int]) -> int:\n2 \"\"\"\n3 >>> sum([1, 2, 3])\n4 6\n5 \"\"\"\n6 (a, b) = #sub\n7\n8 if len(xs) == a:\n9 return b\n10\n11 return xs[0] + sum(xs[1:])",
      "options": [
        {
          "label": "A",
          "text": "(0, xs[0])"
        },
        {
          "label": "B",
          "text": "(1, xs[0])"
        },
        {
          "label": "C",
          "text": "(0, 1)"
        },
        {
          "label": "D",
          "text": "(0, 0)"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-one-examinations-2024-csse1001-q3",
      "source": "Semester One Examinations 2024",
      "pdfFile": "Semester_One_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 3,
      "category": "functions",
      "type": "trace_choice",
      "prompt": "What is the value of x after the following code\nis executed?\n1 def f(xs: list, x) -> list:\n2 xs.append(x)\n3 return xs\n4\n5 x = [5, 9]\n6 x = f(x, 2) + x",
      "options": [
        {
          "label": "A",
          "text": "[5, 9, 2]"
        },
        {
          "label": "B",
          "text": "[5, 9, 2, 5, 9]"
        },
        {
          "label": "C",
          "text": "[5, 9, 2, 5, 9, 2]"
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-one-examinations-2024-csse1001-q4",
      "source": "Semester One Examinations 2024",
      "pdfFile": "Semester_One_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 4,
      "category": "oop",
      "type": "code_choice",
      "prompt": "What line of code should replace #sub in order\nto generate the window illustrated above?\n1 import tkinter as tk\n2 root = tk.Tk()\n3 #sub\n4 root.mainloop()",
      "options": [
        {
          "label": "A",
          "text": "root.geometry(\"200x400\")"
        },
        {
          "label": "B",
          "text": "root.geometry(\"200 x 400\")"
        },
        {
          "label": "C",
          "text": "root.geometry(\"400x200\")"
        },
        {
          "label": "D",
          "text": "root.geometry(\"400 x 200\")"
        },
        {
          "label": "E",
          "text": "More than one of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "object"
      ]
    },
    {
      "id": "semester-one-examinations-2024-csse1001-q5",
      "source": "Semester One Examinations 2024",
      "pdfFile": "Semester_One_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 5,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What is stored in x after only the following is entered into Python?\n1 d = {'Brown': {'ID': 732, 'Orders': ['chisel', 'spanner']},\n2 'Black': {'ID': 461, 'Orders': ['lathe', 'crowbar']}}\n3 x = d.get('White').get('Orders')",
      "options": [
        {
          "label": "A",
          "text": "['chisel', 'spanner']"
        },
        {
          "label": "B",
          "text": "[]"
        },
        {
          "label": "C",
          "text": "['lathe', 'crowbar']"
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-one-examinations-2024-csse1001-q6",
      "source": "Semester One Examinations 2024",
      "pdfFile": "Semester_One_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 6,
      "category": "collections",
      "type": "code_choice",
      "prompt": "Suppose only the following lines of Python\nhave been executed.\n1 xs = \"champagne problems\"\n2 x = #sub\nWhat should replace #sub so that 'e p' is as-\nsigned to x.",
      "options": [
        {
          "label": "A",
          "text": "xs[8:10]"
        },
        {
          "label": "B",
          "text": "xs[8:11]"
        },
        {
          "label": "C",
          "text": "xs[-10:-8]"
        },
        {
          "label": "D",
          "text": "xs[-10:-7]"
        },
        {
          "label": "E",
          "text": "More than one of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-one-examinations-2024-csse1001-q7",
      "source": "Semester One Examinations 2024",
      "pdfFile": "Semester_One_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 7,
      "category": "functions",
      "type": "trace_choice",
      "prompt": "What is the value of the global variable a after\nthe following code is executed?\n1 def f(x):\n2 a=3\n3 x=x/a\n4 return (a+x) % x\n5\n6 a=9\n7 f(a)",
      "options": [
        {
          "label": "A",
          "text": "0"
        },
        {
          "label": "B",
          "text": "0.0"
        },
        {
          "label": "C",
          "text": "3"
        },
        {
          "label": "D",
          "text": "3.0"
        },
        {
          "label": "E",
          "text": "9"
        }
      ],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-one-examinations-2024-csse1001-q8",
      "source": "Semester One Examinations 2024",
      "pdfFile": "Semester_One_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 8,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "Given the following code:\n1 x = input(\"Prompt: \")\n2 y = input(\"Prompt: \")\n3 print(f\"x - y = {x - y}\")\nIf user types 7 then 3, what is printed?",
      "options": [
        {
          "label": "A",
          "text": "x-y=4"
        },
        {
          "label": "B",
          "text": "x-y=7-3"
        },
        {
          "label": "C",
          "text": "7-3=4"
        },
        {
          "label": "D",
          "text": "x - y = {x - y}"
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-one-examinations-2024-csse1001-q9",
      "source": "Semester One Examinations 2024",
      "pdfFile": "Semester_One_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 9,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What is stored in y after only the following is\nentered into Python?\n1 x = 'two \\t \\t pairs'\n2 y = '\\t'.join(x.split('\\t'))",
      "options": [
        {
          "label": "A",
          "text": "'two \\t pairs'"
        },
        {
          "label": "B",
          "text": "'two \\t \\t pairs'"
        },
        {
          "label": "C",
          "text": "'two\\tpairs'"
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-one-examinations-2024-csse1001-q10",
      "source": "Semester One Examinations 2024",
      "pdfFile": "Semester_One_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 10,
      "category": "oop",
      "type": "code_choice",
      "prompt": "What replaces #sub in the following code to generate the image to its right?\n1 import tkinter as tk\n2\n3 root = tk.Tk()\n4 (s1, s2, s3, s4) = #sub\n5\n6 tk.Label(text=\"alice\").pack(side=s1)\n7 tk.Label(text=\"bob\").pack(side=s2)\n8 tk.Label(text=\"carol\").pack(side=s3)\n9 tk.Label(text=\"dilbert\").pack(side=s4)\n10\n11 root.mainloop()",
      "options": [
        {
          "label": "A",
          "text": "(tk.BOTTOM, tk.RIGHT, tk.TOP, tk.BOTTOM)"
        },
        {
          "label": "B",
          "text": "(tk.BOTTOM, tk.LEFT, tk.RIGHT, tk.TOP)"
        },
        {
          "label": "C",
          "text": "(tk.BOTTOM, tk.RIGHT, tk.LEFT, tk.BOTTOM)"
        },
        {
          "label": "D",
          "text": "(tk.BOTTOM, tk.LEFT, tk.LEFT, tk.LEFT)"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "object"
      ]
    },
    {
      "id": "semester-one-examinations-2024-csse1001-q11",
      "source": "Semester One Examinations 2024",
      "pdfFile": "Semester_One_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 11,
      "category": "loops",
      "type": "trace_choice",
      "prompt": "What is the value of x after the following state-\nments are evaluated?\n1 x=0\n2 for y, z in enumerate([[1], [2]]):\n3 x += 2 * y+z",
      "options": [
        {
          "label": "A",
          "text": "3"
        },
        {
          "label": "B",
          "text": "5"
        },
        {
          "label": "C",
          "text": "7"
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "loop",
        "condition"
      ]
    },
    {
      "id": "semester-one-examinations-2024-csse1001-q12",
      "source": "Semester One Examinations 2024",
      "pdfFile": "Semester_One_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 12,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "Suppose xs is a list. Which expression evaluates to True when xs is empty .",
      "options": [
        {
          "label": "A",
          "text": "bool(not xs)"
        },
        {
          "label": "B",
          "text": "bool(xs)"
        },
        {
          "label": "C",
          "text": "bool(len(xs))"
        },
        {
          "label": "D",
          "text": "bool(xs in [])"
        },
        {
          "label": "E",
          "text": "More than one of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "list"
      ]
    },
    {
      "id": "semester-one-examinations-2024-csse1001-q13",
      "source": "Semester One Examinations 2024",
      "pdfFile": "Semester_One_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 13,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "Suppose we want to define a name for max-\nimum volume that is intended to be private.\nWhich name is most appropriate?",
      "options": [
        {
          "label": "A",
          "text": "__maximum_volume__"
        },
        {
          "label": "B",
          "text": "MaximumVolume"
        },
        {
          "label": "C",
          "text": "_maximum_volume"
        },
        {
          "label": "D",
          "text": "MAXIMUM_VOLUME"
        },
        {
          "label": "E",
          "text": "maximumValue"
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "object"
      ]
    },
    {
      "id": "semester-one-examinations-2024-csse1001-q14",
      "source": "Semester One Examinations 2024",
      "pdfFile": "Semester_One_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 14,
      "category": "loops",
      "type": "trace_choice",
      "prompt": "What is the value of y after only the following has\nbeen evaluated?\n1 z = lambda v, w: v+w\n2 xs = [1,2,3,4]\n3 ys = [3,4,5,6]\n4 y = [z(v,w) for v in xs if v <2 for w in ys]",
      "options": [
        {
          "label": "A",
          "text": "[]"
        },
        {
          "label": "B",
          "text": "[4, 6, 8, 10]"
        },
        {
          "label": "C",
          "text": "[4, 5, 6, 7]"
        },
        {
          "label": "D",
          "text": "[4, 5, 6, 7, 5, 6, 7, 8]"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "loop",
        "condition"
      ]
    },
    {
      "id": "semester-one-examinations-2024-csse1001-q15",
      "source": "Semester One Examinations 2024",
      "pdfFile": "Semester_One_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 15,
      "category": "variables",
      "type": "trace_choice",
      "prompt": "What is the value of x after only the following\ncode is executed?\n1 x = 5.1 + 24.2//6 ** 2",
      "options": [
        {
          "label": "A",
          "text": "5"
        },
        {
          "label": "B",
          "text": "5.1"
        },
        {
          "label": "C",
          "text": "x"
        },
        {
          "label": "D",
          "text": "21"
        },
        {
          "label": "E",
          "text": "21.1"
        }
      ],
      "answer": null,
      "keywords": [
        "value"
      ]
    },
    {
      "id": "semester-one-examinations-2024-csse1001-q16",
      "source": "Semester One Examinations 2024",
      "pdfFile": "Semester_One_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 16,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What is the value of x after only the following\ncode is executed?\n1 x = 1 // 4 * 'drake'",
      "options": [
        {
          "label": "A",
          "text": "'' (the empty string)"
        },
        {
          "label": "B",
          "text": "'' (a space)"
        },
        {
          "label": "C",
          "text": "'d'"
        },
        {
          "label": "D",
          "text": "'drake'"
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-one-examinations-2024-csse1001-q17",
      "source": "Semester One Examinations 2024",
      "pdfFile": "Semester_One_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 17,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "After starting up the Python interpreter, the\nfollowing code (and only the following code)\nis entered.\n1 if [] and y:\n2 y=0\n3 else:\n4 y=1\nWhat error, if any , does this code raise?",
      "options": [
        {
          "label": "A",
          "text": "NameError"
        },
        {
          "label": "B",
          "text": "IndexError"
        },
        {
          "label": "C",
          "text": "TypeError"
        },
        {
          "label": "D",
          "text": "SyntaxError"
        },
        {
          "label": "E",
          "text": "This is valid Python code."
        }
      ],
      "answer": null,
      "keywords": [
        "index"
      ]
    },
    {
      "id": "semester-one-examinations-2024-csse1001-q18",
      "source": "Semester One Examinations 2024",
      "pdfFile": "Semester_One_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 18,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "Consider the following function.\n1 def foo(xs: list[int], ys: dict) -> bool:\n2 \"\"\" Precondition: len(xs) > 0\n3 \"\"\"\n4 for x in xs:\n5 if not x in ys:\n6 return True\n7 return False\nWhat best describes the behaviour of foo provided it is invoked with all preconditions satis-\nfied?",
      "options": [
        {
          "label": "A",
          "text": "foo always returns True."
        },
        {
          "label": "B",
          "text": "foo always returns False."
        },
        {
          "label": "C",
          "text": "foo returns False only when every element of xs is a key of ys."
        },
        {
          "label": "D",
          "text": "foo returns True only when there is an element of xs that is a value of ys."
        },
        {
          "label": "E",
          "text": "foo always throws an Error."
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-one-examinations-2024-csse1001-q19",
      "source": "Semester One Examinations 2024",
      "pdfFile": "Semester_One_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 19,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "Which of the following statements is true?",
      "options": [
        {
          "label": "A",
          "text": "Lists are mutable but dictionaries are immutable."
        },
        {
          "label": "B",
          "text": "User defined classes are by default immutable."
        },
        {
          "label": "C",
          "text": "Values and keys in dictionaries must both be immutable."
        },
        {
          "label": "D",
          "text": "Strings, integers, floats, booleans and lists are all immutable."
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "list"
      ]
    },
    {
      "id": "semester-one-examinations-2024-csse1001-q20",
      "source": "Semester One Examinations 2024",
      "pdfFile": "Semester_One_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 20,
      "category": "loops",
      "type": "trace_choice",
      "prompt": "What is the value of z after only the following code has been executed.\n1 xss = ['basket', 'bird', 'balloon']\n2 ys = ['ball']\n3 z = [ys[0] in xs and ys[1] in xs for xs in xss]",
      "options": [
        {
          "label": "A",
          "text": "[True]"
        },
        {
          "label": "B",
          "text": "[False]"
        },
        {
          "label": "C",
          "text": "[True, False, True]"
        },
        {
          "label": "D",
          "text": "[True, True, True]"
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "loop",
        "condition"
      ]
    },
    {
      "id": "semester-one-examinations-2024-csse1001-q21",
      "source": "Semester One Examinations 2024",
      "pdfFile": "Semester_One_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 21,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What is the value of y after the following state-\nments are evaluated?\n1 x = [0, [1, 2], 3]\n2 y = x[-2, 1]",
      "options": [
        {
          "label": "A",
          "text": "0"
        },
        {
          "label": "B",
          "text": "1"
        },
        {
          "label": "C",
          "text": "2"
        },
        {
          "label": "D",
          "text": "3"
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-one-examinations-2024-csse1001-q22",
      "source": "Semester One Examinations 2024",
      "pdfFile": "Semester_One_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 22,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "Consider the following function.\n1 def foo(xs: str) -> None:\n2 for x in xs:\n3 with open('file.txt', 'w') as f:\n4 f.write(x)\n5 return\nAfter calling foo without generating an error,\nwhich option can be the contents of file.txt?",
      "options": [
        {
          "label": "A",
          "text": "aaaa"
        },
        {
          "label": "B",
          "text": "wawa"
        },
        {
          "label": "C",
          "text": "awwaww"
        },
        {
          "label": "D",
          "text": "All of them."
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return",
        "call"
      ]
    },
    {
      "id": "semester-one-examinations-2024-csse1001-q23",
      "source": "Semester One Examinations 2024",
      "pdfFile": "Semester_One_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 23,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "Consider the docstring, type contract, and us-\nage examples of the following function.\n1 def lcs(xs: str, ys: str) -> str:\n2 \"\"\" Return the longest substring\n3 that both and xs and ys have in\n4 common.\n5 >>> lcs(\"\", \"potato\")\n6 ''\n7 >>> lcs(\"tomato\", \"potato\")\n8 'ato'\n9 >>> lcs(\"ababa\", \"cbaba\")\n10 'baba'\n11 \"\"\"\nWhat would you expect lcs(\" \", \"eras\") to\nreturn?",
      "options": [
        {
          "label": "A",
          "text": "\"\" (empty string)"
        },
        {
          "label": "B",
          "text": "\"\" (single space)"
        },
        {
          "label": "C",
          "text": "\"eras\""
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-one-examinations-2024-csse1001-q24",
      "source": "Semester One Examinations 2024",
      "pdfFile": "Semester_One_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 24,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "What error (if any) will the following code pro-\nduce when executed by Python?\n1 def foo(x: int, xs: list[int]) -> bool:\n2 return x in xs\n3\n4 foo('', ' ')",
      "options": [
        {
          "label": "A",
          "text": "NameError"
        },
        {
          "label": "B",
          "text": "IndexError"
        },
        {
          "label": "C",
          "text": "TypeError"
        },
        {
          "label": "D",
          "text": "SyntaxError"
        },
        {
          "label": "E",
          "text": "This is valid Python code."
        }
      ],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-one-examinations-2024-csse1001-q25",
      "source": "Semester One Examinations 2024",
      "pdfFile": "Semester_One_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 25,
      "category": "functions",
      "type": "code_choice",
      "prompt": "What is the value of x after only the following has been evaluated?\n1 x = \"goodbye\".replace(\"ood\", \"ello\")\nGiven that\n2 replace(self, old, new, count=-1, /)\n3 Return a copy with all occurrences of substring old replaced by new.\n4\n5 count\n6 Maximum number of occurrences to replace.\n7 -1 (the default value) means replace all occurrences.\n8\n9 If the optional argument count is given, only the first count occurrences are\n10 replaced.",
      "options": [
        {
          "label": "A",
          "text": "\"gellobye\""
        },
        {
          "label": "B",
          "text": "\"goodbye\""
        },
        {
          "label": "C",
          "text": "\"hellobye\""
        },
        {
          "label": "D",
          "text": "None"
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-one-examinations-2024-csse1001-q26",
      "source": "Semester One Examinations 2024",
      "pdfFile": "Semester_One_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 26,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "What exception should be used at <Error> to complete the function?\n1 def get _value(dictionary: dict, key: str) -> int:\n2 \"\"\"\n3 Retrieves the value associated with the provided key in the dictionary.\n4 Continues prompting the user until a valid key is entered.\n5 \"\"\"\n6\n7 try:\n8 return dictionary[key]\n9 except <Error>:\n10 return get _value(dictionary, input(\"Enter another key: \"))",
      "options": [
        {
          "label": "A",
          "text": "NameError"
        },
        {
          "label": "B",
          "text": "IndexError"
        },
        {
          "label": "C",
          "text": "TypeError"
        },
        {
          "label": "D",
          "text": "DictError"
        },
        {
          "label": "E",
          "text": "KeyError"
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-one-examinations-2024-csse1001-q27",
      "source": "Semester One Examinations 2024",
      "pdfFile": "Semester_One_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 27,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "For the following function:\n1 def r(x: int, y: int) -> int:\n2 if x == 0:\n3 return x * y\n4 return r(x-5, y) + y\nWhat will r(4, 2) return?",
      "options": [
        {
          "label": "A",
          "text": "0"
        },
        {
          "label": "B",
          "text": "4"
        },
        {
          "label": "C",
          "text": "8"
        },
        {
          "label": "D",
          "text": "10"
        },
        {
          "label": "E",
          "text": "RecursionError"
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-one-examinations-2024-csse1001-q28",
      "source": "Semester One Examinations 2024",
      "pdfFile": "Semester_One_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 28,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What does z get assigned assuming 23 is the\ntwo digit number entered:\n1 x = input(Input two digit number: \")\n2 y = int(x)\n3 z = y[0]",
      "options": [
        {
          "label": "A",
          "text": "2"
        },
        {
          "label": "B",
          "text": "23"
        },
        {
          "label": "C",
          "text": "None"
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-one-examinations-2024-csse1001-q29",
      "source": "Semester One Examinations 2024",
      "pdfFile": "Semester_One_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 29,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What is the value of z after running the follow-\ning code?\n1 xs = ['a', (3,4), {1: 'b'}]\n2 ys = xs.copy()\n3 ys[2] = {2: 'c'}\n4 z = xs[2][1]",
      "options": [
        {
          "label": "A",
          "text": "'a'"
        },
        {
          "label": "B",
          "text": "'b'"
        },
        {
          "label": "C",
          "text": "'c'"
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-one-examinations-2024-csse1001-q30",
      "source": "Semester One Examinations 2024",
      "pdfFile": "Semester_One_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 30,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "What is the purpose of \"setter\" methods as they pertain to objects?",
      "options": [
        {
          "label": "A",
          "text": "They are used to change the value of a private variable."
        },
        {
          "label": "B",
          "text": "They are used to retrieve the value of a private variable."
        },
        {
          "label": "C",
          "text": "They allow private variables to be shared among multiple instances of the same class."
        },
        {
          "label": "D",
          "text": "They are used to read data from files."
        },
        {
          "label": "E",
          "text": "More than one of the above.\nThe following will be used to match your exam with your name. Please use BLOCK LETTERS and\nwrite as legibly as possible.\nStudent Number\nFamily Name\nGiven Name\nFill in the Blank\nThe next five questions refer to the following class definitions.\n1 class A(object):\n2 def __init__(self, x):\n3 self._x=2 * x\n4\n5 def f(self, x):\n6 return self.g(x) + 2\n7\n8 def g(self, x):\n9 return x - 1\n10\n11 class B(A):\n12 def g(self, y):\n13 return self. _x+y\n14\n15 class C(B):\n16 def __init__(self, x, y):\n17 super().__init__(x)\n18 self._y=y+2\n19\n20 def f(self, x):\n21 return self. _x + self. _y\n22\n23 class D(B):\n24 def __init__(self, x, y):\n25 super().__init__(x)\n26 self._x += y\n27 self._y=y+2\n28\n29 def f(self, y) :\n30 return self. _y+y\n31\n32 def g(self, x):\n33 return super().g(x) - x\n34\n35 a = A(1)\n36 b = B(2)\n37 c = C(3, 4)\n38 d = D(5, 6)\nWrite a single number in the answer box and nothing else ."
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "object",
        "method"
      ]
    },
    {
      "id": "semester-one-examinations-2024-csse1001-q31",
      "source": "Semester One Examinations 2024",
      "pdfFile": "Semester_One_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 31,
      "category": "functions",
      "type": "short_answer",
      "prompt": "What does a.f(4) return?",
      "options": [],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-one-examinations-2024-csse1001-q32",
      "source": "Semester One Examinations 2024",
      "pdfFile": "Semester_One_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 32,
      "category": "functions",
      "type": "short_answer",
      "prompt": "What does b.g(3) return?",
      "options": [],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-one-examinations-2024-csse1001-q33",
      "source": "Semester One Examinations 2024",
      "pdfFile": "Semester_One_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 33,
      "category": "functions",
      "type": "short_answer",
      "prompt": "What does c.f(2) return?",
      "options": [],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-one-examinations-2024-csse1001-q34",
      "source": "Semester One Examinations 2024",
      "pdfFile": "Semester_One_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 34,
      "category": "functions",
      "type": "short_answer",
      "prompt": "What does d.f(1) return?",
      "options": [],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-one-examinations-2024-csse1001-q35",
      "source": "Semester One Examinations 2024",
      "pdfFile": "Semester_One_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 35,
      "category": "functions",
      "type": "short_answer",
      "prompt": "What does d.g(0) return?\nFull Solution",
      "options": [],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-one-examinations-2024-csse1001-q36",
      "source": "Semester One Examinations 2024",
      "pdfFile": "Semester_One_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 36,
      "category": "functions",
      "type": "short_answer",
      "prompt": "Implement the following function according to its specification.\n1 def foo(xs: str, ys: str) -> bool:\n2 \"\"\"\n3 Given two strings xs and ys, return true only when xs is equal\n4 to ys when typed into an empty text editor interpreting '!' as\n5 typing a backspace character.\n6\n7 For example:\n8 >>> foo(\"ab!c\", \"ac\")\n9 True\n10 because \"ab!c\" becomes \"ac\" when typed.\n11\n12 >>> foo(\"ab!!\", \"ab\")\n13 False\n14 because \"ab!!\" becomes \"\" (empty string) when typed:\n15\n16 >>> foo(\"a!c\", \"c\")\n17 True\n18 because \"a!c\" becomes \"c\" when typed.\n19\n20 Note that backspacing on the empty string produces the empty string.\n21 \"\"\"\nWrite your answer on the next page.\nWrite your answer on the next page.\nWrite your answer on the next page.\nend of examination",
      "options": [],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-one-final-examination-2023-csse1001-q1",
      "source": "Semester One Final Examination 2023",
      "pdfFile": "Semester_One_Final_Examination_2023_CSSE1001.pdf",
      "questionNumber": 1,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "Which of the followingcannotbe akeyin a dic-\ntionary .",
      "options": [
        {
          "label": "A",
          "text": "'123'"
        },
        {
          "label": "B",
          "text": "(1, 2, 3)"
        },
        {
          "label": "C",
          "text": "123"
        },
        {
          "label": "D",
          "text": "[1, 2, 3]"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-one-final-examination-2023-csse1001-q2",
      "source": "Semester One Final Examination 2023",
      "pdfFile": "Semester_One_Final_Examination_2023_CSSE1001.pdf",
      "questionNumber": 2,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "Suppose the following functions have been de-\nfined.\n1 def foo(n):\n2 return n + n\n3\n4 def bar(n):\n5 print(n + n)\nWhich of the following expressions will cause\nan error?",
      "options": [
        {
          "label": "A",
          "text": "z = foo(3)"
        },
        {
          "label": "B",
          "text": "z = bar(3)"
        },
        {
          "label": "C",
          "text": "z=2 *foo(3)"
        },
        {
          "label": "D",
          "text": "z=2 *bar(3)"
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-one-final-examination-2023-csse1001-q3",
      "source": "Semester One Final Examination 2023",
      "pdfFile": "Semester_One_Final_Examination_2023_CSSE1001.pdf",
      "questionNumber": 3,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "Recalldef foo(x: int) -> int: is type-hinted whereasdef bar():is not. What statement\nistrueabout type-hints (i.e. type contracts).",
      "options": [
        {
          "label": "A",
          "text": "Type-hints signal the user of the expected input to a function."
        },
        {
          "label": "B",
          "text": "Type-hints are enforced. That is, if you pass a function a value with a different type\nthan what is type-hinted Python will throw an error."
        },
        {
          "label": "C",
          "text": "Python will throw an error if a function is not type-hinted."
        },
        {
          "label": "D",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "call"
      ]
    },
    {
      "id": "semester-one-final-examination-2023-csse1001-q4",
      "source": "Semester One Final Examination 2023",
      "pdfFile": "Semester_One_Final_Examination_2023_CSSE1001.pdf",
      "questionNumber": 4,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "Suppose we want to define a name formaximum volume\nthat is intended to be private. Which name is most ap-\npropriate?",
      "options": [
        {
          "label": "A",
          "text": "__maximum_volume__"
        },
        {
          "label": "B",
          "text": "MaximumVolume"
        },
        {
          "label": "C",
          "text": "_maximum_volume"
        },
        {
          "label": "D",
          "text": "MAXIMUM_VOLUME."
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "object"
      ]
    },
    {
      "id": "semester-one-final-examination-2023-csse1001-q5",
      "source": "Semester One Final Examination 2023",
      "pdfFile": "Semester_One_Final_Examination_2023_CSSE1001.pdf",
      "questionNumber": 5,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "Suppose the following function definition has\nbeen made.\n1 def foo(x):\n2 if x == 1:\n3 return x\n4\n5 return foo(x-1)*x\nWhat willfoo(0)return?",
      "options": [
        {
          "label": "A",
          "text": "-1"
        },
        {
          "label": "B",
          "text": "0"
        },
        {
          "label": "C",
          "text": "1"
        },
        {
          "label": "D",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-one-final-examination-2023-csse1001-q6",
      "source": "Semester One Final Examination 2023",
      "pdfFile": "Semester_One_Final_Examination_2023_CSSE1001.pdf",
      "questionNumber": 6,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "Suppose the following has been executed by\nPython.\n1 xs = [1, 2, 3, 4, 5, 6]\n2 ys = xs[-3:-1]\nWhat is stored inys?",
      "options": [
        {
          "label": "A",
          "text": "[4, 5]"
        },
        {
          "label": "B",
          "text": "[4, 5, 6]"
        },
        {
          "label": "C",
          "text": "[5, 4]"
        },
        {
          "label": "D",
          "text": "[]"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-one-final-examination-2023-csse1001-q7",
      "source": "Semester One Final Examination 2023",
      "pdfFile": "Semester_One_Final_Examination_2023_CSSE1001.pdf",
      "questionNumber": 7,
      "category": "collections",
      "type": "code_choice",
      "prompt": "Which option will throw anIndexErrorin the\nfollowing code when replacing#sub?\n1 xs = [0, 1, 2, 3]\n2 #sub",
      "options": [
        {
          "label": "A",
          "text": "xs[-len(xs)]"
        },
        {
          "label": "B",
          "text": "xs[1-len(xs)]"
        },
        {
          "label": "C",
          "text": "xs[-1-len(xs)]"
        },
        {
          "label": "D",
          "text": "xs[len(xs)-1]"
        }
      ],
      "answer": null,
      "keywords": [
        "index"
      ]
    },
    {
      "id": "semester-one-final-examination-2023-csse1001-q8",
      "source": "Semester One Final Examination 2023",
      "pdfFile": "Semester_One_Final_Examination_2023_CSSE1001.pdf",
      "questionNumber": 8,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "What is the purpose of thebind()method intkinter?",
      "options": [
        {
          "label": "A",
          "text": "To create a new widget."
        },
        {
          "label": "B",
          "text": "To add an event handler to a widget."
        },
        {
          "label": "C",
          "text": "To remove a widget from a window."
        },
        {
          "label": "D",
          "text": "To resize a widget."
        }
      ],
      "answer": null,
      "keywords": [
        "method",
        "event"
      ]
    },
    {
      "id": "semester-one-final-examination-2023-csse1001-q9",
      "source": "Semester One Final Examination 2023",
      "pdfFile": "Semester_One_Final_Examination_2023_CSSE1001.pdf",
      "questionNumber": 9,
      "category": "loops",
      "type": "trace_choice",
      "prompt": "What is stored incountafter the following is evaluated?\n1 count = 0\n2 for x in \"abcdef\":\n3 if x == \"a\" or \"c\" or \"e\" or \"g\":\n4 count += 1",
      "options": [
        {
          "label": "A",
          "text": "0"
        },
        {
          "label": "B",
          "text": "3"
        },
        {
          "label": "C",
          "text": "4"
        },
        {
          "label": "D",
          "text": "6"
        }
      ],
      "answer": null,
      "keywords": [
        "loop",
        "condition"
      ]
    },
    {
      "id": "semester-one-final-examination-2023-csse1001-q10",
      "source": "Semester One Final Examination 2023",
      "pdfFile": "Semester_One_Final_Examination_2023_CSSE1001.pdf",
      "questionNumber": 10,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What does the following expression evaluate\nto?\n1 ['98'] + ['76']",
      "options": [
        {
          "label": "A",
          "text": "'9876'"
        },
        {
          "label": "B",
          "text": "['9876']"
        },
        {
          "label": "C",
          "text": "['98', '76']"
        },
        {
          "label": "D",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-one-final-examination-2023-csse1001-q11",
      "source": "Semester One Final Examination 2023",
      "pdfFile": "Semester_One_Final_Examination_2023_CSSE1001.pdf",
      "questionNumber": 11,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "Consider the following function.\n1 def foo(count: int) -> bool:\n2 while count < 0:\n3 count += 1\n4 return count < 0\nWhich option bests describes the behaviour offoowhen invoked properly?",
      "options": [
        {
          "label": "A",
          "text": "Trueonly whencount is positive."
        },
        {
          "label": "B",
          "text": "Trueonly whencount is negative or zero."
        },
        {
          "label": "C",
          "text": "AlwaysFalse."
        },
        {
          "label": "D",
          "text": "AlwaysTrue."
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-one-final-examination-2023-csse1001-q12",
      "source": "Semester One Final Examination 2023",
      "pdfFile": "Semester_One_Final_Examination_2023_CSSE1001.pdf",
      "questionNumber": 12,
      "category": "variables",
      "type": "trace_choice",
      "prompt": "What does the following expression evaluate\nto?\n1 7-4+3",
      "options": [
        {
          "label": "A",
          "text": "0"
        },
        {
          "label": "B",
          "text": "6"
        },
        {
          "label": "C",
          "text": "7"
        },
        {
          "label": "D",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "expression"
      ]
    },
    {
      "id": "semester-one-final-examination-2023-csse1001-q13",
      "source": "Semester One Final Examination 2023",
      "pdfFile": "Semester_One_Final_Examination_2023_CSSE1001.pdf",
      "questionNumber": 13,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "Consider the following incomplete code.\nimport tkinter as tk\nwindow = tk.Tk()\nthis_side = ?\nalice = tk.Label(text=\"Alice\")\nalice.pack(side=this_side)\nbob = tk.Label(text=\"Bob\")\nbob.pack(side=this_side)\ncarol = tk.Label(text=\"Carol\")\ncarol.pack(side=this_side)\nwindow.mainloop()\nWhat do we assignthis_sidein order to produce the\nfollowing window?",
      "options": [
        {
          "label": "A",
          "text": "tk.LEFT"
        },
        {
          "label": "B",
          "text": "tk.RIGHT"
        },
        {
          "label": "C",
          "text": "tk.TOP"
        },
        {
          "label": "D",
          "text": "tk.BOTTOM"
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "object"
      ]
    },
    {
      "id": "semester-one-final-examination-2023-csse1001-q14",
      "source": "Semester One Final Examination 2023",
      "pdfFile": "Semester_One_Final_Examination_2023_CSSE1001.pdf",
      "questionNumber": 14,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What is the value ofzsafter the following is evaluated?\n1 ys = ['a', 'b']\n2 zs = ['t']\n3 ys.extend(['c'])\n4 zs.append(ys)",
      "options": [
        {
          "label": "A",
          "text": "['t', ['a', 'b', 'c']]"
        },
        {
          "label": "B",
          "text": "['t', 'a', 'b', 'c']"
        },
        {
          "label": "C",
          "text": "['t', ['c', 'a', 'b']]"
        },
        {
          "label": "D",
          "text": "['t', 'c', 'a', 'b']"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-one-final-examination-2023-csse1001-q15",
      "source": "Semester One Final Examination 2023",
      "pdfFile": "Semester_One_Final_Examination_2023_CSSE1001.pdf",
      "questionNumber": 15,
      "category": "loops",
      "type": "multiple_choice",
      "prompt": "Which of the following statements isT rue?",
      "options": [
        {
          "label": "A",
          "text": "Python will prohibit the modification of globally defined user constants likePI = 3.14."
        },
        {
          "label": "B",
          "text": "The body of a while loopmustexecuteat leastonce."
        },
        {
          "label": "C",
          "text": "Everyif-then-elsestatement can be written usingonlyif-thenstatements."
        },
        {
          "label": "D",
          "text": "The order that Python statements are given has no effect on the program’s output."
        }
      ],
      "answer": null,
      "keywords": [
        "loop"
      ]
    },
    {
      "id": "semester-one-final-examination-2023-csse1001-q16",
      "source": "Semester One Final Examination 2023",
      "pdfFile": "Semester_One_Final_Examination_2023_CSSE1001.pdf",
      "questionNumber": 16,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "Supposexsis a list. Which expression evalu-\nates toTruewhenxsis empty .",
      "options": [
        {
          "label": "A",
          "text": "bool(not xs)"
        },
        {
          "label": "B",
          "text": "bool(xs)"
        },
        {
          "label": "C",
          "text": "bool(len(xs))"
        },
        {
          "label": "D",
          "text": "bool(xs is [])"
        }
      ],
      "answer": null,
      "keywords": [
        "list"
      ]
    },
    {
      "id": "semester-one-final-examination-2023-csse1001-q17",
      "source": "Semester One Final Examination 2023",
      "pdfFile": "Semester_One_Final_Examination_2023_CSSE1001.pdf",
      "questionNumber": 17,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "What error, if any , does Python raise when the\nfollowing is executed?\n1 def foo(x: str) -> str:\n2 return 3*x\n3\n4 foo(2.3)",
      "options": [
        {
          "label": "A",
          "text": "TypeError"
        },
        {
          "label": "B",
          "text": "ValueError"
        },
        {
          "label": "C",
          "text": "NameError"
        },
        {
          "label": "D",
          "text": "No error is generated."
        }
      ],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-one-final-examination-2023-csse1001-q18",
      "source": "Semester One Final Examination 2023",
      "pdfFile": "Semester_One_Final_Examination_2023_CSSE1001.pdf",
      "questionNumber": 18,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "What is the purpose of \"setter\" methods as they pertain to objects?",
      "options": [
        {
          "label": "A",
          "text": "They are used to change the values of private variables."
        },
        {
          "label": "B",
          "text": "They are used to retrieve the values of private variables."
        },
        {
          "label": "C",
          "text": "They allow private variables to be manipulated by multiple instances of the same class."
        },
        {
          "label": "D",
          "text": "They are used to write data to files."
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "object",
        "method"
      ]
    },
    {
      "id": "semester-one-final-examination-2023-csse1001-q19",
      "source": "Semester One Final Examination 2023",
      "pdfFile": "Semester_One_Final_Examination_2023_CSSE1001.pdf",
      "questionNumber": 19,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What is the value ofysafter the following is\nexecuted?\n1 xs = \"hello world\"\n2 ys = xs\n3 xs[0] = \"H\"\n4 xs[6] = \"W\"",
      "options": [
        {
          "label": "A",
          "text": "\"hello world\""
        },
        {
          "label": "B",
          "text": "\"Hello World\""
        },
        {
          "label": "C",
          "text": "\"xs\""
        },
        {
          "label": "D",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-one-final-examination-2023-csse1001-q20",
      "source": "Semester One Final Examination 2023",
      "pdfFile": "Semester_One_Final_Examination_2023_CSSE1001.pdf",
      "questionNumber": 20,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "How many of the following expressions evalu-\nate toTrue?\n1 bool(\"\") # empty string\n2 bool(\" \") # one space\n3 bool([0])\n4 bool(-1)",
      "options": [
        {
          "label": "A",
          "text": "1"
        },
        {
          "label": "B",
          "text": "2"
        },
        {
          "label": "C",
          "text": "3"
        },
        {
          "label": "D",
          "text": "4"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-one-final-examination-2023-csse1001-q21",
      "source": "Semester One Final Examination 2023",
      "pdfFile": "Semester_One_Final_Examination_2023_CSSE1001.pdf",
      "questionNumber": 21,
      "category": "functions",
      "type": "code_choice",
      "prompt": "The following is a recursive function with a\npartially implemented base case; it concate-\nnates a list of strings. What should we replace\n#subwith to complete this function?\n1 def concat(xss: list[str]) -> str:\n2 \"\"\"\n3 >>> concat([\"a\", \"b\", \"c\"])\n4 'abc'\n5 \"\"\"\n6 n, base = #sub\n7 if len(xs) == n:\n8 return base\n9 return xss[0] + concat(xss[1:])",
      "options": [
        {
          "label": "A",
          "text": "(0, xs[0])"
        },
        {
          "label": "B",
          "text": "(1, xs[0])"
        },
        {
          "label": "C",
          "text": "(0, \"\")"
        },
        {
          "label": "D",
          "text": "(1, \"\")"
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-one-final-examination-2023-csse1001-q22",
      "source": "Semester One Final Examination 2023",
      "pdfFile": "Semester_One_Final_Examination_2023_CSSE1001.pdf",
      "questionNumber": 22,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "What is the most appropriate type hint (i.e. type contract) for the following?\n1 def foo(x, y):\n2 ans = \"\"\n3 for n in x:\n4 for m in y:\n5 ans += n*m\n6 return ans",
      "options": [
        {
          "label": "A",
          "text": "foo(x: int, y: str) -> str:"
        },
        {
          "label": "B",
          "text": "foo(x: int, y: list[str]) -> str:"
        },
        {
          "label": "C",
          "text": "foo(x: list[int], y: str) -> str:"
        },
        {
          "label": "D",
          "text": "foo(x: list[int], y: list[str]) -> list[str]:"
        }
      ],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-one-final-examination-2023-csse1001-q23",
      "source": "Semester One Final Examination 2023",
      "pdfFile": "Semester_One_Final_Examination_2023_CSSE1001.pdf",
      "questionNumber": 23,
      "category": "loops",
      "type": "multiple_choice",
      "prompt": "What error is raised after executing the follow-\ning?\n1 for k in range(10):\n2 count = count + 1\n3 print(count)",
      "options": [
        {
          "label": "A",
          "text": "TypeError"
        },
        {
          "label": "B",
          "text": "ValueError"
        },
        {
          "label": "C",
          "text": "NameError"
        },
        {
          "label": "D",
          "text": "No error is generated."
        }
      ],
      "answer": null,
      "keywords": [
        "loop",
        "condition"
      ]
    },
    {
      "id": "semester-one-final-examination-2023-csse1001-q24",
      "source": "Semester One Final Examination 2023",
      "pdfFile": "Semester_One_Final_Examination_2023_CSSE1001.pdf",
      "questionNumber": 24,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "Which functionrequiresthe use of a a global variable to be implemented?",
      "options": [
        {
          "label": "A",
          "text": "A function that calls itself."
        },
        {
          "label": "B",
          "text": "A function that returns the number of times the function has been called."
        },
        {
          "label": "C",
          "text": "A function that calls a different function."
        },
        {
          "label": "D",
          "text": "A function that printsandreturns a value."
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "object"
      ]
    },
    {
      "id": "semester-one-final-examination-2023-csse1001-q25",
      "source": "Semester One Final Examination 2023",
      "pdfFile": "Semester_One_Final_Examination_2023_CSSE1001.pdf",
      "questionNumber": 25,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "Which of the following isnota valid list in\nPython?",
      "options": [
        {
          "label": "A",
          "text": "['one', 2, '3', 'IV']"
        },
        {
          "label": "B",
          "text": "[1, int(2), [{}], 4.0]"
        },
        {
          "label": "C",
          "text": "[1, [False, True], int(2), True]"
        },
        {
          "label": "D",
          "text": "All are valid lists."
        }
      ],
      "answer": null,
      "keywords": [
        "list"
      ]
    },
    {
      "id": "semester-one-final-examination-2023-csse1001-q26",
      "source": "Semester One Final Examination 2023",
      "pdfFile": "Semester_One_Final_Examination_2023_CSSE1001.pdf",
      "questionNumber": 26,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What is stored inxsafter the following is exe-\ncuted?\nxs = [1, 2, 3].reverse()\ngiven that\n1 >>> help(list.reverse)\n2 reverse(self, /)\n3 Reverse*IN PLACE*.\n4 (END)",
      "options": [
        {
          "label": "A",
          "text": "[1, 2, 3]"
        },
        {
          "label": "B",
          "text": "[3, 2, 1]"
        },
        {
          "label": "C",
          "text": "None"
        },
        {
          "label": "D",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "list"
      ]
    },
    {
      "id": "semester-one-final-examination-2023-csse1001-q27",
      "source": "Semester One Final Examination 2023",
      "pdfFile": "Semester_One_Final_Examination_2023_CSSE1001.pdf",
      "questionNumber": 27,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "What error is generated by executing the fol-\nlowing?\n1 x = int(\"three\")",
      "options": [
        {
          "label": "A",
          "text": "TypeError"
        },
        {
          "label": "B",
          "text": "ValueError"
        },
        {
          "label": "C",
          "text": "NameError"
        },
        {
          "label": "D",
          "text": "No error is generated."
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-one-final-examination-2023-csse1001-q28",
      "source": "Semester One Final Examination 2023",
      "pdfFile": "Semester_One_Final_Examination_2023_CSSE1001.pdf",
      "questionNumber": 28,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "Suppose the following function definition has\nbeen made.\n1 def foo(x: int, y: int):\n2 print(x/y)\nWhat istype(foo(1, 2))?",
      "options": [
        {
          "label": "A",
          "text": "<class 'int'>"
        },
        {
          "label": "B",
          "text": "<class 'float'>"
        },
        {
          "label": "C",
          "text": "<class 'str'>"
        },
        {
          "label": "D",
          "text": "<class 'NoneType'>"
        }
      ],
      "answer": null,
      "keywords": [
        "class"
      ]
    },
    {
      "id": "semester-one-final-examination-2023-csse1001-q29",
      "source": "Semester One Final Examination 2023",
      "pdfFile": "Semester_One_Final_Examination_2023_CSSE1001.pdf",
      "questionNumber": 29,
      "category": "oop",
      "type": "trace_choice",
      "prompt": "Suppose the following lines of code have been executed.\n1 class Artist():\n2 def__init__(self, name: str, num_good_songs: int) -> None:\n3 self._name = name\n4 self._num_good_songs = num_good_songs\n5\n6 drake = Artist(\"Drake\", 0)\n7 drizzy = Artist(\"Drake\", 1)\nWhat is stored indrake._num_good_songs?",
      "options": [
        {
          "label": "A",
          "text": "0"
        },
        {
          "label": "B",
          "text": "1"
        },
        {
          "label": "C",
          "text": "'Drake'"
        },
        {
          "label": "D",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "class"
      ]
    },
    {
      "id": "semester-one-final-examination-2023-csse1001-q30",
      "source": "Semester One Final Examination 2023",
      "pdfFile": "Semester_One_Final_Examination_2023_CSSE1001.pdf",
      "questionNumber": 30,
      "category": "oop",
      "type": "trace_choice",
      "prompt": "Given the following code:\n1 x = input(\" Enter the first number: \")\n2 y = input(\" Enter the second number: \")\n3 print(f\"x + y = {x+y}\")\nand assuming the user inputs4then0. What\nis output?",
      "options": [
        {
          "label": "A",
          "text": "x+y=x+y"
        },
        {
          "label": "B",
          "text": "x+y=4"
        },
        {
          "label": "C",
          "text": "x+y=4+0"
        },
        {
          "label": "D",
          "text": "x + y = 40\nThe following will be used to match your exam with your name. Please useBLOCK LETTERSand\nwrite as legibly as possible.\nStudent Number\nFamily Name\nGiven Name\nFill in the Blank\nThe nextfivequestions refer to the following class definitions.\n1 class A():\n2 def__init__(self, x):\n3 self.x = x\n4\n5 def f(self, x):\n6 return self.g(x) - 1\n7\n8 def g(self, x) :\n9 return 2*x\n10\n11 class B(A):\n12 def g(self, y):\n13 return self.x + y\n14\n15 class C(B):\n16 def__init__(self, x, y):\n17 super().__init__(x)\n18 self.y = y\n19\n20 def f(self, x):\n21 return self.x + self.y\n22\n23 class D(B):\n24 def__init__(self, x, y):\n25 super().__init__(x)\n26 self.x += y\n27 self.y = y\n28\n29 def g(self, y):\n30 return self.y + y\n31\n32 def f(self, x):\n33 return super().f(x) - x\n34\n35 a = A(3)\n36 b = B(2)\n37 c = C(2, 4)\n38 d = D(1, 3)\nWrite asingle numberin the answer boxand nothing else."
        }
      ],
      "answer": null,
      "keywords": [
        "class"
      ]
    },
    {
      "id": "semester-one-final-examination-2023-csse1001-q31",
      "source": "Semester One Final Examination 2023",
      "pdfFile": "Semester_One_Final_Examination_2023_CSSE1001.pdf",
      "questionNumber": 31,
      "category": "functions",
      "type": "short_answer",
      "prompt": "What doesa.g(2)return?",
      "options": [],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-one-final-examination-2023-csse1001-q32",
      "source": "Semester One Final Examination 2023",
      "pdfFile": "Semester_One_Final_Examination_2023_CSSE1001.pdf",
      "questionNumber": 32,
      "category": "functions",
      "type": "short_answer",
      "prompt": "What doesa.f(2)return?",
      "options": [],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-one-final-examination-2023-csse1001-q33",
      "source": "Semester One Final Examination 2023",
      "pdfFile": "Semester_One_Final_Examination_2023_CSSE1001.pdf",
      "questionNumber": 33,
      "category": "functions",
      "type": "short_answer",
      "prompt": "What doesa.g(3)return?",
      "options": [],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-one-final-examination-2023-csse1001-q34",
      "source": "Semester One Final Examination 2023",
      "pdfFile": "Semester_One_Final_Examination_2023_CSSE1001.pdf",
      "questionNumber": 34,
      "category": "functions",
      "type": "short_answer",
      "prompt": "What doesa.f(3)return?",
      "options": [],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-one-final-examination-2023-csse1001-q35",
      "source": "Semester One Final Examination 2023",
      "pdfFile": "Semester_One_Final_Examination_2023_CSSE1001.pdf",
      "questionNumber": 35,
      "category": "functions",
      "type": "short_answer",
      "prompt": "What doesd.f(2)return?\nFull Solution",
      "options": [],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-one-final-examination-2023-csse1001-q36",
      "source": "Semester One Final Examination 2023",
      "pdfFile": "Semester_One_Final_Examination_2023_CSSE1001.pdf",
      "questionNumber": 36,
      "category": "oop",
      "type": "short_answer",
      "prompt": "Write a functionfoothat satisfies the following specification.\n1 def foo(f_path: string, word: str) -> list[str]:\n2 \"\"\"\n3 The text of a book with all punctuation removed is stored at <f _path>.\n4 Each line of the file corresponds to one line of the book.\n5\n6 Return the list of words that appear immediately before an instance of\n7 <word> in the file located at <f _path>.\n8\n9 Preconditions:\n10 1. The file at <f _path> exists.\n11 2. The first word of the file is NOT <word>\n12\n13 Example:\n14 Suppose run.txt contains the following lines:\n15 See spot run\n16 run spot see\n17 spot run spot\n18 run see spot\n19 see spot spot\n20\n21 >>> foo(\"run.txt\", \"spot\")\n22 ['See', 'run', 'see', 'run', 'see', 'spot']\n23 \"\"\"\nWrite your answer on the next page.\nend of examination",
      "options": [],
      "answer": null,
      "keywords": [
        "class",
        "object"
      ]
    },
    {
      "id": "semester-one-final-examinations-2021-csse1001-q1",
      "source": "Semester One Final Examinations 2021",
      "pdfFile": "Semester_One_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 1,
      "category": "variables",
      "type": "trace_choice",
      "prompt": "What does the expression 6.0 + 11 / 2 evaluate to?",
      "options": [
        {
          "label": "A",
          "text": "11.5"
        },
        {
          "label": "B",
          "text": "11.0"
        },
        {
          "label": "C",
          "text": "11"
        },
        {
          "label": "D",
          "text": "8.5"
        }
      ],
      "answer": null,
      "keywords": [
        "expression"
      ]
    },
    {
      "id": "semester-one-final-examinations-2021-csse1001-q2",
      "source": "Semester One Final Examinations 2021",
      "pdfFile": "Semester_One_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 2,
      "category": "variables",
      "type": "trace_choice",
      "prompt": "What does the expression 0 > -1 < -2 evaluate to?",
      "options": [
        {
          "label": "A",
          "text": "True"
        },
        {
          "label": "B",
          "text": "False"
        },
        {
          "label": "C",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "expression"
      ]
    },
    {
      "id": "semester-one-final-examinations-2021-csse1001-q3",
      "source": "Semester One Final Examinations 2021",
      "pdfFile": "Semester_One_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 3,
      "category": "variables",
      "type": "trace_choice",
      "prompt": "What does the expression 0 < -1 or -4 < -2 evaluate to?",
      "options": [
        {
          "label": "A",
          "text": "True"
        },
        {
          "label": "B",
          "text": "False"
        },
        {
          "label": "C",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "expression"
      ]
    },
    {
      "id": "semester-one-final-examinations-2021-csse1001-q4",
      "source": "Semester One Final Examinations 2021",
      "pdfFile": "Semester_One_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 4,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What does the expression 0 < 10 and not (4 < 2) evaluate to?",
      "options": [
        {
          "label": "A",
          "text": "True"
        },
        {
          "label": "B",
          "text": "False"
        },
        {
          "label": "C",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-one-final-examinations-2021-csse1001-q5",
      "source": "Semester One Final Examinations 2021",
      "pdfFile": "Semester_One_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 5,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What does the expression (1, 2) + (2, ) evaluate to?",
      "options": [
        {
          "label": "A",
          "text": "(1, 2)"
        },
        {
          "label": "B",
          "text": "(3, 2)"
        },
        {
          "label": "C",
          "text": "(1, 2, 2)"
        },
        {
          "label": "D",
          "text": "[(1, 2), (2, )]"
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-one-final-examinations-2021-csse1001-q6",
      "source": "Semester One Final Examinations 2021",
      "pdfFile": "Semester_One_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 6,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What does the expression [1, 2] + [1, 2, 3] evaluate to?",
      "options": [
        {
          "label": "A",
          "text": "[1, 2, 3]"
        },
        {
          "label": "B",
          "text": "[2, 4, 3]"
        },
        {
          "label": "C",
          "text": "[1, 1, 2, 2, 3]"
        },
        {
          "label": "D",
          "text": "[1, 2, 1, 2, 3]"
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-one-final-examinations-2021-csse1001-q7",
      "source": "Semester One Final Examinations 2021",
      "pdfFile": "Semester_One_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 7,
      "category": "variables",
      "type": "trace_choice",
      "prompt": "What is the value of s4 after the following statements are evaluated?\ns1 = \"Monty\"\ns2 = \"Python\"\ns3 = \"Spam\"\ns3 = s1\ns3 = \"Parrot\"\ns4 = s1 + s2",
      "options": [
        {
          "label": "A",
          "text": "\"ParrotPython\""
        },
        {
          "label": "B",
          "text": "\"MontyPython\""
        },
        {
          "label": "C",
          "text": "\"SpamPython\""
        },
        {
          "label": "D",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "value"
      ]
    },
    {
      "id": "semester-one-final-examinations-2021-csse1001-q8",
      "source": "Semester One Final Examinations 2021",
      "pdfFile": "Semester_One_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 8,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "After the assignment s1 = \"Monty \" + \"Python\" + \" Sketch\", which of the following\nstatements assigns \"Python\" to s2?",
      "options": [
        {
          "label": "A",
          "text": "s2 = s1[1]"
        },
        {
          "label": "B",
          "text": "s2 = s1[6:12]"
        },
        {
          "label": "C",
          "text": "s2 = s1[7:12]"
        },
        {
          "label": "D",
          "text": "s2 = s1[-13:-8]"
        },
        {
          "label": "E",
          "text": "More than one of the above is correct."
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-one-final-examinations-2021-csse1001-q9",
      "source": "Semester One Final Examinations 2021",
      "pdfFile": "Semester_One_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 9,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What is the value of x after the following statements are evaluated?\nx = ['a', 0, 'b']\ny = x\ny[2] = 0",
      "options": [
        {
          "label": "A",
          "text": "['a', 0, 0]"
        },
        {
          "label": "B",
          "text": "['a', 0, 'b']"
        },
        {
          "label": "C",
          "text": "0"
        },
        {
          "label": "D",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-one-final-examinations-2021-csse1001-q10",
      "source": "Semester One Final Examinations 2021",
      "pdfFile": "Semester_One_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 10,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "What is the consequence of executing the following statements?\nx = (1, 2)\nx += (3, 4)",
      "options": [
        {
          "label": "A",
          "text": "Tuples are immutable, the += operator will cause an error."
        },
        {
          "label": "B",
          "text": "The second statement will add the values 3 and 4 to the tuple stored in x."
        },
        {
          "label": "C",
          "text": "Tuples are immutable, the second statement will assign the tuple (3, 4) to x."
        },
        {
          "label": "D",
          "text": "The second statement will create a new tuple that contains the contents of x and the\ntuple to the right of the += operator. This new tuple is assigned to x."
        }
      ],
      "answer": null,
      "keywords": [
        "tuple"
      ]
    },
    {
      "id": "semester-one-final-examinations-2021-csse1001-q11",
      "source": "Semester One Final Examinations 2021",
      "pdfFile": "Semester_One_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 11,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What is the value of d after the following statements are evaluated?\nd = {'CA':'Maple Syrup', 'AU':'Vegemite',\n'NZ':'Pavlova', 'FR':'Escargot'}\nd['SP'] = 'Churro'\nd.get('JP', 'Sushi')",
      "options": [
        {
          "label": "A",
          "text": "{'JP': 'Sushi'}"
        },
        {
          "label": "B",
          "text": "{'SP': 'Churro'}"
        },
        {
          "label": "C",
          "text": "{'CA': 'Maple Syrup', 'AU': 'Vegemite', 'NZ': 'Pavlova',\n'FR': 'Escargot'}"
        },
        {
          "label": "D",
          "text": "{'CA': 'Maple Syrup', 'AU': 'Vegemite', 'NZ': 'Pavlova',\n'FR': 'Escargot', 'SP': 'Churro'}"
        },
        {
          "label": "E",
          "text": "{'CA': 'Maple Syrup', 'AU': 'Vegemite', 'NZ': 'Pavlova',\n'FR': 'Escargot', 'SP': 'Churro', 'JP': 'Sushi'}"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-one-final-examinations-2021-csse1001-q12",
      "source": "Semester One Final Examinations 2021",
      "pdfFile": "Semester_One_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 12,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What is output after the following code is executed?\nx = 0\nif x == 0:\nprint(\"zero\")\nelif x >= 0:\nprint(\"positive\")\nelif x <= 0:\nprint(\"negative\")",
      "options": [
        {
          "label": "A",
          "text": "zero"
        },
        {
          "label": "B",
          "text": "positive"
        },
        {
          "label": "C",
          "text": "negative"
        },
        {
          "label": "D",
          "text": "zero\npositive\nnegative"
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-one-final-examinations-2021-csse1001-q13",
      "source": "Semester One Final Examinations 2021",
      "pdfFile": "Semester_One_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 13,
      "category": "loops",
      "type": "trace_choice",
      "prompt": "What is the value of y after the following code is executed?\nx = 0\ny = 1\nwhile x < 5:\nx += 1\ny *= x",
      "options": [
        {
          "label": "A",
          "text": "1"
        },
        {
          "label": "B",
          "text": "24"
        },
        {
          "label": "C",
          "text": "120"
        },
        {
          "label": "D",
          "text": "720"
        },
        {
          "label": "E",
          "text": "The logic is an infinite loop."
        }
      ],
      "answer": null,
      "keywords": [
        "loop"
      ]
    },
    {
      "id": "semester-one-final-examinations-2021-csse1001-q14",
      "source": "Semester One Final Examinations 2021",
      "pdfFile": "Semester_One_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 14,
      "category": "functions",
      "type": "trace_choice",
      "prompt": "What is output after calling the function f1?\ndef f1() -> None:\nv = 8\nx = f2(v)\nprint(v)\n\ndef f2(x: int) -> int:\nv = 2\nreturn x // v\n\nf1()",
      "options": [
        {
          "label": "A",
          "text": "8"
        },
        {
          "label": "B",
          "text": "4"
        },
        {
          "label": "C",
          "text": "2"
        },
        {
          "label": "D",
          "text": "0"
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return",
        "call"
      ]
    },
    {
      "id": "semester-one-final-examinations-2021-csse1001-q15",
      "source": "Semester One Final Examinations 2021",
      "pdfFile": "Semester_One_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 15,
      "category": "functions",
      "type": "trace_choice",
      "prompt": "What is output after the following code is executed?\ndef f(x: list[int]) -> int:\ny = 0\nz = 0\nfor i in x:\ny += i\nz += 1\nreturn y / z\n\na = [10, 20, 30, 40]\nprint(f(a))",
      "options": [
        {
          "label": "A",
          "text": "10.0"
        },
        {
          "label": "B",
          "text": "25.0"
        },
        {
          "label": "C",
          "text": "33.33333333336"
        },
        {
          "label": "D",
          "text": "40.0"
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-one-final-examinations-2021-csse1001-q16",
      "source": "Semester One Final Examinations 2021",
      "pdfFile": "Semester_One_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 16,
      "category": "functions",
      "type": "trace_choice",
      "prompt": "What is output after the following code is executed?\ndef f(x: list[int]) -> None:\nfor i in range(len(x) // 2):\ny = x[i]\nx[i] = x[len(x) - i - 1]\nx[len(x) - i - 1] = y\n\na = [1, 2, 3, 4, 5]\nf(a)\nprint(a)",
      "options": [
        {
          "label": "A",
          "text": "[1, 2, 3, 4, 5]"
        },
        {
          "label": "B",
          "text": "[1, 4, 3, 2, 5]"
        },
        {
          "label": "C",
          "text": "[5, 2, 3, 4, 1]"
        },
        {
          "label": "D",
          "text": "[5, 4, 3, 2, 1]"
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "parameter"
      ]
    },
    {
      "id": "semester-one-final-examinations-2021-csse1001-q17",
      "source": "Semester One Final Examinations 2021",
      "pdfFile": "Semester_One_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 17,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "Assuming that the parameter lst is a list of integer values, which of the following\ndescriptions best describe the purpose of this function?\ndef f(lst: list[int]) -> tuple[int, int]:\nx = lst[0]\ny = lst[0]\nfor i in lst:\nif x > i:\nx = i\nelif y < i:\ny = i\nreturn x, y",
      "options": [
        {
          "label": "A",
          "text": "It returns the sum of the half of the list made up of the smallest numbers, and the sum\nof the half of the list made up of the largest numbers."
        },
        {
          "label": "B",
          "text": "It raises an error because the type hint indicates it returns a tuple but the code returns\ntwo values."
        },
        {
          "label": "C",
          "text": "It returns the smallest and largest values found in the list."
        },
        {
          "label": "D",
          "text": "It returns how many even and odd integers were in the list."
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "parameter",
        "return"
      ]
    },
    {
      "id": "semester-one-final-examinations-2021-csse1001-q18",
      "source": "Semester One Final Examinations 2021",
      "pdfFile": "Semester_One_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 18,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "Which of the following statements is correct regarding global variables?",
      "options": [
        {
          "label": "A",
          "text": "Global variables save memory, as they are stored once for the entire program, and\nshould be used in good software design."
        },
        {
          "label": "B",
          "text": "Global variables are shared across the entire program, meaning it is more difficult to\ndetermine when their value has changed."
        },
        {
          "label": "C",
          "text": "Global variables are inefficient because every function call has to create a copy of the\nvariables in case they are used in the function."
        },
        {
          "label": "D",
          "text": "Global variables provide a way of describing all important variables in a program in a\nsingle location, so assist with writing good documentation."
        },
        {
          "label": "E",
          "text": "Both (b) and (c)."
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "call"
      ]
    },
    {
      "id": "semester-one-final-examinations-2021-csse1001-q19",
      "source": "Semester One Final Examinations 2021",
      "pdfFile": "Semester_One_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 19,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "What is the purpose of the raise statement in Python?",
      "options": [
        {
          "label": "A",
          "text": "To attempt to execute a block of code and handle at least some of the errors that may\nbe caused by the statements in the block of code."
        },
        {
          "label": "B",
          "text": "To provide an error handling function that will be called if any error occurs in a block\nof code."
        },
        {
          "label": "C",
          "text": "To indicate that the code has encountered an error it cannot handle locally."
        },
        {
          "label": "D",
          "text": "To identify potential errors that may be encountered in a block of code."
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "call"
      ]
    },
    {
      "id": "semester-one-final-examinations-2021-csse1001-q20",
      "source": "Semester One Final Examinations 2021",
      "pdfFile": "Semester_One_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 20,
      "category": "functions",
      "type": "trace_choice",
      "prompt": "What is output after the following code is executed:\ndef f(x: int) -> None:\nif x <= 0:\nraise ValueError(\"value must be positive\")\nwhile x > 0:\nprint(x, end=',')\nx -= 1\n\ntry:\nf(-5)\nexcept ValueError as e:\nprint(str(e))",
      "options": [
        {
          "label": "A",
          "text": "value must be positive"
        },
        {
          "label": "B",
          "text": "-5,-4,-3,-2,-1,0,"
        },
        {
          "label": "C",
          "text": "5,4,3,2,1,"
        },
        {
          "label": "D",
          "text": "There is no output because the while loop is never entered in function f."
        },
        {
          "label": "E",
          "text": "The while loop in function f is an infinite loop, so the output never stops."
        }
      ],
      "answer": null,
      "keywords": [
        "function"
      ]
    },
    {
      "id": "semester-one-final-examinations-2021-csse1001-q21",
      "source": "Semester One Final Examinations 2021",
      "pdfFile": "Semester_One_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 21,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "For the following function:\ndef r(x: int, y: int) -> int:\nif x == 0:\nreturn x * y\nreturn r(x-1, y) + y\nWhat will r(4, 2) return?",
      "options": [
        {
          "label": "A",
          "text": "10"
        },
        {
          "label": "B",
          "text": "8"
        },
        {
          "label": "C",
          "text": "4"
        },
        {
          "label": "D",
          "text": "0"
        },
        {
          "label": "E",
          "text": "RecursionError: maximum recursion depth exceeded"
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-one-final-examinations-2021-csse1001-q22",
      "source": "Semester One Final Examinations 2021",
      "pdfFile": "Semester_One_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 22,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "For the following block of code:\nTITLE = 0\nRELEASE_YEAR = 1\nNOMINATIONS = 2\nAWARDS = 3\n\nmovies = [(\"Parasite\", 2019, 6, 4),\n(\"Little Women\", 2019, 6, 1),\n(\"1917\", 2019, 10, 3),\n(\"Bohemian Rhapsody\", 2018, 5, 3),\n(\"Black Panther\", 2018, 7, 3)]\n\ndef num_awards(movie: tuple[str, int, int, int]) -> int:\nreturn movie[AWARDS]\n\ndef num_nominations(movie: tuple[str, int, int, int]) -> int:\nreturn movie[NOMINATIONS]\n\ndef add_award(movie: tuple[str, int, int, int], new_awards: int) \\\n-> tuple[str, int, int, int]:\nreturn (movie[TITLE], movie[RELEASE_YEAR],\nmovie[NOMINATIONS], movie[AWARDS] + new_awards)\n\nmovies[2] = add_award(movies[2], 2)\nWhich of the following programming constructs would most significantly simplify the\nabove code?",
      "options": [
        {
          "label": "A",
          "text": "dictionary"
        },
        {
          "label": "B",
          "text": "while loop"
        },
        {
          "label": "C",
          "text": "if statement"
        },
        {
          "label": "D",
          "text": "function"
        },
        {
          "label": "E",
          "text": "class"
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-one-final-examinations-2021-csse1001-q23",
      "source": "Semester One Final Examinations 2021",
      "pdfFile": "Semester_One_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 23,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "For the following block of code, assume that Position, Entity, Player and Zombie are\nthe classes that were defined in assignment two.\nclass Locations:\ndef __init__(self):\nself._positions = []\nself._entities = []\n\ndef add_entity(self, position: Position, entity: Entity) -> None:\nself._positions.append(position)\nself._entities.append(entity)\n\ndef get_entity(self, position: Position) -> Optional[Entity]:\nfor i, p in enumerate(self._positions):\nif p == position:\nreturn self._entities[i]\n\nl = Locations()\nl.add_entity(Position(1, 1), Player())\nl.add_entity(Position(2, 2), Zombie())\np = l.get_entity(Position(1, 1))\nWhich of the following programming constructs would most significantly simplify the\nabove code?",
      "options": [
        {
          "label": "A",
          "text": "dictionary"
        },
        {
          "label": "B",
          "text": "tuple"
        },
        {
          "label": "C",
          "text": "while loop"
        },
        {
          "label": "D",
          "text": "if statement"
        },
        {
          "label": "E",
          "text": "function"
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "state"
      ]
    },
    {
      "id": "semester-one-final-examinations-2021-csse1001-q24",
      "source": "Semester One Final Examinations 2021",
      "pdfFile": "Semester_One_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 24,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "The following is an extract of code from the Inventory class from assignment two. Part\nof the implementation of the step method has been removed.\nclass Inventory:\ndef __init__(self):\nself._items = []\n\ndef step(self):\n\"\"\"\nWhen this method is called, the lifetime of every item\nstored within the inventory should decrease. Any items\nin the inventory that have exceeded their lifetime should\nbe removed.\n\"\"\"\nnew_items = ## Fragment 1 ##\nfor item in self._items:\nitem.hold()\nif item.get_lifetime() > 0:\nnew_items.append(item)\n## Fragment 2 ##\nWhich code fragments below will correctly complete the function above?",
      "options": [
        {
          "label": "A",
          "text": "Fragment 1 is: self._items\nFragment 2 is: self._items = new_items"
        },
        {
          "label": "B",
          "text": "Fragment 1 is: self._items\nFragment 2 is: new_items = self._items"
        },
        {
          "label": "C",
          "text": "Fragment 1 is: []\nFragment 2 is: self._items = new_items"
        },
        {
          "label": "D",
          "text": "Fragment 1 is: []\nFragment 2 is: new_items = self._items"
        },
        {
          "label": "E",
          "text": "None of the code fragments would implement the function correctly.\n\nThe next two questions refer to the following function definition, which is missing two\nfragments of code. It is a recursive function to find all the positive whole number divisors of a\nnumber between the parameters i and number. The list of divisors will be returned via the\nparameter result.\ndef positive_divisors(number: int, i: int, result: list[int]) -> None:\n\"\"\"\nPrecondition: number > 0 and i > 0\n\"\"\"\nif number % i == 0:\n## Fragment 1 ##\nif number > i:\n## Fragment 2 ##\nExample usage:\nr = []\npositive_divisors(2, 1, r)\nr == [1, 2]\nr = []\npositive_divisors(9, 1, r)\nr == [1, 3, 9]\nWhen answering question 26, assume that the correct code has been implemented from the\nprevious question."
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "method"
      ]
    },
    {
      "id": "semester-one-final-examinations-2021-csse1001-q25",
      "source": "Semester One Final Examinations 2021",
      "pdfFile": "Semester_One_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 25,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "What code is required at ## Fragment 1 ##?",
      "options": [
        {
          "label": "A",
          "text": "return 0"
        },
        {
          "label": "B",
          "text": "return i"
        },
        {
          "label": "C",
          "text": "result += i"
        },
        {
          "label": "D",
          "text": "result.append(i)"
        },
        {
          "label": "E",
          "text": "None of the code fragments would implement the function correctly."
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-one-final-examinations-2021-csse1001-q26",
      "source": "Semester One Final Examinations 2021",
      "pdfFile": "Semester_One_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 26,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "What code is required at ## Fragment 2 ##?",
      "options": [
        {
          "label": "A",
          "text": "positive_divisors(number, i-1, result)"
        },
        {
          "label": "B",
          "text": "positive_divisors(number, i+1, result)"
        },
        {
          "label": "C",
          "text": "positive_divisors(number, i, result)"
        },
        {
          "label": "D",
          "text": "positive_divisors(number, 1, result)"
        },
        {
          "label": "E",
          "text": "None of the code fragments would implement the function correctly.\n\nThe next two questions refer to the following function definition, which is missing two\nfragments of code. The function reads student assessment results for a course from a file. It\nthen calculates the total mark achieved by each student in the course and saves this to\nanother file. The following is an example of a data file (marks.csv).\n41234567,10,9,14,18,42\n40000000,5,5,7,8,12\n41111111,8,6,12,14,21\nThe first value on each line of the file is a student number. All the following data items on the\nline are the marks the student achieved in each assessment in the course. These values may\nbe integer or floating point and are separated by a comma. You may assume that the data in\nthe input file is correctly formatted. The results are written to an output file where each line\nhas a student number and total mark for the course.\nThe definition of the process function, with two missing code fragments, is given below.\ndef process(marks: str, results: str) -> None:\nwith open(marks, 'r') as mark_data, \\\nopen(results, 'w') as result_data:\nfor entry in mark_data:\nstudent = entry.split(',')\n## Fragment 1: Initialise student's score ##\n## Fragment 2: Calculate student's total score ##\nresult_data.write(student[0] + ','\n+ str(student_score) + '\\n')\nThe result of calling the completed function on the file described above, for example by:\nprocess('marks.csv', 'results.csv')\nwould result in the following data being saved to results.csv.\n41234567,93.0\n40000000,37.0\n41111111,61.0\nWhen answering question 28, assume that the correct code has been implemented from the\nprevious question."
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "call"
      ]
    },
    {
      "id": "semester-one-final-examinations-2021-csse1001-q27",
      "source": "Semester One Final Examinations 2021",
      "pdfFile": "Semester_One_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 27,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "What code is required at ## Fragment 1: Initialise student's score ##?",
      "options": [
        {
          "label": "A",
          "text": "student_score = float(student[0])"
        },
        {
          "label": "B",
          "text": "student_score = student[0]"
        },
        {
          "label": "C",
          "text": "student_score = 1"
        },
        {
          "label": "D",
          "text": "student_score = 0"
        },
        {
          "label": "E",
          "text": "None of the code fragments would implement the function correctly."
        }
      ],
      "answer": null,
      "keywords": [
        "function"
      ]
    },
    {
      "id": "semester-one-final-examinations-2021-csse1001-q28",
      "source": "Semester One Final Examinations 2021",
      "pdfFile": "Semester_One_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 28,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "What code is required at ## Fragment 2: Calculate student's total score ##?",
      "options": [
        {
          "label": "A",
          "text": "for i in range(1, len(student)):\nstudent_score += float(student[i])"
        },
        {
          "label": "B",
          "text": "for i in range(1, len(student)):\nstudent_score += student[i]"
        },
        {
          "label": "C",
          "text": "for score in student:\nstudent_score += float(score)"
        },
        {
          "label": "D",
          "text": "for score in student:\nstudent_score += score"
        },
        {
          "label": "E",
          "text": "None of the code fragments would implement the function correctly.\nThe following partial definition of a shopping basket cl ass, to be used in an online store, is\nused in the following three questions.\nclass ShoppingBasket:\ndef __init__(self):\nself._items = {} # Dictionary of items in this basket.\n# Item stock id is the key mapped\n# to the price of the item.\n\ndef add_item(self, item_id: str, price: float) -> None:\n\"\"\"Add an item to this basket.\n\nParameters:\nitem_id: The item's stock id.\nprice: The item's price.\n\"\"\"\n## Fragment 1 ##\n\ndef total(self) -> float:\n\"\"\"Return the total price of all items in this basket.\"\"\"\ntotal_price = 0\n## Fragment 2 ##\nreturn total_price"
        }
      ],
      "answer": null,
      "keywords": [
        "class"
      ]
    },
    {
      "id": "semester-one-final-examinations-2021-csse1001-q29",
      "source": "Semester One Final Examinations 2021",
      "pdfFile": "Semester_One_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 29,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "What is the required code for ## Fragment 1 ##?",
      "options": [
        {
          "label": "A",
          "text": "self._items.get(item_id, price)"
        },
        {
          "label": "B",
          "text": "self._items.set(item_id, price)"
        },
        {
          "label": "C",
          "text": "self._items[item_id] = price"
        },
        {
          "label": "D",
          "text": "self._items[price] = item_id"
        },
        {
          "label": "E",
          "text": "None of the code fragments would implement the method correctly."
        }
      ],
      "answer": null,
      "keywords": [
        "method"
      ]
    },
    {
      "id": "semester-one-final-examinations-2021-csse1001-q30",
      "source": "Semester One Final Examinations 2021",
      "pdfFile": "Semester_One_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 30,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "What is the required code for ## Fragment 2 ##?",
      "options": [
        {
          "label": "A",
          "text": "for price in self._items.items():\ntotal_price += price"
        },
        {
          "label": "B",
          "text": "for price in self._items.values():\ntotal_price += price"
        },
        {
          "label": "C",
          "text": "for price in self._items():\ntotal_price += price"
        },
        {
          "label": "D",
          "text": "for price in self._items:\ntotal_price += price"
        },
        {
          "label": "E",
          "text": "None of the code fragments would implement the method correctly."
        }
      ],
      "answer": null,
      "keywords": [
        "method"
      ]
    },
    {
      "id": "semester-one-final-examinations-2021-csse1001-q31",
      "source": "Semester One Final Examinations 2021",
      "pdfFile": "Semester_One_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 31,
      "category": "oop",
      "type": "trace_choice",
      "prompt": "Assuming that the ShoppingBasket class is implemented correctly, w hich of the\nfollowing sets of statements is the best approach to output \"The total is 30\"?",
      "options": [
        {
          "label": "A",
          "text": "basket = ShoppingBasket()\nShoppingBasket.add_item(basket, \"1\", 10)\nShoppingBasket.add_item(basket, \"2\", 20)\nprint(\"The total is\", ShoppingBasket.total(basket))"
        },
        {
          "label": "B",
          "text": "basket = ShoppingBasket()\nShoppingBasket.add_item(\"1\", 10)\nShoppingBasket.add_item(\"2\", 20)\nprint(\"The total is\", ShoppingBasket.total())"
        },
        {
          "label": "C",
          "text": "basket = ShoppingBasket()\nbasket.add_item(\"1\", 10)\nbasket.add_item(\"2\", 20)\nprint(\"The total is\", basket.total())"
        },
        {
          "label": "D",
          "text": "basket = ShoppingBasket()\nadd_item(basket, \"1\", 10)\nadd_item(basket, \"2\", 20)\nprint(\"The total is\", total(basket))"
        },
        {
          "label": "E",
          "text": "None of these statements will result in \"The total is 30\" being output."
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "state"
      ]
    },
    {
      "id": "semester-one-final-examinations-2021-csse1001-q32",
      "source": "Semester One Final Examinations 2021",
      "pdfFile": "Semester_One_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 32,
      "category": "oop",
      "type": "trace_choice",
      "prompt": "When designing classes, what does “respecting the abstraction barrier” mean?",
      "options": [
        {
          "label": "A",
          "text": "It means that if the implementation of a class’ data structure or methods changes, but\nthe interface to the methods does not change, other code can continue to use objects\nof the class without any changes."
        },
        {
          "label": "B",
          "text": "It means that a subclass can use the attributes of its superclass without worrying about\nchanges in the design of the superclass."
        },
        {
          "label": "C",
          "text": "It means that methods should only directly access the private attributes of the class\nand not call other methods of the class. This avoids passing unnecessary parameters\nto methods."
        },
        {
          "label": "D",
          "text": "It means that the class is designed so that most methods make use of most attributes\nof the class. This indicates that the class is a well-designed simple concept."
        },
        {
          "label": "E",
          "text": "None of the answers above are valid descriptions of “respecting the abstraction\nbarrier”.\nThe next four questions refer to the following class definitions and object instantiations.\nclass A:\ndef __init__(self, x: int):\nself._x = x\ndef f(self, a: int) -> int:\nreturn self.g(a) + self._x\ndef g(self, a: int) -> int:\nreturn a * 2\nclass B(A):\ndef g(self, a: int) -> int:\nreturn self._x * a\ndef h(self, a: int) -> int:\nreturn super().g(a)\nclass C(B):\ndef __init__(self, a: int, b: int):\nsuper().__init__(a)\nself._y = b\ndef f(self, a: int) -> int:\nreturn self.h(self._y) + a\na = A(2)\nb = B(3)\nc = C(4, 6)"
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "object",
        "method"
      ]
    },
    {
      "id": "semester-one-final-examinations-2021-csse1001-q33",
      "source": "Semester One Final Examinations 2021",
      "pdfFile": "Semester_One_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 33,
      "category": "functions",
      "type": "trace_choice",
      "prompt": "What does a.f(2) return?",
      "options": [
        {
          "label": "A",
          "text": "4"
        },
        {
          "label": "B",
          "text": "6"
        },
        {
          "label": "C",
          "text": "8"
        },
        {
          "label": "D",
          "text": "10"
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-one-final-examinations-2021-csse1001-q34",
      "source": "Semester One Final Examinations 2021",
      "pdfFile": "Semester_One_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 34,
      "category": "functions",
      "type": "trace_choice",
      "prompt": "What does b.f(3) return?",
      "options": [
        {
          "label": "A",
          "text": "6"
        },
        {
          "label": "B",
          "text": "9"
        },
        {
          "label": "C",
          "text": "12"
        },
        {
          "label": "D",
          "text": "15"
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-one-final-examinations-2021-csse1001-q35",
      "source": "Semester One Final Examinations 2021",
      "pdfFile": "Semester_One_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 35,
      "category": "functions",
      "type": "trace_choice",
      "prompt": "What does b.h(4) return?",
      "options": [
        {
          "label": "A",
          "text": "4"
        },
        {
          "label": "B",
          "text": "8"
        },
        {
          "label": "C",
          "text": "11"
        },
        {
          "label": "D",
          "text": "12"
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-one-final-examinations-2021-csse1001-q36",
      "source": "Semester One Final Examinations 2021",
      "pdfFile": "Semester_One_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 36,
      "category": "oop",
      "type": "trace_choice",
      "prompt": "What does c.f(5) return?",
      "options": [
        {
          "label": "A",
          "text": "14"
        },
        {
          "label": "B",
          "text": "15"
        },
        {
          "label": "C",
          "text": "17"
        },
        {
          "label": "D",
          "text": "29"
        },
        {
          "label": "E",
          "text": "Error\nThe next two questions relate to the following simple GUI application. The application has a\ntext field into which users can enter numbers. When started, the GUI appears as in the image\nbelow.\n\nWhen the user presses the Add button, the value in the text field is added to the running total\nand displayed, as shown in the image below.\n\nThe code, with two missing code fragments, is provided below.\nimport tkinter as tk\n\nclass Input(tk.Frame):\ndef __init__(self, parent: tk.Tk, add_event_handler):\nsuper().__init__(parent)\n\nprompt = tk.Label(self, text=\"Enter number to add to total: \")\nprompt.pack(side=tk.LEFT)\n\nself._entry = tk.Entry(self, width=10)\nself._entry.pack(side=tk.LEFT)\n\n## Fragment 1 ##\nadd_button.pack(side=tk.LEFT, padx=20)\n\ndef get_input(self) -> int:\nreturn int(self._entry.get())\n\nclass Add:\ndef __init__(self, master: tk.Tk):\nmaster.title(\"Exam\")\nself._total = 0\n\nself._input_frame = Input(master, self.add)\nself._input_frame.pack(side=tk.TOP)\n\ntotal_label = tk.Label(master, text=\"Running total: \")\ntotal_label.pack(side=tk.LEFT)\nself._result = tk.Label(master)\nself._result.pack(side=tk.LEFT)\n\ndef add(self) -> None:\n## Fragment 2 ##"
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "event"
      ]
    },
    {
      "id": "semester-one-final-examinations-2021-csse1001-q37",
      "source": "Semester One Final Examinations 2021",
      "pdfFile": "Semester_One_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 37,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "What is the required code for ## Fragment 1 ##?",
      "options": [
        {
          "label": "A",
          "text": "add_button = tk.Button(self, text=\"Add\", command=Add())"
        },
        {
          "label": "B",
          "text": "add_button = tk.Button(self, text=\"Add\", command=Add.add)"
        },
        {
          "label": "C",
          "text": "add_button = tk.Button(self, text=\"Add\", command=self.get_input)"
        },
        {
          "label": "D",
          "text": "add_button = tk.Button(self, text=\"Add\", command=add_event_handler)"
        },
        {
          "label": "E",
          "text": "None of the code fragments would implement the GUI correctly."
        }
      ],
      "answer": null,
      "keywords": [
        "event"
      ]
    },
    {
      "id": "semester-one-final-examinations-2021-csse1001-q38",
      "source": "Semester One Final Examinations 2021",
      "pdfFile": "Semester_One_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 38,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "What is the required code for ## Fragment 2 ##?",
      "options": [
        {
          "label": "A",
          "text": "self._total += self.get_input()\nself._result.config(text=str(self._total))"
        },
        {
          "label": "B",
          "text": "self._total += self._input_frame.get_input()\nself._result.config(text=str(self._total))"
        },
        {
          "label": "C",
          "text": "self._total += self._input_frame._entry.get()\nself._result.config(text=str(self._total))"
        },
        {
          "label": "D",
          "text": "self._total += self._input_frame.get_input()\nself._result.config(text=str(self._input_frame.get_input()))"
        },
        {
          "label": "E",
          "text": "None of the code fragments would implement the GUI correctly.\nThe next two questions relate to the following function definition. The function returns a tuple\nindicating how many positive, zero and negative values were in the list passed as a parameter\nto values.\ndef partition(values: list[int]) -> tuple[int, int, int]:\npositives = 0\nzeros = 0\nnegatives = 0\n\nfor value in values:\nif value == 0:\nzeros += 1\nelif value > 0:\npositives += 1\nelse:\nnegatives += 1\n\nreturn (positives, zeros, negatives)"
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "object"
      ]
    },
    {
      "id": "semester-one-final-examinations-2021-csse1001-q39",
      "source": "Semester One Final Examinations 2021",
      "pdfFile": "Semester_One_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 39,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "What is the time complexity, in terms of the logical complexity of the partition function?\nYou may assume arithmetic and comparison operations are constant time operations.",
      "options": [
        {
          "label": "A",
          "text": "O(1) – Constant"
        },
        {
          "label": "B",
          "text": "O(log n) – Logarithmic"
        },
        {
          "label": "C",
          "text": "O(n) – Linear"
        },
        {
          "label": "D",
          "text": "O(n2) – Quadratic"
        },
        {
          "label": "E",
          "text": "O(2n) – Exponential"
        }
      ],
      "answer": null,
      "keywords": [
        "function"
      ]
    },
    {
      "id": "semester-one-final-examinations-2021-csse1001-q40",
      "source": "Semester One Final Examinations 2021",
      "pdfFile": "Semester_One_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 40,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "Assume each of the following sets of lists are individually passed as parameters to the\npartition function. Which of these sets of lists, would be the fewest number of inputs\nthat would be required to adequately test all logical paths in the function?",
      "options": [
        {
          "label": "A",
          "text": "[ ], [1, 0, -1]"
        },
        {
          "label": "B",
          "text": "[ ], [1], [0], [-1]"
        },
        {
          "label": "C",
          "text": "[ ], [1], [0], [-1], [1, 0, -1]"
        },
        {
          "label": "D",
          "text": "[ ], [1], [0], [-1], [1, 0], [0, -1], [1, -1], [1, 0, -1], [1, -2, 0, -1, 2, 0]"
        },
        {
          "label": "E",
          "text": "[ ], [1], [0], [-1], [1, 0], [0, -1], [1, -1], [1, 0, -1], [1, 0, 2, -1], [1, 0, -1, 0], [1, -2, 0, -1],\n[1, 0, 2, -1, 0], [1, -2, 0, -1, 2], [1, -2, 0, -1, 0], [1, -2, 0, -1, 2, 0], [\"a\"], [\"a\", \"b\"], [\"a\", 1]\n\nEND OF EXAMINATION"
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "parameter"
      ]
    },
    {
      "id": "semester-one-final-examinations-2022-csse1001-q1",
      "source": "Semester One Final Examinations 2022",
      "pdfFile": "Semester_One_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 1,
      "category": "variables",
      "type": "trace_choice",
      "prompt": "What does the expression 12 + 4.2 // 2 evaluate to?",
      "options": [
        {
          "label": "A",
          "text": "14.1"
        },
        {
          "label": "B",
          "text": "12.2"
        },
        {
          "label": "C",
          "text": "14"
        },
        {
          "label": "D",
          "text": "14.0"
        },
        {
          "label": "E",
          "text": "None of the above"
        }
      ],
      "answer": null,
      "keywords": [
        "expression"
      ]
    },
    {
      "id": "semester-one-final-examinations-2022-csse1001-q2",
      "source": "Semester One Final Examinations 2022",
      "pdfFile": "Semester_One_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 2,
      "category": "variables",
      "type": "trace_choice",
      "prompt": "What does the expression -1 <= -1 >= -2 evaluate to?",
      "options": [
        {
          "label": "A",
          "text": "0"
        },
        {
          "label": "B",
          "text": "1"
        },
        {
          "label": "C",
          "text": "True"
        },
        {
          "label": "D",
          "text": "False"
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "expression"
      ]
    },
    {
      "id": "semester-one-final-examinations-2022-csse1001-q3",
      "source": "Semester One Final Examinations 2022",
      "pdfFile": "Semester_One_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 3,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What does the expression (11 - 6) % -3 evaluate to?",
      "options": [
        {
          "label": "A",
          "text": "-1"
        },
        {
          "label": "B",
          "text": "1"
        },
        {
          "label": "C",
          "text": "-2"
        },
        {
          "label": "D",
          "text": "2"
        },
        {
          "label": "E",
          "text": "None of the above"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-one-final-examinations-2022-csse1001-q4",
      "source": "Semester One Final Examinations 2022",
      "pdfFile": "Semester_One_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 4,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What does the expression bool(not('c') and 'b') evaluate to?",
      "options": [
        {
          "label": "A",
          "text": "'b'"
        },
        {
          "label": "B",
          "text": "True"
        },
        {
          "label": "C",
          "text": "False"
        },
        {
          "label": "D",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-one-final-examinations-2022-csse1001-q5",
      "source": "Semester One Final Examinations 2022",
      "pdfFile": "Semester_One_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 5,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What does the expression 'hard to know'.split()[-1] evaluate to?",
      "options": [
        {
          "label": "A",
          "text": "['hard', 'to']"
        },
        {
          "label": "B",
          "text": "'know'"
        },
        {
          "label": "C",
          "text": "'hard'"
        },
        {
          "label": "D",
          "text": "['to', 'know']"
        },
        {
          "label": "E",
          "text": "None of the above"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-one-final-examinations-2022-csse1001-q6",
      "source": "Semester One Final Examinations 2022",
      "pdfFile": "Semester_One_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 6,
      "category": "loops",
      "type": "multiple_choice",
      "prompt": "What will be printed out when the following code is executed?\nfor i,c in enumerate(['to','do']):\nprint(c,i)",
      "options": [
        {
          "label": "A",
          "text": "ot\nod"
        },
        {
          "label": "B",
          "text": "to 0 do 1"
        },
        {
          "label": "C",
          "text": "to 0\ndo 1"
        },
        {
          "label": "D",
          "text": "ot 0\nod 1"
        },
        {
          "label": "E",
          "text": "None of the other choices are correct"
        }
      ],
      "answer": null,
      "keywords": [
        "loop",
        "condition"
      ]
    },
    {
      "id": "semester-one-final-examinations-2022-csse1001-q7",
      "source": "Semester One Final Examinations 2022",
      "pdfFile": "Semester_One_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 7,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "The following function prompts a user to repeatedly enter numbers until a 0 is entered,\nand then does some processing. Which of the following descriptions best describes the\npurpose of the function below?\n\ndef routine() :\nt = 0\nr = int(input('Please input an integer: '))\nwhile r != 0 :\nif r // 5 == 0:\nt += r\nr = int(input('Please input an integer: '))\nreturn t",
      "options": [
        {
          "label": "A",
          "text": "It returns the sum of all integers entered which are less than 5."
        },
        {
          "label": "B",
          "text": "It returns the sum of the first 5 integers entered."
        },
        {
          "label": "C",
          "text": "It returns the sum of all integers entered, provided they are not divisible by 5."
        },
        {
          "label": "D",
          "text": "It is an infinite loop which is never exited."
        },
        {
          "label": "E",
          "text": "It returns the sum of all integers entered that are divisible by 5."
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-one-final-examinations-2022-csse1001-q8",
      "source": "Semester One Final Examinations 2022",
      "pdfFile": "Semester_One_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 8,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "After the assignment s1 = \"Strategic initiative\" which of the following statements\nassigns \"ate\" to s2?",
      "options": [
        {
          "label": "A",
          "text": "s2 = s1[3:6]"
        },
        {
          "label": "B",
          "text": "s2 = s1[-17:6]"
        },
        {
          "label": "C",
          "text": "s2 = s1[3:-14]"
        },
        {
          "label": "D",
          "text": "All of the above"
        },
        {
          "label": "E",
          "text": "None of the above"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-one-final-examinations-2022-csse1001-q9",
      "source": "Semester One Final Examinations 2022",
      "pdfFile": "Semester_One_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 9,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "What will be printed out when the following code is run?\ndef g():\nw.append(9)\n\nw = [4, 6]\ng()\nprint(w)",
      "options": [
        {
          "label": "A",
          "text": "[4, 6, 9]"
        },
        {
          "label": "B",
          "text": "[4, 6]"
        },
        {
          "label": "C",
          "text": "None"
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above"
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "parameter"
      ]
    },
    {
      "id": "semester-one-final-examinations-2022-csse1001-q10",
      "source": "Semester One Final Examinations 2022",
      "pdfFile": "Semester_One_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 10,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What is the value of d2 after the following statements are evaluated?\nd1 = {1:'c', 2:'d', 3:'e'}\nd2 = d1.update({4:['f']})",
      "options": [
        {
          "label": "A",
          "text": "{1:'c', 2:'d', 3:'e'}"
        },
        {
          "label": "B",
          "text": "{1:'c', 2:'d', 3:'e', 4:['f']}"
        },
        {
          "label": "C",
          "text": "{1:'c', 2:'d', 3:'e', 4:'f'}"
        },
        {
          "label": "D",
          "text": "None"
        },
        {
          "label": "E",
          "text": "None of the other choices are correct"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-one-final-examinations-2022-csse1001-q11",
      "source": "Semester One Final Examinations 2022",
      "pdfFile": "Semester_One_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 11,
      "category": "loops",
      "type": "trace_choice",
      "prompt": "What is the value of a after the following code is executed?\na = 1\nb = 2\nwhile a < 3:\na *= b\nb += 1",
      "options": [
        {
          "label": "A",
          "text": "4"
        },
        {
          "label": "B",
          "text": "6"
        },
        {
          "label": "C",
          "text": "10"
        },
        {
          "label": "D",
          "text": "The code produces an error"
        },
        {
          "label": "E",
          "text": "None of the above"
        }
      ],
      "answer": null,
      "keywords": [
        "loop",
        "condition"
      ]
    },
    {
      "id": "semester-one-final-examinations-2022-csse1001-q12",
      "source": "Semester One Final Examinations 2022",
      "pdfFile": "Semester_One_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 12,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "Some code for a simple calculator is needed to enable a user to add, subtract, multiply\nor divide two numbers. The user must be able to do calculations as often as they wish.\nA snippet of the functioning calculator is given below:\n\nSelect operation.\n1.Add; 2.Subtract; 3.Multiply; 4.Divide\nEnter operation(1/2/3/4): 3\nEnter first number: 4\nEnter second number: 3\n4.0 * 3.0 = 12.0\nEnter operation(1/2/3/4): 2\n\nThe partially completed code to implement the calculator is provided below:\n\nprint(\"\"\"Select operation.\n1.Add; 2.Subtract; 3.Multiply; 4.Divide\"\"\")\n\n## Line 1 ##\n# prompt type of operation from user\nselect = int(input(\"Enter operation(1/2/3/4): \"))\n# prompt for input numbers and perform calculation\nnum1 = float(input(\"Enter first number: \"))\nnum2 = float(input(\"Enter second number: \"))\n### Line 2 ###\nprint(num1, x[select][0],num2, \"=\", x[select][1])\n\nWhat code is required for ## Line 1 ##?",
      "options": [
        {
          "label": "A",
          "text": "for x in '1234':"
        },
        {
          "label": "B",
          "text": "for x in range(1,5):"
        },
        {
          "label": "C",
          "text": "while x in [1,2,3,4]:"
        },
        {
          "label": "D",
          "text": "while True:"
        },
        {
          "label": "E",
          "text": "More than one of the above options are suitable"
        }
      ],
      "answer": null,
      "keywords": [
        "function"
      ]
    },
    {
      "id": "semester-one-final-examinations-2022-csse1001-q13",
      "source": "Semester One Final Examinations 2022",
      "pdfFile": "Semester_One_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 13,
      "category": "loops",
      "type": "multiple_choice",
      "prompt": "Which of the following would be suitable for ## Line 2 ## of the code in Question\n11?",
      "options": [
        {
          "label": "A",
          "text": "x=[(1,'+',num1+num2),(2,'-',num1-num2),\n(3,'*',num1*num2),(4,'/',num1/num2)]"
        },
        {
          "label": "B",
          "text": "x=((1,'+',num1+num2),(2,'-',num1-num2),\n(3,'*',num1*num2),(4,'/',num1/num2))"
        },
        {
          "label": "C",
          "text": "x={1:('+',num1+num2),2:('-',num1-num2),\n3:('*', num1*num2),4:('/',num1/num2)}"
        },
        {
          "label": "D",
          "text": "x={1:['+',num1+num2],2:['-',num1-num2],\n3:['*',num1*num2],4:['/',num1/num2]}"
        },
        {
          "label": "E",
          "text": "More than one of the above choices would be suitable"
        }
      ],
      "answer": null,
      "keywords": [
        "loop",
        "condition"
      ]
    },
    {
      "id": "semester-one-final-examinations-2022-csse1001-q14",
      "source": "Semester One Final Examinations 2022",
      "pdfFile": "Semester_One_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 14,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "What is printed after calling the function f1?\ndef f1() -> None:\nv = 6\nx = f2(v)\nprint(v)\n\ndef f2(x: int) -> int:\nv = 3\nreturn x // v\n\nf1()",
      "options": [
        {
          "label": "A",
          "text": "6"
        },
        {
          "label": "B",
          "text": "4"
        },
        {
          "label": "C",
          "text": "3"
        },
        {
          "label": "D",
          "text": "0"
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return",
        "call"
      ]
    },
    {
      "id": "semester-one-final-examinations-2022-csse1001-q15",
      "source": "Semester One Final Examinations 2022",
      "pdfFile": "Semester_One_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 15,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "What will be printed after the following code is executed, assuming 23 is the two digit\nnumber entered:\n\nx = input(\"Please enter a two digit number: \")\nx1 = int(x)\nx1 = x1[0]\nprint(\"The first digit is:\", x1)",
      "options": [
        {
          "label": "A",
          "text": "The first digit is: 2"
        },
        {
          "label": "B",
          "text": "The first digit is: 23"
        },
        {
          "label": "C",
          "text": "The first digit is:"
        },
        {
          "label": "D",
          "text": "An Error message"
        },
        {
          "label": "E",
          "text": "None of the above"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-one-final-examinations-2022-csse1001-q16",
      "source": "Semester One Final Examinations 2022",
      "pdfFile": "Semester_One_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 16,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "What is printed after the following code is executed?\ndef f(x: list[int]) -> float:\ny = 0\nz = 0\nfor i in x:\ny += i\nz += 1\nreturn y / z\n\na = [10, 20, 30, 40]\nprint(f(a))",
      "options": [
        {
          "label": "A",
          "text": "10.0"
        },
        {
          "label": "B",
          "text": "25.0"
        },
        {
          "label": "C",
          "text": "33.33333333336"
        },
        {
          "label": "D",
          "text": "40.0"
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-one-final-examinations-2022-csse1001-q17",
      "source": "Semester One Final Examinations 2022",
      "pdfFile": "Semester_One_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 17,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "This and the following two questions refer to the function, load_anag, which is missing\nthree lines of code. The function reads in words from a file, with each line of the file\ncontaining one word and possibly some additional whitespace. The function then\ncreates a dictionary of anagrams (i.e. a group of words with the same letters) from the\nfile.\nFor example, if the file contained the words\n'edit','tide','diet','trams','smart', then the resulting dictionary would be:\n{'deit':['edit', 'tide', 'diet'], 'amrst': ['trams','smart']}.\nNote that each value in the dictionary is a list of unique anagrams. Each key is a string\ncontaining the same letters as the words in the value, but with the letters in alphabetical\norder.\ndef load_anag(filename):\n\"\"\" Add anagrams from filename to a dictionary, d, and\nreturn d.\nload_anag(str) => dict(str: list(str))\n\"\"\"\nd={}\nfd=open(filename, 'r')\nfor line in fd:\n## line 1 ## remove whitespace\nkey=sort_str(word)#sort_str()alphabetically sorts a string\nvalue=d.get(key)\n## line 2 ##\nd[key]=[word]\n## line 3 ##\nvalue.append(word)\nreturn d\nfd.close()\n\nWhat code is required for ## line 1 ##?",
      "options": [
        {
          "label": "A",
          "text": "word=line.split()"
        },
        {
          "label": "B",
          "text": "word=line.strip()"
        },
        {
          "label": "C",
          "text": "word=line.split(' ')"
        },
        {
          "label": "D",
          "text": "More than one of the above options are suitable"
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return",
        "call"
      ]
    },
    {
      "id": "semester-one-final-examinations-2022-csse1001-q18",
      "source": "Semester One Final Examinations 2022",
      "pdfFile": "Semester_One_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 18,
      "category": "loops",
      "type": "multiple_choice",
      "prompt": "Which of the following would be suitable for ## line 2 ##?",
      "options": [
        {
          "label": "A",
          "text": "if word not in value:"
        },
        {
          "label": "B",
          "text": "if d[key]=value:"
        },
        {
          "label": "C",
          "text": "if value is None:"
        },
        {
          "label": "D",
          "text": "None of the other choices are suitable"
        }
      ],
      "answer": null,
      "keywords": [
        "loop",
        "condition"
      ]
    },
    {
      "id": "semester-one-final-examinations-2022-csse1001-q19",
      "source": "Semester One Final Examinations 2022",
      "pdfFile": "Semester_One_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 19,
      "category": "loops",
      "type": "multiple_choice",
      "prompt": "Which of the following would be suitable for ## line 3 ##?",
      "options": [
        {
          "label": "A",
          "text": "elif word not in value:"
        },
        {
          "label": "B",
          "text": "elif word != '':"
        },
        {
          "label": "C",
          "text": "elif len(value)>1:"
        },
        {
          "label": "D",
          "text": "None of the other options are suitable"
        }
      ],
      "answer": null,
      "keywords": [
        "loop",
        "condition"
      ]
    },
    {
      "id": "semester-one-final-examinations-2022-csse1001-q20",
      "source": "Semester One Final Examinations 2022",
      "pdfFile": "Semester_One_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 20,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "The following recursive function definition is used in the next two questions.\ndef fn1(x):\nif len(x) == x[0] :\nreturn x\nreturn fn1(x[3:] + [x[0]])\n\nWhat will the function call fn1([2, 4, 1, 1, 4]) return?",
      "options": [
        {
          "label": "A",
          "text": "[5, 2, 1, 4, 1]"
        },
        {
          "label": "B",
          "text": "[2,5]"
        },
        {
          "label": "C",
          "text": "[1]"
        },
        {
          "label": "D",
          "text": "RecursionError will be raised due to maximum recursion\ndepth being exceeded."
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return",
        "call"
      ]
    },
    {
      "id": "semester-one-final-examinations-2022-csse1001-q21",
      "source": "Semester One Final Examinations 2022",
      "pdfFile": "Semester_One_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 21,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "What will the function call fn1([3, 1, 3, 2, 7]) return?",
      "options": [
        {
          "label": "A",
          "text": "[7, 4, 1, 3, 2]"
        },
        {
          "label": "B",
          "text": "[7, 1, 2]"
        },
        {
          "label": "C",
          "text": "[3, 7]"
        },
        {
          "label": "D",
          "text": "RecursionError will be raised due to maximum recursion\ndepth being exceeded."
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return",
        "call"
      ]
    },
    {
      "id": "semester-one-final-examinations-2022-csse1001-q22",
      "source": "Semester One Final Examinations 2022",
      "pdfFile": "Semester_One_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 22,
      "category": "loops",
      "type": "trace_choice",
      "prompt": "What is the value of zs after running the following code:\nf = lambda x, y : x - y\ng = lambda x : x*2\nzs = [g(x) for x in [1,2,3] if f(x,2)]",
      "options": [
        {
          "label": "A",
          "text": "[2, 6]"
        },
        {
          "label": "B",
          "text": "[1, 9]"
        },
        {
          "label": "C",
          "text": "[2]"
        },
        {
          "label": "D",
          "text": "[]"
        },
        {
          "label": "E",
          "text": "None of the above"
        }
      ],
      "answer": null,
      "keywords": [
        "loop",
        "condition"
      ]
    },
    {
      "id": "semester-one-final-examinations-2022-csse1001-q23",
      "source": "Semester One Final Examinations 2022",
      "pdfFile": "Semester_One_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 23,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "What is the purpose of the raise statement in Python?",
      "options": [
        {
          "label": "A",
          "text": "To attempt to execute a block of code and handle at least some of the errors that may\nbe caused by the statements in the block of code."
        },
        {
          "label": "B",
          "text": "To provide an error handling function that will be called if any error occurs in a block\nof code."
        },
        {
          "label": "C",
          "text": "To indicate that the code has encountered an error it cannot handle locally."
        },
        {
          "label": "D",
          "text": "To identify potential errors that may be encountered in a block of code."
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "call"
      ]
    },
    {
      "id": "semester-one-final-examinations-2022-csse1001-q24",
      "source": "Semester One Final Examinations 2022",
      "pdfFile": "Semester_One_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 24,
      "category": "loops",
      "type": "multiple_choice",
      "prompt": "We want to store the \"maximum team size\" as global constant in a Python\nprogram. According to standards, which name is most appropriate for this variable?",
      "options": [
        {
          "label": "A",
          "text": "maximum_team_size"
        },
        {
          "label": "B",
          "text": "MaximumTeamSize"
        },
        {
          "label": "C",
          "text": "__Maximum_Team_Size__"
        },
        {
          "label": "D",
          "text": "MAXIMUM_TEAM_SIZE"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "loop",
        "condition"
      ]
    },
    {
      "id": "semester-one-final-examinations-2022-csse1001-q25",
      "source": "Semester One Final Examinations 2022",
      "pdfFile": "Semester_One_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 25,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "The following is a recursive function to calculate the sum of a list of numbers.\nExample usage:\n\nsum([]) -> 0\nsum([1])-> 1\nsum([1, 2]) -> 3 # 1 + 2\nsum([1, 2, 3]) -> 6 # 1 + 2 + 3\ndef sum(nums) :\nif len(nums) == 0 :\nreturn 0\nelif len(nums) == 1:\nreturn nums[0]\nreturn ## TODO: what goes here\n\nWhich code fragment will correctly complete the function above?",
      "options": [
        {
          "label": "A",
          "text": "(sum(nums[:len(nums) // 2]) +\nsum(nums[len(nums) // 2:]))"
        },
        {
          "label": "B",
          "text": "(sum(nums[1:len(nums) / 2]) +\nsum(nums[len(nums) / 2:-1]))"
        },
        {
          "label": "C",
          "text": "sum(nums[1:len(nums)]) + sum(nums[len(nums):-1]"
        },
        {
          "label": "D",
          "text": "sum(nums[1:]) + sum(nums[:-1])"
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-one-final-examinations-2022-csse1001-q26",
      "source": "Semester One Final Examinations 2022",
      "pdfFile": "Semester_One_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 26,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What is the value of x after the following is evaluated\n\nd = {'Brown' : {'ID': 732, 'Orders': ['chisel', 'spanner']},\n'Black': {'ID': 461, 'Orders':\n['lathe', 'crowbar']}}\nx = d.get('White',{}).get('Orders',[])",
      "options": [
        {
          "label": "A",
          "text": "['chisel', 'spanner']"
        },
        {
          "label": "B",
          "text": "[]"
        },
        {
          "label": "C",
          "text": "['lathe', 'crowbar']"
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-one-final-examinations-2022-csse1001-q27",
      "source": "Semester One Final Examinations 2022",
      "pdfFile": "Semester_One_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 27,
      "category": "oop",
      "type": "trace_choice",
      "prompt": "What is the value of x after the following is evaluated?\n\nd = {'Brown' : {'ID': 732, 'Orders': ['chisel', 'spanner']},\n'Black': {'ID': 461, 'Orders':\n['lathe', 'crowbar']}}\nx = d.get('Brown',{}).get('Orders',[]).append('hammer')",
      "options": [
        {
          "label": "A",
          "text": "['chisel', 'spanner', ['hammer']]"
        },
        {
          "label": "B",
          "text": "['chisel', 'spanner', 'hammer']"
        },
        {
          "label": "C",
          "text": "None"
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above\n\nThe following partial definition of a SwimRecord class is used in the following\nthree questions.\nclass SwimRecord():\ndef __init__(self, name, club):\n\"\"\"Parameters:\nname(str): swimmer’s name\nclub(str): swimmer’s club\nswim_record(dict): record of swim times\"\"\"\nself._name = name\nself._club = club\nself._swim_record = {}\n\ndef update_swim_record(self, new_results: dict) :\n\"\"\"Add the dictionary, 'new_results', into the current\ndictionary of swim results.\"\"\"\n## code block 1 ##\n\ndef get_swim_results(self, swim_meet: str) :\n\"\"\"Get swim results.\"\"\"\nreturn self._swim_record.get(swim_meet,'Err')\n\ndef get_personal_best(self) :\n\"\"\"Get the shortest time from all swim meets in the\nswim_record. Assume all swim meet events are over the same\ndistance.\"\"\"\n## code block 2 ##"
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "event"
      ]
    },
    {
      "id": "semester-one-final-examinations-2022-csse1001-q28",
      "source": "Semester One Final Examinations 2022",
      "pdfFile": "Semester_One_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 28,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "What is the required code for ## code block 1 ##?",
      "options": [
        {
          "label": "A",
          "text": "self._swim_record += new_results"
        },
        {
          "label": "B",
          "text": "self._swim_record.update(new_results)"
        },
        {
          "label": "C",
          "text": "self._swim_record.append(new_results)"
        },
        {
          "label": "D",
          "text": "None of the code blocks above are correct."
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "object"
      ]
    },
    {
      "id": "semester-one-final-examinations-2022-csse1001-q29",
      "source": "Semester One Final Examinations 2022",
      "pdfFile": "Semester_One_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 29,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "What is the required code for ## code block 2 ##?",
      "options": [
        {
          "label": "A",
          "text": "return min(self._swim_record.items())"
        },
        {
          "label": "B",
          "text": "return min(self._swim_record.values())"
        },
        {
          "label": "C",
          "text": "return min(self._swim_record.keys())"
        },
        {
          "label": "D",
          "text": "return self._swim_record.pop()"
        },
        {
          "label": "E",
          "text": "More than one of the above are suitable\n\nAssume that an object from the SwimRecord class has been created and has the name\njohn_sullivan. Assume also that it contains an accurate record of the past year’s swim\nresults, including those for the 'Noosa' swim meet."
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "object"
      ]
    },
    {
      "id": "semester-one-final-examinations-2022-csse1001-q30",
      "source": "Semester One Final Examinations 2022",
      "pdfFile": "Semester_One_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 30,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "Which of the following will return the swim results for the 'Noosa' swim meet for\nJohn Sullivan?",
      "options": [
        {
          "label": "A",
          "text": "john_sullivan.get_swim_results('Noosa')"
        },
        {
          "label": "B",
          "text": "john_sullivan._swim_record('Noosa')"
        },
        {
          "label": "C",
          "text": "john_sullivan._swim_record['Noosa']"
        },
        {
          "label": "D",
          "text": "More than one of the above"
        },
        {
          "label": "E",
          "text": "None of the above.\n\nThe next five questions refer to the following class definitions and object instantiations.\nclass A(object):\ndef __init__(self, x):\nself._x = 2 * x\ndef m1(self, x):\nreturn self.m2(x) + 2\ndef m2(self, x):\nreturn x - 1\n\nclass B(A):\ndef m2(self, y):\nself._y = y\nreturn self._x + self._y\n\nclass C(B):\ndef __init__(self, x, y):\nsuper().__init__(x)\nself._y = y + 2\ndef m1(self, x) :\nreturn self._x + self._y\n\nclass D(B):\ndef __init__(self, x, y):\nsuper().__init__(x)\nself._x += y\nself._y = y + 2\ndef m1(self, y):\nreturn self._y + y\ndef m2(self, x):\nreturn super().m2(x) - x\n\na = A(1)\nb = B(2)\nc = C(1, 1)\nd = D(2, 1)"
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "object"
      ]
    },
    {
      "id": "semester-one-final-examinations-2022-csse1001-q31",
      "source": "Semester One Final Examinations 2022",
      "pdfFile": "Semester_One_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 31,
      "category": "functions",
      "type": "trace_choice",
      "prompt": "What does a.m1(2) return?",
      "options": [
        {
          "label": "A",
          "text": "1"
        },
        {
          "label": "B",
          "text": "2"
        },
        {
          "label": "C",
          "text": "3"
        },
        {
          "label": "D",
          "text": "4"
        },
        {
          "label": "E",
          "text": "None of the other choices is correct"
        }
      ],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-one-final-examinations-2022-csse1001-q32",
      "source": "Semester One Final Examinations 2022",
      "pdfFile": "Semester_One_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 32,
      "category": "functions",
      "type": "trace_choice",
      "prompt": "What does b.m2(1) return?",
      "options": [
        {
          "label": "A",
          "text": "5"
        },
        {
          "label": "B",
          "text": "6"
        },
        {
          "label": "C",
          "text": "7"
        },
        {
          "label": "D",
          "text": "8"
        },
        {
          "label": "E",
          "text": "None of the other choices is correct"
        }
      ],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-one-final-examinations-2022-csse1001-q33",
      "source": "Semester One Final Examinations 2022",
      "pdfFile": "Semester_One_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 33,
      "category": "functions",
      "type": "trace_choice",
      "prompt": "What does c.m2(3) return?",
      "options": [
        {
          "label": "A",
          "text": "3"
        },
        {
          "label": "B",
          "text": "4"
        },
        {
          "label": "C",
          "text": "5"
        },
        {
          "label": "D",
          "text": "6"
        },
        {
          "label": "E",
          "text": "None of the other choices is correct"
        }
      ],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-one-final-examinations-2022-csse1001-q34",
      "source": "Semester One Final Examinations 2022",
      "pdfFile": "Semester_One_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 34,
      "category": "functions",
      "type": "trace_choice",
      "prompt": "What does d.m1(3) return?",
      "options": [
        {
          "label": "A",
          "text": "4"
        },
        {
          "label": "B",
          "text": "5"
        },
        {
          "label": "C",
          "text": "6"
        },
        {
          "label": "D",
          "text": "7"
        },
        {
          "label": "E",
          "text": "None of the other choices is correct"
        }
      ],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-one-final-examinations-2022-csse1001-q35",
      "source": "Semester One Final Examinations 2022",
      "pdfFile": "Semester_One_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 35,
      "category": "oop",
      "type": "trace_choice",
      "prompt": "What does d.m2(1) return?",
      "options": [
        {
          "label": "A",
          "text": "5"
        },
        {
          "label": "B",
          "text": "6"
        },
        {
          "label": "C",
          "text": "7"
        },
        {
          "label": "D",
          "text": "8"
        },
        {
          "label": "E",
          "text": "None of the other choices is correct\n\nThe next two questions relate to the following simple GUI application. The application has a\ntext field into which users can enter numbers. When started, the GUI appears as in the image\nbelow.\n\nWhen the user presses the Add button, the value in the text field is added to the running total\nand displayed, as shown in the image below.\n\nThe code, with two missing code fragments, is provided below.\nimport tkinter as tk\n\nclass Input(tk.Frame):\ndef __init__(self, parent: tk.Tk, add_event_handler):\nsuper().__init__(parent)\n\nprompt = tk.Label(self, text=\"Enter number to add to\ntotal: \")\nprompt.pack(side=tk.LEFT)\n\nself._entry = tk.Entry(self, width=10)\nself._entry.pack(side=tk.LEFT)\n\n## Fragment 1 ##\nadd_button.pack(side=tk.LEFT, padx=20)\n\ndef get_input(self) -> int:\nreturn int(self._entry.get())\n\nclass Add:\ndef __init__(self, master: tk.Tk):\nmaster.title(\"Exam\")\nself._total = 0\n\nself._input_frame = Input(master, self.add)\nself._input_frame.pack(side=tk.TOP)\n\ntotal_label = tk.Label(master, text=\"Running total: \")\ntotal_label.pack(side=tk.LEFT)\nself._result = tk.Label(master)\nself._result.pack(side=tk.LEFT)\n\ndef add(self) -> None:\n## Fragment 2 ##"
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "event"
      ]
    },
    {
      "id": "semester-one-final-examinations-2022-csse1001-q36",
      "source": "Semester One Final Examinations 2022",
      "pdfFile": "Semester_One_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 36,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "What is the required code for ## Fragment 1 ##?",
      "options": [
        {
          "label": "A",
          "text": "add_button = tk.Button(self, text=\"Add\", command=Add())"
        },
        {
          "label": "B",
          "text": "add_button = tk.Button(self, text=\"Add\", command=Add.add)"
        },
        {
          "label": "C",
          "text": "add_button = tk.Button(self, text=\"Add\",\ncommand=self.get_input)"
        },
        {
          "label": "D",
          "text": "add_button = tk.Button(self, text=\"Add\",\ncommand=add_event_handler)"
        },
        {
          "label": "E",
          "text": "None of the code fragments would implement the GUI correctly."
        }
      ],
      "answer": null,
      "keywords": [
        "event"
      ]
    },
    {
      "id": "semester-one-final-examinations-2022-csse1001-q37",
      "source": "Semester One Final Examinations 2022",
      "pdfFile": "Semester_One_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 37,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "What is the required code for ## Fragment 2 ##?",
      "options": [
        {
          "label": "A",
          "text": "self._total += self.get_input()\nself._result.config(text=str(self._total))"
        },
        {
          "label": "B",
          "text": "self._total += self._input_frame.get_input()\nself._result.config(text=str(self._total))"
        },
        {
          "label": "C",
          "text": "self._total += self._input_frame._entry.get()\nself._result.config(text=str(self._total))"
        },
        {
          "label": "D",
          "text": "self._total += self._input_frame.get_input()\nself._result.config(text=str(self._input_frame.get_input()))"
        },
        {
          "label": "E",
          "text": "None of the code fragments would implement the GUI correctly."
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "object"
      ]
    },
    {
      "id": "semester-one-final-examinations-2022-csse1001-q38",
      "source": "Semester One Final Examinations 2022",
      "pdfFile": "Semester_One_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 38,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "The following code reverses a list and removes its negative elements.\n\ndef reverse_and_remove(xs: list[int]) -> list[int]:\nans = []\nfor k in range(len(xs)):\nans.append(xs[-k-1])\nreturn [x for x in ans if x >= 0]\n\nLet n = length(xs). The complexity of reverse_and_remove is:",
      "options": [
        {
          "label": "A",
          "text": "O(1)"
        },
        {
          "label": "B",
          "text": "O(n)"
        },
        {
          "label": "C",
          "text": "O(n^2)"
        },
        {
          "label": "D",
          "text": "O(log n)"
        },
        {
          "label": "E",
          "text": "None of the above"
        }
      ],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-one-final-examinations-2022-csse1001-q39",
      "source": "Semester One Final Examinations 2022",
      "pdfFile": "Semester_One_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 39,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "What error will this function throw when invoked?\n\ndef foo():\nxs = (1, 2)\nys = [3, 4]\nreturn xs + ys",
      "options": [
        {
          "label": "A",
          "text": "NameError."
        },
        {
          "label": "B",
          "text": "ValueError."
        },
        {
          "label": "C",
          "text": "TypeError"
        },
        {
          "label": "D",
          "text": "IndexError."
        },
        {
          "label": "E",
          "text": "SyntaxError."
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-one-final-examinations-2022-csse1001-q40",
      "source": "Semester One Final Examinations 2022",
      "pdfFile": "Semester_One_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 40,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "Consider the following function:\n\ndef bar(x, y, z):\nif length(x) > z[0]:\nif y in z:\nprint(y)\nreturn y[0]\n\nWhich (if any) is a possible type-contract for bar?",
      "options": [
        {
          "label": "A",
          "text": "def bar(x: list[str], y: str , z: list[int]) -> None"
        },
        {
          "label": "B",
          "text": "def bar(x: int, y: list[str], z: int) -> int"
        },
        {
          "label": "C",
          "text": "def bar(x: str, y: str, z: str) -> str"
        },
        {
          "label": "D",
          "text": "def bar(x: list[str], y: str , z: list[int]) -> str"
        },
        {
          "label": "E",
          "text": "None of the above.\n\nEND OF EXAMINATION"
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-two-examinations-2023-csse1001-q1",
      "source": "Semester Two Examinations 2023",
      "pdfFile": "Semester_Two_Examinations_2023_CSSE1001.pdf",
      "questionNumber": 1,
      "category": "variables",
      "type": "trace_choice",
      "prompt": "What is stored in x after only the following\ncode is executed by Python?\n1 Pi = 3.14\n2 x= 2 *'Pi'",
      "options": [
        {
          "label": "A",
          "text": "6"
        },
        {
          "label": "B",
          "text": "6.0"
        },
        {
          "label": "C",
          "text": "6.18"
        },
        {
          "label": "D",
          "text": "'PiPi'"
        }
      ],
      "answer": null,
      "keywords": [
        "value",
        "expression"
      ]
    },
    {
      "id": "semester-two-examinations-2023-csse1001-q2",
      "source": "Semester Two Examinations 2023",
      "pdfFile": "Semester_Two_Examinations_2023_CSSE1001.pdf",
      "questionNumber": 2,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "Which statement below is false?",
      "options": [
        {
          "label": "A",
          "text": "We do not have to verify preconditions because it is the user’s fault for breaking them."
        },
        {
          "label": "B",
          "text": "Functions have a “local scope” which means we can use the same variable-name in\ndifferent functions instead of having to use many unique variable-names."
        },
        {
          "label": "C",
          "text": "A constant value in Python can be modified."
        },
        {
          "label": "D",
          "text": "Python prohibits the modification of private variables and the only way to change one\nis with a getter."
        }
      ],
      "answer": null,
      "keywords": [
        "state"
      ]
    },
    {
      "id": "semester-two-examinations-2023-csse1001-q3",
      "source": "Semester Two Examinations 2023",
      "pdfFile": "Semester_Two_Examinations_2023_CSSE1001.pdf",
      "questionNumber": 3,
      "category": "functions",
      "type": "trace_choice",
      "prompt": "What is stored in x after only the following\ncode is executed by Python?\n1 def foo(x: int, y: int) -> int:\n2 if x > y:\n3 z=x-y\n4 elif x < y:\n5 z=y-x\n6 return z\n7\n8 x = foo(6, 6)",
      "options": [
        {
          "label": "A",
          "text": "0"
        },
        {
          "label": "B",
          "text": "6"
        },
        {
          "label": "C",
          "text": "-6"
        },
        {
          "label": "D",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-two-examinations-2023-csse1001-q4",
      "source": "Semester Two Examinations 2023",
      "pdfFile": "Semester_Two_Examinations_2023_CSSE1001.pdf",
      "questionNumber": 4,
      "category": "variables",
      "type": "trace_choice",
      "prompt": "What does the following arithmetic expression\nevaluate to in Python?\n2 ** 3%5-1",
      "options": [
        {
          "label": "A",
          "text": "0"
        },
        {
          "label": "B",
          "text": "2"
        },
        {
          "label": "C",
          "text": "4"
        },
        {
          "label": "D",
          "text": "7"
        }
      ],
      "answer": null,
      "keywords": [
        "expression"
      ]
    },
    {
      "id": "semester-two-examinations-2023-csse1001-q5",
      "source": "Semester Two Examinations 2023",
      "pdfFile": "Semester_Two_Examinations_2023_CSSE1001.pdf",
      "questionNumber": 5,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What is the value of xs after only the following\nis evaluated?\n1 xs = (1, 2, 3)\n2 ys = xs\n3 ys[1] = 0",
      "options": [
        {
          "label": "A",
          "text": "(0, 2, 3)"
        },
        {
          "label": "B",
          "text": "(1, 0, 3)"
        },
        {
          "label": "C",
          "text": "None"
        },
        {
          "label": "D",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-examinations-2023-csse1001-q6",
      "source": "Semester Two Examinations 2023",
      "pdfFile": "Semester_Two_Examinations_2023_CSSE1001.pdf",
      "questionNumber": 6,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What is stored in x when only the following is\nexecuted by Python.\n1 x = len(\"1\\t2\\t3\")",
      "options": [
        {
          "label": "A",
          "text": "5"
        },
        {
          "label": "B",
          "text": "7"
        },
        {
          "label": "C",
          "text": "11"
        },
        {
          "label": "D",
          "text": "It depends on the number of\nspaces in a tab."
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-examinations-2023-csse1001-q7",
      "source": "Semester Two Examinations 2023",
      "pdfFile": "Semester_Two_Examinations_2023_CSSE1001.pdf",
      "questionNumber": 7,
      "category": "loops",
      "type": "trace_choice",
      "prompt": "What is the value of y after only the following\nhas been executed.\n1 y=0\n2 for x in range(5):\n3 if x == 2 or 3 or 4 or 5:\n4 y += 1",
      "options": [
        {
          "label": "A",
          "text": "2"
        },
        {
          "label": "B",
          "text": "3"
        },
        {
          "label": "C",
          "text": "4"
        },
        {
          "label": "D",
          "text": "5"
        }
      ],
      "answer": null,
      "keywords": [
        "loop",
        "condition"
      ]
    },
    {
      "id": "semester-two-examinations-2023-csse1001-q8",
      "source": "Semester Two Examinations 2023",
      "pdfFile": "Semester_Two_Examinations_2023_CSSE1001.pdf",
      "questionNumber": 8,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "How many of the following statements evalu-\nate to True?\n1 bool(\"False\")\n2 bool(\" \") # 1 space\n3 bool(False and True or True)",
      "options": [
        {
          "label": "A",
          "text": "0"
        },
        {
          "label": "B",
          "text": "1"
        },
        {
          "label": "C",
          "text": "2"
        },
        {
          "label": "D",
          "text": "3"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-examinations-2023-csse1001-q9",
      "source": "Semester Two Examinations 2023",
      "pdfFile": "Semester_Two_Examinations_2023_CSSE1001.pdf",
      "questionNumber": 9,
      "category": "functions",
      "type": "trace_choice",
      "prompt": "What is stored in y after only the following\ncode is executed.\n1 def foo(xs: str) -> str:\n2 if xs:\n3 return 2 *xs\n4 y = foo(\"\")",
      "options": [
        {
          "label": "A",
          "text": "\"\" (empty string)"
        },
        {
          "label": "B",
          "text": "\"\" (one space)"
        },
        {
          "label": "C",
          "text": "\"\" (two spaces)"
        },
        {
          "label": "D",
          "text": "None"
        }
      ],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-two-examinations-2023-csse1001-q10",
      "source": "Semester Two Examinations 2023",
      "pdfFile": "Semester_Two_Examinations_2023_CSSE1001.pdf",
      "questionNumber": 10,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "What is the appropriate type-hint for the following function, assuming the function contains\nvalid code and can be called without generating an error?\n1 def foo(x, y, z):\n2 for z in y:\n3 if x in z:\n4 z.append(x)\n5 return x * y[0] + z",
      "options": [
        {
          "label": "A",
          "text": "foo(x: str, y: list[str], z: str) -> str"
        },
        {
          "label": "B",
          "text": "foo(x: int, y: list[list[int]], z: list[int]) -> list[int]"
        },
        {
          "label": "C",
          "text": "foo(x: int, y: list[str], z: str) -> None"
        },
        {
          "label": "D",
          "text": "foo(x: int, y: list[int], z: int) -> list[int]"
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return",
        "call"
      ]
    },
    {
      "id": "semester-two-examinations-2023-csse1001-q11",
      "source": "Semester Two Examinations 2023",
      "pdfFile": "Semester_Two_Examinations_2023_CSSE1001.pdf",
      "questionNumber": 11,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "Suppose we define a new class for hospital ad-\nmissions. Which name is most appropriate for\nthis class?",
      "options": [
        {
          "label": "A",
          "text": "hospital_admissions"
        },
        {
          "label": "B",
          "text": "HOSPITAL_ADMISSIONS"
        },
        {
          "label": "C",
          "text": "HospitalAdmissions"
        },
        {
          "label": "D",
          "text": "__hospital_admissions__"
        }
      ],
      "answer": null,
      "keywords": [
        "class"
      ]
    },
    {
      "id": "semester-two-examinations-2023-csse1001-q12",
      "source": "Semester Two Examinations 2023",
      "pdfFile": "Semester_Two_Examinations_2023_CSSE1001.pdf",
      "questionNumber": 12,
      "category": "functions",
      "type": "trace_choice",
      "prompt": "What is the value of x after only the following code is\nrun?\n1 x=0\n2\n3 def foo(x: int) -> int:\n4 x=x+1\n5\n6 foo(x)\n7 foo(x)",
      "options": [
        {
          "label": "A",
          "text": "0"
        },
        {
          "label": "B",
          "text": "1"
        },
        {
          "label": "C",
          "text": "2"
        },
        {
          "label": "D",
          "text": "Error."
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "parameter"
      ]
    },
    {
      "id": "semester-two-examinations-2023-csse1001-q13",
      "source": "Semester Two Examinations 2023",
      "pdfFile": "Semester_Two_Examinations_2023_CSSE1001.pdf",
      "questionNumber": 13,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "The following is an incomplete recursive function that\ncounts the numbers of times a given integer occurs in a\ngiven list.\n1 def foo(xs: list[int], x: int) -> int:\n2 \"\"\"\n3 >>> foo([10, 10, 20], 20)\n4 1\n5 >>> foo([10, 10, 20], 10)\n6 2\n7 \"\"\"\n8 a, b = ?\n9 if len(xs) == a:\n10 return b\n11 return (xs[0] == x) + foo(xs[1:])\nWhat should be assigned to a, b at line 8 to make the\nfunction work?\nRecall int(True) == 1 and int(False) == 0 .",
      "options": [
        {
          "label": "A",
          "text": "0, 0"
        },
        {
          "label": "B",
          "text": "1, 1"
        },
        {
          "label": "C",
          "text": "0, xs[0] == x"
        },
        {
          "label": "D",
          "text": "1, xs[0] == x"
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return",
        "call"
      ]
    },
    {
      "id": "semester-two-examinations-2023-csse1001-q14",
      "source": "Semester Two Examinations 2023",
      "pdfFile": "Semester_Two_Examinations_2023_CSSE1001.pdf",
      "questionNumber": 14,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "What best describes the behaviour of the following function?\n1 def foo(y, z):\n2 for x in y:\n3 if x > z:\n4 return True\n5 else:\n6 return False\n7 return False",
      "options": [
        {
          "label": "A",
          "text": "Always returns True."
        },
        {
          "label": "B",
          "text": "Always returns False."
        },
        {
          "label": "C",
          "text": "Returns False only when there is no element of y that is strictly greater than z."
        },
        {
          "label": "D",
          "text": "Returns True only when the first element of y is strictly greater than z."
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-two-examinations-2023-csse1001-q15",
      "source": "Semester Two Examinations 2023",
      "pdfFile": "Semester_Two_Examinations_2023_CSSE1001.pdf",
      "questionNumber": 15,
      "category": "oop",
      "type": "trace_choice",
      "prompt": "What is stored in x after running only the following code.\n1 x = \"drake is overrated\".capitalize()\nGiven that\n2 Help on method _descriptor:\n3\n4 capitalize(self, /)\n5 Return a capitalized version of the string.\n6\n7 More specifically, make the first character have\n8 upper case and the rest lower case.",
      "options": [
        {
          "label": "A",
          "text": "\"Drake is overrated\""
        },
        {
          "label": "B",
          "text": "\"Drake Is Overrated\""
        },
        {
          "label": "C",
          "text": "\"DRAKE IS OVERRATED\""
        },
        {
          "label": "D",
          "text": "None"
        }
      ],
      "answer": null,
      "keywords": [
        "method"
      ]
    },
    {
      "id": "semester-two-examinations-2023-csse1001-q16",
      "source": "Semester Two Examinations 2023",
      "pdfFile": "Semester_Two_Examinations_2023_CSSE1001.pdf",
      "questionNumber": 16,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "Suppose the following lines of Python have been exe-\ncuted.\n1 letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G']\n2 xs = letters[5:-5:1]\nWhat is stored in xs?",
      "options": [
        {
          "label": "A",
          "text": "['F', 'E']"
        },
        {
          "label": "B",
          "text": "['F', 'E', 'D']"
        },
        {
          "label": "C",
          "text": "[]"
        },
        {
          "label": "D",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-examinations-2023-csse1001-q17",
      "source": "Semester Two Examinations 2023",
      "pdfFile": "Semester_Two_Examinations_2023_CSSE1001.pdf",
      "questionNumber": 17,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "What type of error is thrown by executing the following\ncode?\n1 def foo(x: str, y: str) -> str:\n2 \"\"\"\n3 >>> foo(\"Monty\", \"Python\")\n4 'MontyPython'\n5 \"\"\"\n6 return x + y\n7\n8 ans = foo(2, 1/3)",
      "options": [
        {
          "label": "A",
          "text": "TypeError"
        },
        {
          "label": "B",
          "text": "NameError"
        },
        {
          "label": "C",
          "text": "ValueError"
        },
        {
          "label": "D",
          "text": "This is valid Python\ncode."
        }
      ],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-two-examinations-2023-csse1001-q18",
      "source": "Semester Two Examinations 2023",
      "pdfFile": "Semester_Two_Examinations_2023_CSSE1001.pdf",
      "questionNumber": 18,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What is stored in x after only the following is executed.\nx = (1) + (2) + (3)",
      "options": [
        {
          "label": "A",
          "text": "(1, 2, 3)"
        },
        {
          "label": "B",
          "text": "(1, (2, 3))"
        },
        {
          "label": "C",
          "text": "((1, 2), 3)"
        },
        {
          "label": "D",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-examinations-2023-csse1001-q19",
      "source": "Semester Two Examinations 2023",
      "pdfFile": "Semester_Two_Examinations_2023_CSSE1001.pdf",
      "questionNumber": 19,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "What is the behaviour of the following function, supposing it is called properly (i.e. precon-\nditions are satisfied)?\n1 def foo(xss: list[list[int]]) -> dict[list[int], int]:\n2 \"\"\" Precondition: len(xss) > 0\n3 \"\"\"\n4 ans = dict()\n5 for xs in xss:\n6 ans[xs] = sum(xs)\n7 return ans",
      "options": [
        {
          "label": "A",
          "text": "foo always returns None."
        },
        {
          "label": "B",
          "text": "foo always raises an error."
        },
        {
          "label": "C",
          "text": "foo returns a dictionary mapping lists to their sums."
        },
        {
          "label": "D",
          "text": "foo has a logical error because many lists can have the same sum."
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return",
        "call"
      ]
    },
    {
      "id": "semester-two-examinations-2023-csse1001-q20",
      "source": "Semester Two Examinations 2023",
      "pdfFile": "Semester_Two_Examinations_2023_CSSE1001.pdf",
      "questionNumber": 20,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "Which is not a Python naming convention/rule?",
      "options": [
        {
          "label": "A",
          "text": "Class attributes that should not be changed by the user (i.e. private variables) start with\nan underscore _like_this."
        },
        {
          "label": "B",
          "text": "Magic methods are surrounded by double underscore __like_this__."
        },
        {
          "label": "C",
          "text": "Global constants are capitalized LIKE_THIS."
        },
        {
          "label": "D",
          "text": "Class attributes are camel cased likeThis."
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "method"
      ]
    },
    {
      "id": "semester-two-examinations-2023-csse1001-q21",
      "source": "Semester Two Examinations 2023",
      "pdfFile": "Semester_Two_Examinations_2023_CSSE1001.pdf",
      "questionNumber": 21,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What is the value of xs after executing the following?\n1 ys = [\"A\", \"B\"]\n2 xs = [\"D\"]\n3 ys.extend([\"C\"])\n4 xs.append(ys)",
      "options": [
        {
          "label": "A",
          "text": "[\"D\", [\"A\", \"B\", \"C\"]]"
        },
        {
          "label": "B",
          "text": "[\"D\", \"A\", \"B\", \"C\"]"
        },
        {
          "label": "C",
          "text": "[\"D\", [\"A\", \"B\", [\"C\"]]]"
        },
        {
          "label": "D",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-examinations-2023-csse1001-q22",
      "source": "Semester Two Examinations 2023",
      "pdfFile": "Semester_Two_Examinations_2023_CSSE1001.pdf",
      "questionNumber": 22,
      "category": "oop",
      "type": "code_choice",
      "prompt": "What line of code should replace #sub in order\nto generate the window illustrated above?\n1 import tkinter as tk\n2 root = tk.Tk()\n3 #sub\n4 root.mainloop()",
      "options": [
        {
          "label": "A",
          "text": "root.geometry(\"200x400\")"
        },
        {
          "label": "B",
          "text": "root.geometry(\"200 x 400\")"
        },
        {
          "label": "C",
          "text": "root.geometry(\"400x200\")"
        },
        {
          "label": "D",
          "text": "root.geometry(\"400 x 200\")"
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "object"
      ]
    },
    {
      "id": "semester-two-examinations-2023-csse1001-q23",
      "source": "Semester Two Examinations 2023",
      "pdfFile": "Semester_Two_Examinations_2023_CSSE1001.pdf",
      "questionNumber": 23,
      "category": "loops",
      "type": "code_choice",
      "prompt": "Suppose we want to assign True to the name validate when a user has inputed only the\nsingle digit '1', '2', '3', or '4' (and false otherwise). Which proposition should replace\n#sub to accomplish this?\n1 value = input(\"Enter a single digit: \")\n2 validate = #sub",
      "options": [
        {
          "label": "A",
          "text": "value == \"1\" or \"2\" or \"3\" or \"4\""
        },
        {
          "label": "B",
          "text": "value in \"1234\""
        },
        {
          "label": "C",
          "text": "\"1\" <= value <= \"4\""
        },
        {
          "label": "D",
          "text": "int(value) in range(1, 5)"
        }
      ],
      "answer": null,
      "keywords": [
        "loop",
        "condition"
      ]
    },
    {
      "id": "semester-two-examinations-2023-csse1001-q24",
      "source": "Semester Two Examinations 2023",
      "pdfFile": "Semester_Two_Examinations_2023_CSSE1001.pdf",
      "questionNumber": 24,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "What exception should be used at <Error> to complete\nthe function?\n1 def foo() -> int:\n2 \"\"\"\n3 Prompts the user to enter an integer.\n4 Repeats until a number is entered.\n5 \"\"\"\n6 try:\n7 return int(input(\"Enter an integer \"))\n8 except <Error>:\n9 return foo()",
      "options": [
        {
          "label": "A",
          "text": "TypeError"
        },
        {
          "label": "B",
          "text": "ValueError"
        },
        {
          "label": "C",
          "text": "InputError"
        },
        {
          "label": "D",
          "text": "IntError"
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-two-examinations-2023-csse1001-q25",
      "source": "Semester Two Examinations 2023",
      "pdfFile": "Semester_Two_Examinations_2023_CSSE1001.pdf",
      "questionNumber": 25,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "Consider the following function.\n1 def foo(xs: list[int], ys: dict) -> bool:\n2 for x in xs:\n3 if not x in [ys[k] for k in ys]:\n4 return False\n5 return True",
      "options": [
        {
          "label": "A",
          "text": "foo always returns True."
        },
        {
          "label": "B",
          "text": "foo always returns False."
        },
        {
          "label": "C",
          "text": "foo returns True only when every element of xs is a key of ys."
        },
        {
          "label": "D",
          "text": "foo returns True only when every element of xs is a value of ys."
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-two-examinations-2023-csse1001-q26",
      "source": "Semester Two Examinations 2023",
      "pdfFile": "Semester_Two_Examinations_2023_CSSE1001.pdf",
      "questionNumber": 26,
      "category": "oop",
      "type": "code_choice",
      "prompt": "The following tkinter window has been strecthed using the mouse.\nWhat line of code should replace #sub in order to generate the window illustrated above?\n1 import tkinter as tk\n2 root = tk.Tk()\n3 label = tk.Label(text = \"Drizzy\", background = \"black\", foreground = \"white\")\n4 # sub\n5 label.pack(expand = opts[0], fill = opts[1])\n6 root.mainloop()",
      "options": [
        {
          "label": "A",
          "text": "opts = Tk.TRUE, Tk.NONE"
        },
        {
          "label": "B",
          "text": "opts = Tk.FALSE, Tk.BOTH"
        },
        {
          "label": "C",
          "text": "opts = Tk.NONE, Tk.TRUE"
        },
        {
          "label": "D",
          "text": "opts = Tk.BOTH, Tk.FALSE"
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "object"
      ]
    },
    {
      "id": "semester-two-examinations-2023-csse1001-q27",
      "source": "Semester Two Examinations 2023",
      "pdfFile": "Semester_Two_Examinations_2023_CSSE1001.pdf",
      "questionNumber": 27,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "What is the purpose of \"setter\" methods as they pertain to objects?",
      "options": [
        {
          "label": "A",
          "text": "They are used to change the value of a private variable."
        },
        {
          "label": "B",
          "text": "They are used to retrieve the value of a private variable."
        },
        {
          "label": "C",
          "text": "They change a private variable to a public one and vice-versa."
        },
        {
          "label": "D",
          "text": "They ensure that all private variables have the correct type."
        }
      ],
      "answer": null,
      "keywords": [
        "object",
        "method"
      ]
    },
    {
      "id": "semester-two-examinations-2023-csse1001-q28",
      "source": "Semester Two Examinations 2023",
      "pdfFile": "Semester_Two_Examinations_2023_CSSE1001.pdf",
      "questionNumber": 28,
      "category": "loops",
      "type": "trace_choice",
      "prompt": "How many exclamation marks ( !) are in output.txt after running (only) the following code?\n1 the_file = open(\"output.txt\", 'a')\n2 for k in range(1, 4):\n3 the_file.write(k * '!')\n4 the_file.close()",
      "options": [
        {
          "label": "A",
          "text": "1"
        },
        {
          "label": "B",
          "text": "3"
        },
        {
          "label": "C",
          "text": "6"
        },
        {
          "label": "D",
          "text": "Impossible to deduce without knowing the initial contents of output.txt."
        }
      ],
      "answer": null,
      "keywords": [
        "loop",
        "condition"
      ]
    },
    {
      "id": "semester-two-examinations-2023-csse1001-q29",
      "source": "Semester Two Examinations 2023",
      "pdfFile": "Semester_Two_Examinations_2023_CSSE1001.pdf",
      "questionNumber": 29,
      "category": "loops",
      "type": "multiple_choice",
      "prompt": "Which of the following is not a necessary feature of an\nimperative programming language?",
      "options": [
        {
          "label": "A",
          "text": "Iteration."
        },
        {
          "label": "B",
          "text": "Selection."
        },
        {
          "label": "C",
          "text": "Transparency ."
        },
        {
          "label": "D",
          "text": "Sequencing."
        }
      ],
      "answer": null,
      "keywords": [
        "iteration"
      ]
    },
    {
      "id": "semester-two-examinations-2023-csse1001-q30",
      "source": "Semester Two Examinations 2023",
      "pdfFile": "Semester_Two_Examinations_2023_CSSE1001.pdf",
      "questionNumber": 30,
      "category": "oop",
      "type": "trace_choice",
      "prompt": "What is the value of z after running the following code?\n1 xs = ['a', (3,4), {1: 'b'}]\n2 ys = xs.copy()\n3 ys[2] = {2: 'c'}\n4 z = xs[2][1]",
      "options": [
        {
          "label": "A",
          "text": "'a'"
        },
        {
          "label": "B",
          "text": "'b'"
        },
        {
          "label": "C",
          "text": "'c'"
        },
        {
          "label": "D",
          "text": "Error.\nThe following will be used to match your exam with your name. Please use BLOCK LETTERS and\nwrite as legibly as possible.\nStudent Number\nFamily Name\nGiven Name\nFill in the Blank\nThe next five questions refer to the following class definitions.\n1 class A:\n2 def __init__(self, x):\n3 self._x=x\n4 def f(self, x):\n5 return self.g(x) - 1\n6 def g(self, x):\n7 return 3 * self._x\n8 def fg(self, x):\n9 return self.f(x) * self.g(x)\n10\n11 class B(A):\n12 def f(self, y):\n13 return self. _x-y\n14 def g(self, y):\n15 self._y=y\n16 return self. _x - self. _y\n17\n18 class C(B):\n19 def __init__(self, x, y):\n20 super().__init__(x)\n21 self._y=y\n22 self._x += y\n23 def f(self, x):\n24 return A.g(self, x) + self. _y\n25\n26 class D(C):\n27 def __init__(self, x, y):\n28 self._x=x\n29 self._y = y + self. _x\n30 def g(self, y):\n31 return super().g(y)\n32 def fg(self, y):\n33 return self. _x * self._y\n34\n35 a = A(0)\n36 b = B(1)\n37 c = C(1,1)\n38 d = D(1,1)\nWrite a single number in the answer box and nothing else ."
        }
      ],
      "answer": null,
      "keywords": [
        "class"
      ]
    },
    {
      "id": "semester-two-examinations-2023-csse1001-q31",
      "source": "Semester Two Examinations 2023",
      "pdfFile": "Semester_Two_Examinations_2023_CSSE1001.pdf",
      "questionNumber": 31,
      "category": "functions",
      "type": "short_answer",
      "prompt": "What does a.f(2) return?",
      "options": [],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-two-examinations-2023-csse1001-q32",
      "source": "Semester Two Examinations 2023",
      "pdfFile": "Semester_Two_Examinations_2023_CSSE1001.pdf",
      "questionNumber": 32,
      "category": "functions",
      "type": "short_answer",
      "prompt": "What does b.g(3) return?",
      "options": [],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-two-examinations-2023-csse1001-q33",
      "source": "Semester Two Examinations 2023",
      "pdfFile": "Semester_Two_Examinations_2023_CSSE1001.pdf",
      "questionNumber": 33,
      "category": "functions",
      "type": "short_answer",
      "prompt": "What does c.fg(2) return?",
      "options": [],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-two-examinations-2023-csse1001-q34",
      "source": "Semester Two Examinations 2023",
      "pdfFile": "Semester_Two_Examinations_2023_CSSE1001.pdf",
      "questionNumber": 34,
      "category": "functions",
      "type": "short_answer",
      "prompt": "What does d.fg(1) return?",
      "options": [],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-two-examinations-2023-csse1001-q35",
      "source": "Semester Two Examinations 2023",
      "pdfFile": "Semester_Two_Examinations_2023_CSSE1001.pdf",
      "questionNumber": 35,
      "category": "functions",
      "type": "short_answer",
      "prompt": "What does d.g(4) return?\nFull Solution",
      "options": [],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-two-examinations-2023-csse1001-q36",
      "source": "Semester Two Examinations 2023",
      "pdfFile": "Semester_Two_Examinations_2023_CSSE1001.pdf",
      "questionNumber": 36,
      "category": "functions",
      "type": "short_answer",
      "prompt": "Write a function foo that satisfies the following specification.\n1 def substring(xs: str, ys: str) -> bool:\n2 \"\"\"\n3 The SUBSTRINGS of ys are all strings arrived at by deleting zero\n4 or more elements of ys. For example the substrings of \"abc\" are\n5 \"abc\", \"ab\", \"ac\", \"bc\", \"a\", \"b\", \"c\" and \"\" (empty string).\n6\n7 Return True when xs is a substring of ys.\n8\n9 >>> substring(\"ac\", \"abc\")\n10 True\n11 >>> substring(\"ca\", \"abc\")\n12 False\n13 \"\"\"\nWrite your answer on the next page.\nWrite your answer on the next page.\nWrite your answer on the next page.\nend of examination",
      "options": [],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-two-examinations-2024-csse1001-q1",
      "source": "Semester Two Examinations 2024",
      "pdfFile": "Semester_Two_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 1,
      "category": "variables",
      "type": "trace_choice",
      "prompt": "What does the following arithmetic expression\nevaluate to in Python?\n1 18 // 4 % 3",
      "options": [
        {
          "label": "A",
          "text": "1.5"
        },
        {
          "label": "B",
          "text": "1"
        },
        {
          "label": "C",
          "text": "18"
        },
        {
          "label": "D",
          "text": "18.0"
        },
        {
          "label": "E",
          "text": "None of the above"
        }
      ],
      "answer": null,
      "keywords": [
        "expression"
      ]
    },
    {
      "id": "semester-two-examinations-2024-csse1001-q2",
      "source": "Semester Two Examinations 2024",
      "pdfFile": "Semester_Two_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 2,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What is stored in x when only the following is\nexecuted by Python ?\n1 x = len(\"\\n\\t23\\t\\n\")",
      "options": [
        {
          "label": "A",
          "text": "10"
        },
        {
          "label": "B",
          "text": "6"
        },
        {
          "label": "C",
          "text": "2"
        },
        {
          "label": "D",
          "text": "It depends on the number of\nspaces in a tab."
        },
        {
          "label": "E",
          "text": "None of the above"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-examinations-2024-csse1001-q3",
      "source": "Semester Two Examinations 2024",
      "pdfFile": "Semester_Two_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 3,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "After starting up the Python interpreter, the following\ncode (and only the following code) is entered.\n1 if True or x:\n2 x=1\n3 else:\n4 x=0\nWhat error, if any , does this code raise?",
      "options": [
        {
          "label": "A",
          "text": "TypeError"
        },
        {
          "label": "B",
          "text": "ValueError"
        },
        {
          "label": "C",
          "text": "NameError"
        },
        {
          "label": "D",
          "text": "SyntaxError"
        },
        {
          "label": "E",
          "text": "This is valid Python code."
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-examinations-2024-csse1001-q4",
      "source": "Semester Two Examinations 2024",
      "pdfFile": "Semester_Two_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 4,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What is the value stored in the variable x after only the following code is run?\n1 x = \"HelloWorld!\"\n2 y=x\n3 y[3] = 'p'\n4 x[-1] = ':'",
      "options": [
        {
          "label": "A",
          "text": "\"HelloWorld:\""
        },
        {
          "label": "B",
          "text": "\"HeploWorld:\""
        },
        {
          "label": "C",
          "text": "\"HelpoWorld:\""
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-examinations-2024-csse1001-q5",
      "source": "Semester Two Examinations 2024",
      "pdfFile": "Semester_Two_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 5,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What is stored in y after only the following is\nentered into Python?\n1 y = ':'.join('hands \\t many'.split('\\t'))",
      "options": [
        {
          "label": "A",
          "text": "hands:many"
        },
        {
          "label": "B",
          "text": "hands : many"
        },
        {
          "label": "C",
          "text": "hands: many"
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-examinations-2024-csse1001-q6",
      "source": "Semester Two Examinations 2024",
      "pdfFile": "Semester_Two_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 6,
      "category": "functions",
      "type": "trace_choice",
      "prompt": "What is stored in x after only the following code is executed?\n1 def foo(xs: list[int], y: int) -> int:\n2 if len(xs) == 0:\n3 return 0\n4 if xs[0] == y:\n5 return 1 + foo(xs[1:], y)\n6 return foo(xs[1:], y)\n7\n8 x = foo([1, 3, 3], 3)",
      "options": [
        {
          "label": "A",
          "text": "0"
        },
        {
          "label": "B",
          "text": "1"
        },
        {
          "label": "C",
          "text": "2"
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above"
        }
      ],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-two-examinations-2024-csse1001-q7",
      "source": "Semester Two Examinations 2024",
      "pdfFile": "Semester_Two_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 7,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "Given the following code:\n1 x = input(\"Prompt: \")\n2 y = input(\"Prompt: \")\n3 print(f\"x + y = {int(x + y)}\")\nIf the user types 5 at the first prompt then 2\nat the second prompt, what is printed?",
      "options": [
        {
          "label": "A",
          "text": "x+y=7"
        },
        {
          "label": "B",
          "text": "x + y = '7'"
        },
        {
          "label": "C",
          "text": "x + y = 52"
        },
        {
          "label": "D",
          "text": "x + y = '52'"
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-examinations-2024-csse1001-q8",
      "source": "Semester Two Examinations 2024",
      "pdfFile": "Semester_Two_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 8,
      "category": "functions",
      "type": "trace_choice",
      "prompt": "What is stored in y after only the following\ncode is executed?\n1 def g(x, z):\n2 x.append(z)\n3 return x\n4\n5 y = ['a', 'b']\n6 g(y, 'c').append(g(y.copy(), 'c'))",
      "options": [
        {
          "label": "A",
          "text": "['a', 'b', 'c']"
        },
        {
          "label": "B",
          "text": "['a', 'b', 'c', 'c']"
        },
        {
          "label": "C",
          "text": "['a', 'b', 'c', 'a', 'b', 'c']"
        },
        {
          "label": "D",
          "text": "['a', 'b', 'c', ['a', 'b', 'c', 'c']]"
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-two-examinations-2024-csse1001-q9",
      "source": "Semester Two Examinations 2024",
      "pdfFile": "Semester_Two_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 9,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "Suppose some code has been styled in accordance\nwith the style guide used in this course. What can be\ndeduced about the name FooBar?\nFooBar is a ... A. class name",
      "options": [
        {
          "label": "B",
          "text": "instance of a class"
        },
        {
          "label": "C",
          "text": "constant variable"
        },
        {
          "label": "D",
          "text": "method"
        },
        {
          "label": "E",
          "text": "None of the above"
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "method"
      ]
    },
    {
      "id": "semester-two-examinations-2024-csse1001-q10",
      "source": "Semester Two Examinations 2024",
      "pdfFile": "Semester_Two_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 10,
      "category": "variables",
      "type": "multiple_choice",
      "prompt": "What will be stored in x after only the following code has been executed?\n1 a = \"h\"\n2 if a == \"a\" or \"e\" or \"i\" or \"o\" or \"u\":\n3 x = \"vowel\"\n4 else:\n5 x = \"not vowel\"",
      "options": [
        {
          "label": "A",
          "text": "\"vowel\""
        },
        {
          "label": "B",
          "text": "\"not vowel\""
        },
        {
          "label": "C",
          "text": "x may be undefined"
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above"
        }
      ],
      "answer": null,
      "keywords": [
        "value",
        "expression"
      ]
    },
    {
      "id": "semester-two-examinations-2024-csse1001-q11",
      "source": "Semester Two Examinations 2024",
      "pdfFile": "Semester_Two_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 11,
      "category": "functions",
      "type": "trace_choice",
      "prompt": "What is the value of x after only the following has been evaluated?\n1 x = \"Hello Hello\".find(\"Hello\")\nGiven that:\n1 S.find(sub[, start[, end]]) -> int\n2\n3 Return the lowest index in S where substring sub is found,\n4 such that sub is contained within S[start:end]. Optional\n5 arguments start and end are interpreted as in slice notation.\n6\n7 Return -1 on failure.",
      "options": [
        {
          "label": "A",
          "text": "0"
        },
        {
          "label": "B",
          "text": "6"
        },
        {
          "label": "C",
          "text": "-1"
        },
        {
          "label": "D",
          "text": "None"
        },
        {
          "label": "E",
          "text": "ValueError"
        }
      ],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-two-examinations-2024-csse1001-q12",
      "source": "Semester Two Examinations 2024",
      "pdfFile": "Semester_Two_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 12,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "What exception should be used at <Error> to complete the function according to its specifi-\ncation?\n1 def get _element(xs: list[int], index: int) -> int:\n2 \"\"\"\n3 Retrieves the element at the provided index in the list.\n4 Continues prompting the user until a valid index is entered.\n5 \"\"\"\n6 try:\n7 return xs[index]\n8 except <Error>:\n9 return get _element(xs, int(input(\"Enter a valid index: \")))",
      "options": [
        {
          "label": "A",
          "text": "TypeError"
        },
        {
          "label": "B",
          "text": "NameError"
        },
        {
          "label": "C",
          "text": "IndexError"
        },
        {
          "label": "D",
          "text": "KeyError"
        },
        {
          "label": "E",
          "text": "ValueError"
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-two-examinations-2024-csse1001-q13",
      "source": "Semester Two Examinations 2024",
      "pdfFile": "Semester_Two_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 13,
      "category": "functions",
      "type": "trace_choice",
      "prompt": "What is the value of b after the following code\nis executed?\n1 def f(x):\n2 a=5\n3 x=x/a\n4 return a+x\n5\n6 a = 10\n7 b = f(a)",
      "options": [
        {
          "label": "A",
          "text": "7"
        },
        {
          "label": "B",
          "text": "7.0"
        },
        {
          "label": "C",
          "text": "15.0"
        },
        {
          "label": "D",
          "text": "15"
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-two-examinations-2024-csse1001-q14",
      "source": "Semester Two Examinations 2024",
      "pdfFile": "Semester_Two_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 14,
      "category": "oop",
      "type": "code_choice",
      "prompt": "What replaces #sub1 and #sub2 in the following code to ensure that button displays when\nthe code is run and the text Clicked! is printed each time the button is pressed? Note that\nError is not a valid answer for this question; if any option would cause an error to occur, it is\nnot the correct answer.\n1 import tkinter as tk\n2\n3 def foo():\n4 print(\"Clicked!\")\n5\n6 window = tk.Tk()\n7 button = tk.Button(window, text=\"Click Me!\", #sub1)\n8 #sub2\n9\n10 window.mainloop()",
      "options": [
        {
          "label": "A",
          "text": "#sub1: command=foo() and #sub2: button.pack()"
        },
        {
          "label": "B",
          "text": "#sub1: command=foo and #sub2: button.display()"
        },
        {
          "label": "C",
          "text": "#sub1: command=foo and #sub2: button.pack()"
        },
        {
          "label": "D",
          "text": "#sub1: command=foo() and #sub2: button.display()"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "object"
      ]
    },
    {
      "id": "semester-two-examinations-2024-csse1001-q15",
      "source": "Semester Two Examinations 2024",
      "pdfFile": "Semester_Two_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 15,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What is the value of y after the following statements\nare evaluated?\n1 x = ['hello', 'HELLO', 'world', 'WORLD']\n2 y = x[-1][-5]",
      "options": [
        {
          "label": "A",
          "text": "'d'"
        },
        {
          "label": "B",
          "text": "'D'"
        },
        {
          "label": "C",
          "text": "'w'"
        },
        {
          "label": "D",
          "text": "'W'"
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-examinations-2024-csse1001-q16",
      "source": "Semester Two Examinations 2024",
      "pdfFile": "Semester_Two_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 16,
      "category": "functions",
      "type": "trace_choice",
      "prompt": "What is the value of x after only the following code is executed?\n1 def foo(num1: int, num2: int):\n2 if num1 == 0:\n3 return num1 * num2\n4 print(num2)\n5\n6 x = foo(3, 4.0)",
      "options": [
        {
          "label": "A",
          "text": "12"
        },
        {
          "label": "B",
          "text": "4.0"
        },
        {
          "label": "C",
          "text": "12.0"
        },
        {
          "label": "D",
          "text": "None"
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-two-examinations-2024-csse1001-q17",
      "source": "Semester Two Examinations 2024",
      "pdfFile": "Semester_Two_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 17,
      "category": "oop",
      "type": "code_choice",
      "prompt": "What line of code should replace #sub in order\nto generate the window illustrated above? Note that Error is not a valid answer for this\nquestion; if any option would cause an error to occur, it is not the correct answer.\n1 import tkinter as tk\n2 root = tk.Tk()\n3 #sub\n4 root.mainloop()",
      "options": [
        {
          "label": "A",
          "text": "root.geometry(\"300x100\")"
        },
        {
          "label": "B",
          "text": "root.geometry(300x100)"
        },
        {
          "label": "C",
          "text": "root.geometry(\"100x300\")"
        },
        {
          "label": "D",
          "text": "root.geometry(100x300)"
        },
        {
          "label": "E",
          "text": "None of the above"
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "object"
      ]
    },
    {
      "id": "semester-two-examinations-2024-csse1001-q18",
      "source": "Semester Two Examinations 2024",
      "pdfFile": "Semester_Two_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 18,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "Consider an instance attribute named self._name, declared in the __init__ method of a class.\nAccording to the style guide followed in this course, what can be said about self._name?",
      "options": [
        {
          "label": "A",
          "text": "It should store the name of the class as a string."
        },
        {
          "label": "B",
          "text": "It should not be accessed or modified directly outside the defining class."
        },
        {
          "label": "C",
          "text": "It can store a mutable object but should never be mutated."
        },
        {
          "label": "D",
          "text": "More than one of the above."
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "object",
        "method"
      ]
    },
    {
      "id": "semester-two-examinations-2024-csse1001-q19",
      "source": "Semester Two Examinations 2024",
      "pdfFile": "Semester_Two_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 19,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What is stored in x after only the following is\nentered into Python?\n1 x = (1, 2) + (2, 3)",
      "options": [
        {
          "label": "A",
          "text": "(1, 2, 3)"
        },
        {
          "label": "B",
          "text": "(3, 5)"
        },
        {
          "label": "C",
          "text": "(1, 2, 2, 3)"
        },
        {
          "label": "D",
          "text": "[(1, 2), (2, 3)]"
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-examinations-2024-csse1001-q20",
      "source": "Semester Two Examinations 2024",
      "pdfFile": "Semester_Two_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 20,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "What error (if any) will the following code produce when executed\nby Python?\n1 def concatenate(xs: list[int], ys: list[int]) -> list[int]:\n2 return xs + ys\n3\n4 concatenate(' ', '2a')",
      "options": [
        {
          "label": "A",
          "text": "SyntaxError"
        },
        {
          "label": "B",
          "text": "TypeError"
        },
        {
          "label": "C",
          "text": "NameError"
        },
        {
          "label": "D",
          "text": "ValueError"
        },
        {
          "label": "E",
          "text": "This is valid Python\ncode."
        }
      ],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-two-examinations-2024-csse1001-q21",
      "source": "Semester Two Examinations 2024",
      "pdfFile": "Semester_Two_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 21,
      "category": "loops",
      "type": "trace_choice",
      "prompt": "What is the value of ys after only the following has been\nevaluated?\n1 z = lambda x: x ** 2\n2 xs = [3, 4, 5, 6]\n3 ys = [z(x) for x in xs if x < 5]",
      "options": [
        {
          "label": "A",
          "text": "[3, 4, 5]"
        },
        {
          "label": "B",
          "text": "[9, 16, 25]"
        },
        {
          "label": "C",
          "text": "[3, 4]"
        },
        {
          "label": "D",
          "text": "[9, 16]"
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "loop",
        "condition"
      ]
    },
    {
      "id": "semester-two-examinations-2024-csse1001-q22",
      "source": "Semester Two Examinations 2024",
      "pdfFile": "Semester_Two_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 22,
      "category": "loops",
      "type": "trace_choice",
      "prompt": "What is the value of x after running the following code?\n1 cs = 'abc'\n2 for i, char in enumerate(cs):\n3 x=i * char",
      "options": [
        {
          "label": "A",
          "text": "'abc'"
        },
        {
          "label": "B",
          "text": "'abbccc'"
        },
        {
          "label": "C",
          "text": "'bcc'"
        },
        {
          "label": "D",
          "text": "'cc'"
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "loop",
        "condition"
      ]
    },
    {
      "id": "semester-two-examinations-2024-csse1001-q23",
      "source": "Semester Two Examinations 2024",
      "pdfFile": "Semester_Two_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 23,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "After the assignment s1 = \"Hello World\" which of the following statements assigns \"o W\"\nto s2?",
      "options": [
        {
          "label": "A",
          "text": "s2 = s1[4:7]"
        },
        {
          "label": "B",
          "text": "s2 = s1[4:-4]"
        },
        {
          "label": "C",
          "text": "s2 = s1[-7:-4]"
        },
        {
          "label": "D",
          "text": "All of the above"
        },
        {
          "label": "E",
          "text": "None of the above"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-examinations-2024-csse1001-q24",
      "source": "Semester Two Examinations 2024",
      "pdfFile": "Semester_Two_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 24,
      "category": "loops",
      "type": "multiple_choice",
      "prompt": "Consider the following assignments.\n1 xss = ['abcdef', 'ABCDEF', 'ghijkl']\n2 yss = ['def', 'DEF']\nHow many of the following expressions are\nequivalent to yss?\n[xs[-3:] for xs in xss[0:2]]\n[xs[3:] for xs in xss[0:-1]]\n[xs[-3:] for xs in xss[-3:-1]]\n[xs[3:] for xs in xss[-3:2]]",
      "options": [
        {
          "label": "A",
          "text": "0"
        },
        {
          "label": "B",
          "text": "1"
        },
        {
          "label": "C",
          "text": "2"
        },
        {
          "label": "D",
          "text": "3"
        },
        {
          "label": "E",
          "text": "4"
        }
      ],
      "answer": null,
      "keywords": [
        "loop",
        "condition"
      ]
    },
    {
      "id": "semester-two-examinations-2024-csse1001-q25",
      "source": "Semester Two Examinations 2024",
      "pdfFile": "Semester_Two_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 25,
      "category": "functions",
      "type": "trace_choice",
      "prompt": "How many stars (*) are in output.txt after calling\nfoo without generating an error?\n1 def foo() -> None:\n2 xs = [' *', ' **', ' ***']\n3 for x in xs:\n4 with open(\"output.txt\", \"w\") as f:\n5 f.write(2*x)\n6 return",
      "options": [
        {
          "label": "A",
          "text": "0"
        },
        {
          "label": "B",
          "text": "3"
        },
        {
          "label": "C",
          "text": "6"
        },
        {
          "label": "D",
          "text": "12"
        },
        {
          "label": "E",
          "text": "Impossible to deduce without\nknowing the initial contents of\noutput.txt."
        }
      ],
      "answer": null,
      "keywords": [
        "return",
        "call"
      ]
    },
    {
      "id": "semester-two-examinations-2024-csse1001-q26",
      "source": "Semester Two Examinations 2024",
      "pdfFile": "Semester_Two_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 26,
      "category": "functions",
      "type": "trace_choice",
      "prompt": "What is stored in y after only the following\ncode is executed.\n1 def foo(xs: list[str]) -> list[str]:\n2 if xs:\n3 xs.append(\" \")\n4 return xs\n5 return []\n6\n7 y = foo([\"\"])",
      "options": [
        {
          "label": "A",
          "text": "[\"\", \" \"]"
        },
        {
          "label": "B",
          "text": "[\" \"]"
        },
        {
          "label": "C",
          "text": "[\"\"]"
        },
        {
          "label": "D",
          "text": "[]"
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-two-examinations-2024-csse1001-q27",
      "source": "Semester Two Examinations 2024",
      "pdfFile": "Semester_Two_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 27,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "What is the best description of the behaviour of the following function?\n1 def bar(d1: dict, d2: dict) -> bool:\n2 for x in d1:\n3 if x not in d2 or d1[x] != d2[x]:\n4 return False\n5 return True\n6",
      "options": [
        {
          "label": "A",
          "text": "bar only returns True when all keys in d2 exist in d1 and False otherwise."
        },
        {
          "label": "B",
          "text": "bar only returns True when all key-value pairs in d1 exist in d2 and False otherwise."
        },
        {
          "label": "C",
          "text": "bar always returns False."
        },
        {
          "label": "D",
          "text": "bar always returns True."
        },
        {
          "label": "E",
          "text": "bar always throws errors"
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-two-examinations-2024-csse1001-q28",
      "source": "Semester Two Examinations 2024",
      "pdfFile": "Semester_Two_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 28,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What is the value of xs after running the following\ncode?\n1 xs = [['12'], {1: '1'}]\n2 xs[1] = {xs[0] : '2'}",
      "options": [
        {
          "label": "A",
          "text": "[['12'], {['12']: '2'}]"
        },
        {
          "label": "B",
          "text": "[['12'], {['1']: '2'}]"
        },
        {
          "label": "C",
          "text": "[['12'],{'12': '2'}"
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-examinations-2024-csse1001-q29",
      "source": "Semester Two Examinations 2024",
      "pdfFile": "Semester_Two_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 29,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What is the value of y after running the following\ncode?\n1 xs = 'hello'\n2 y = (xs[0])[0]",
      "options": [
        {
          "label": "A",
          "text": "'hello'"
        },
        {
          "label": "B",
          "text": "'h'"
        },
        {
          "label": "C",
          "text": "''"
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-examinations-2024-csse1001-q30",
      "source": "Semester Two Examinations 2024",
      "pdfFile": "Semester_Two_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 30,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "Which statement is false?",
      "options": [
        {
          "label": "A",
          "text": "Type-hints are not enforced by Python."
        },
        {
          "label": "B",
          "text": "Python prohibits the user from changing constant variables."
        },
        {
          "label": "C",
          "text": "Functions can be defined inside of functions."
        },
        {
          "label": "D",
          "text": "Every for loop can be written as a while loop"
        },
        {
          "label": "E",
          "text": "None of the above\nThe following will be used to match your exam with your name. Please use BLOCK\nLETTERS and write as legibly as possible.\nStudent Number\nFamily Name\nGiven Name\nFill in the Blank\nThe next five questions refer to the following class definitions.\n1 class A(object) :\n2 def __init__(self, x) :\n3 self._x=2 *x\n4\n5 def f(self, x) :\n6 return x + self. _x\n7\n8 def g(self, x) :\n9 return 2 * self.f(x) - x\n10\n11 class B(A) :\n12 def f(self, x) :\n13 return self. _x-x\n14\n15 class C(B) :\n16 def __init__(self, x, y) :\n17 super().__init__(x)\n18 self._y=y+2\n19\n20 class D(B) :\n21 def __init__(self, x, y) :\n22 super().__init__(x)\n23 self._x += 2 *y\n24 self._y = self. _x+y\n25\n26 def f(self, x) :\n27 return self. _y+x\n28\n29 def g(self, x) :\n30 return super().g(x) - x\n31\n32 a = A(1)\n33 b = B(2)\n34 c = C(1, 1)\n35 d = D(2, 1)"
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "object",
        "state"
      ]
    },
    {
      "id": "semester-two-examinations-2024-csse1001-q31",
      "source": "Semester Two Examinations 2024",
      "pdfFile": "Semester_Two_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 31,
      "category": "functions",
      "type": "short_answer",
      "prompt": "What does a.f(2) return?",
      "options": [],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-two-examinations-2024-csse1001-q32",
      "source": "Semester Two Examinations 2024",
      "pdfFile": "Semester_Two_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 32,
      "category": "functions",
      "type": "short_answer",
      "prompt": "What does b.g(1) return?",
      "options": [],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-two-examinations-2024-csse1001-q33",
      "source": "Semester Two Examinations 2024",
      "pdfFile": "Semester_Two_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 33,
      "category": "functions",
      "type": "short_answer",
      "prompt": "What does c.f(3) return?",
      "options": [],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-two-examinations-2024-csse1001-q34",
      "source": "Semester Two Examinations 2024",
      "pdfFile": "Semester_Two_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 34,
      "category": "functions",
      "type": "short_answer",
      "prompt": "What does d.f(3) return?",
      "options": [],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-two-examinations-2024-csse1001-q35",
      "source": "Semester Two Examinations 2024",
      "pdfFile": "Semester_Two_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 35,
      "category": "functions",
      "type": "short_answer",
      "prompt": "What does d.g(1) return?\nFull solution",
      "options": [],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-two-examinations-2024-csse1001-q36",
      "source": "Semester Two Examinations 2024",
      "pdfFile": "Semester_Two_Examinations_2024_CSSE1001.pdf",
      "questionNumber": 36,
      "category": "functions",
      "type": "short_answer",
      "prompt": "Implement the following function according to its specification. Do not include a docstring.\n1 def remove _adjacent_pairs(cs: str) -> str:\n2 \"\"\" Given a string cs, return the string obtained after removing all adjacent\n3 pairs of duplicate characters from cs. This process should be repeated until no\n4 adjacent duplicate pairs remain.\n5\n6 Parameters:\n7 cs: A string that needs to be processed.\n8\n9 Returns:\n10 A modified version of cs where all adjacent pairs of duplicate characters\n11 have been removed.\n12\n13 Examples:\n14 >>> remove _adjacent_pairs(\"abbaca\")\n15 'ca'\n16 >>> # The above occurs because \"abbaca\" -> \"aaca\" -> \"ca\".\n17\n18 >>> remove _adjacent_pairs(\"aaac\")\n19 'ac'\n20\n21 >>> remove _adjacent_pairs(\"azxxzy\")\n22 'ay'\n23 >>> # The above occurs because \"azxxzy\" -> \"azzy\" -> \"ay\".\n24\n25 >>> remove _adjacent_pairs(\"aabbcc\")\n26 ''\n27 \"\"\"\nWrite your answer on the next page.\nWrite your answer on the next page.\nWrite your answer on the next page.\nWrite your answer here:\nEND OF EXAMINATION",
      "options": [],
      "answer": null,
      "keywords": [
        "function",
        "parameter",
        "return"
      ]
    },
    {
      "id": "semester-two-examinations-2025-csse1001-q1",
      "source": "Semester Two Examinations 2025",
      "pdfFile": "Semester_Two_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 1,
      "category": "loops",
      "type": "trace_choice",
      "prompt": "How many spaces (' ') are in output.txt after running (only) the following code?\n1 for k in range(1, 4):\n2 the_file = open(\"output.txt\", 'w')\n3 the_file.write(k * ' ') # ' ' is a single space\n4 the_file.close()",
      "options": [
        {
          "label": "A",
          "text": "1"
        },
        {
          "label": "B",
          "text": "3"
        },
        {
          "label": "C",
          "text": "6"
        },
        {
          "label": "D",
          "text": "Infinitely many."
        },
        {
          "label": "E",
          "text": "Impossible to deduce without knowing the initial contents of output.txt."
        }
      ],
      "answer": null,
      "keywords": [
        "loop",
        "condition"
      ]
    },
    {
      "id": "semester-two-examinations-2025-csse1001-q2",
      "source": "Semester Two Examinations 2025",
      "pdfFile": "Semester_Two_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 2,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "What prints when only the following code is\nexecuted?\n1 try:\n2 x = int(\"two\")\n3 except TypeError:\n4 print(\"first\")\n5 else:\n6 print(\"second\")\n7\n8 print(\"done\")",
      "options": [
        {
          "label": "A",
          "text": "second\ndone"
        },
        {
          "label": "B",
          "text": "first\ndone"
        },
        {
          "label": "C",
          "text": "first\nsecond\ndone"
        },
        {
          "label": "D",
          "text": "done"
        },
        {
          "label": "E",
          "text": "None of the above"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-examinations-2025-csse1001-q3",
      "source": "Semester Two Examinations 2025",
      "pdfFile": "Semester_Two_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 3,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "What can you deduce about the name\n_foo_bar supposing that the PEP 8 standard\nhas been followed?\n_foo_bar is a . . .",
      "options": [
        {
          "label": "A",
          "text": "a class."
        },
        {
          "label": "B",
          "text": "a global variable"
        },
        {
          "label": "C",
          "text": "a private variable"
        },
        {
          "label": "D",
          "text": "a constant"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "class"
      ]
    },
    {
      "id": "semester-two-examinations-2025-csse1001-q4",
      "source": "Semester Two Examinations 2025",
      "pdfFile": "Semester_Two_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 4,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "Consider the functionarea defined below that computes\nthe area of a rectangle with integer width and height.\nWhat is the type of its return value?\n1 def area(width: int, height: int) -> ?:\n2 \"\"\"\n3 Precondition: width > 0 and height > 0\n4 \"\"\"\n5 ans = width * height",
      "options": [
        {
          "label": "A",
          "text": "int"
        },
        {
          "label": "B",
          "text": "float"
        },
        {
          "label": "C",
          "text": "str"
        },
        {
          "label": "D",
          "text": "char"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-two-examinations-2025-csse1001-q5",
      "source": "Semester Two Examinations 2025",
      "pdfFile": "Semester_Two_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 5,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "Suppose the following assignment has been\nmade.\n1 xs = \"0123456789\"\nWhat list slice of xs produces '74'.",
      "options": [
        {
          "label": "A",
          "text": "xs[2:8:-3]"
        },
        {
          "label": "B",
          "text": "xs[8:2:-3]"
        },
        {
          "label": "C",
          "text": "xs[7:1:-3]"
        },
        {
          "label": "D",
          "text": "xs[1:7:-3]"
        },
        {
          "label": "E",
          "text": "More than one of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "slice"
      ]
    },
    {
      "id": "semester-two-examinations-2025-csse1001-q6",
      "source": "Semester Two Examinations 2025",
      "pdfFile": "Semester_Two_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 6,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "What prints when only the following code is\nexecuted?\n1 class Address():\n2 def __init__(self):\n3 print(\"Address\")\n4\n5 class Person():\n6 def __init__(self):\n7 self.addr = Address()\n8 print(\"Person\")\n9\n10 class Student(Person):\n11 def __init__(self):\n12 super().__init__()\n13 self.school_addr = Address()\n14 print(\"Student\")\n15\n16 s = Student()",
      "options": [
        {
          "label": "A",
          "text": "Address\nPerson\nStudent"
        },
        {
          "label": "B",
          "text": "Address\nPerson\nStudent"
        },
        {
          "label": "C",
          "text": "Address\nAddress\nStudent"
        },
        {
          "label": "D",
          "text": "Person\nStudent\nAddress\nAddress"
        },
        {
          "label": "E",
          "text": "None of the above"
        }
      ],
      "answer": null,
      "keywords": [
        "class"
      ]
    },
    {
      "id": "semester-two-examinations-2025-csse1001-q7",
      "source": "Semester Two Examinations 2025",
      "pdfFile": "Semester_Two_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 7,
      "category": "variables",
      "type": "trace_choice",
      "prompt": "What is stored in x after only the following is\nevaluated by Python?\n1 x = 35 * 2 % -5 ** 2",
      "options": [
        {
          "label": "A",
          "text": "0"
        },
        {
          "label": "B",
          "text": "-5"
        },
        {
          "label": "C",
          "text": "20"
        },
        {
          "label": "D",
          "text": "315"
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "value",
        "expression"
      ]
    },
    {
      "id": "semester-two-examinations-2025-csse1001-q8",
      "source": "Semester Two Examinations 2025",
      "pdfFile": "Semester_Two_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 8,
      "category": "loops",
      "type": "multiple_choice",
      "prompt": "What prints when only the following code is\nexecuted?\n1 x, stars = 8, '*'\n2 while x >= 0:\n3 print(stars)\n4 stars *= 2\n5 x //= 2",
      "options": [
        {
          "label": "A",
          "text": "*"
        },
        {
          "label": "B",
          "text": "*\n**"
        },
        {
          "label": "C",
          "text": "*\n**\n****"
        },
        {
          "label": "D",
          "text": "*\n**\n****\n********"
        },
        {
          "label": "E",
          "text": "Infinitely many stars (i.e. infi-\nnite loop)."
        }
      ],
      "answer": null,
      "keywords": [
        "loop"
      ]
    },
    {
      "id": "semester-two-examinations-2025-csse1001-q9",
      "source": "Semester Two Examinations 2025",
      "pdfFile": "Semester_Two_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 9,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "Which of the following could be a valid representation invariant for a Circle class that has a\n_radius attribute.",
      "options": [
        {
          "label": "A",
          "text": "__repr__ always returns True."
        },
        {
          "label": "B",
          "text": "__repr__ always return type str."
        },
        {
          "label": "C",
          "text": "._radius must always be a non-negative."
        },
        {
          "label": "D",
          "text": "._radius must always be type int."
        },
        {
          "label": "E",
          "text": "__repr__ must return the radius."
        }
      ],
      "answer": null,
      "keywords": [
        "class"
      ]
    },
    {
      "id": "semester-two-examinations-2025-csse1001-q10",
      "source": "Semester Two Examinations 2025",
      "pdfFile": "Semester_Two_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 10,
      "category": "functions",
      "type": "trace_choice",
      "prompt": "What is stored in y after executing only the fol-\nlowing Python code?\n1 x = 10\n2 def func():\n3 x = 20\n4 return x\n5\n6 y = func(), x",
      "options": [
        {
          "label": "A",
          "text": "(20, 20)"
        },
        {
          "label": "B",
          "text": "(10, 20)"
        },
        {
          "label": "C",
          "text": "(20, 10)"
        },
        {
          "label": "D",
          "text": "(10, 10)"
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-two-examinations-2025-csse1001-q11",
      "source": "Semester Two Examinations 2025",
      "pdfFile": "Semester_Two_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 11,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What is stored in xs after executing only the\nfollowing Python code?\n1 xs = \"quack\"\n2 xs = f\"{xs} {xs}\"\n3 xs[0], xs[6] = \"Q\", \"Q\"",
      "options": [
        {
          "label": "A",
          "text": "\"quack\""
        },
        {
          "label": "B",
          "text": "\"quack quack\""
        },
        {
          "label": "C",
          "text": "\"Quack Quack\""
        },
        {
          "label": "D",
          "text": "\"{xs} {xs}\""
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-examinations-2025-csse1001-q12",
      "source": "Semester Two Examinations 2025",
      "pdfFile": "Semester_Two_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 12,
      "category": "oop",
      "type": "trace_choice",
      "prompt": "The following is the documentation for the string method partition.\n1 partition(self, sep, /)\n2 Partition the string into three parts using the given separator.\n3\n4 This will search for the separator in the string. If the separator\n5 is found, returns a 3-tuple containing the part before the separator,\n6 the separator itself, and the part after it.\n7\n8 If the separator is not found, returns a 3-tuple containing the original\n9 string and two empty strings.\nWhat is stored in ys after only the following is evaluated by Python?\n10 xs = \"quackquackquack\"\n11 ys = xs.partition()",
      "options": [
        {
          "label": "A",
          "text": "('quack', 'quack', 'quack')"
        },
        {
          "label": "B",
          "text": "('', 'quack', 'quackquack')"
        },
        {
          "label": "C",
          "text": "('quackquack', '', 'quack')"
        },
        {
          "label": "D",
          "text": "('quackquackquack', '', '')"
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "method"
      ]
    },
    {
      "id": "semester-two-examinations-2025-csse1001-q13",
      "source": "Semester Two Examinations 2025",
      "pdfFile": "Semester_Two_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 13,
      "category": "loops",
      "type": "trace_choice",
      "prompt": "What is the value of y after executing only the\nfollowing Python code?\n1 xs = range(1,5)\n2 for k, x in enumerate(xs):\n3 y = x-k",
      "options": [
        {
          "label": "A",
          "text": "0"
        },
        {
          "label": "B",
          "text": "1"
        },
        {
          "label": "C",
          "text": "-1"
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "loop",
        "condition"
      ]
    },
    {
      "id": "semester-two-examinations-2025-csse1001-q14",
      "source": "Semester Two Examinations 2025",
      "pdfFile": "Semester_Two_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 14,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "Which of the following is the main goal of MVC (Model–View–Controller)?",
      "options": [
        {
          "label": "A",
          "text": "To tightly couple data with the user interface for simplicity"
        },
        {
          "label": "B",
          "text": "To reduce duplication by merging model and view code"
        },
        {
          "label": "C",
          "text": "To separate concerns so that user interface, input handling, and logic can change inde-\npendently"
        },
        {
          "label": "D",
          "text": "To improve program speed by parallelizing tasks"
        },
        {
          "label": "E",
          "text": "To ensure the user interface can directly modify the model for faster updates"
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "object"
      ]
    },
    {
      "id": "semester-two-examinations-2025-csse1001-q15",
      "source": "Semester Two Examinations 2025",
      "pdfFile": "Semester_Two_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 15,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "Suppose d = dict(). Which of the following expressions will throw an error?",
      "options": [
        {
          "label": "A",
          "text": "d[\"Drake\"] = 0"
        },
        {
          "label": "B",
          "text": "d[\"is\"] = [1]"
        },
        {
          "label": "C",
          "text": "d[\"over\"] = (2,)"
        },
        {
          "label": "D",
          "text": "d[\"rated\"] = {3: \"4\"}"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-examinations-2025-csse1001-q16",
      "source": "Semester Two Examinations 2025",
      "pdfFile": "Semester_Two_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 16,
      "category": "functions",
      "type": "code_choice",
      "prompt": "The following is a recursive function with a partially implemented base case; it is intended to\nfind the smallest number in a list of numbers.\nWhat should #sub be replaced with to complete this function if it is to be implemented ac-\ncording to its document string (i.e. no additional preconditions).\n1 def minimum(xs: list[int]) -> int:\n2 \"\"\"\n3 Return the smallest number in the list.\n4 >>> minimum([1, 2, 3])\n5 1\n6 >>> minimum([1])\n7 1\n8 \"\"\"\n9\n10 (a, b) = #sub\n11\n12 if len(xs) == a:\n13 return b\n14\n15 if xs[0] < minimum(xs[1:]):\n16 return xs[0]\n17\n18 return minimum(xs[1:])",
      "options": [
        {
          "label": "A",
          "text": "(0, xs[0])"
        },
        {
          "label": "B",
          "text": "(1, xs[0])"
        },
        {
          "label": "C",
          "text": "(0, float('inf'))"
        },
        {
          "label": "D",
          "text": "(1, float('inf'))"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-two-examinations-2025-csse1001-q17",
      "source": "Semester Two Examinations 2025",
      "pdfFile": "Semester_Two_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 17,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "How many of the following expressions evalu-\nate to True noting that \"\" is the empty string?\n1 bool(\"False\")\n2 bool(1 and \" \")\n3 bool([\"\"])\n4 bool([] or 0 or \"\")",
      "options": [
        {
          "label": "A",
          "text": "0"
        },
        {
          "label": "B",
          "text": "1"
        },
        {
          "label": "C",
          "text": "2"
        },
        {
          "label": "D",
          "text": "3"
        },
        {
          "label": "E",
          "text": "4"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-examinations-2025-csse1001-q18",
      "source": "Semester Two Examinations 2025",
      "pdfFile": "Semester_Two_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 18,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "In which of the following situations would composition be the most appropriate design choice?",
      "options": [
        {
          "label": "A",
          "text": "A Dog class that includes a Cat object."
        },
        {
          "label": "B",
          "text": "A Car class that includes an Engine object."
        },
        {
          "label": "C",
          "text": "A Square class that extends a Shape class."
        },
        {
          "label": "D",
          "text": "A Student class that extends a Person class."
        },
        {
          "label": "E",
          "text": "Student and Teacher classes are both extensions of a Person class."
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "object"
      ]
    },
    {
      "id": "semester-two-examinations-2025-csse1001-q19",
      "source": "Semester Two Examinations 2025",
      "pdfFile": "Semester_Two_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 19,
      "category": "loops",
      "type": "trace_choice",
      "prompt": "What is the value of ans after executing only the follow-\ning Python code?\n1 ans = ''\n2 for x in \"no-drakes\":\n3 if x == 'd' or 'r' or 'a' or 'k' or 'e':\n4 ans = x + ans",
      "options": [
        {
          "label": "A",
          "text": "'' (empty string)"
        },
        {
          "label": "B",
          "text": "'drake'"
        },
        {
          "label": "C",
          "text": "'ekard'"
        },
        {
          "label": "D",
          "text": "'sekard-on'"
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "loop",
        "condition"
      ]
    },
    {
      "id": "semester-two-examinations-2025-csse1001-q20",
      "source": "Semester Two Examinations 2025",
      "pdfFile": "Semester_Two_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 20,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "Floor division (\\\\) and modulo (%) are characterized by a mathematical identity relating quo-\ntient and remainder. Which identity is this?\nIn other words, which of the following expressions can never be made false when x and y are\nnonzero and of type int?",
      "options": [
        {
          "label": "A",
          "text": "x == (x // y)*y + (x % y)"
        },
        {
          "label": "B",
          "text": "x == (x // y)*x + (y % x)"
        },
        {
          "label": "C",
          "text": "x == (y // x)*y + (x % y)"
        },
        {
          "label": "D",
          "text": "x == (y // x)*x + (y % x)"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-examinations-2025-csse1001-q21",
      "source": "Semester Two Examinations 2025",
      "pdfFile": "Semester_Two_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 21,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "Suppose only the following code has been exe-\ncuted by Python.\n1 class Car():\n2 def __init__(self, w, d):\n3 self._wheels = w\n4 self._doors = d\n5 self._color = \"\"\n6\n7 def paint(self, c):\n8 self._color = c\n9\n10 mycar = Car(4, 2)\nWhich Python expression changes the color of\nmycar to \"red\"?",
      "options": [
        {
          "label": "A",
          "text": "Car.paint(\"red\")"
        },
        {
          "label": "B",
          "text": "mycar.paint(self, \"red\")"
        },
        {
          "label": "C",
          "text": "mycar.paint(\"red\")"
        },
        {
          "label": "D",
          "text": "Car.paint(self, \"red\")"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "class"
      ]
    },
    {
      "id": "semester-two-examinations-2025-csse1001-q22",
      "source": "Semester Two Examinations 2025",
      "pdfFile": "Semester_Two_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 22,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "Consider the following function.\n1 def duck(x, y):\n2 acc = x[y[0]]\n3 for a in x:\n4 for b in y:\n5 acc = x[b]\n6 acc = y[a]\n7 return acc\nWhich (if any) is a possible type-contract for duck?",
      "options": [
        {
          "label": "A",
          "text": "def duck(x: dict[str, int], y: str) -> int:"
        },
        {
          "label": "B",
          "text": "def duck(x: dict[str, str], y: list[int]) -> str:"
        },
        {
          "label": "C",
          "text": "def duck(x: dict[int, str], y: str) -> str:"
        },
        {
          "label": "D",
          "text": "def duck(x: dict[int, int], y: list[int]) -> int:"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-two-examinations-2025-csse1001-q23",
      "source": "Semester Two Examinations 2025",
      "pdfFile": "Semester_Two_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 23,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What is the value of x after only the following\nis executed by Python?\n1 x = (0, 1, 2) + (3, 4, 5)",
      "options": [
        {
          "label": "A",
          "text": "15"
        },
        {
          "label": "B",
          "text": "(3, 5, 7)"
        },
        {
          "label": "C",
          "text": "(0, 1, 2, 3, 4, 5)"
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-examinations-2025-csse1001-q24",
      "source": "Semester Two Examinations 2025",
      "pdfFile": "Semester_Two_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 24,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "The following is a (functional programming style) expression that tests a property of a\nnonempty string xs.\n1 xs[0].isupper() and all(\n2 xs[k+1].isupper()\n3 for k, x in enumerate(xs)\n4 if x == \" \")\nWhat is the best description of this program?",
      "options": [
        {
          "label": "A",
          "text": "It is true only when xs is in camel case like \"CamelCase\"."
        },
        {
          "label": "B",
          "text": "It is true only when xs is comprised totally of spaces like \" \" ."
        },
        {
          "label": "C",
          "text": "It is true only when xs is in title case like \"Title Case\"."
        },
        {
          "label": "D",
          "text": "It is always true."
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "function"
      ]
    },
    {
      "id": "semester-two-examinations-2025-csse1001-q25",
      "source": "Semester Two Examinations 2025",
      "pdfFile": "Semester_Two_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 25,
      "category": "oop",
      "type": "trace_choice",
      "prompt": "What is stored in x after executing only the follow-\ning Python code?\n1 class Something():\n2 def __init__(self, x: int):\n3 self._x = x\n4\n5 def __eq__(self, other):\n6 return (self._x * other._x) % 3 == 2\n7 a = Something(2)\n8 b = Something(4)\n9 x = (a==a, a==b, b==b)",
      "options": [
        {
          "label": "A",
          "text": "(True, False, True)"
        },
        {
          "label": "B",
          "text": "(False, True, False)"
        },
        {
          "label": "C",
          "text": "(True, False, False)"
        },
        {
          "label": "D",
          "text": "(True, True, False)"
        },
        {
          "label": "E",
          "text": "(False, True, True)"
        }
      ],
      "answer": null,
      "keywords": [
        "class"
      ]
    },
    {
      "id": "semester-two-examinations-2025-csse1001-q26",
      "source": "Semester Two Examinations 2025",
      "pdfFile": "Semester_Two_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 26,
      "category": "variables",
      "type": "multiple_choice",
      "prompt": "What code block is equivalent to the follow-\ning?\n1 if not a >= b and b > d:\n2 if a > d:\n3 x = 0\n4 else:\n5 x = 1",
      "options": [
        {
          "label": "A",
          "text": "if b > a > d:\nx = 0"
        },
        {
          "label": "B",
          "text": "if b > a > d:\nx = 0\nelse:\nx = 1"
        },
        {
          "label": "C",
          "text": "if b > a > d:\nx = 0\nelif b > d >= a:\nx = 1"
        },
        {
          "label": "D",
          "text": "if a > b and d > b and a > d:\nx = 0\nelse:\nx = 1"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "value",
        "expression"
      ]
    },
    {
      "id": "semester-two-examinations-2025-csse1001-q27",
      "source": "Semester Two Examinations 2025",
      "pdfFile": "Semester_Two_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 27,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "What is the computational complexity of the\nfollowing function?\n1 def foo(n: int) -> int:\n2 acc = 0\n3 for j in range(100):\n4 for k in range(50):\n5 acc = n\n6 return acc",
      "options": [
        {
          "label": "A",
          "text": "Constant: O(1)"
        },
        {
          "label": "B",
          "text": "Linear: O(n)"
        },
        {
          "label": "C",
          "text": "Quadratic: O(n2)"
        },
        {
          "label": "D",
          "text": "Logarithmic: O(log n)"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-two-examinations-2025-csse1001-q28",
      "source": "Semester Two Examinations 2025",
      "pdfFile": "Semester_Two_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 28,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "What kind of relationship does this UML dia-\ngram represent?\nCar\n+ wheels : List<Wheel>",
      "options": [
        {
          "label": "A",
          "text": "Inheritance"
        },
        {
          "label": "B",
          "text": "Composition"
        },
        {
          "label": "C",
          "text": "Aggregation"
        },
        {
          "label": "D",
          "text": "Association"
        },
        {
          "label": "E",
          "text": "Dependency"
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "object"
      ]
    },
    {
      "id": "semester-two-examinations-2025-csse1001-q29",
      "source": "Semester Two Examinations 2025",
      "pdfFile": "Semester_Two_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 29,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What is stored in ys after executing only the\nfollowing Python code?\n1 xs = [0, 1]\n2 ys = [xs, xs]\n3 xs.append([2])",
      "options": [
        {
          "label": "A",
          "text": "[0, 1, 2, 0, 1, 2]"
        },
        {
          "label": "B",
          "text": "[0, 1, [2], 0, 1, [2]]"
        },
        {
          "label": "C",
          "text": "[[0, 1, 2], [0, 1, 2]]"
        },
        {
          "label": "D",
          "text": "[[0, 1, [2]], [0, 1, [2]]]"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-examinations-2025-csse1001-q30",
      "source": "Semester Two Examinations 2025",
      "pdfFile": "Semester_Two_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 30,
      "category": "oop",
      "type": "trace_choice",
      "prompt": "What is the value of students after executing\nonly the following Python code?\n1 class Student():\n2 def __init__(self, name: str):\n3 if name:\n4 self._name = name\n5 else:\n6 self._name = \"John\"\n7\n8 class School():\n9 def __init__(self):\n10 self._students = []\n11\n12 def enrol(self, student: Student):\n13 self._students.append(student)\n14\n15 def get_students(self):\n16 return self._students\n17\n18 uq = School()\n19 uq.enrol(Student(\"\"))\n20 uq.enrol(Student(\"Alice\"))\n21 uq.enrol(Student(\"Bob\"))\n22\n23 students = get_students()",
      "options": [
        {
          "label": "A",
          "text": "['Alice', 'Bob']"
        },
        {
          "label": "B",
          "text": "['John', 'Alice', 'Bob']"
        },
        {
          "label": "C",
          "text": "['', 'Alice', 'Bob']"
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above\nThe exam continues after this page.\nThe following is a backup to be used to match your exam with your name. Please use BLOCK\nLETTERS and write as legibly as possible.\nAlso take this moment to ensure:"
        }
      ],
      "answer": null,
      "keywords": [
        "class"
      ]
    },
    {
      "id": "semester-two-examinations-2025-csse1001-q1",
      "source": "Semester Two Examinations 2025",
      "pdfFile": "Semester_Two_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 1,
      "category": "variables",
      "type": "short_answer",
      "prompt": "The details on the first page of this exam are filled out.",
      "options": [],
      "answer": null,
      "keywords": [
        "value",
        "expression"
      ]
    },
    {
      "id": "semester-two-examinations-2025-csse1001-q2",
      "source": "Semester Two Examinations 2025",
      "pdfFile": "Semester_Two_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 2,
      "category": "oop",
      "type": "short_answer",
      "prompt": "The details on your bubble sheet are filled out.\nThe exam continues after this page.\nStudent Number\nFamily Name\nGiven Name\nFill in the Blank\nThe next five questions refer to the following class definitions.\n1 class A():\n2 def __init__(self, x: int) -> None:\n3 self._x = x\n4 self._y = 3\n5\n6 def f(self, x: int) -> int:\n7 return 2*x\n8\n9 def g(self, x: int) -> int:\n10 return self.f(self._y)\n11\n12 class B(A):\n13 def __init__(self, x: int, y: int) -> None:\n14 super().__init__(x)\n15 self._y = y\n16\n17 def f(self, x: int) -> int:\n18 return A.f(self, self._y) + x\n19\n20 class C(B):\n21 def __init__(self, x: int) -> None:\n22 super().__init__(x, 5)\n23\n24 def h(self) -> int:\n25 return self.g(self._y) + super().f(self._x)\n26\n27 class D(C):\n28 def __init__(self, x: int, y: int, z: int) -> None:\n29 super().__init__(x)\n30 self._y += 5\n31 self._z = z\n32\n33 def g(self, x: int, y: int, z: int) -> int:\n34 return x*y*z + self._x + self._y + self._z\n35\n36 a = A(1)\n37 b = B(1, 2)\n38 c = C(3)\n39 d = D(4, 5, 6)\nWrite a single number in the answer box and nothing else or you may be assigned zero marks.",
      "options": [],
      "answer": null,
      "keywords": [
        "class"
      ]
    },
    {
      "id": "semester-two-examinations-2025-csse1001-q31",
      "source": "Semester Two Examinations 2025",
      "pdfFile": "Semester_Two_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 31,
      "category": "functions",
      "type": "short_answer",
      "prompt": "What does a.f(0) return?",
      "options": [],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-two-examinations-2025-csse1001-q32",
      "source": "Semester Two Examinations 2025",
      "pdfFile": "Semester_Two_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 32,
      "category": "functions",
      "type": "short_answer",
      "prompt": "What does a.g(1) return?",
      "options": [],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-two-examinations-2025-csse1001-q33",
      "source": "Semester Two Examinations 2025",
      "pdfFile": "Semester_Two_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 33,
      "category": "functions",
      "type": "short_answer",
      "prompt": "What does b.f(2) return?",
      "options": [],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-two-examinations-2025-csse1001-q34",
      "source": "Semester Two Examinations 2025",
      "pdfFile": "Semester_Two_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 34,
      "category": "functions",
      "type": "short_answer",
      "prompt": "What does c.h() return?",
      "options": [],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-two-examinations-2025-csse1001-q35",
      "source": "Semester Two Examinations 2025",
      "pdfFile": "Semester_Two_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 35,
      "category": "functions",
      "type": "short_answer",
      "prompt": "What does d.g(0,2,4) return?\nFull Solution",
      "options": [],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-two-examinations-2025-csse1001-q36",
      "source": "Semester Two Examinations 2025",
      "pdfFile": "Semester_Two_Examinations_2025_CSSE1001.pdf",
      "questionNumber": 36,
      "category": "functions",
      "type": "short_answer",
      "prompt": "Implement the following function according to its specification. Do not copy the document\nstring.\n1 def compress(xs: list[int]) -> list[tuple[int, int]]:\n2 \"\"\"\n3 Return a run-length encoding of <xs>. Each run of identical consecutive\n4 numbers should be replaced by the pair (value, length of run).\n5\n6 Note: The tuples must be ordered in the same order that the\n7 values are encountered.\n8\n9 Examples:\n10 >>> compress([4, 4, 4, 7, 7, 5, 4, 4])\n11 [(4, 3), (7, 2), (5, 1), (4, 2)]\n12\n13 >>> compress([])\n14 []\n15 \"\"\"\nWrite your answer on the next page.\nWrite your answer on the next page.\nWrite your answer on the next page.\nend of examination",
      "options": [],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q1",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 1,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "What can you deduce about the name FooBar supposing\nthat the PEP8 standard has been followed?\nFooBar is . . .",
      "options": [
        {
          "label": "A",
          "text": "a class"
        },
        {
          "label": "B",
          "text": "a global variable"
        },
        {
          "label": "C",
          "text": "a private variable"
        },
        {
          "label": "D",
          "text": "a constant"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "class"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q2",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 2,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "What error (if any) will the following code produce\nwhen executed by Python?\n1 this, that = 0, 0\n2 if this = that:\n3 that = this\n4 elif that:\n5 this = that",
      "options": [
        {
          "label": "A",
          "text": "NameError:"
        },
        {
          "label": "B",
          "text": "IndexError:"
        },
        {
          "label": "C",
          "text": "TypeError:"
        },
        {
          "label": "D",
          "text": "SyntaxError"
        },
        {
          "label": "E",
          "text": "This is valid Python\ncode."
        }
      ],
      "answer": null,
      "keywords": [
        "index"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q3",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 3,
      "category": "oop",
      "type": "trace_choice",
      "prompt": "What does the following evaluate to?\nmax(1.2, 4//3) < min(7-2 **3, 1.1)",
      "options": [
        {
          "label": "A",
          "text": "True"
        },
        {
          "label": "B",
          "text": "False"
        },
        {
          "label": "C",
          "text": "Maybe"
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above.\nThe next two questions relate to the following code that produces the pictured widget.\n1 class ButtonsFrame(tk.Frame) :\n2 def __init__(self, parent) :\n3 super().__init__(parent.root)\n4 b1 = tk.Button(self, text = \"A\")\n5 b2 = tk.Button(self, text = \"B\")\n6 b1.pack()\n7 b2.pack()\n8\n9 class MainWindow(object) :\n10 def __init__(self, root):\n11 self.root = root\n12 label = tk.Label(root, text=\"Buttons\")\n13 label.pack(side=tk.LEFT, expand=True)\n14 bf = ButtonsFrame(self)\n15 bf.pack(side=tk.LEFT, fill=tk.BOTH, expand=True)"
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "object"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q4",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 4,
      "category": "variables",
      "type": "multiple_choice",
      "prompt": "When the window is resized to make it larger, what will happen to the label?\nThe label will . . .",
      "options": [
        {
          "label": "A",
          "text": "be centred vertically and share horizontal space with the buttons."
        },
        {
          "label": "B",
          "text": "stay at the top but will share horizontal space with the buttons."
        },
        {
          "label": "C",
          "text": "stay where it is relative to the top-left corner of the window."
        },
        {
          "label": "D",
          "text": "stay at the left but be centered vertically ."
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "value",
        "expression"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q5",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 5,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "When the window is resized to make it larger, what will happen to the buttons in the vertical\ndirection?",
      "options": [
        {
          "label": "A",
          "text": "Both buttons will stay together but be centred vertically ."
        },
        {
          "label": "B",
          "text": "Buttons A and B share the vertical space between them."
        },
        {
          "label": "C",
          "text": "Both buttons stay at the top(in their initial configuration)."
        },
        {
          "label": "D",
          "text": "Button A will stay at the top with Button B centered vertically below Button A."
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q6",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 6,
      "category": "loops",
      "type": "trace_choice",
      "prompt": "What is the value of x after running the following code?\n1 xs = [5, 6, 7, 8]\n2 for x in range(len(xs)):\n3 x=x+1",
      "options": [
        {
          "label": "A",
          "text": "9"
        },
        {
          "label": "B",
          "text": "5"
        },
        {
          "label": "C",
          "text": "4"
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "loop",
        "condition"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q7",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 7,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "After starting up the Python interpreter, the following\ncode (and only the following code) is entered.\n1 if [] and y:\n2 y=0\n3 else:\n4 y += 1\nWhat error (if any) will the code produce.",
      "options": [
        {
          "label": "A",
          "text": "NameError:"
        },
        {
          "label": "B",
          "text": "IndexError:"
        },
        {
          "label": "C",
          "text": "TypeError:"
        },
        {
          "label": "D",
          "text": "SyntaxError"
        },
        {
          "label": "E",
          "text": "This is valid Python\ncode.\nThe next three questions refer to the following function.\n1 def foo(n: int, xs: List[int]) -> List[int]:\n2 i, ys = 0, []\n3 for k, x in enumerate(xs[:n]):\n4 ys.append((n-k-i, xs[i]))\n5 i += 1\n6 return ys"
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q8",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 8,
      "category": "loops",
      "type": "trace_choice",
      "prompt": "What does foo(3, list(range(4,9))) evaluate to? A. [(0,4),(0,5),(0,6)]",
      "options": [
        {
          "label": "B",
          "text": "[(3,4),(1,5),(-1,6)]"
        },
        {
          "label": "C",
          "text": "[(3,4),(2,5),(1,6)]"
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "loop",
        "condition"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q9",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 9,
      "category": "loops",
      "type": "trace_choice",
      "prompt": "What does foo(-3, list(range(4,9)) evaluate to? A. [(-3, 3), (-4, 5)]",
      "options": [
        {
          "label": "B",
          "text": "[(-3, 3), (-4, 5)]"
        },
        {
          "label": "C",
          "text": "[(-3, 4), (-5, 5)]"
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "loop",
        "condition"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q10",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 10,
      "category": "loops",
      "type": "trace_choice",
      "prompt": "What does foo(0, list(range(4,9)) evaluate to? A. [(0,4)]",
      "options": [
        {
          "label": "B",
          "text": "[(0,4), (1,5)]"
        },
        {
          "label": "C",
          "text": "[(0,4), (0,5)]"
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "loop",
        "condition"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q11",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 11,
      "category": "loops",
      "type": "trace_choice",
      "prompt": "What is the value of zs after running the following code?\n1 f = lambda x, y : x > y\n2 g = lambda x : x **2\n3 zs = [g(x) for x in range(5) if f(x,3)]",
      "options": [
        {
          "label": "A",
          "text": "[]"
        },
        {
          "label": "B",
          "text": "[16]"
        },
        {
          "label": "C",
          "text": "[9, 16]"
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "loop",
        "condition"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q12",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 12,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What does the expression\n1//4*'bluey'\nevaluate to?",
      "options": [
        {
          "label": "A",
          "text": "'' (the empty string)"
        },
        {
          "label": "B",
          "text": "'b'"
        },
        {
          "label": "C",
          "text": "'bluey'"
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q13",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 13,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "Which of the following statements is most true.\nThe Frame widget from tkinter...",
      "options": [
        {
          "label": "A",
          "text": "is responsible for padding between widgets and for the order in which they are placed."
        },
        {
          "label": "B",
          "text": "is responsible for padding between widgets but not for the order in which the widgets\nare placed."
        },
        {
          "label": "C",
          "text": "is used as a container in which other widgets are placed."
        },
        {
          "label": "D",
          "text": "is used to arrange a collection of widgets inside another widget."
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "state"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q14",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 14,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "What is the big-oh complexity of the following function?\n1 def foo(xs: List[int]):\n2 n = len(xs)\n3 while n < 10 **10:\n4 n += 1\n5 return n",
      "options": [
        {
          "label": "A",
          "text": "O(1)"
        },
        {
          "label": "B",
          "text": "O(log n)"
        },
        {
          "label": "C",
          "text": "O(n)"
        },
        {
          "label": "D",
          "text": "O(n2)"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q15",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 15,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "You upload your Assignment 1 to Gradescope and receive the following error from one of the\ntests:\nAssertionError:\n\"rnbq[58 chars]...... 3\\nPPPPPPPP 2\\nRNBQKBNR 1\\n\\nabcdefgh\\n\\nWhite's move:\"\n!=\"rnbq[58 chars]...... 3\\nPPPPPPPP 2\\nRNBQKBNR 1\\n\\nabcdefgh\\n\\nWhite's move: \"\nWhich of the following best describes the issue this error is pointing out in your code?",
      "options": [
        {
          "label": "A",
          "text": "Your code does not correctly update the board after a move is made."
        },
        {
          "label": "B",
          "text": "The expected output has one or more additional spaces compared to your output."
        },
        {
          "label": "C",
          "text": "Your program did not terminate when it should have."
        },
        {
          "label": "D",
          "text": "The tests are wrong."
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q16",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 16,
      "category": "oop",
      "type": "trace_choice",
      "prompt": "What is the value of x after running the following code?\n1 x=0\n2\n3 def foo(y: int):\n4 global x\n5\n6 if y <= 0:\n7 return 0\n8\n9 x=x+1\n10 foo(y-1)\n11 foo(y-2)\n12\n13\nreturn 0\n14\n15\nfoo(3)",
      "options": [
        {
          "label": "A",
          "text": "0"
        },
        {
          "label": "B",
          "text": "1"
        },
        {
          "label": "C",
          "text": "2"
        },
        {
          "label": "D",
          "text": "4"
        },
        {
          "label": "E",
          "text": "None of the above.\nThe next four questions relate to the the following class definitions.\n1 class A:\n2 def __init__(self, x) :\n3 self.x = x\n4\n5 def f(self, x) :\n6 return self.g(x) * 3\n7\n8\ndef g(self, x) :\n9 return x - 1\n10\n11 class B(A) :\n12 def g(self, y) :\n13 return self.x * y\n14\n15\nclass C(B) :\n16 def __init__(self, x, y) :\n17 super().__init__(x)\n18 self.x += y\n19 self.y = y\n20\n21\ndef f(self, x) :\n22 return A.g(self, self.y) + x\n23\n24 class D(C) :\n25 def __init__(self, x, y) :\n26 super().__init__(x, y)\n27 self.y += x\n28\n29 def g(self, x) :\n30 return self.x * x\n31\n32 a = A(1)\n33 b = B(2)\n34 c = C(2, 1)\n35 d = D(0, 3)"
        }
      ],
      "answer": null,
      "keywords": [
        "class"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q17",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 17,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What does b.g(0) evaluate to? A. 0",
      "options": [
        {
          "label": "B",
          "text": "1"
        },
        {
          "label": "C",
          "text": "-1"
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q18",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 18,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What does b.f(2) evaluate to? A. 3",
      "options": [
        {
          "label": "B",
          "text": "6"
        },
        {
          "label": "C",
          "text": "12"
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q19",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 19,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What does c.f(3) evaluate to? A. 2",
      "options": [
        {
          "label": "B",
          "text": "-2"
        },
        {
          "label": "C",
          "text": "3"
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q20",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 20,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What does d.g(3) evaluate to? A. 0",
      "options": [
        {
          "label": "B",
          "text": "9"
        },
        {
          "label": "C",
          "text": "-9"
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q21",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 21,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What does\n(5-9)//3\nevaluate to?",
      "options": [
        {
          "label": "A",
          "text": "1"
        },
        {
          "label": "B",
          "text": "-1"
        },
        {
          "label": "C",
          "text": "2"
        },
        {
          "label": "D",
          "text": "-2"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q22",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 22,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What is the value of x after running the following code?\n1 s = 'the brown fox jumped'\n2 x = s[:-4:-1]",
      "options": [
        {
          "label": "A",
          "text": "'dep'"
        },
        {
          "label": "B",
          "text": "'ped'"
        },
        {
          "label": "C",
          "text": "'the'"
        },
        {
          "label": "D",
          "text": "'eht'"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q23",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 23,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "Consider the following function.\n1 def foo(xs: str) -> None:\n2 for x in xs:\n3 with open('file.txt', 'w') as f:\n4 f.write(x)\n5 return\nAssuming file.txt is initially empty , which of the fol-\nlowing can be the contents of file.txt after foo is called\nonce.",
      "options": [
        {
          "label": "A",
          "text": "aaaa"
        },
        {
          "label": "B",
          "text": "wawa"
        },
        {
          "label": "C",
          "text": "awwaww"
        },
        {
          "label": "D",
          "text": "All of the above."
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return",
        "call"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q24",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 24,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "Consider the following incomplete code.\nimport tkinter as tk\nwindow = tk.Tk()\nside = ?\nalice = tk.Label(text=\"Alice\")\nalice.pack(side=side)\nbob = tk.Label(text=\"Bob\")\nbob.pack(side=side)\ncarol = tk.Label(text=\"Carol\")\ncarol.pack(side=side)\nwindow.mainloop()\nWhat do we assign side in order to produce the follow-\ning window?",
      "options": [
        {
          "label": "A",
          "text": "tk.LEFT"
        },
        {
          "label": "B",
          "text": "tk.RIGHT"
        },
        {
          "label": "C",
          "text": "tk.TOP"
        },
        {
          "label": "D",
          "text": "tk.BOTTOM"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "object"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q25",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 25,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What is the value of z after the running the following\ncode?\n1 xs = ['a', (3,4), {1: 'b'}]\n2 ys = xs\n3 ys[2] = {2: 'c'}\n4 z = xs[2][1]",
      "options": [
        {
          "label": "A",
          "text": "'a'"
        },
        {
          "label": "B",
          "text": "'b'"
        },
        {
          "label": "C",
          "text": "'c'"
        },
        {
          "label": "D",
          "text": "Error."
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q26",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 26,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "Consider the following code.\n1 def foo(x):\n2 if x % 2:\n3 if x **2 < 36:\n4 return 'Pow'\n5 else:\n6 return x // 3\n7 else:\n8 if x < 0 and abs(x) > 5:\n9 return False\n10 elif not x + 2 > 8:\n11 return x / 2\n12 return 0.0\nTo make foo return 0.0 what input should it be given?",
      "options": [
        {
          "label": "A",
          "text": "-1"
        },
        {
          "label": "B",
          "text": "0"
        },
        {
          "label": "C",
          "text": "1"
        },
        {
          "label": "D",
          "text": "True"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q27",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 27,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "Which type of object cannot be used as a value in a dic-\ntionary?",
      "options": [
        {
          "label": "A",
          "text": "str"
        },
        {
          "label": "B",
          "text": "tuple"
        },
        {
          "label": "C",
          "text": "list"
        },
        {
          "label": "D",
          "text": "int"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "object"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q28",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 28,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What is the value of x after running the following code?\nx = (2,3) + (3)",
      "options": [
        {
          "label": "A",
          "text": "(5, 3)"
        },
        {
          "label": "B",
          "text": "(2, 6)"
        },
        {
          "label": "C",
          "text": "(2, 3, 3)"
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q29",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 29,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "The following is an (incomplete) recursive function for\ncomputing the maximum string in a list of strings.\ndef max _str(xs: List[str]) -> str:\nif not xs:\nreturn ?\nreturn max(xs[-1], max _str(xs[:-1]))\nFor instance:\nmax_str(['Alice', 'Carol', 'Bob']) == 'Carol'\nWhat should the base case return?\nNote: '' < chr(0) is True",
      "options": [
        {
          "label": "A",
          "text": "'' (the empty string)"
        },
        {
          "label": "B",
          "text": "chr(0)"
        },
        {
          "label": "C",
          "text": "-float('inf')"
        },
        {
          "label": "D",
          "text": "xs[0]"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "object"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q30",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 30,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "Consider the following function.\n1 def foo(ys: str):\n2 for y in ys:\n3 if y in \"aeiou\":\n4 return True\n5 elif y not in \"aeiou\":\n6 return False\n7 return -1\nWhat statement best describes the behaviour\nof foo? Note, the letters a, e, i, o, and u are\ncalled vowels.",
      "options": [
        {
          "label": "A",
          "text": "foo returns True when ys con-\ntains a vowel."
        },
        {
          "label": "B",
          "text": "foo returns False only when\nys’s first letter is not a vowel."
        },
        {
          "label": "C",
          "text": "foo can never return -1."
        },
        {
          "label": "D",
          "text": "foo will throw an Error"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return",
        "call"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q31",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 31,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "Which of the following is a valid list in Python? A. [1, '2', 3, 'four']",
      "options": [
        {
          "label": "B",
          "text": "[1, int(2), 3, 4.0]"
        },
        {
          "label": "C",
          "text": "[1, int(2), True, [False, True]]"
        },
        {
          "label": "D",
          "text": "All are valid lists."
        },
        {
          "label": "E",
          "text": "None are valid lists."
        }
      ],
      "answer": null,
      "keywords": [
        "list"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q32",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 32,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "Which list slice reverses the list xs? A. xs[:-1:-1]",
      "options": [
        {
          "label": "B",
          "text": "xs[0:-1:-1]"
        },
        {
          "label": "C",
          "text": "xs[0:][::-1]"
        },
        {
          "label": "D",
          "text": "xs[0::-1]"
        },
        {
          "label": "E",
          "text": "More than one of the\nabove."
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "slice"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q33",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 33,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "What is the overall behaviour of the following function?\n1 def foo(xs, ys):\n2 for x in xs:\n3 for y in ys:\n4 if x >= y:\n5 return False\n6 return True",
      "options": [
        {
          "label": "A",
          "text": "True only when len(xs) < len(ys)"
        },
        {
          "label": "B",
          "text": "True only when every element of xs is less than every element of ys."
        },
        {
          "label": "C",
          "text": "True only when xs[k] >= ys[k] for all k in range(len(ys))"
        },
        {
          "label": "D",
          "text": "Never True."
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q34",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 34,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "Consider the docstring, type contract, and usage exam-\nples of the following function:\n1 def lcs(xs: str, ys: str) -> st:\n2 \"\"\"\n3 Return the longest substring that both and\n4 xs and ys have in common.\n5 >>> lcs(\"\", \"hello\")\n6 ''\n7 >>> lcs(\"cool\", \"\")\n8 ''\n9 >>> lcs(\"tomato\", \"potato\")\n10 'ato'\n11 >>> lcs(\"ababa\", \"cbaba\")\n12 'baba'\n13 \"\"\"\nWhat would you expect lcs(\"nature\", \"naturally\")\nto return?",
      "options": [
        {
          "label": "A",
          "text": "'natur'"
        },
        {
          "label": "B",
          "text": "'nature'"
        },
        {
          "label": "C",
          "text": "'nat'"
        },
        {
          "label": "D",
          "text": "'n'"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q35",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 35,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "Which expression is equivalent to the following?\nnot (a and b)",
      "options": [
        {
          "label": "A",
          "text": "not a or not b"
        },
        {
          "label": "B",
          "text": "not (a or b)"
        },
        {
          "label": "C",
          "text": "not a and not b"
        },
        {
          "label": "D",
          "text": "True"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q36",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 36,
      "category": "loops",
      "type": "multiple_choice",
      "prompt": "Suppose we define a constant for storing the golden ratio\n(approximately 1.6180). Which name is most appropri-\nate?",
      "options": [
        {
          "label": "A",
          "text": "golden_ratio"
        },
        {
          "label": "B",
          "text": "__golden_ratio__"
        },
        {
          "label": "C",
          "text": "GoldenRatio"
        },
        {
          "label": "D",
          "text": "GOLDEN_RATIO."
        },
        {
          "label": "E",
          "text": "All names are equally\nappropriate."
        }
      ],
      "answer": null,
      "keywords": [
        "loop",
        "condition"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q37",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 37,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "Consider the following function.\n1 def bar(x, y):\n2 for k in x:\n3 if y in k:\n4 return True\n5 return False\nWhich (if any) is a possible type-contract for bar?",
      "options": [
        {
          "label": "A",
          "text": "def bar(x: int, y: int) -> bool"
        },
        {
          "label": "B",
          "text": "def bar(x: List[str], y: str) -> bool"
        },
        {
          "label": "C",
          "text": "def bar(x: List[int], y: bool) -> bool"
        },
        {
          "label": "D",
          "text": "def bar(x: List, y: List[List]) -> bool"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q38",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 38,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "How many of the following statements evaluate to True?\n1 >>> True or False\n2 >>> not False and not True\n3 >>> not (True and False) and bool(\"Hello World\")\n4 >>> True or 1/0",
      "options": [
        {
          "label": "A",
          "text": "0"
        },
        {
          "label": "B",
          "text": "1"
        },
        {
          "label": "C",
          "text": "2"
        },
        {
          "label": "D",
          "text": "3"
        },
        {
          "label": "E",
          "text": "4"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q39",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 39,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "What error (if any) will the following code produce\nwhen executed by Python?\n1 def foo(x: int, xs: List[int]) -> bool:\n2 return x in xs\n3\n4 foo('', ' ')",
      "options": [
        {
          "label": "A",
          "text": "NameError"
        },
        {
          "label": "B",
          "text": "IndexError"
        },
        {
          "label": "C",
          "text": "TypeError"
        },
        {
          "label": "D",
          "text": "SyntaxError"
        },
        {
          "label": "E",
          "text": "None of the above.\nThe following two questions refer to the following code, taken from A3.\n1 Class HackerController:\n2 def __init__(self, root, size) -> None:\n3 self._root = root\n4 self._size = size\n5 self.event_setup()\n6\n7 def event _setup(self) -> None:\n8 ## Code block 1 ##\n9 ## Code block 2 ##\n10\n11 def handle _keypress(self, event) -> None:\n12 ...\n13\n14 def step(self) -> None:\n15 ..."
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "event"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q40",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 40,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "What code should be filled in the ## Code block 1 ## space to bind root to keypress event\nand execute the handle_keypress(self, event) function upon event trigger?",
      "options": [
        {
          "label": "A",
          "text": "self._root.bind(<KeyPress>, self.handle _keypress)"
        },
        {
          "label": "B",
          "text": "self._root.bind(‘<KeyPress>’, self.handle _keypress)"
        },
        {
          "label": "C",
          "text": "self._root.bind(‘<KeyPress>’, self.handle _keypress())"
        },
        {
          "label": "D",
          "text": "self._root.bind(<KeyPress>, self.handle _keypress(event))"
        }
      ],
      "answer": null,
      "keywords": [
        "event"
      ]
    },
    {
      "id": "semester-two-final-examinations-2021-csse1001-q41",
      "source": "Semester Two Final Examinations 2021",
      "pdfFile": "Semester_Two_Final_Examinations_2021_CSSE1001.pdf",
      "questionNumber": 41,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "What code should be filled in the ## Code block 2 ## space to start a timer event that exe-\ncutes the step(self) function every two seconds?",
      "options": [
        {
          "label": "A",
          "text": "self._root.after(2, self.step)"
        },
        {
          "label": "B",
          "text": "self._root.after(2, self.step())"
        },
        {
          "label": "C",
          "text": "self._root.after(2000, self.step)"
        },
        {
          "label": "D",
          "text": "self._root.after(2000, self.step())\nend of examination"
        }
      ],
      "answer": null,
      "keywords": [
        "event"
      ]
    },
    {
      "id": "semester-two-final-examinations-2022-csse1001-q1",
      "source": "Semester Two Final Examinations 2022",
      "pdfFile": "Semester_Two_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 1,
      "category": "oop",
      "type": "code_choice",
      "prompt": "What line of code should replace#subin order\nto generate the window illustrated above?\n1 import tkinter as tk\n2 root = tk.Tk()\n3 #sub\n4 root.mainloop()",
      "options": [
        {
          "label": "A",
          "text": "root.geometry(\"200x400\")"
        },
        {
          "label": "B",
          "text": "root.geometry(\"200 x 400\")"
        },
        {
          "label": "C",
          "text": "root.geometry(\"400x200\")"
        },
        {
          "label": "D",
          "text": "root.geometry(\"400 x 200\")"
        },
        {
          "label": "E",
          "text": "More than one of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "object"
      ]
    },
    {
      "id": "semester-two-final-examinations-2022-csse1001-q2",
      "source": "Semester Two Final Examinations 2022",
      "pdfFile": "Semester_Two_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 2,
      "category": "loops",
      "type": "trace_choice",
      "prompt": "What is the value ofansafter running the fol-\nlowing code?\n1 xs = [3, 5, 7, 9]\n2 ans = 0\n3 for x in xs:\n4 ans += x // 2",
      "options": [
        {
          "label": "A",
          "text": "10"
        },
        {
          "label": "B",
          "text": "10.5"
        },
        {
          "label": "C",
          "text": "11"
        },
        {
          "label": "D",
          "text": "11.5"
        },
        {
          "label": "E",
          "text": "12"
        }
      ],
      "answer": null,
      "keywords": [
        "loop",
        "condition"
      ]
    },
    {
      "id": "semester-two-final-examinations-2022-csse1001-q3",
      "source": "Semester Two Final Examinations 2022",
      "pdfFile": "Semester_Two_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 3,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "Consider the following function.\n1 def foo(xs: list[int], ys: dict) -> bool:\n2 for x in xs:\n3 if not x in ys:\n4 return False\n5 return True\nWhat statement best describes the behaviour\noffoo?",
      "options": [
        {
          "label": "A",
          "text": "fooalways returnsTrue."
        },
        {
          "label": "B",
          "text": "fooalways returnsFalse."
        },
        {
          "label": "C",
          "text": "fooreturnsTruewhen every el-\nement ofxsis a value ofys."
        },
        {
          "label": "D",
          "text": "fooreturnsTruewhen every el-\nement ofxsis a key ofys."
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-two-final-examinations-2022-csse1001-q4",
      "source": "Semester Two Final Examinations 2022",
      "pdfFile": "Semester_Two_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 4,
      "category": "collections",
      "type": "code_choice",
      "prompt": "Which option will throw anIndexErrorin the following\ncode when replacing#sub?\n1 xs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\n2 #sub",
      "options": [
        {
          "label": "A",
          "text": "xs[len(xs)]"
        },
        {
          "label": "B",
          "text": "xs[1-len(xs)]"
        },
        {
          "label": "C",
          "text": "xs[len(xs)-1]"
        },
        {
          "label": "D",
          "text": "xs[-1-len(xs)]"
        },
        {
          "label": "E",
          "text": "More than one of the\nabove."
        }
      ],
      "answer": null,
      "keywords": [
        "index"
      ]
    },
    {
      "id": "semester-two-final-examinations-2022-csse1001-q5",
      "source": "Semester Two Final Examinations 2022",
      "pdfFile": "Semester_Two_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 5,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "Supposing Pep8guidelines have been followed what\ncan be deduced about the nameFooBar?\nFooBaris a . . .",
      "options": [
        {
          "label": "A",
          "text": "global variable."
        },
        {
          "label": "B",
          "text": "constant."
        },
        {
          "label": "C",
          "text": "class name."
        },
        {
          "label": "D",
          "text": "method."
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "method"
      ]
    },
    {
      "id": "semester-two-final-examinations-2022-csse1001-q6",
      "source": "Semester Two Final Examinations 2022",
      "pdfFile": "Semester_Two_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 6,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "Suppose the following assignment has been made.\n1 xs = \"abcdefgh\"\nWhat list slice ofxsproduces'hfd'.",
      "options": [
        {
          "label": "A",
          "text": "xs[1:7:-2]"
        },
        {
          "label": "B",
          "text": "xs[7:1:-2]"
        },
        {
          "label": "C",
          "text": "xs[6:0:-2]"
        },
        {
          "label": "D",
          "text": "xs[0:6:-2]"
        },
        {
          "label": "E",
          "text": "More than one of the\nabove."
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "slice"
      ]
    },
    {
      "id": "semester-two-final-examinations-2022-csse1001-q7",
      "source": "Semester Two Final Examinations 2022",
      "pdfFile": "Semester_Two_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 7,
      "category": "variables",
      "type": "multiple_choice",
      "prompt": "What value gets assigned tox?\n1 x = 35 *2%5 **2",
      "options": [
        {
          "label": "A",
          "text": "0"
        },
        {
          "label": "B",
          "text": "20"
        },
        {
          "label": "C",
          "text": "70"
        },
        {
          "label": "D",
          "text": "140"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "value"
      ]
    },
    {
      "id": "semester-two-final-examinations-2022-csse1001-q8",
      "source": "Semester Two Final Examinations 2022",
      "pdfFile": "Semester_Two_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 8,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "How many of the following expressions evaluate to\nTrue? Note: Expressions that throw errors donotevalu-\nate toTrue.\n1 bool(not [] and \"hello\")\n2 bool(True or 1/0)\n3 bool(\" \")\n4 bool(1 > False)",
      "options": [
        {
          "label": "A",
          "text": "0"
        },
        {
          "label": "B",
          "text": "1"
        },
        {
          "label": "C",
          "text": "2"
        },
        {
          "label": "D",
          "text": "3"
        },
        {
          "label": "E",
          "text": "4"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-final-examinations-2022-csse1001-q9",
      "source": "Semester Two Final Examinations 2022",
      "pdfFile": "Semester_Two_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 9,
      "category": "loops",
      "type": "trace_choice",
      "prompt": "What is the value ofansafter executing the following.\n1 ans = 0\n2 for x in range(10):\n3 if x == 0 or 1 or 9 or 10:\n4 ans += 1",
      "options": [
        {
          "label": "A",
          "text": "0"
        },
        {
          "label": "B",
          "text": "3"
        },
        {
          "label": "C",
          "text": "4"
        },
        {
          "label": "D",
          "text": "10"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "loop",
        "condition"
      ]
    },
    {
      "id": "semester-two-final-examinations-2022-csse1001-q10",
      "source": "Semester Two Final Examinations 2022",
      "pdfFile": "Semester_Two_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 10,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What is the value ofxafter executing the following.\n1 x = (1, 2, 3) + (4, 5, 6)",
      "options": [
        {
          "label": "A",
          "text": "21"
        },
        {
          "label": "B",
          "text": "(5, 7, 9)"
        },
        {
          "label": "C",
          "text": "(1, 2, 3, 4, 5, 6)"
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-final-examinations-2022-csse1001-q11",
      "source": "Semester Two Final Examinations 2022",
      "pdfFile": "Semester_Two_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 11,
      "category": "functions",
      "type": "code_choice",
      "prompt": "The following is a recursive function with a partially\nimplemented base case; it computes the product a list\nof numbers. What should we replace#subwith to com-\nplete this function?\n1 def product(xs: list[int]) -> int:\n2 \"\"\"\n3 >>> product([1, 2, 3])\n4 6\n5 \"\"\"\n6 (a, b) = #sub\n7 if len(xs) == a:\n8 return b\n9 return xs[0]*product(xs[1:])",
      "options": [
        {
          "label": "A",
          "text": "(0, xs[0])"
        },
        {
          "label": "B",
          "text": "(1, xs[0])"
        },
        {
          "label": "C",
          "text": "(0, 1)"
        },
        {
          "label": "D",
          "text": "(1, 1)"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-two-final-examinations-2022-csse1001-q12",
      "source": "Semester Two Final Examinations 2022",
      "pdfFile": "Semester_Two_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 12,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "What type of error is thrown by executing the following\ncode?\n1 def foo(x: int, y: int) -> int:\n2 \"\"\"\n3 >>> foo(2, 3)\n4 6\n5 \"\"\"\n6 return x*y\n7\n8 ans = foo(\"oi\", 3)",
      "options": [
        {
          "label": "A",
          "text": "TypeError"
        },
        {
          "label": "B",
          "text": "NameError"
        },
        {
          "label": "C",
          "text": "ValueError"
        },
        {
          "label": "D",
          "text": "IndexError"
        },
        {
          "label": "E",
          "text": "This is valid Python\ncode."
        }
      ],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-two-final-examinations-2022-csse1001-q13",
      "source": "Semester Two Final Examinations 2022",
      "pdfFile": "Semester_Two_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 13,
      "category": "functions",
      "type": "trace_choice",
      "prompt": "What is the value ofansafter running the following code.\n1 def foo(xs: list) :\n2 if not xs:\n3 return [[]]\n4 else:\n5 ys = foo(xs[1:])\n6 x = xs[0]\n7 return [y + [x] for y in ys] + ys\n8\n9 ans = foo([1, 2, 3])",
      "options": [
        {
          "label": "A",
          "text": "[[], [3], [2], [3, 2], [1], [3, 1], [2, 1], [3, 2, 1]]"
        },
        {
          "label": "B",
          "text": "[[3, 2, 1], [2, 1], [3, 1], [1], [3, 2], [2], [3], []]"
        },
        {
          "label": "C",
          "text": "[[], [3], [2], [2, 3], [1], [1, 3], [1, 2], [1, 2, 3]]"
        },
        {
          "label": "D",
          "text": "[[1, 2, 3], [1, 2], [1, 3], [1], [2, 3], [2], [3], []]"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-two-final-examinations-2022-csse1001-q14",
      "source": "Semester Two Final Examinations 2022",
      "pdfFile": "Semester_Two_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 14,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What is the value ofxsafter the following is evaluated?\n1 xs = \"abc\"\n2 ys = xs\n3 ys[1] = \"B\"",
      "options": [
        {
          "label": "A",
          "text": "\"\"(empty string)"
        },
        {
          "label": "B",
          "text": "\"abc\""
        },
        {
          "label": "C",
          "text": "\"aBc\""
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-final-examinations-2022-csse1001-q15",
      "source": "Semester Two Final Examinations 2022",
      "pdfFile": "Semester_Two_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 15,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What is the value ofzsafter executing the following?\n1 ys = [1, 2]\n2 zs = [4]\n3 ys.extend([3])\n4 zs.append(ys)",
      "options": [
        {
          "label": "A",
          "text": "[4, [1, 2, 3]]"
        },
        {
          "label": "B",
          "text": "[4, 1, 2, 3]"
        },
        {
          "label": "C",
          "text": "[4, 3, 1, 2]"
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-final-examinations-2022-csse1001-q16",
      "source": "Semester Two Final Examinations 2022",
      "pdfFile": "Semester_Two_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 16,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "Consider the functionfoodefined below that computes\nthe area of a circle with integer radius. What is thetype\nof its return value?\n1 def foo(radius: int):\n2 \"\"\"\n3 Precondition: radius > 0\n4 \"\"\"\n5 area = 3.14159*radius**2",
      "options": [
        {
          "label": "A",
          "text": "int"
        },
        {
          "label": "B",
          "text": "float"
        },
        {
          "label": "C",
          "text": "str"
        },
        {
          "label": "D",
          "text": "char"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-two-final-examinations-2022-csse1001-q17",
      "source": "Semester Two Final Examinations 2022",
      "pdfFile": "Semester_Two_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 17,
      "category": "collections",
      "type": "code_choice",
      "prompt": "Suppose we want to assignTrueto the namevalidatewhen a user has typedonlythe single\nletter'a','b','c', or'd'. Which proposition should replace#subto accomplish this?\n1 value = input(\"Enter a single character: \")\n2 validate = #sub",
      "options": [
        {
          "label": "A",
          "text": "value == \"a\" or \"b\" or \"c\" or \"d\""
        },
        {
          "label": "B",
          "text": "value in \"abcd\""
        },
        {
          "label": "C",
          "text": "value not in \"efghijklmnopqrstuvwxyz\""
        },
        {
          "label": "D",
          "text": "value in [\"a\", \"b\", \"c\", \"d\"]"
        },
        {
          "label": "E",
          "text": "More than one of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-final-examinations-2022-csse1001-q18",
      "source": "Semester Two Final Examinations 2022",
      "pdfFile": "Semester_Two_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 18,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "Which statement below isfalse?",
      "options": [
        {
          "label": "A",
          "text": "Object oriented programming is no more powerful than imperative programming."
        },
        {
          "label": "B",
          "text": "A constant value in Pythoncanbe modified."
        },
        {
          "label": "C",
          "text": "We do not have to verify preconditions because it is the user’s fault for breaking them."
        },
        {
          "label": "D",
          "text": "Onlyimmutabletypes can be keys in dictionaries."
        },
        {
          "label": "E",
          "text": "All statements are true."
        }
      ],
      "answer": null,
      "keywords": [
        "object",
        "state"
      ]
    },
    {
      "id": "semester-two-final-examinations-2022-csse1001-q19",
      "source": "Semester Two Final Examinations 2022",
      "pdfFile": "Semester_Two_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 19,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "What tuple is assigned toanswhen the following code\nis executed?\n1 def foo(xs: tuple) -> tuple:\n2 a, b = xs\n3 a, b = b, a % b\n4 return (a, b)\n5\n6 ans = foo(foo((3,5)))",
      "options": [
        {
          "label": "A",
          "text": "(2, 2)"
        },
        {
          "label": "B",
          "text": "(2, 3)"
        },
        {
          "label": "C",
          "text": "(3, 2)"
        },
        {
          "label": "D",
          "text": "(3, 3)"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-two-final-examinations-2022-csse1001-q20",
      "source": "Semester Two Final Examinations 2022",
      "pdfFile": "Semester_Two_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 20,
      "category": "collections",
      "type": "code_choice",
      "prompt": "What can replace#subso that\"Drake is overrated\"is\nassigned toys?\n1 xs = [\"Drake\", \" \", \"is\", \" \", \"overrated\"]\n2 ys = #sub",
      "options": [
        {
          "label": "A",
          "text": "join(xs)"
        },
        {
          "label": "B",
          "text": "xs.join('')"
        },
        {
          "label": "C",
          "text": "''.join(xs)"
        },
        {
          "label": "D",
          "text": "More than one of the\nabove."
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-final-examinations-2022-csse1001-q21",
      "source": "Semester Two Final Examinations 2022",
      "pdfFile": "Semester_Two_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 21,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "What is the most appropriate type hint (i.e. type contract) for the following?\n1 def foo(x, y):\n2 for z in y:\n3 if (\" \"+z) in x:\n4 x[\" \"+z] += 1\n5 return sum(x[k] for k in x)",
      "options": [
        {
          "label": "A",
          "text": "def foo(x: dict[int, int], y: list[int]) -> int:"
        },
        {
          "label": "B",
          "text": "def foo(x: dict[int, str], y: list[int]) -> int:"
        },
        {
          "label": "C",
          "text": "def foo(x: dict[str, int], y: list[str]) -> int:"
        },
        {
          "label": "D",
          "text": "def foo(x: dict[str, int], y: str) -> int:"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-two-final-examinations-2022-csse1001-q22",
      "source": "Semester Two Final Examinations 2022",
      "pdfFile": "Semester_Two_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 22,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "What type of error does the following code throw?\n1 x=0\n2 if x > 0:\n3 y[x] = 1\n4 else:\n5 y[0] = 1",
      "options": [
        {
          "label": "A",
          "text": "KeyError"
        },
        {
          "label": "B",
          "text": "IndexError"
        },
        {
          "label": "C",
          "text": "SyntaxError"
        },
        {
          "label": "D",
          "text": "NameError"
        },
        {
          "label": "E",
          "text": "This is valid Python\ncode."
        }
      ],
      "answer": null,
      "keywords": [
        "index"
      ]
    },
    {
      "id": "semester-two-final-examinations-2022-csse1001-q23",
      "source": "Semester Two Final Examinations 2022",
      "pdfFile": "Semester_Two_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 23,
      "category": "loops",
      "type": "trace_choice",
      "prompt": "What is the value ofaafter the following code has\nbeen executed.\n1 xss = [[1], [2,3], [1,2,3], [4,5,6]]\n2 ys = [2, 3]\n3 a = [ys[0] in xs and ys[1] in xs for xs in xss]",
      "options": [
        {
          "label": "A",
          "text": "[True]"
        },
        {
          "label": "B",
          "text": "[False]"
        },
        {
          "label": "C",
          "text": "[False, True, True, False]"
        },
        {
          "label": "D",
          "text": "[True, False, False, True]"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "loop",
        "condition"
      ]
    },
    {
      "id": "semester-two-final-examinations-2022-csse1001-q24",
      "source": "Semester Two Final Examinations 2022",
      "pdfFile": "Semester_Two_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 24,
      "category": "collections",
      "type": "trace_choice",
      "prompt": "What is stored inansafter the following is executed,\nsupposing the user enters\"25\"and then\"30\".\n1 x = input(\"Enter a number: \")\n2 y = input(\"Enter a number: \")\n3 ans = int(x + y)",
      "options": [
        {
          "label": "A",
          "text": "55"
        },
        {
          "label": "B",
          "text": "\"55\""
        },
        {
          "label": "C",
          "text": "2530"
        },
        {
          "label": "D",
          "text": "\"2530\""
        },
        {
          "label": "E",
          "text": "Error"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-final-examinations-2022-csse1001-q25",
      "source": "Semester Two Final Examinations 2022",
      "pdfFile": "Semester_Two_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 25,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "What is assigned toansafter executing the following\ncode?\n1 def foo(x, y):\n2 if not x % 2:\n3 return foo(x//2, y-1)\n4 if not y:\n5 return x+y\n6 return foo(x-1, y-1)\n7\n8 ans = foo(3, 4)",
      "options": [
        {
          "label": "A",
          "text": "1"
        },
        {
          "label": "B",
          "text": "2"
        },
        {
          "label": "C",
          "text": "4"
        },
        {
          "label": "D",
          "text": "7"
        },
        {
          "label": "E",
          "text": "RecursionError"
        }
      ],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-two-final-examinations-2022-csse1001-q26",
      "source": "Semester Two Final Examinations 2022",
      "pdfFile": "Semester_Two_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 26,
      "category": "loops",
      "type": "trace_choice",
      "prompt": "What is the value ofxsafter executing the following?\n1 xs = [[1], [2, 3], [4, 5, 6]]\n2 for x in xs:\n3 x.extend(x)",
      "options": [
        {
          "label": "A",
          "text": "[[1], [2, 3], [4, 5, 6]]"
        },
        {
          "label": "B",
          "text": "[[1], [1], [2, 3], [2, 3], [4, 5, 6], [4, 5, 6]]"
        },
        {
          "label": "C",
          "text": "[1, 1], [2, 3, 2, 3], [4, 5, 6, 4, 5, 6]]"
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "loop",
        "condition"
      ]
    },
    {
      "id": "semester-two-final-examinations-2022-csse1001-q27",
      "source": "Semester Two Final Examinations 2022",
      "pdfFile": "Semester_Two_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 27,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "Which statement isfalse?",
      "options": [
        {
          "label": "A",
          "text": "Everyif-then-elsestatement can be written usingonlyifstatements."
        },
        {
          "label": "B",
          "text": "Everywhileloop can be written as aforloop."
        },
        {
          "label": "C",
          "text": "Functions can be defined inside of functions."
        },
        {
          "label": "D",
          "text": "Everyforloop can be written as awhileloop."
        },
        {
          "label": "E",
          "text": "More than one of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "function"
      ]
    },
    {
      "id": "semester-two-final-examinations-2022-csse1001-q28",
      "source": "Semester Two Final Examinations 2022",
      "pdfFile": "Semester_Two_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 28,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "Which optiondoes notassign the reverse ofxsintoa?\nNote: the reverse of[1, 2, 3]is[3, 2, 1].",
      "options": [
        {
          "label": "A",
          "text": "a = xs[::-1]"
        },
        {
          "label": "B",
          "text": "a = xs.reverse()"
        },
        {
          "label": "C",
          "text": "a = xs[len(xs)::-1]"
        },
        {
          "label": "D",
          "text": "a = xs[-1::-1]"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-final-examinations-2022-csse1001-q29",
      "source": "Semester Two Final Examinations 2022",
      "pdfFile": "Semester_Two_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 29,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "Consider the following function.\n1 def foo(xss: list[list[int]]) -> bool:\n2 for k, xs in enumerate(xss):\n3 for x in xs:\n4 for ys in xss[:k]:\n5 if x in ys:\n6 return False\n7 for ys in xss[k+1:]:\n8 if x in ys:\n9 return False\n10 return True and len(xss) > 1\nWhat best describesfoo’s behaviour? Note: A list is said to be made up ofelements.",
      "options": [
        {
          "label": "A",
          "text": "fooreturnsFalseonly whenthere are two distinct elements ofxssthat are equal."
        },
        {
          "label": "B",
          "text": "fooreturnsFalseonly whenthere are two distinct elements ofxssthat have a common\nelement."
        },
        {
          "label": "C",
          "text": "fooreturnsTrueonly whenthere is an empty list inxss."
        },
        {
          "label": "D",
          "text": "fooalwaysreturnsFalse."
        },
        {
          "label": "E",
          "text": "fooalwaysreturnsTrue."
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-two-final-examinations-2022-csse1001-q30",
      "source": "Semester Two Final Examinations 2022",
      "pdfFile": "Semester_Two_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 30,
      "category": "oop",
      "type": "multiple_choice",
      "prompt": "What is the purpose of \"getter\" methods as they pertain to objects?",
      "options": [
        {
          "label": "A",
          "text": "They are used to change the value of a private variable."
        },
        {
          "label": "B",
          "text": "They are used to retrieve the value of a private variable."
        },
        {
          "label": "C",
          "text": "They allow private variables to be shared among multiple instances of the same class."
        },
        {
          "label": "D",
          "text": "They are used to read data from files."
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "class",
        "object",
        "method"
      ]
    },
    {
      "id": "semester-two-final-examinations-2022-csse1001-q31",
      "source": "Semester Two Final Examinations 2022",
      "pdfFile": "Semester_Two_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 31,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "How many of the following expressions evaluate to\nFalse?\nbool(\"\") # the empty string\nbool(\" \") # space\nbool(-1)\nbool(0)\nbool([])",
      "options": [
        {
          "label": "A",
          "text": "1"
        },
        {
          "label": "B",
          "text": "2"
        },
        {
          "label": "C",
          "text": "3"
        },
        {
          "label": "D",
          "text": "4"
        },
        {
          "label": "E",
          "text": "5"
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple"
      ]
    },
    {
      "id": "semester-two-final-examinations-2022-csse1001-q32",
      "source": "Semester Two Final Examinations 2022",
      "pdfFile": "Semester_Two_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 32,
      "category": "loops",
      "type": "multiple_choice",
      "prompt": "Consider the following assignments.\n1 xss = [[ 1, 2, 3, 4, 5, 6],\n2 [ 7, 8, 9, 10, 11, 12],\n3 [13, 14, 15, 16, 17, 18],\n4 [19, 20, 21, 22, 23, 24],\n5 [25, 26, 27, 28, 29, 30]]\n6\n7 yss = [[10, 11, 12],\n8 [16, 17, 18],\n9 [22, 23, 24]]\nHow many of the following expressions are equivalent\ntoyss?\n10 [xs[-3:] for xs in xss[1:4]]\n11 [xs[3:] for xs in xss[1:-1]]\n12 [xs[-3:] for xs in xss[1:4]]\n13 [xs[3:] for xs in xss[-4:4]]",
      "options": [
        {
          "label": "A",
          "text": "0"
        },
        {
          "label": "B",
          "text": "1"
        },
        {
          "label": "C",
          "text": "2"
        },
        {
          "label": "D",
          "text": "3"
        },
        {
          "label": "E",
          "text": "4"
        }
      ],
      "answer": null,
      "keywords": [
        "loop",
        "condition"
      ]
    },
    {
      "id": "semester-two-final-examinations-2022-csse1001-q33",
      "source": "Semester Two Final Examinations 2022",
      "pdfFile": "Semester_Two_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 33,
      "category": "loops",
      "type": "multiple_choice",
      "prompt": "What is printed after executing the following?\n1 x, stars = 1, ' *'\n2 while x <= 4:\n3 print(stars)\n4 stars*=2\n5 x*=2",
      "options": [
        {
          "label": "A",
          "text": "*"
        },
        {
          "label": "B",
          "text": "*\n**"
        },
        {
          "label": "C",
          "text": "*\n**\n****"
        },
        {
          "label": "D",
          "text": "*\n**\n****\n********"
        },
        {
          "label": "E",
          "text": "Infinitely many stars."
        }
      ],
      "answer": null,
      "keywords": [
        "loop",
        "condition"
      ]
    },
    {
      "id": "semester-two-final-examinations-2022-csse1001-q34",
      "source": "Semester Two Final Examinations 2022",
      "pdfFile": "Semester_Two_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 34,
      "category": "functions",
      "type": "multiple_choice",
      "prompt": "What exception should be used at<Error>to complete\nthe function?\n1 def validate() -> int:\n2 \"\"\"\n3 Prompts the user to enter an integer.\n4 Repeats until a number is entered.\n5 \"\"\"\n6 try:\n7 return int(input(\"Enter an integer \"))\n8 except <Error>:\n9 return validate()",
      "options": [
        {
          "label": "A",
          "text": "ValueError"
        },
        {
          "label": "B",
          "text": "TypeError"
        },
        {
          "label": "C",
          "text": "NameError"
        },
        {
          "label": "D",
          "text": "InputError"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "function",
        "return"
      ]
    },
    {
      "id": "semester-two-final-examinations-2022-csse1001-q35",
      "source": "Semester Two Final Examinations 2022",
      "pdfFile": "Semester_Two_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 35,
      "category": "collections",
      "type": "multiple_choice",
      "prompt": "Which typecannotbe used as akeyin a dictionary? A.int",
      "options": [
        {
          "label": "B",
          "text": "str"
        },
        {
          "label": "C",
          "text": "list"
        },
        {
          "label": "D",
          "text": "tuple"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "list",
        "tuple",
        "dictionary"
      ]
    },
    {
      "id": "semester-two-final-examinations-2022-csse1001-q36",
      "source": "Semester Two Final Examinations 2022",
      "pdfFile": "Semester_Two_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 36,
      "category": "oop",
      "type": "code_choice",
      "prompt": "The following code generates the window to its right. What replaces#subto generate it?\n1 import tkinter as tk\n2 root = tk.Tk()\n3\n4 (s1, s2, s3, s4) = #sub\n5\n6 tk.Label(text=\"alice\").pack(side=s1)\n7 tk.Label(text=\"bob\").pack(side=s2)\n8 tk.Label(text=\"carol\").pack(side=s3)\n9 tk.Label(text=\"dilbert\").pack(side=s4)\n10\n11 root.mainloop()",
      "options": [
        {
          "label": "A",
          "text": "(tk.BOTTOM, tk.LEFT, tk.RIGHT, tk.TOP)"
        },
        {
          "label": "B",
          "text": "(tk.BOTTOM, tk.RIGHT, tk.TOP, tk.BOTTOM)"
        },
        {
          "label": "C",
          "text": "(tk.BOTTOM, tk.RIGHT, tk.LEFT, tk.BOTTOM)"
        },
        {
          "label": "D",
          "text": "(tk.BOTTOM, tk.LEFT, tk.LEFT, tk.LEFT)"
        },
        {
          "label": "E",
          "text": "None of the above.\nThe followingfour questionsrefer to the following class definition.\n1 class A():\n2 def__init__(self, x: int) -> None:\n3 self._x=x\n4 self._y=3\n5\n6 def f(self, x: int) -> int:\n7 return 2*x\n8\n9 def g(self, x: int) -> int:\n10 return self.f(self._y)\n11\n12 class B(A):\n13 def__init__(self, x: int, y: int) -> None:\n14 super().__init__(x)\n15 self._y=y\n16\n17 def f(self, x: int) -> int:\n18 return A.f(self, self._y) + x\n19\n20 class C(B):\n21 def__init__(self, x: int) -> None:\n22 super().__init__(x, 5)\n23\n24 def h(self) -> int:\n25 return self.g(self._y) + super().f(self._x)\n26\n27 class D(C):\n28 def__init__(self, x: int, y: int, z: int) -> None:\n29 super().__init__(x)\n30 self._y += 5\n31 self._z=z\n32\n33 def g(self, x: int, y: int, z: int) -> int:\n34 return x*y*z + self._x + self._y + self._z\n35\n36 a = A(1)\n37 b = B(1, 2)\n38 c = C(3)\n39 d = D(4, 5, 6)"
        }
      ],
      "answer": null,
      "keywords": [
        "class"
      ]
    },
    {
      "id": "semester-two-final-examinations-2022-csse1001-q37",
      "source": "Semester Two Final Examinations 2022",
      "pdfFile": "Semester_Two_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 37,
      "category": "functions",
      "type": "trace_choice",
      "prompt": "What doesa.g(5)return? A.2",
      "options": [
        {
          "label": "B",
          "text": "6"
        },
        {
          "label": "C",
          "text": "10"
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-two-final-examinations-2022-csse1001-q38",
      "source": "Semester Two Final Examinations 2022",
      "pdfFile": "Semester_Two_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 38,
      "category": "functions",
      "type": "trace_choice",
      "prompt": "What doesb.f(4)return? A.6",
      "options": [
        {
          "label": "B",
          "text": "8"
        },
        {
          "label": "C",
          "text": "10"
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-two-final-examinations-2022-csse1001-q39",
      "source": "Semester Two Final Examinations 2022",
      "pdfFile": "Semester_Two_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 39,
      "category": "functions",
      "type": "trace_choice",
      "prompt": "What doesc.h()return? A.6",
      "options": [
        {
          "label": "B",
          "text": "15"
        },
        {
          "label": "C",
          "text": "28"
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above."
        }
      ],
      "answer": null,
      "keywords": [
        "return"
      ]
    },
    {
      "id": "semester-two-final-examinations-2022-csse1001-q40",
      "source": "Semester Two Final Examinations 2022",
      "pdfFile": "Semester_Two_Final_Examinations_2022_CSSE1001.pdf",
      "questionNumber": 40,
      "category": "functions",
      "type": "trace_choice",
      "prompt": "What doesd.g(1, 2, 3)return? A.28",
      "options": [
        {
          "label": "B",
          "text": "32"
        },
        {
          "label": "C",
          "text": "36"
        },
        {
          "label": "D",
          "text": "Error"
        },
        {
          "label": "E",
          "text": "None of the above.\nend of examination"
        }
      ],
      "answer": null,
      "keywords": [
        "return"
      ]
    }
  ]
};
