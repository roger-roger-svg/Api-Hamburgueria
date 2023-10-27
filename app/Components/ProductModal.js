import React from "react";
import { View, Text, TouchableHighlight, ScrollView } from "react-native";
import Modal from "react-native-modal";
import styles from "../styles";

const ProductModal = ({ isVisible, onClose, productName, description }) => {
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.modalContainer}>
        <View style={styles.modalHeader}>
          <Text
            style={[
              styles.modalTitle,
              {
                backgroundColor: "orange",
                fontStyle: "italic",
                marginLeft: 100,
                fontSize: 20,
              },
            ]}
          >
            Detalhes do Produto
          </Text>
          <TouchableHighlight
            style={styles.customButtom}
            underlayColor="lightgray"
            onPress={onClose}
          >
            <Text
              style={[
                styles.buttonText,
                {
                  fontWeight: 700,
                  color: "black",
                  fontSize: 20,
                  textAlign: "center",
                  borderRadius: 10,
                },
              ]}
            >
              x
            </Text>
          </TouchableHighlight>
        </View>
        <ScrollView>
          {productName && (
            <Text
              style={[
                styles.modalText,
                {
                  color: "black",
                  fontWeight: 500,
                  fontStyle: "italic",
                },
              ]}
            >
              *Nome do Produto: {productName}
              {"\n"}
              Ingredientes: {description}
            </Text>
          )}
        </ScrollView>
      </View>
    </Modal>
  );
};

export default ProductModal;
