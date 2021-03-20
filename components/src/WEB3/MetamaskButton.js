import React from "react";
import { StyleSheet, View } from "react-native";
import { ethers } from "ethers";

let provider = new ethers.providers.Web3Provider(window.ethereum);

export default function MetamaskButton() {
  function metamask() {
    window.ethereum.enable().then(provider);
  }
  return <View onClick={metamask} style={styles.metaMaskButton} />;
}

const styles = StyleSheet.create({
  metaMaskButton: {
    width: "91px",
    height: "23px",
    backgroundColor: "#c4c4c4",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    margin: 5
  }
});