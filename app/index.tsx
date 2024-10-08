import Banner from "@/components/Banner";
import NutritionalCard from "@/components/NutritionalCard";
import Row from "@/components/Row";
import { ThemedText } from "@/components/ThemedText";
import useThemeColors from "@/hooks/UseThemeColors";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  
  const colors = useThemeColors()
  return (
    <SafeAreaView style={styles.header}>
      <Text>Edit app/index.tsx to edit this screen.esbbtrdff</Text>
      <ThemedText variant={"title1"} color={"white"}>ddddd</ThemedText>
      <Banner/>
      {/* <Section>
        </Section> */}
        <Row gap={5} style={styles.rowTwoItems}>
          <NutritionalCard
          nutritionalName={'calories'}
          nutrionalData={'2600'}
          icon={'burn'}
          backgroundcolor={colors.gray}
          indice={'g'}
          />
          <NutritionalCard
          nutritionalName={'protein'}
          nutrionalData={'80'}
          backgroundcolor={colors.black}
          indice={'g'}
          icon={'protein'}
          textColor={'white'}
          />
          <NutritionalCard
          nutritionalName={'carbs'}
          nutrionalData={'260'}
          backgroundcolor={colors.blue}
          indice={'g'}
          icon={'carbs'}
          />
          <NutritionalCard
          nutritionalName={'fat'}
          nutrionalData={'80'}
          backgroundcolor={colors.blueLight}
          indice={'g'}
          icon={'fat'}
          />
        </Row>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 12,
    paddingBottom: 8,
    backgroundColor: 'white',
  },
  rowTwoItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
})