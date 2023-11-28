import React, { useState } from "react";

const Input = ({ inputData, value,change }) => {
  const { id, label, type, name, placeholder,required,pattern,errormessage,autocomplete } = inputData;
 
  const [focused,setFocused] = useState(false)

  return (
    <div className="input-1" key={id}>
      <label htmlFor={label}>{label}</label>
      <input id={label} type={type} htmlFor={label} placeholder={placeholder} name={name} onChange={change} value={value}
      required={required} pattern={pattern} autoComplete={autocomplete} onBlur={()=>setFocused(true)} 
      focused={focused.toString()} // focused= "true"
      onFocus={()=>name==="confirmpassoword" && true}
      />
      <span>{errormessage}</span>
    </div>
  );
};

export default Input;
