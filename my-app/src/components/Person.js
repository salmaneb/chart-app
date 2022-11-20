import React, { useContext } from "react";
import { myContext } from "../App";
function Person(){
let {users}=useContext(myContext);
    return(
        <>
{users.map(user=><li>{user.name}</li>)}
        </>
    )
}
export default Person;