import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileCLass from "./ProfileClass";
import UserContext from "../utils/UserContext";

const About = () => {
    return (
        <div>
            <h1>About us Page</h1>
            <UserContext.Consumer>
                {({user}) => (<h1 className="font-bold p-10 text-cyan-500">
                    {user.name} - {user.email}
                </h1>)}
            </UserContext.Consumer>
            <p>
                {" "}
                This is me! Harish Dai❤
            </p>
            {/* <Outlet /> */}
            <Profile name="Functional Hari" />
            <ProfileCLass name="Classic Hari" />
        </div>
    )
}

export default About;