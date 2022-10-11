import { useState } from "react";
import {register} from "../../redux/auth/authOpiretion";
import { useDispatch } from "react-redux";
import {SubmitForm, Label, Input, Btn, Wrapper} from "./RegisterView.styled"

const RegisterView = () =>{
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <Wrapper>
    <SubmitForm onSubmit={handleSubmit}>
   
      <Label >
        Name
        <Input
          name="name"
          placeholder="Volodymyr Zelenskyi"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
          onChange={handleChange}
          value={name}
       
        />
      </Label>
      <Label>
        Email
        <Input
          name="email"
          placeholder="qwerty@mail.com"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          required
          onChange={handleChange}
          value={email}
       
        />
      </Label>
      <Label >
        Password
        <Input
          name="password"
          type="password"
          required
          onChange={handleChange}
          value={password}
         
        />
      </Label>
      <Btn  type="submit">
        Sign up
      </Btn>
      </SubmitForm>
      </Wrapper>
  );
}

export default RegisterView;