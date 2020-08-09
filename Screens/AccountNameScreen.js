import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

import Input from "../Component/Input/input";
import Colors from "../assets/Style/Colors";
import normalize from "react-native-normalize";

import Header from "../Component/Header/Header";
import Btn from "../Component/Btn/Btn";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function AccountNameScreen() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.wrapper_green_line}>
        <Text style={styles.green_line}>-</Text>
      </View>
      <View style={styles.wrapper_bottom}>
        <View style={styles.inputs}>
          <Text style={styles.name_text}>Quel est votre nom ? </Text>
          <Text style={styles.name_platform}>
            vous apparaitrez sous la forme Prénom.N sur la plateforme.
          </Text>
          <View style={styles.input_surname}>
            <Input placeholder={"Prénom"} />
          </View>
          <View style={styles.wrapper_input_name}>
            <View style={styles.input_name}>
              <Input placeholder={"Nom"} />
            </View>
          </View>
        </View>
        <View>
          <Btn
            text="Continuer"
            color={Colors.main_white}
            backgroundColor={Colors.btn_AccountScreenValidate}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper_green_line: {
    paddingTop: normalize(10),
  },
  green_line: {
    backgroundColor: Colors.main_green,
    lineHeight: normalize(2),
  },
  wrapper_bottom: {
    marginHorizontal: normalize(15),
    height: hp("82%"),
    justifyContent: "space-between",
  },
  name_text: {
    color: Colors.main_green,
    fontSize: normalize(16),
    // font-family: Open Sans Bold;
  },
  name_platform: {
    marginVertical: normalize(12),
    color: Colors.main_grey,
    fontSize: normalize(12),
    // font-family: Open Sans Regular;
  },
  inputs: {
    paddingTop: normalize(30),
  },
  input_surname: {
    width: normalize(344, "width"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.main_white,
    borderWidth: 1,
    borderColor: Colors.main_input,
    height: normalize(42),
    borderRadius: normalize(1),
    paddingLeft: normalize(12),
  },
  input_name: {
    width: normalize(344, "width"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: Colors.main_white,
    borderWidth: 1,
    borderColor: Colors.main_input,
    height: normalize(42),
    borderRadius: normalize(1),
    paddingLeft: normalize(12),
  },
  wrapper_input_name: {
    paddingTop: normalize(16),
  },
});

export default AccountNameScreen;
