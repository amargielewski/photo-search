import { KeyboardEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

//components
import { Input, Label } from "components";

//constants
import { paths } from "constans";

//styled
import { StyledWrapper } from "./MainPage.styled";

export const MainPage = () => {
  const [searchText, setSearchText] = useState("");
  let navigate = useNavigate();

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;

    if (!searchText.trim()) return toast.error("Please Type Text");

    navigate(`${paths.search}/${searchText}`);
  };

  return (
    <StyledWrapper>
      <Label text="Search Photo">
        <Input
          type={"text"}
          placeholder="Search photos..."
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
          onKeyDown={(e) => handleSearch(e)}
        />
      </Label>
    </StyledWrapper>
  );
};
