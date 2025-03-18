import React, { useState } from "react";
import './Header.css'

const Header: React.FC = () =>{
    const [information] = useState([{
        title : "About Me"
    },
    {
        title : "Technical Skill"
    },
    {
        title : "Github"
    }
])
    const clicktonav = (title : string) =>{
        if(title==="Github"){
            window.location.href = "https://github.com/TriThanh1009"
        }
    }
    return (
        <div>
            <div className="container-header d-flex flex-row justify-content-center align-items-center gap-3">
                    {information.map((infor) => (
                        <div onClick={() => clicktonav(infor.title)} className="header-items d-flex justify-content-center align-items-center" >{infor.title}</div> // Trả về một phần tử React hợp lệ
                    ))}
            </div>
        </div>
    )
}

export default Header