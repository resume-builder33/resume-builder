//TODO:

import api from "./api"
import { ResumeInput } from "../types.ts"

export default async function postResume(message: ResumeInput) {
  return api.post("/generate", message)
    .then((res) => {
      console.log("i got a request")
      console.log(res);
    })
    .catch((error) => {
      console.log("i  have an error EEERRROR")
      console.log(error)
    })

}

