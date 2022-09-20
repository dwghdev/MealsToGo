import React, { useRef, useContext } from "react";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { View } from "react-native";
import { Camera, CameraType } from "expo-camera";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Text } from "../../../components/typography/text.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

export const CameraScreen = ({ navigation }) => {
  const cameraRef = useRef();
  const { user } = useContext(AuthenticationContext);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  const snap = async () => {
    console.log("Snap!")
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  if (!permission) {
    return <View />
  } else if (!permission.granted){
    return <Text>No access to camera</Text>
  }

  return (
    <TouchableOpacity onPress={snap}>
      <ProfileCamera ref={cameraRef} type={CameraType.front} />
    </TouchableOpacity>
  );
};
