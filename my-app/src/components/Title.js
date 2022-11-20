import React from "react";
function Title(props){
    console.log('title');
    let {id,name,adress}=props;
    return(
        <ul>
            <li>{id}</li>
            <li>{name}</li>
            <li>{adress}</li>
        </ul>
        
    )
}
export default React.memo(Title);