// import { useState } from "react";
// import authOperations from "../../redux/auth/authOperations";
// import { useDispatch } from "react-redux";
import {SubmitForm, Label, Input, Btn} from "./RegisterView.styled"

const RegisterView = () =>{
  // const dispatch = useDispatch();
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // const handleChange = (e) => {
  //   const { name, value } = e.currentTarget;

  //   switch (name) {
  //     case "name":
  //       setName(value);
  //       break;
  //     case "email":
  //       setEmail(value);
  //       break;
  //     case "password":
  //       setPassword(value);
  //       break;

  //     default:
  //       return;
  //   }
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(authOperations.register({ name, email, password }));
  //   setName("");
  //   setEmail("");
  //   setPassword("");
  // };

  return (
    <SubmitForm onSubmit={()=>{}}>
   
      <Label >
        Name
        <Input
          name="name"
          placeholder="Volodymyr Zelenskyi"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          onChange={()=>{}}
          // value={name}
       
        />
      </Label>
      <Label>
        Email
        <Input
          name="email"
          placeholder="qwerty@mail.com"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          required
          onChange={()=>{}}
          // value={email}
       
        />
      </Label>
      <Label >
        Password
        <Input
          name="password"
          type="password"
          required
          onChange={()=>{}}
          // value={password}
         
        />
      </Label>
      <Btn  type="submit">
        Sign up
      </Btn>
      </SubmitForm>
  );
}

export default RegisterView;