import React, {useState} from "react";
import RepositoryItem from "./RepositoryItem/RepositoryItem";
import { useSelector } from "react-redux";
import { ListWrapper } from "./ListRepositoriesStyled";
import Pagination from "../Pagination/Pagination";
import Preloader from "../../base/Preloader/Preloader";

const ListRepositories = () => {
  const [favsArr, setFavsArr] = useState([]);
  const { repositories, loading } = useSelector((state) => state.repositories);
  if (repositories.length === 0) {
    return <div style={{ textAlign: "center" }}>Репозитории не найдены</div>;
  }
  const storage = window.localStorage;

  const favsBtnHandler = (id) => {
    const storageFavs = JSON.parse(storage.getItem('favorites'));
    const tempArr = storageFavs ? storageFavs : [];
    const existingId = favsArr.indexOf(id);
    if(existingId >= 0) {
      tempArr.splice(existingId, 1);
    } else {
      tempArr.push(id);
    }
    setFavsArr(tempArr);
    storage.setItem('favorites', JSON.stringify(tempArr));
  }

  return loading ? (
    <Preloader />
  ) : (
    <ListWrapper>
      {repositories.map((repo) => (
        <RepositoryItem
          key={repo.id}
          id={repo.id}
          favorite={favsArr.includes(repo.id)}
          rating={repo.stargazers_count}
          name={repo.name}
          ownerName={repo.owner.login}
          image={repo.owner.avatar_url}
          onClick={favsBtnHandler}
        />
      ))}
      <Pagination />
    </ListWrapper>
  );
};

export default ListRepositories;
