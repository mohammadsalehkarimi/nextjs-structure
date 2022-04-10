import server from "../../server/configs"
import { helloController } from "../../server/controllers"
import { helloMiddleware } from "../../server/middlewares"

const connections = server
  .get("/api/hello", helloController.sayHello)
  .post("/api/hello", helloMiddleware.checkPassword, helloController.getName)

export default connections
