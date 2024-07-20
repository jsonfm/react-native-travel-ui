import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { RootStackParamList } from ".";

// Create the useNavigationTyped hook
export const useNavigationTyped = () => {
  return useNavigation<NativeStackNavigationProp<RootStackParamList>>();
};
