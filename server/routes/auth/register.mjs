import express from "express";
import bcrypt from "bcrypt";
import db from "../../database/connection.mjs";
import {generateToken} from "./authenticateToken.mjs";
import {register} from "../../database/queries.mjs";
const router = express.Router()

router.post('/', (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password,
        name: req.body.name,
    }

    db.query(
        "SELECT * FROM users WHERE email = ?",
        [user.email],
        (err, result) => {
            if(err) {
                res.send({returnMessage: err})
            }
            if (result.length > 0) {
                res.send({returnMessage: "User already exists!"})
            } else {
                console.log(result)
                register(db, user)
                    .then(() => {
                        const accessToken = generateToken(user)
                        res.cookie("user-token", accessToken, { maxAge: 60*60*24*30*1000, httpOnly: true})
                        res.send({
                            auth: {id: null, name: user.name, email: user.email}
                        })
                    })
            }
        }
    )
})
export default router;