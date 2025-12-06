import { Request, Response } from "express";

const verify = (req : Request, res : Response, next : Function) => {
  const id = true //logic to verify
if(!id){
    throw new Error("Not Verified")
}
next()
}
export default verify