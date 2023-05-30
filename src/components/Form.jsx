import React from "react";
import Input from "./Input";
import Submit from "./Submit";

function Form() {
  return (
    <form className="form">
      <Input type="text" placeholder="First Name" />
      <Input type="text" placeholder="Last Name" />
      <Submit/>
    </form>
  );
}

export default Form;
