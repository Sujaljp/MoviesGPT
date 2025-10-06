import React, { useRef, useState } from "react";
import Header from "../../components/Header";
import { validateEmailAndPassword } from "../../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../../utils/store/userSlice";

const Auth = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signInForm = {
    header: "Sign In",
    buttonText: "Sign In",
    alternativeText: "New user? Register now.",
  };

  const signUpForm = {
    header: "Sign Up",
    buttonText: "Register",
    alternativeText: "Already registered? Sign In now.",
  };

  const formText = isSignIn ? signInForm : signUpForm;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted successfully");
    const validation = validateEmailAndPassword(
      email.current.value,
      password.current.value
    );
    setErrorMessage(validation);
    if (validation) return;

    if (isSignIn) {
      //sign in logic comes here
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          user.displayName;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      // sign up logic comes here
      console.log("Creating user");
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/81800911?v=4",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          user.displayName;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div className="w-full">
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/d482944d-eab4-4a64-89c9-a07a508a6e42/web/IN-en-20250929-TRIFECTA-perspective_4cf0c8a1-bd35-4d72-a49f-165021531dde_large.jpg"
          alt="logo"
        />
      </div>

      <form
        onSubmit={(e) => handleFormSubmit(e)}
        className="w-3/12 absolute p-12 left-0 right-0  bg-black/80 mx-auto my-32 text-white rounded-lg"
      >
        <h2 className="font-bold text-3xl py-4">{formText.header}</h2>
        {!isSignIn && (
          <input
            className="w-full my-4 mx-auto p-2  bg-neutral-900 border border-gray-500 rounded-sm"
            type="text"
            placeholder="Full Name"
            ref={name}
          />
        )}
        <input
          className="w-full my-4 mx-auto p-2  bg-neutral-900 border border-gray-500 rounded-sm"
          type="text"
          placeholder="Email Address"
          ref={email}
        />
        <input
          className="w-full my-4 mx-auto p-2  bg-neutral-900 border border-gray-500 rounded-sm"
          type="password"
          placeholder="Password"
          ref={password}
        />
        <p className="font-bold text-red-600">{errorMessage}</p>
        <button className="w-full my-4 mx-auto p-4 bg-red-700/100 font-medium rounded-lg opacity-100">
          {formText.buttonText}
        </button>

        <p
          onClick={() => setIsSignIn((prev) => !prev)}
          className="my-4 cursor-pointer"
        >
          {formText.alternativeText}
        </p>
      </form>
    </div>
  );
};

export default Auth;
