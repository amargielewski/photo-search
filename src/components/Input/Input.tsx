import { InputHTMLAttributes } from "react";

//icons
import { SearchIcon } from "icons";

//styled
import {
  StyledSearchIconWrapper,
  StyledInput,
  StyledInputWrapper,
} from "./Input.styled";

type InputProps = {} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ ...props }: InputProps) => {
  return (
    <StyledInputWrapper>
      <StyledSearchIconWrapper>
        <SearchIcon />
      </StyledSearchIconWrapper>
      <StyledInput {...props} />
    </StyledInputWrapper>
  );
};
