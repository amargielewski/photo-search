import { ReactChild } from "react";

//components
import { Typography } from "components/Typography/Typography";

//styled
import { StyledLabel } from "./Label.styled";

type LabelProps = {
  children: ReactChild | ReactChild[];
  text: string;
};

export const Label = ({ children, text }: LabelProps) => {
  return (
    <StyledLabel>
      <Typography
        fontSize="xl"
        fontWeight="semiBold"
        as="span"
        color="text_primary"
        textTransform="capitalize"
      >
        {text}
      </Typography>
      {children}
    </StyledLabel>
  );
};
