import React, { useEffect } from "react";

 function Menu({title, menuObject}) { 

// passing empty array which will give you one time effect

    useEffect(() => {
        const allLi = document
        .querySelector(".MenuContainer ul")
        .querySelectorAll("li");

// using active class for selecting menu option

        function changeMenuActive() {
            allLi.forEach((n) => n.classList.remove("active"));
            this.classList.add("active");
        }

        allLi.forEach((n) => n.addEventListener("click", changeMenuActive))

    }, []);

    return (
    
    <div className="MenuContainer">
        <p className="title">{title}</p>

        <ul>
            {
                menuObject &&
                 menuObject.map((menu) => (
                    <li> <a href="#"><i>{menu.icon}</i>

                    <span>{menu.name}</span>
                    </a>
                    </li>

                ) ) }
        </ul>
    </div>
    );
    
  
}


export { Menu };
