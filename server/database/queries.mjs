import bcrypt from "bcrypt";
import db from "./connection.mjs";

const getUser = (db, email) => {
    return new Promise((resolve, reject)=> {
        db.query(
            "SELECT * FROM users WHERE email = (?)",
            [email],
            (err, result) => {
                return err ? reject(err) : resolve(result)
            }
        )
    })
}

const getFriendIds = (db, id) => {
    return new Promise((resolve, reject) => {
        db.query(
            "SELECT friend_id FROM friends WHERE user_id = ?",
            id,
            (err, result) => {
                return err ? reject(err) : resolve(result)
            }
        )
    })
}

const getFriends = (db, list) => {
    console.log(list)
    return new Promise((resolve, reject) => {
        db.query(
            `SELECT id, name, email FROM users WHERE id IN (?)`,
            [list],
            (err, result) => {
                return err ? reject(err) : resolve(result)
            }
        )
    })
}

const register = (db, user) => {
    const hashSalt = 13;
    return new Promise((resolve, reject) => {
        bcrypt.hash(user.password, hashSalt, (err, hash) => {
            db.query(
                "INSERT INTO users (email, password, name) VALUES (?,?,?)",
                [user.email, hash, user.name],
                (err, result) => {
                    return err ? reject(err) : resolve(result)
                }
            )
        })
    })
}
export {
    getUser,
    getFriendIds,
    getFriends,
    register,
}