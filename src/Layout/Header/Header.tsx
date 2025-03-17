import React, { useState } from "react";
import './Header.css'

const Header: React.FC = () =>{
    const [information] = useState([{
        id: 1,
        title : "About Me"
    },
    {
        id: 2,
        title : "Technical Skill"
    }
])
    return (
        <div>
            <div className="container-header d-flex flex-row justify-content-center align-items-center gap-3">
                    {information.map((infor) => (
                        <div className="header-items d-flex justify-content-center align-items-center" key={infor.id}>{infor.title}</div> // Trả về một phần tử React hợp lệ
                    ))}
            </div>
        </div>
    )
}

export default Header