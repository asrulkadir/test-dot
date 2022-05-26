import { useEffect, useState } from "react";
import Header from "../../components/Header";
import useApi from "../../stores/api";
import {
  ButtonPage,
  ButtonPageDiv,
  HomeWrapper,
  ListUsers,
  User,
} from "../../styled/home";

const Home = () => {
  const { users, getUsers, total_pages } = useApi((state) => state);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getUsers(page);
  }, [getUsers, page]);

  const handlePrevPage = () => {
    page > 1 && setPage(page - 1);
  };

  const handleNextPage = () => {
    total_pages > page && setPage(page + 1);
  };

  return (
    <>
      <Header />
      <HomeWrapper>
        <h1>List Users</h1>
        <ListUsers>
          {users.map((user) => (
            <User key={user.id}>
              <h2>
                {user.first_name} {user.last_name}
              </h2>
              <p>{user.email}</p>
              <div className="image">
                <img src={user.avatar} alt="user" />
              </div>
            </User>
          ))}
        </ListUsers>
        <ButtonPageDiv>
          <ButtonPage
            onClick={handlePrevPage}
            page={page}
            totalPages={total_pages}
            buttonType="prev"
          >
            Prev Page
          </ButtonPage>
          <ButtonPage
            onClick={handleNextPage}
            page={page}
            totalPages={total_pages}
            buttonType="next"
          >
            Next Page
          </ButtonPage>
        </ButtonPageDiv>
      </HomeWrapper>
    </>
  );
};

export default Home;
