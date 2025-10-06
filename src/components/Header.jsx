import React, { useEffect } from "react";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/store/userSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    // onAuthStateChanged is a observer (like a event listener) set on
    // the Auth Object and is called whenerver the auth object change
    // given by firebase sdk
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("onAuthStateChanged is called", user);
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSubmit = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="z-10 w-full absolute px-8 py-2 flex justify-between bg-gradient-to-b from-black">
      <img className="w-44" src={logo} alt="MoviesGPT-logo" />
      {user && (
        <div className="flex p-2 items-center gap-2">
          <img className="w-12" src={user.photoURL} alt="profile-pic" />
          <button
            onClick={handleSubmit}
            className="font-bold text-white cursor-pointer"
          >
            (Sign out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
