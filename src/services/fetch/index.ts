import config from "./../config.json"

class Fetch {
  // Example
  //  Post("/user/login", {
  //     username:"mohammad"
  // })
  async Post(path: string, data: any) {
    const _data = new URLSearchParams(data)
    const fetched = await fetch(`${config.onlineApi}${path}`, {
      method: "POST",
      body: _data.toString(),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    const response = await fetched.json()
    return response
  }

  //   Example
  //   get with query => Get("/user/login?isAccess=true")
  async Get(path: string) {
    const fetched = await fetch(`${config.onlineApi}${path}`)
    const response = await fetched.json()
    return response
  }
}

export default new Fetch()
