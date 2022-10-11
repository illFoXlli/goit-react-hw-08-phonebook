import { useState } from "react";
import { useDispatch } from "react-redux";
import {logIn} from "../../redux/auth/authOpiretion";
import { SubmitForm, Label, Btn, Input , LinkNewStyled} from "./LoginView.styled";


const LoginView = () => {
  const dispatch = useDispatch();
  const [email, setName] = useState("");
  const [password, setNumber] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "email":
        setName(value);
        break;
      case "password":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn({ email, password }));
    setNumber("");
    setName("");
  };

  return (
    <div>
      <SubmitForm onSubmit={handleSubmit}>
        <Label >
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
            required
            onChange={handleChange}
            value={password}
            type="password"
         
          />
        </Label>
        <Btn type="submit">
          
          Log in
        </Btn>
      </SubmitForm>
      <span >New to Phonebook?</span>
      <LinkNewStyled to="/login">
        Create your Phonebook account
      </LinkNewStyled>
    </div>
  );
}


export default LoginView;