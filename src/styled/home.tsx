import styled from "styled-components";

const HomeWrapper = styled.div`
  & > h1 {
    text-align: center;
  }
`;

const ListUsers = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  justify-content: center;
  margin: auto;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 80%;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const User = styled.div`
  margin: 1rem;
  padding: 1rem;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 200px;
  box-sizing: border-box;

  @media (max-width: 767px) {
    margin: 0.25rem;
    padding: 0.25rem;
    width: 40%;
  }

  & > h2 {
    text-align: center;
    font-size: 1.25rem;
  }

  & > p {
    font-size: 14px;
    text-align: center;

    @media (max-width: 767px) {
      font-size: 12px;
    }
  }

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.5rem;

    & > img {
      width: 100px;
      height: 100px;
    }
  }
`;

const ButtonPageDiv = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
`;

const ButtonPage = styled.div<{
  page: number;
  totalPages: number;
  buttonType: string;
}>`
  margin: 0.5rem;
  padding: 2px;
  cursor: ${(props) =>
    props.buttonType === "next"
      ? props.page < props.totalPages
        ? "pointer"
        : "not-allowed"
      : props.buttonType === "prev"
      ? props.page > 1
        ? "pointer"
        : "not-allowed"
      : "not-allowed"};
  background-color: #2c99f1;
  border: none;
  background-color: ${(props) =>
    props.buttonType === "next"
      ? props.page < props.totalPages
        ? "#2c99f1"
        : "#a7a7a7"
      : props.buttonType === "prev"
      ? props.page > 1
        ? "#2c99f1"
        : "#a7a7a7"
      : "#2c99f1"};

  &:hover {
    background-color: ${(props) =>
      props.buttonType === "next"
        ? props.page < props.totalPages
          ? "#5fb0f1"
          : "#a7a7a7"
        : props.buttonType === "prev"
        ? props.page > 1
          ? "#5fb0f1"
          : "#a7a7a7"
        : "#5fb0f1"};
  }
`;

export { HomeWrapper, ListUsers, User, ButtonPageDiv, ButtonPage };
