const connection = require("../app/database");

class UserService {
  create() {
    connection.execute();
  }
}

module.exports = new UserService();
