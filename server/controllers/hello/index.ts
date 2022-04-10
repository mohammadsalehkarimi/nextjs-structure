import { NextApiRequest, NextApiResponse } from "next"

class Hello {
  sayHello(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).send({ message: "Hello World" })
  }

  getName(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).send({ name: "mohammadsaleh karimi" })
  }
}

export default new Hello()
