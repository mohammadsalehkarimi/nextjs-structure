import { NextApiRequest, NextApiResponse } from "next"

class Hello {
  checkPassword(req: NextApiRequest, res: NextApiResponse, next: Function) {
    const { password } = req.body
    if (+password === 1234) next()
    res.status(403).send({ message: "NOT HAVE PERMISSION" })
  }
}

export default new Hello()
