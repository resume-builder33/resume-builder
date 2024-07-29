//TODO:

import api from "./api"
import { ResumeInput } from "../types.ts"

export default async function postResume(message: ResumeInput) {
  return api.post("http://127.0.0.1:5000/generate", message, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((res) => {
      console.log("I am sending a request to the backend")
      console.log(res);
    })
    .catch((error) => {
      console.log("oh no an error~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
      console.log(error)
    })

}

