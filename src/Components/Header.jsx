import React, { useContext, useEffect, useState } from "react";
import { HiMoon, HiOutlineMagnifyingGlass, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../Context/ThemeContext";

function Header() {
  const [toggle, setToggle] = useState(false);

  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log(theme);
  }, []);
  return (
    <div className="flex items-center p-3">
      <img
        src="https://github.com/rrs301/game-listing-demo/blob/master/src/assets/Images/logo1.png?raw=true"
        width={70}
        height={70}
      />

      <div className="flex  gap-3 items-center rounded-full mx-5 bg-slate-200 p-2 w-full  ">
        <HiOutlineMagnifyingGlass />

        <input
          type="text"
          placeholder="Search Games"
          className="bg-transparent     outline-none  "
        />
      </div>

      <div>
        {theme === "light" ? (
          <HiMoon
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
          />
        ) : (
          <HiSun
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {
              setTheme("light");
              localStorage.setItem("theme", "light");
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Header;
