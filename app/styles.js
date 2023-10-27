import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 30,
  },
  containerLogo: {
    justifyContent: "center",
    alignItems: "center",

    top: 150,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  logo: {
    width: 200,
    height: 120,
    justifyContent: "center",
  },

  container: {
    marginBottom: 30,
    alignItems: "center",
  },

  carousel: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  cardContainer: {
    width,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  cardWrapper: {
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "black",
  },
  card: {
    width: width * 0.9,
    height: width * 0.5,
  },
  cornerLabel: {
    position: "absolute",
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 8,
  },
  cornerLabelText: {
    fontSize: 12,
    color: "#fff",
    fontWeight: "600",
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
  },
  text: {
    fontSize: 20,
    width: 300,
    color: "white",
    fontStyle: "italic",
  },

  title: {
    fontSize: 28,
    width: 300,
    textAlign: "center",
    paddingBottom: 20,
    color: "orange",
    fontStyle: "italic",
    marginTop: 10,
  },
  picker: {
    fontSize: 30,
    marginVertical: 30,
    width: 300,
    padding: 10,
    borderRadius: 10,
    color: "black",
    backgroundColor: "orange",
  },
  Escolha: {
    color: "orange",
    fontSize: 18,
    fontStyle: "italic",
  },

  saida: {
    marginTop: 20,
    backgroundColor: "orange",
    padding: 10,
    borderRadius: 10,
    width: "90%",
    borderWidth: 1,
    borderColor: "black",
  },
  switchContainer: {
    marginEnd: 340,
    flex: 1,
  },
  flatlist: {
    flex: 2,

    marginBottom: 23,
  },
  modalContainer: {
    backgroundColor: "#2660A4",
    borderRadius: 10,
    height: 130,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center", // Alinhar na parte inferior
    backgroundColor: "orange",
    borderBottomWidth: 2,
    borderColor: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  customButtom: { marginRight: 0, width: 20 },
});

export default styles;
