import React from "react";
import "./App.css";
import Input from "./components/Form";
import { useState } from "react";

const App = () => {
  const [values, setValues] = useState({
    username: "",
    lastname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  function onChange(e) {
    const {value, name} = e.target;

    setValues((prevValue) => {
      return {...prevValue, [name]: value};
    });
  }


  function handleSubmit (e){
    e.preventDefault()
    console.log(values)
    setValues({
      username: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
    })
  }

  const datas = [
    {
      id: 1,
      label: "username",
      type: "text",
      name: "username",
      placeholder: "Enter user name",
      required:true,
      pattern:"^[A-Za-z0-9]{3,15}$",
      errormessage:"username must contain 3,and between 3-16  characters can include A-Z ,a-z , 0-9",
      autocomplete:"off",
    },
    {
      id: 2,
      label: "lastname",
      type: "text",
      name: "lastname",
      placeholder: "Enter lastname",
      required:true,
      pattern:"^[A-Za-z0-9]{3,15}$",
      errormessage:"username must contain 3,and between 3-16  characters can include A-Z ,a-z , 0-9",
      autocomplete:"off",


    },
    {
      id: 3,
      label: "email",
      type: "email",
      name: "email",
      placeholder: "Enter email",
      required:true,
      autocomplete:"off",
       errormessage:"IT SHOULD BE A VALID EMAIL ADDRESS"

    },
    {
      id: 4,
      label: "password",
      type: "password",
      name: "password",
      placeholder: "enter password",
      required:true,
      pattern:"(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$",
      errormessage:"Passoword must conatin 8 character and there must be incclude one special character one uppercse letter, lowercase letter and one number",
      autocomplete:"off",

    },
    {
      id: 5,
      label: "confirm password",
      type: "password",
      name: "confirmpassword",
      placeholder: "Confirm password",
      required:true,
      errormessage:"password must be match to the above one",

      pattern:values.password,
      autocomplete:"off",

    },
  ];

  return (
    <form className="input-container" onSubmit={handleSubmit}>
      {datas.map((data) => {
        return <Input key={data.id} inputData={data} value={values[data.name]} change={onChange} />;
      })}
      <div className="button-1">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default App;




/*
first step )
ALL FIELDS MUST REQUIRE SO KEEP REQUIRED = TRUE

2)By using patren we can validate the form in html5 ,we will unique pattern for each input seperately , if pattern matches the user inputed one then will show an error to the user 
IF PATTEN MATCHES THEN ONLY FORM WILL BE SUBMIT

3)IF INPUT IS NOT VALID THEN ONLY WE WANT TO SHOW THE ERROR TO THE USER ,OTHERWISE WE DON'T SO FOR THAT WE HAVE CSS INPUT:INVALID THEN DO SOMETHING , SEE THE APP.CSS FILE
.input-container input:invalid ~ span{
  display: block;
}

4) BUT HERE THERE IS GOCHA , WHEN INTIALLY THE INPUT FILED WILL BE EMPTY RIGHT SO THE ERROR MSG ,SHOWED FROM THE BEGINNIGN ONLY ,WHICH WAS NOT GOOD , TO AVOID THAT , WE HAVE USE ONBLUR EVENT ON INPUT

5) onBlur method works like this if user clicked on the input the input in the focus ,once user click on some where else on web page then the input will be blur , so then blur will be true

6) NOW WE ARE ADDING WHEN FOCUSED IS TRUE ON INPUT THEN ONLY WE ARE shwoting the error 
.input-container input:invalid[focused=true] ~ span{
  display: block;
}


7)IF INVALID WE ARE ALSO MAKING THE INPUT THE INPUT TO RED COLOR 
.input-container input:invalid[focused=true]{
  border: 1px solid red;
}


8)And here is my validation expression which is for eight characters including one uppercase letter, one lowercase letter, and one number or special character.
//(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"




9) see the confirm password pattern 
pattern = values.password , if matches then only it will we can submit the form


10) on confirm password add the onfocus event       onFocus={()=>name==="confirmpassoword" && true}


11) now change the type of text to passowrd
*/