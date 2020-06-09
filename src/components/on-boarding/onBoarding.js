import React, { useState } from "react";
import SignUp from "../SignUp/SignUp";
import BMI from "./bmi-calc/BMI";
import DietaryPref from "./dietaryPref";
import GettingPersonal from "./GettingPersonal";
import Active from "./ActivityLevelForm";
import SignIn from "../SignIn/SignIn";
const OnBoarding = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    email: "",
    age: "",
    gender: "",
    goalWeight: "",
    activityLevel: "",
    customRadio: "",
    ft: "",
    inch: "",
    weight: "",
  });
  const [step, setStep] = useState("signUp");

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  console.log(user);
  return (
    <>
      {step === "signUp" ? (
        <SignUp setStep={setStep} handleChange={handleChange} />
      ) : step === "GettingPersonal" ? (
        <GettingPersonal setStep={setStep} handleChange={handleChange} />
      ) : step === "ActivityLevel" ? (
        <Active setStep={setStep} handleChange={handleChange} />
      ) : step === "DietaryPref" ? (
        <DietaryPref setStep={setStep} handleChange={handleChange} />
      ) : step === "BMI" ? (
        <BMI
          setStep={setStep}
          setUser={setUser}
          user={user}
          handleChange={handleChange}
        />
      ) : (
        <SignIn />
      )}
    </>
  );
};

export default OnBoarding;
