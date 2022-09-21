import { Platform } from "react-native";

export const isAndroid = Platform.OS === "android";
export const isDevelopment = process.env.NODE_ENV === "development";
export const isMock = "true";
export const host = "https://3345-136-158-41-234.ngrok.io/mealstogo-e2e6a/us-central1";
