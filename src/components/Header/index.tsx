import { useState } from "react";
import styled from "styled-components";
import useAuth from "../../stores/auth";
import { Button } from "../../styled/login";
import Confirm from "../Confirm";

const HeaderWrapper = styled.div`
  background-color: rgb(164, 201, 255);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
`;

const Header = () => {
  const { logout } = useAuth((state) => state);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleClick = () => {
    setShowConfirm(true);
  };

  return (
    <>
      <HeaderWrapper>
        <h1>Test DOT</h1>
        <Button onClick={handleClick}>Logout</Button>
      </HeaderWrapper>

      <Confirm
        show={showConfirm}
        onConfirm={() => {
          setShowConfirm(false);
          logout();
        }}
        onCancel={() => setShowConfirm(false)}
      />
    </>
  );
};

export default Header;
