import React, { useState } from "react";
import RepositoryItem from "./RepositoryItem/RepositoryItem";
import { useDispatch, useSelector } from "react-redux";
import { ListWrapper, Title } from "./ListRepositoriesStyled";
import Pagination from "../Pagination/Pagination";
import Preloader from "../../base/Preloader/Preloader";
import { fetchRepositories } from "../../../store/actions/repositories";

const ListRepositories = () => {
  const { repositories, loading, query, page, count, limit, sort, order } =
    useSelector((state) => state.repositories);
  const dispatch = useDispatch();
  const storage = window.localStorage;
  const [favsArr, setFavsArr] = useState(
    JSON.parse(storage.getItem("favorites"))
  );
  if (repositories.length === 0 && !loading) {
    return <div style={{ textAlign: "center" }}>Репозитории не найдены</div>;
  }

  const favsBtnHandler = (id) => {
    const storageFavs = JSON.parse(storage.getItem("favorites"));
    const tempArr = storageFavs ? storageFavs : [];
    const existingId = favsArr.indexOf(id);
    if (existingId >= 0) {
      tempArr.splice(existingId, 1);
    } else {
      tempArr.push(id);
    }
    setFavsArr(tempArr);
    storage.setItem("favorites", JSON.stringify(tempArr));
  };

  const onPageChanged = (page) => {
    dispatch(fetchRepositories(query, limit, page, sort, order));
  };

  return loading ? (
    <Preloader />
  ) : (
    <ListWrapper>
      {query && <Title>Search by: {query}</Title>}
      {repositories.map((repo) => (
        <RepositoryItem
          key={repo.id}
          id={repo.id}
          favorite={favsArr?.includes(repo.id)}
          rating={repo.stargazers_count}
          fullName={repo.full_name}
          image={repo.owner.avatar_url}
          onClick={favsBtnHandler}
        />
      ))}
      <Pagination
        onPageChanged={onPageChanged}
        page={page}
        count={count}
        limit={limit}
      />
    </ListWrapper>
  );
};

export default ListRepositories;
