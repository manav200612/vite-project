import React , {useContext} from "react";
import Usercontext from "../context/Usercontext";

function Profile() {

    const {User} = useContext(Usercontext)

    if (!User) return <div>please Login</div>

    return <div>Welcome {User.username} </div>
}

export default Profile;