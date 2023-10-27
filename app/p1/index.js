import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View style={styles.centered}>
      <Text>Entrei na Página 1</Text>
      <Link href="/">Voltar para a raiz</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
