import React, { useState, useEffect } from "react";
import { StyleSheet, SafeAreaView, View, Text, Image, Button, FlatList, TouchableOpacity, } from "react-native";
import client from "./../../api/client";
import Card from "./shared/card";

const ListView = ({ navigation }) => {
  const [data, setData] = useState([]);
  
  const getList = async () => {
    const response = await client.get("/api");
    setData(response.data);
  };
  
  useEffect(() => {
    getList();
  }, []);
  
  //const mytext = "by Fu Sun"
    return (
     <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("Detail", { objurl: item.absolute_url, hey: "Best Pizza" });
                    }}
                >
                  <Card
                    logo={item.logo_image}
                    title={item.pizzeria_name}
                    details={item.city}
                  /> 
                </TouchableOpacity>
            );
          }}
        />
      </View> 
     </SafeAreaView>
    );
  
  }
    
const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#eeeeee",
    padding: 20,
  },
  title: {
    fontSize: 36,
    marginBottom: 16,
  },
  baseText: {
    color: "navy",
    fontSize: 30,
    fontStyle: "italic",
  },
  newText:{
    color: "red",
  },
  pizzaImage: {
    width: 200,
    height: 200,
  },
  itemText: {
    color: "green",
    fontSize: 20,
  },
});

export default ListView;
