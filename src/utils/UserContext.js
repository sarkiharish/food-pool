import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: "Hari",
        email: 'hari@foodpool.com'
    }
})

export default UserContext;