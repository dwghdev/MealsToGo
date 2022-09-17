import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";

import { LocationContext } from "../../../services/location/location.context";

const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
`;

export const Search = ({ isFavouritesToggled, onFavouritesToggled }) => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchContainer>
      <Searchbar
        value={searchKeyword}
        onIconPress={onFavouritesToggled}
        placeholder="Search for a location"
        onSubmitEditing={() => search(searchKeyword)}
        onChangeText={text => setSearchKeyword(text)}
        icon={isFavouritesToggled ? "heart" : "heart-outline"}
      />
    </SearchContainer>
  );
};
