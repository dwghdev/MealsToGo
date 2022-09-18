import React from "react";
import { ThemeProvider } from "styled-components/native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { useFonts as useOswald, Oswald_400Regular } from "@expo-google-fonts/oswald";

import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";

import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAZxwdV_HyXswJ2y4jApq8MgCdVF0ty-9E",
  authDomain: "mealstogo-e2e6a.firebaseapp.com",
  projectId: "mealstogo-e2e6a",
  storageBucket: "mealstogo-e2e6a.appspot.com",
  messagingSenderId: "947013286871",
  appId: "1:947013286871:web:a0c59228d52f1fe4bc2992"
};

firebase.initializeApp(firebaseConfig);

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <Navigation />            
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
