import React from "react";
import { Items } from "../../components/items/item.component";
import { SearchBar } from "../../components/search-bar/searchbar.component";
import { StyledMain } from "./StyledMain.styled";
import { StyledItem } from "../../components/items/StyledItem.styled";
import { StyledSearchBar } from "../../components/search-bar/StyledSearchBar.styled";
const HomePage = () => {
  return (
    <StyledMain>
      <StyledSearchBar>
        <SearchBar />
      </StyledSearchBar>
      <StyledItem>
        <Items />
      </StyledItem>
    </StyledMain>
  );
};

export default HomePage;
