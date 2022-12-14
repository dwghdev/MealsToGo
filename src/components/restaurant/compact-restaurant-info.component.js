import React from "react";
import WebView from "react-native-webview";
import styled from "styled-components/native";

import { Platform } from "react-native";
import { Text } from "../typography/text.component";

const CompactImage = styled.Image`
  border-radius: 10px;
  height: 100px;
  width: 120px;
`;

const CompactWebView = styled(WebView)`
  height: 100px;
  width: 120px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const Image = isAndroid && isMap ? CompactWebView: CompactImage;

  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text center variant="caption" numberOfLines={3}>
        {restaurant.name}
      </Text>
    </Item>
  );
};
