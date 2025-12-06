import express from "express"
import {userCreate, authUser, logoutUser} from "../controller/userController.js"

const route=express.Router()

route.post("/createuser",userCreate)
route.post("/login",authUser)
route.post("/logout",logoutUser)

export default route;