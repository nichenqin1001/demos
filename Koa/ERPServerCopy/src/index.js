const Koa = require("koa");
const Router = require("koa-router");
const bodyParser = require("koa-bodyparser");
const sequelize = require("./db");
const errorHandle = require("./middleware/errorHandle");

const { initSuperUser } = require("./server/user");

(async () => {
  try {
    await sequelize.sync({});
    console.log("connected to the database");
    await initSuperUser();
  } catch (error) {
    console.error(error);
  }
})();

const app = new Koa();

const router = new Router();
require("./routes/userRoutes")(router);

app
  .use(bodyParser())
  .use(errorHandle())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(5001, () => {
  console.log(">> App running on http://localhost:5001");
});