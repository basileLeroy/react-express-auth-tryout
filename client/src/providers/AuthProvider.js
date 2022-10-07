import React, {useState, useContext, useEffect} from "react";
import axios from "axios";

const AuthContext = React.createContext();
const LoginContext = React.createContext()
const RegisterContext = React.createContext();
const LogoutContext = React.createContext();

const useAuth = () => {
    return useContext(AuthContext);
}
const useLogin = () => {
    return useContext(LoginContext)
}
const useRegister = () => {
    return useContext(RegisterContext)
}
const useLogout = () => {
    return useContext(LogoutContext)
}

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState(false);
    useEffect(() => {
        axios.get("api/auth").then((result) => {
            if(result.data.auth) {
                setAuth(result.data.auth)
            }
        }).catch(err => {
            throw err;
        })
    }, [])

    const login = (email, password) => {
        axios.post('api/login', {
            email: email,
            password: password
        }).then((response) => {
            setAuth(response.data.auth)
        })
    }

    const register = (name, email, password, confirmPassword) => {
        axios.post('api/register', {
            name: name,
            email: email,
            password: password
        }).then((response) => {
            setAuth(response.data.auth)
        })
    }

    const logout = () => {
        axios.get('api/logout').then(response => {
            setAuth(false)
        })
    }

    return (
        <AuthContext.Provider value={auth}>
        <LoginContext.Provider value={login}>
        <LogoutContext.Provider value={logout}>
        <RegisterContext.Provider value={register}>
            {children}
        </RegisterContext.Provider>
        </LogoutContext.Provider>
        </LoginContext.Provider>
        </AuthContext.Provider>
    )
}

export {
    AuthProvider,
    useAuth,
    useLogin,
    useRegister,
    useLogout
}