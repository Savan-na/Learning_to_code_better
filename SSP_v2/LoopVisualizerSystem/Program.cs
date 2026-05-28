var builder = WebApplication.CreateBuilder(args);

// 激活 Web 控制器架构
builder.Services.AddControllers();

var app = builder.Build();

// 允许直接挂载静态文件（wwwroot 目录下的 index.html, app.js）
app.UseDefaultFiles();
app.UseStaticFiles();

app.UseRouting();
app.MapControllers();

app.Run();