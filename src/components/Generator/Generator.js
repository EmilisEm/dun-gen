import React, { useContext } from "react";
import context from "../../userContext";
import GeneratorDunForm from "./GeneratorDunForm";
import GeneratorSelect from "./GeneratorSelect";
import GeneratorCharForm from "./GeneratorCharForm";
import style from "./GeneratorStyle.module.css";
import GeneratorBackground1 from "./GeneratorBackground1";
import GeneratorBackground2 from "./GeneratorBackground2";

const Generator = () => {
  const { currentMenu } = useContext(context);
  return (
    <div className={style.Generator} id="generator">
      <GeneratorBackground1 />
      <GeneratorBackground2 />
      <GeneratorSelect />
      {currentMenu === "maze" ? <GeneratorDunForm /> : <GeneratorCharForm />}
    </div>
  );
};

export default Generator;
