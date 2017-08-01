const userControllers = require("../controllers/userControllers");

module.exports = router => {
  router.get("/", async ctx => {
    ctx.body = { hi: "there" };
  });

  router.get("/user", userControllers.getAll);

  router.post("/user", userControllers.createUser);
};