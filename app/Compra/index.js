import { View, Text, StyleSheet, Button, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

export default function Page() {
  const navigation = useNavigation();
  const [timesPressed, setTimesPressed] = useState(0);

  let textLog = "Nenhum produto no carrinho";
  if (timesPressed > 1) {
    textLog = timesPressed + "x Produtos no carrinho";
  } else if (timesPressed > 0) {
    textLog = "1 Produto no carrinho";
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button title="Voltar" onPress={() => navigation.goBack()} />

        <View style={styles.cartIcon}>
          <FontAwesome name="shopping-cart" size={24} color="orange" />
          <Text style={styles.cartCount}>{timesPressed}</Text>
        </View>
      </View>
      <Image
        style={styles.logo}
        source={{
          uri: "https://i0.wp.com/multarte.com.br/wp-content/uploads/2020/09/senac-logo-sem-fundo.png?fit=1280%2C751&ssl=1",
        }}
      />
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://www.kcms.com.br/blog/wp-content/uploads/2017/03/lanchonete-competitiva.jpg",
          }}
          style={styles.productImage}
        />
      </View>
      <View style={styles.productInfo}>
        <Text style={styles.productName}>Hambúrguer</Text>
        <Text style={styles.productPrice}>R$ 8,50</Text>

        <Text style={styles.productDescription}>
          Hamburguer Delicioso com : Pão, bife de hambúrguer 90g, salada e
          batata
        </Text>
        <Button
          title="Pedir"
          onPress={() => {
            setTimesPressed((current) => current + 1);
            alert("Produto comprado");
          }}
          style={styles.buyButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  header: {
    position: "absolute",
    left: 10,
    top: 10,
  },
  logo: {
    width: 170,
    height: 100,
  },
  imageContainer: {
    width: "100%",
    marginTop: 40,
  },
  productImage: {
    width: 200,
    height: 200,
    marginTop: 1,
    width: "100%",
  },
  productInfo: {
    backgroundColor: "black",
    borderRadius: 10,
    padding: 20,
    width: 450,
    height: 300,
    alignItems: "center",
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "orange",
  },
  productPrice: {
    fontSize: 20,
    color: "orange",
  },
  productDescription: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    backgroundColor: "orange",
    borderWidth: 1,
    borderRadius: 10,
    height: 100,
  },
  buyButton: {
    marginTop: 200,
  },

  text: {
    fontSize: 16,
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
    backgroundColor: "orange",
    width: 100,
  },
  logBox: {
    padding: 20,
    margin: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "orange",
    backgroundColor: "#f9f9f9",
  },
  cartIcon: {
    position: "absolute",
    right: -300,
    alignItems: "center",
    paddingRight: 10,
    backgroundColor: "black",
  },
  cartCount: {
    marginLeft: 5,
    fontSize: 18,
    fontWeight: "bold",
    color: "orange",
  },
});
