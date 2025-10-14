import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/store/userSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/store/configSlice";
import menu from "/hamburger_menu.svg"
import close from "/close.svg"

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    // onAuthStateChanged is a observer (like a event listener) set on
    // the Auth Object and is called whenerver the auth object change
    // given by firebase sdk
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        if (location.pathname == "/auth") navigate("/");
      } else {
        dispatch(removeUser());
        if (location.pathname !== "/auth") {
          navigate("/auth");
        }
      }
    });

    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLanguageSelect = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="z-10 w-full h-20 absolute px-8 py-2 flex  items-center justify-between  bg-gradient-to-b from-black">
      <Link to={"/"}>
        <img className="w-44" src={logo} alt="MoviesGPT-logo" />
      </Link>
      {user && <>
        <div className="hidden sm:flex p-2 items-center gap-3">
          {location.pathname === "/search" && (
            <select
              onChange={(e) => handleLanguageSelect(e)}
              className="bg-white/30 text-white px-2 py-3 rounded-lg"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  key={lang.identifier}
                  className="text-black bg-white/30"
                  value={lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          {location.pathname != "/search" && (
            <button
              onClick={() => navigate("/search")}
              className="cursor-pointer p-2 sm:px-4 sm:py-3 text-white font-medium bg-violet-700/60 rounded-lg"
            >
              GPT search
            </button>
          )}
          <img className="w-12" src={user.photoURL} alt="profile-pic" />
          <button
            onClick={handleSubmit}
            className="font-bold text-white cursor-pointer"
          >
            (Sign out)
          </button>
        </div>
        <div className="block sm:hidden cursor-pointer text-white text-5xl" onClick={()=>setIsMenuVisible(prev=> !prev)}>
        <img className="w-10" src={menu} alt="" />
      </div>
      </>}
      
      {isMenuVisible && (
        <div className="sm:hidden absolute  w-full h-44 bg-red-500/90 top-0 left-0 flex flex-col  p-2 text-lg   items-center justify-end  gap-3">
          <div onClick={()=>setIsMenuVisible(prev=> !prev)} className="">
            <img src={close} alt="" />
          </div>
          {location.pathname === "/search" && (
            <select
              onChange={(e) => handleLanguageSelect(e)}
              className="bg-white/30 text-white  w-11/12 p-2  rounded-lg"
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option
                  key={lang.identifier}
                  className="text-black bg-white/30"
                  value={lang.identifier}
                >
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          {location.pathname != "/search" && (
            <button
              onClick={() => navigate("/search")}
              className="cursor-pointer w-full p-2 text-white font-medium "
            >
              GPT search
            </button>
          )}
          <button
            onClick={handleSubmit}
            className="font-bold text-white w-full p-2 cursor-pointer"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
