import { useState } from "react";
import useAuth from "../../stores/auth";
import {
  Button,
  FormLogin,
  Input,
  LoginPageContainer,
  LoginPageWrapper,
} from "../../styled/login";

const LoginPage = () => {
  const { loading, login, error } = useAuth((state) => state);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({
      email: email,
      password: password,
    });
  };

  return (
    <LoginPageWrapper>
      <LoginPageContainer>
        <h1>Login</h1>
        <FormLogin onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">{loading ? "Loading..." : "Login"}</Button>
          {error && <div className="error">{error}</div>}
        </FormLogin>
      </LoginPageContainer>
    </LoginPageWrapper>
  );
};

export default LoginPage;
