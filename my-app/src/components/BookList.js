import React, { useContext } from "react";
import { myContext } from "./BookContext";
function BookList(){
 let {users}=useContext(myContext);
    return(<>
        
          <ul>{
            users.map(user=><li>{user.name}</li>)
          }</ul>
    </>)
}
export default BookList;