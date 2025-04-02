const app = require("./app/index");
const { SERVICE_PORT } = require("./config/service");

app.listen(SERVICE_PORT, () => {
  console.log(`端口${SERVICE_PORT}服务已经启动`);
});
