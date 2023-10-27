import React from "react";
import { View, Text, FlatList, Image, TouchableHighlight } from "react-native";
import styles from "../styles";

const List = ({ data, onProductSelect, setIsModalVisible }) => {
  const renderItem = ({ item }) => (
    <TouchableHighlight
      onPress={() => {
        onProductSelect(item.cornerLabelText);
        setIsModalVisible(true);
      }}
    >
      <View key={item.id} style={styles.cardContainer}>
        <View style={styles.cardWrapper}>
          <Image style={styles.card} source={{ uri: item.coverImageUri }} />
          <View
            style={[
              styles.cornerLabel,
              { backgroundColor: item.cornerLabelColor },
            ]}
          >
            <Text style={styles.cornerLabelText}>{item.cornerLabelText}</Text>
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};

export default List;
