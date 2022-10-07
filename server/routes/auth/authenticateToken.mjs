import jwt, {decode} from 'jsonwebtoken';
const { sign, verify } = jwt;
import dotenv from "dotenv";
dotenv.config();

const generateToken = (user) => {
    return sign(
        {id: user.id, name: user.name, email: user.email},
        process.env.JWT_ACCESS_TOKEN
    );
}

const getUserFromToken = async (jwt) => {
    // let user = decode(jwt);
    // console.log(user)
}

const authenticateToken = (req, res, next) => {
    const accessToken = req.cookies["user-token"]

    if(!accessToken) {
        return res.json({auth: false, returnMessage: 'Login failed: You are not logged in!'})
    }
    try {
        const validToken = verify(accessToken, process.env.JWT_ACCESS_TOKEN);
        if (validToken) {
            req.authenticated = true
            req.userEmail = validToken.email;
            req.userName = validToken.name;
            req.userid = validToken.id;
            next();
        }
    } catch (err) {
        return res.status(400).json({error: err})
    }
}

export {
    generateToken,
    authenticateToken,
    getUserFromToken
};