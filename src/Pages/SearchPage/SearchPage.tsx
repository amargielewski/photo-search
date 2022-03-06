import { KeyboardEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Masonry from "react-masonry-css";
import { toast } from "react-toastify";

//hooks
import { usePhotos } from "hooks/usePhotos";

//components

import { Typography, Modal, Input } from "components";

//styled
import {
  StyledCardWrapper,
  StyledImage,
  StyledImageContainer,
  StyledInputContainer,
  StyledNavigateButton,
} from "./SearchPage.styled";
import { LeftIcon } from "icons";
import { useLayoutContext } from "hooks/useLayoutContext";

export const SearchPage = () => {
  const { search } = useParams();
  const [searchText, setSearchText] = useState(search);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalID, setModalID] = useState<null | string>(null);
  const navigate = useNavigate();
  const { data, error, isLoading } = usePhotos(search);
  const { toggleLockBodyScroll } = useLayoutContext();

  const handleModalToggle = (id: string) => {
    setModalIsOpen((prev) => !prev);
    setModalID(id);
    toggleLockBodyScroll();
  };

  const breakpointColumnsObj = {
    default: 3,
    1000: 2,
    500: 1,
  };

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    if (!searchText?.trim()) return toast.error("Please Type Text");
    navigate(`/search/${searchText}`);
  };

  return (
    <StyledImageContainer>
      <StyledNavigateButton onClick={() => navigate("/")}>
        <LeftIcon />
        <Typography fontSize="m" color="text_primary">
          Homepage
        </Typography>
      </StyledNavigateButton>
      <StyledInputContainer>
        <Input
          type={"text"}
          placeholder="Search photos..."
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          onKeyDown={(e) => handleSearch(e)}
        />
      </StyledInputContainer>
      {error && (
        <Typography fontSize="l" color="text_primary">
          {error}
        </Typography>
      )}
      {isLoading && (
        <Typography fontSize="l" color="text_primary">
          Loading...
        </Typography>
      )}
      {data?.length < 1 && !isLoading ? (
        <Typography fontSize="l" color="text_primary" as="h2">
          {`There are no results for this search term '${search}'`}
        </Typography>
      ) : (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {data?.map((post: any) => {
            return (
              <StyledCardWrapper
                key={post.id}
                onClick={() => handleModalToggle(post.id)}
              >
                <StyledImage src={post.urls.regular}></StyledImage>
              </StyledCardWrapper>
            );
          })}
        </Masonry>
      )}

      {modalIsOpen && (
        <Modal
          id={modalID}
          handleClick={() => {
            setModalIsOpen(false);
            toggleLockBodyScroll();
          }}
        />
      )}
    </StyledImageContainer>
  );
};
