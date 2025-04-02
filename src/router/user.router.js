const KoaRouter = require("@koa/router");
const userRouter = new KoaRouter({ prefix: "/user" });
const userController = require("../controller/user.controller");

// 用户注册
userRouter.post("/create", userController.create);

module.exports = userRouter;
