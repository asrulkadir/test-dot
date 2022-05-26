import styled from "styled-components";

const LoginPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(240, 242, 245);
  border-radius: 5px;
  padding: 20px;
  height: 100vh;
`;

const LoginPageContainer = styled.div`
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  width: 25%;

  h1 {
    text-align: center;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 767px) {
    width: 75%;
  }
`;

const FormLogin = styled.form`
  display: flex;
  flex-direction: column;

  .error {
    margin: auto;
  }
`;

const Input = styled.input`
  margin: 5px 0;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #ccc;

  &:focus::placeholder {
    color: rgb(171, 173, 190);
  }

  &:focus {
    border: 1px solid rgb(128, 140, 255);
    outline: none;
  }
`;

const Button = styled.button`
  background-color: rgb(128, 140, 255);
  border-radius: 5px;
  border: 1px solid rgb(128, 140, 255);
  padding: 5px 10px;

  &:hover {
    cursor: pointer;
    background-color: rgb(83, 101, 255);
  }
`;

export { LoginPageWrapper, LoginPageContainer, FormLogin, Input, Button };
