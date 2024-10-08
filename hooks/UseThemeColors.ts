import { useColorScheme } from "react-native";
import { Colors } from "@/constants/color";

export default function useThemeColors() {

    const theme = useColorScheme() ?? "light";
    
    return Colors[theme]
}