//TODO:

import api from "./api"
import { ResumeInput } from "../types.ts"

export default async function postResume(message: ResumeInput) {
  return api.post("/generate", message)
    .then((res) => {
      console.log("I am sending a request to the backend")
      console.log(res);
    })
    .catch((error) => {
      console.log("oh no an error~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
      console.log(error)
    })

}

