import React  from "react";
const { Component } = require("react");
 
function Lelo(props){
    return(
        <div>
            <h1>
                <button>Muh_Me_{props.pnm}_Lelo_{props.name}</button>
            {props.children}
            </h1>
        </div>
    );
}
export default Lelo;