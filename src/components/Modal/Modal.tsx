import { useRef } from "react";
import { format, parseISO } from "date-fns";

//hooks
import { useOnClickOutside, usePhotoDetails } from "hooks";

//icons
import { CloseIcon, LocationIcon, CalendarIcon } from "icons";

//components
import { Typography } from "components/Typography/Typography";

import {
  StyledModalContainer,
  StyledWrapper,
  StyledModalImage,
  StyledPhotoInfoContainer,
  StyledUserAvatar,
  StyledUserContainer,
  StyledCloseButton,
  StyledModalBox,
  StyledDateBox,
  StyledLocationBox,
  StyledLocationTextBox,
} from "./Modal.styled";

type ModalProps = {
  id: string | null;
  handleClick: () => void;
};

export const Modal = ({ id, handleClick }: ModalProps) => {
  const { data, error, isLoading } = usePhotoDetails(id);

  const modalRef = useRef(null);
  useOnClickOutside(modalRef, handleClick);

  return (
    <StyledWrapper>
      <StyledModalContainer>
        {isLoading && (
          <Typography fontSize="xl" color={"text_primary"}>
            Loading...
          </Typography>
        )}
        {error && (
          <Typography fontSize="xl" color={"text_primary"}>
            {error}
          </Typography>
        )}
        {data && !isLoading && (
          <StyledModalBox ref={modalRef}>
            <StyledCloseButton onClick={handleClick}>
              <CloseIcon />
            </StyledCloseButton>
            <StyledUserContainer>
              <StyledUserAvatar src={data.user.profile_image.medium} />
              <Typography fontSize="s" as="p">
                {data.user.name}
              </Typography>
            </StyledUserContainer>
            <StyledModalImage src={data.urls.regular} />
            <StyledPhotoInfoContainer>
              <StyledDateBox>
                <CalendarIcon />
                <Typography as="p" fontSize="xs">
                  {format(parseISO(data.created_at), "MMMM y")}
                </Typography>
              </StyledDateBox>

              {data.location.city && (
                <StyledLocationBox>
                  <LocationIcon />
                  <StyledLocationTextBox>
                    {data.location.country && (
                      <Typography as="p" fontSize="xs">
                        {data?.location.country}
                      </Typography>
                    )}
                    {data.location.country && (
                      <Typography as="p" fontSize="xs">
                        {data.location.city ? data.location.city : ""}
                      </Typography>
                    )}
                  </StyledLocationTextBox>
                </StyledLocationBox>
              )}
            </StyledPhotoInfoContainer>
          </StyledModalBox>
        )}
      </StyledModalContainer>
    </StyledWrapper>
  );
};
