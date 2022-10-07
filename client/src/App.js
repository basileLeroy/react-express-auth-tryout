import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import {Landing} from "./Landing";
import {UserNav} from "./nav/UserNav";
import {VisitorNav} from "./nav/VisitorNav";
import {Login} from "./Login";
import {Register} from "./Register";
import {Posts} from "./Posts";
import {MessengerDashboard} from "./MessengerDashboard";
import { NotAllowed } from "./errors/404";
import {useAuth} from "./providers/AuthProvider";

function App() {
    const auth = useAuth()

    return (
    <>
        {auth ? <UserNav/> : <VisitorNav/>}
      <Routes>
        <Route exact path={"/"} element={auth ? <Landing /> : <Navigate to={"/login"} />}/>
        <Route exact path={"/chat"} element={!auth ? <Navigate to={"/"} /> : <MessengerDashboard/>}/>
        <Route exact path={"/login"} element={auth ? <Navigate to={"/"} /> : <Login/>}/>
        <Route exact path={"/register"} element={auth ? <Navigate to={"/"} /> : <Register/>}/>
        <Route exact path={"/posts"} element={!auth ? <Navigate to={"/"} /> : <Posts/>}/>

        <Route path={"/404"} element={<NotAllowed/>} />
        <Route path={"*"} element={<Navigate to={"/404"} />}/>
      </Routes>
    </>
  );
}
export default App;
