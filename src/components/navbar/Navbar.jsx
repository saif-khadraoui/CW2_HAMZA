import React, { useState } from 'react'
import styles from "./navbar.module.css"
import { RxAvatar } from "react-icons/rx";
import { useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";

function Navbar() {

  const navigate = useNavigate()
  const [menu, setMenu] = useState(false);

  const routePage = (page) => {
    setMenu(false)
    navigate(`/account/${page}`)
  }


  return (
    <>
      <div className={styles.container}>
          <div className={styles.logo}>
              <h3 onClick={() => navigate("/")}>AdvanceNow</h3>
          </div>
          <div className={styles.menuItems}>
              <p onClick={() => routePage("search")}>Search</p>
              <p onClick={() => routePage("courses")}>All courses</p>
              <p onClick={() => routePage("yourCourses")}>Your courses</p>
              <p onClick={() => routePage("skills")}>Skills</p>
              <RxAvatar onClick={() => routePage("account")} style={{ fontSize: "32px", cursor: "pointer" }}/>
          </div>
          <GiHamburgerMenu className={styles.hamburger} onClick={() => setMenu(true)}/>
      </div>
      
      {menu && (
        <div className={styles.mobileNav}>
           <div className={styles.mobileMenuItems}>
             <div className={styles.closeMenu}>
               <MdOutlineClose style={{ fontSize: "32px", cursor: "pointer" }} onClick={() => setMenu(false)}/>
             </div>
             <p onClick={() => routePage("search")}>Search</p>
             <p onClick={() => routePage("courses")}>All courses</p>
             <p onClick={() => routePage("yourCourses")}>Your courses</p>
             <p onClick={() => routePage("skills")}>Skills</p>
             <RxAvatar onClick={() => routePage("account")} style={{ fontSize: "32px", cursor: "pointer" }}/>
           </div>
         </div>
      )}
    </>
  )
}

export default Navbar