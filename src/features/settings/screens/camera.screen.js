import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components/native";
import { View } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { Text } from "../../../components/typography/text.component";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

export const CameraScreen = () => {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef();

  if (!permission) {
    return <View />
  } else if (!permission.granted){
    return <Text>No access to camera</Text>
  }

  return (
    <ProfileCamera ref={cameraRef} type={CameraType.front}>
    </ProfileCamera>
  );
};
