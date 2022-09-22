import React from "react";
import styled from "styled-components/native";

import { Card } from "react-native-paper";
import { Text } from "../typography/text.component";
import { Spacer } from "../spacer/spacer.component";
import { ScrollView, TouchableOpacity } from "react-native";
import { CompactRestaurantInfo } from "../restaurant/compact-restaurant-info.component";

const FavouritesWrapper = styled(Card)`
  z-index: 999;
  padding: 10px;
  border-radius: 15px;
`;

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }

  return (
    <FavouritesWrapper elevation={3}>
      <Spacer variant="left.large">
        <Text variant="caption">Favourites</Text>
      </Spacer>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map(restaurant => {
          const key = restaurant.name;

          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity onPress={() => 
                onNavigate("RestaurantDetail", {
                  restaurant
                })
              }>
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
}
