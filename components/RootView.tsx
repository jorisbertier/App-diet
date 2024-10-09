import useThemeColors from '@/hooks/UseThemeColors';
import { ViewProps, ViewStyle, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = ViewProps & {
}

export function RootView({style, ...rest}: Props) {
    const colors = useThemeColors()

    return (
        <View style={[{flex: 1}, , style]}>
            <SafeAreaView style={rootStyle}  {...rest}></SafeAreaView>
        </View>
    )
}


const rootStyle = {
    flex: 1,
    padding: 4
} satisfies ViewStyle