import React, { useEffect } from "react";
import { useParams } from "react-router";
import { getRepository } from "../store/actions/repositories";
import { useDispatch, useSelector } from "react-redux";
import PageWrapper from "../ui/base/PageWrapper/PageWrapper";
import Avatar from "../ui/base/Avatar/Avatar";
import RepositoryInfo from "../ui/blocks/Repository/RepositoryInfo";
import { ContentRow } from "../ui/base/Container/ContainerStyled";
import Preloader from "../ui/base/Preloader/Preloader";
import { Links } from "../ui/blocks/Repository/RepositoryInfoStyled";

const RepositoryPage = () => {
  const { owner, repo } = useParams();
  const dispatch = useDispatch();
  const { loading, repository } = useSelector((state) => state.repository);
  useEffect(() => {
    dispatch(getRepository(owner, repo));
  }, [owner, repo]);
  console.log(repository);
  return (
    <PageWrapper>
      {loading ? (
        <Preloader />
      ) : (
        <ContentRow>
          <Avatar
            src={repository.owner?.avatar_url}
            size={64}
            name={repository.owner?.login}
          />
          <RepositoryInfo
            name={repository.name}
            description={repository.description}
            rating={repository.stargazers_count}
            created_at={repository.created_at}
          />
          <Links></Links>
        </ContentRow>
      )}
    </PageWrapper>
  );
};

export default RepositoryPage;
