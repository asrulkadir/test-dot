import styled from "styled-components";

const ConfirmWrapper = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const ConfirmDiv = styled.div`
  width: 25%;
  background-color: rgb(121, 172, 248);
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 50%;
  }

  @media (max-width: 767px) {
    width: 75%;
  }

  & > h1 {
    text-align: center;
  }

  & > div {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
`;

const ButtonConfirm = styled.button<{ confirm: boolean }>`
  background-color: ${(props) => (props.confirm ? "#38fa72" : "#ff1d1d")};
  margin: 0.25rem;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => (props.confirm ? "#72f89a" : "#fa4444")};
  }
`;

export { ConfirmWrapper, ConfirmDiv, ButtonConfirm };
