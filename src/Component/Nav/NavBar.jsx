import React, { useEffect, useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

function NavBar() {
  const [toggle , setToggle] = useState(false);
  // 2.
  // const [theme , setTheme] = useState("light")
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
 

  const handletoggle = ()=>{
    setToggle(!toggle);
  }

  useEffect(() => {
    const element = document.documentElement;
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, [theme]);


  const navMenus = [
    // {
    //   name: "Home",
    //   link: "/#home",
    // },
    {
      name: "About",
      link: "/#about",
    },
    {
      name: "Skills",
      link: "/#skill",
    },
    {
      name: "Contact",
      link: "/#contact",
    },
  ];
  return (
    <>
      <nav className="bg-secondary dark:bg-gray-900">
        <div className="container flex justify-between items-center py-3 sm:py-0">
          <h1 className="text-3xl text-primary">Portfolio</h1>

          {/* Desktop view */}
          {/* get hidden when the size reached to sm size */}
          <div className=" hidden sm:block">  
            <ul className="flex gap-4 items-center dark:text-white">
              {navMenus.map((data, index) => {
                return (
                  <li key={index} className="text-xl font-semibold px-2 py-4 md:py-6 cursor-pointer">
                    <a href={data.link}>{data.name}</a>
                  </li>
                );
              })}
              {theme === "dark" ? (
                <LightModeIcon
                  className="text-2xl dark:text-white"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <DarkModeIcon
                  className="text-2xl dark:text-white"
                  onClick={() => setTheme("dark")}
                />
              )}
            </ul>
          </div>

          {/* Mobile View */}
          <div className="block sm:hidden">
            <div className="flex gap-4 items-center">

              {/* 4 theme toggle */ }
            {theme === "dark" ? (
               <LightModeIcon className=" text-2xl dark:text-white cursor-pointer" onClick = {()=> setTheme("light")}/>
            ) : (
              <DarkModeIcon className=" text-2xl dark:text-white cursor-pointer" onClick = {()=> setTheme("dark")}/>
            )}

            {/* 3.   */}
            {/* <DarkModeIcon className=" text-2xl cursor-pointer" onClick = {()=> setTheme("dark")}/> */}
            <MenuIcon className=" text-2xl cursor-pointer  dark:text-white" onClick = {handletoggle}/>
            </div>


            {toggle && 
            // 1.

             <div className="fixed top-16 right-0 left-0 bg-white dark:bg-gray-900 dark:text-white shadow-md rounded-b-xl py-10 z-10">
              <ul className="flex flex-col gap-4 items-center">
              {navMenus.map((data, index) => {
                return (
                  <li key={index} className="text-xl font-semibold px-2 py-4 md:py-6 cursor-pointer">
                    <a href={data.link}>{data.name}</a>
                  </li>
                );
              })}
            </ul>
             </div>
              }
          </div>
        </div>
      </nav>
    </> 
  );
}

export default NavBar;
