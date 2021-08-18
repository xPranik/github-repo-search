import React from "react";
import RepositoryItem from "./RepositoryItem/RepositoryItem";
import { useSelector } from "react-redux";
import { ListWrapper } from "./ListRepositoriesStyled";
import Pagination from "../Pagination/Pagination";
import Preloader from "../../base/Preloader/Preloader";

const ListRepositories = () => {
  const { repositories, loading } = useSelector((state) => state.repositories);
  if (repositories.length === 0) {
    return <div style={{ textAlign: "center" }}>Репозитории не найдены</div>;
  }
  return loading ? (
    <Preloader />
  ) : (
    <ListWrapper>
      {repositories.map((repo) => (
        <RepositoryItem
          key={repo.id}
          rating={repo.stargazers_count}
          name={repo.name}
          ownerName={repo.owner.login}
          image={repo.owner.avatar_url}
        />
      ))}
      <Pagination />
    </ListWrapper>
  );
};

export default ListRepositories;
