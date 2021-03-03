import React, { Component } from "react";
import { StyleSheet, SafeAreaView, Text, Image, Button } from "react-native";
import ListView from "list_view.js";
import DetailView from "detail_view.js";
import TabOne from "tab1.js";
import TabTwo from "tab2.js";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

class HomeView extends Component {
  renderTabComponents = () => (
    <Tab.Navigator>
        <Tab.Screen name="Tab 1" component={TabOne} />
        <Tab.Screen name="Tab 2" component={TabTwo} />
    </Tab.Navigator>
    );
    
  render() {  
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ListView} />
        <Stack.Screen name="Detail" component={DetailView} />
        <Stack.Screen name="Tabs" children={this.renderTabComponents} />
      </Stack.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeView;
