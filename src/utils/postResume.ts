//TODO:

import api from "./api"
import { ResumeInput } from "../types.ts"

export default async function postResume(message: ResumeInput) {
  return api.post("/api", message)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error)
    })

}

