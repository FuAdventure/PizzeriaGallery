//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, Image } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import HomeView from "./src/screens/components/home_view";
import ListView from "./src/screens/components/function_list_view";
import DetailView from "./src/screens/components/detail_view";
import TabOne from "./src/screens/tabs/tab1.js";
import TabTwo from "./src/screens/tabs/tab2.js";
import AddPizzeria from "./src/screens/drawer/addPizzeria.js";
import LoginForm from "./src/screens/drawer/loginForm.js";
import RegForm from "./src/screens/drawer/regForm.js";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" children={() => (
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={ListView} />
                    <Stack.Screen name="Detail" component={DetailView} />
                    <Stack.Screen name="Tabs" children={() => (
                        <Tab.Navigator>
                            <Tab.Screen name="Tab 1" component={TabOne} />
                            <Tab.Screen name="Tab 2" component={TabTwo} />
                        </Tab.Navigator>
                        )
                    } />
                </Stack.Navigator>
                )
        } />
        <Drawer.Screen name="Add Pizzeria" component={AddPizzeria} />
        <Drawer.Screen name="Register" component={RegForm} />
        <Drawer.Screen name="Log in" component={LoginForm} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
