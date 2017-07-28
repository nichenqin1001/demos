const Koa = require("koa");
const Router = require("koa-router");
const views = require("koa-views");

const app = new Koa();
const router = new Router();

const todos = [
  { id: 1, content: "todo1", done: true },
  { id: 2, content: "todo2", done: false },
  { id: 3, content: "todo3", done: false }
];

app.use(views(__dirname + "/views", { extension: "handlebars" }));

router
  .get("/", async ctx => {
    await ctx.render("index", { todos });
  })
  .get("/:id", async ctx => {
    const { id } = ctx.params;
    const todo = todos.find(item => item.id === +id);
    await ctx.render("todo", { todo });
  })
  .post("/", async ctx => {
    const { id, content, done } = ctx.query;
    todos.push({
      id: id || Date.now(),
      content,
      done: done || false
    });
    ctx.body = todos;
  })
  .put("/", ctx => {
    const { id, done } = ctx.query;
    const todo = todos.find(item => item.id === +id);
    if (!!todo) {
      todo.done = done === "true";
    }
    ctx.body = todo;
  })
  .delete("/", ctx => {
    const { id } = ctx.query;
    const index = todos.indexOf(todos.find(item => item.id === +id));
    todos.splice(index, 1);
    ctx.body = todos;
  });

app.use(router.routes()).use(router.allowedMethods());

app.listen(5000, () => {
  console.log("App runs at http://localhost:5000");
});
