import { SearchIcon } from "icons/SearchIcon";
import { InputHTMLAttributes } from "react";

//styled
import {
  StyledIconWrapper,
  StyledInput,
  StyledInputWrapper,
} from "./Input.styled";

type InputProps = {} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ ...props }: InputProps) => {
  return (
    <StyledInputWrapper>
      <StyledIconWrapper>
        <SearchIcon />
      </StyledIconWrapper>
      <StyledInput {...props} />
    </StyledInputWrapper>
  );
};
