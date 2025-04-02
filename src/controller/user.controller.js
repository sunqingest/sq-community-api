const userService = require("../service/user.service");

class UserController {
  create(ctx, next) {
    userService.create();
  }
}

module.exports = new UserController();
