import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  Switch,
  TouchableHighlight,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import styles from "./styles";
import Carousel, { PaginationLight } from "react-native-x-carousel";
import axios from "axios";
import List from "./Components/List";
import ProductModal from "./Components/ProductModal";
import ButtonComprar from "./Components/Botao";
import { Link } from "expo-router";

const DATA = [
  {
    id: "1",
    coverImageUri:
      "https://www.kcms.com.br/blog/wp-content/uploads/2017/03/lanchonete-competitiva.jpg",
    cornerLabelColor: "orange",
    cornerLabelText: "Hambúrguer",
  },
  {
    id: "2",
    coverImageUri:
      "https://www.sadia.com.br/assets/images/_/recipes/7bdd012188a600d14e430777c42d03a7be66c5d9.jpg",
    cornerLabelColor: "orange",
    cornerLabelText: "X-Búrguer",
  },
  {
    id: "3",
    coverImageUri:
      "https://www.sabornamesa.com.br/media/k2/items/cache/5098e75e57e36807c173cb7490b1b0d2_XL.jpg",
    cornerLabelColor: "orange",
    cornerLabelText: "X-Bacon",
  },
  {
    id: "4",
    coverImageUri:
      "https://www.receiteria.com.br/wp-content/uploads/receitas-de-x-tudo.jpg",
    cornerLabelColor: "orange",
    cornerLabelText: "X-Tudo",
  },
  {
    id: "5",
    coverImageUri:
      "http://bigx.com.br/wp-content/uploads/2020/02/Hamb%C3%Barguer-de-Salm%C3%A3o.png",
    cornerLabelColor: "orange",
    cornerLabelText: "Hambúrguer de Salmão",
  },
];
export default function Page() {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [todosNomes, setTodosNomes] = useState([]);
  const [selecionarNomeProduto, setSelecionarNomeProduto] = useState("");
  const [mostrarOutput, setMostrarOutput] = useState(false);
  const [showFlatList, setShowFlatList] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    getTodosNomes();
  }, []);

  const getTodosNomes = () => {
    axios
      .get("https://t52zk9hk-3000.brs.devtunnels.ms/produtos")
      .then((response) => {
        const nomes = response.data.map((item) => item.nome);
        setTodosNomes(nomes);
        setMostrarOutput(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getProdutoSelecionado = () => {
    axios
      .get(
        `https://t52zk9hk-3000.brs.devtunnels.ms/produtos?nome=${selecionarNomeProduto}`
      )
      .then((response) => {
        console.log(response.data);
        setNome(response.data[0].nome);
        setDescricao(response.data[0].descricao);
        setPreco(response.data[0].preco);
        setMostrarOutput(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (selecionarNomeProduto) {
      getProdutoSelecionado();
    }
  }, [selecionarNomeProduto]);

  const renderItem = (data) => (
    <View key={data.coverImageUri} style={styles.cardContainer}>
      <View style={styles.cardWrapper}>
        <Image style={styles.card} source={{ uri: data.coverImageUri }} />
        <View
          style={[
            styles.cornerLabel,
            { backgroundColor: data.cornerLabelColor },
          ]}
        >
          <Text style={styles.cornerLabelText}>{data.cornerLabelText}</Text>
        </View>
      </View>
    </View>
  );
  const showCustomAlert = () => {
    setIsModalVisible(true);
  };
  const closeCustomAlert = () => {
    setIsModalVisible(false);
  };
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.containerLogo}>
        <Image
          style={styles.logo}
          source={{
            uri: "https://i0.wp.com/multarte.com.br/wp-content/uploads/2020/09/senac-logo-sem-fundo.png?fit=1280%2C751&ssl=1",
          }}
        />
        <Text style={styles.title}>Lanchonete Senac</Text>
      </View>
      <View style={styles.switchContainer}>
        <Text style={{ color: "orange" }}>Mostrar Lista: </Text>
        <Switch
          trackColor={{ false: "gray", true: "blue" }}
          thumbColor={showFlatList ? "orange" : "orange"}
          onValueChange={(value) => setShowFlatList(value)}
          value={showFlatList}
        />
      </View>

      <View style={styles.flatlist}>
        {showFlatList && (
          <List
            data={DATA}
            onProductSelect={(productName) => {
              setSelecionarNomeProduto(productName);
              setIsModalVisible(true);
            }}
            setIsModalVisible={setIsModalVisible}
          />
        )}
      </View>
      <ProductModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        productName={selecionarNomeProduto}
        description={descricao}
      />
      {!showFlatList && (
        <View style={styles.carousel}>
          <Carousel
            pagination={PaginationLight}
            renderItem={renderItem}
            data={DATA}
            loop
            autoplay
          />
        </View>
      )}

      {showFlatList || (
        <>
          <Text style={styles.Escolha}>Escolha o produto </Text>
          <Picker
            selectedValue={nome}
            style={styles.picker}
            onValueChange={(itemValue) => setSelecionarNomeProduto(itemValue)}
          >
            {todosNomes.map((nome, index) => (
              <Picker.Item key={index} label={nome} value={nome} />
            ))}
          </Picker>
          <View style={styles.saida}>
            <Text style={{ fontWeight: "bold", textAlign: "center" }}>
              * Descrição do produto selecionado *
            </Text>

            {descricao && <Text style={styles.textOutput}>{descricao}</Text>}
            {preco && (
              <Text style={styles.textOutput}>Preço: R${preco} reais</Text>
            )}
            <ButtonComprar></ButtonComprar>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

//
