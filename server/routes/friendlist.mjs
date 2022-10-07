import express from "express";
const router = express.Router()
import {getFriendIds, getFriends, getUser} from "../database/queries.mjs";
import db from "../database/connection.mjs";
import {authenticateToken, getUserFromToken} from "./auth/authenticateToken.mjs";

router.get("/",authenticateToken, (req, res) => {
    (async () => {
        const userFromToken = {
            id: req.userid,
            name: req.userName,
            email: req.userEmail
        }
        const user = await getUser(db, userFromToken.email)

        const friendIdList = await getFriendIds(db, user[0].id)
        // reformatting friendIdList to new array with only integers
        let reformattedList = [];
        friendIdList.forEach((object, index) => {
            reformattedList = [...reformattedList, object.friend_id]
        })
        if(reformattedList.length !== 0) {
            const friendList = await getFriends(db, reformattedList)
            res.send({list: friendList, auth: {id: user[0].id, name: user[0].name, email: user[0].email}})
        } else {
            res.send({list: false, auth: {id: user[0].id, name: user[0].name, email: user[0].email}})
        }
    })()
})

export default router;