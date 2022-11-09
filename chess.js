import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const Chess = () => {
  const [flexWrap, setFlexWrap] = useState("wrap");

  return (
    <PreviewLayout
      label="flexWrap"
      selectedValue={flexWrap}
      values={["wrap", "nowrap"]}
      setSelectedValue={setFlexWrap}>
      <View
        style={[styles.box, { backgroundColor: "black" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "white" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "black" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "white" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "black" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "white" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "black" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "white" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "black" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "white" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "black" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "white" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "black" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "white" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "black" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "white" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "black" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "white" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "black" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "white" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "black" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "white" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "black" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "white" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "black" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "white" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "black" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "white" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "black" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "white" }]}
      />
      
      
      
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ borderWidth:10, padding: 5, flex: 5 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[
            styles.button,
            selectedValue === value && styles.selected,
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value &&
                styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View
      style={[
        styles.container,
        { [label]: selectedValue },
      ]}
    >
      {children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
    maxHeight: 400,
  },
  box: {
    width: 60,
    height:80 ,
    bordercolor:'red',
    borderWidth:5
  },
  column: {
    flexDirection: "column",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 4,
    backgroundColor: "oldlace",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
});

export default Chess;