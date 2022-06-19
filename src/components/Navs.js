import React from "react";
import { Link } from "react-router-dom";
const Navs = () => {
    const LINK=[
        {to:"/", text:"Home"},
        {to:"/starrer",text:"Starrer"}
    ]
  return (
    <div>
        <ul>
            {LINK.map(item=>{
                return <li key={item.to}><Link to={item.to}>{item.text}</Link></li>
            })}
        </ul>
     
      
    </div>
  );
};

export default Navs;
