import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
    const {user} = useContext(UserContext)
    return (
        <div className="footer bg-gray-800 text-white text-center py-4 mt-1">
            Created With ❤ by {user.name}
        </div>
    )
}

export default Footer;