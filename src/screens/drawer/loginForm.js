import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, Button, Image} from "react-native";
import { Formik } from "formik";
import styles from "./loginForm_styles"; 
import validationSchema from "./loginForm_valid";
import client from "./../../api/client";
import PhotoPicker from "../components/shared/photo.js";

const LoginForm = () => {
  const handleSubmit = async (values) => {
    const data = new FormData();
    data.append("username", values.username);
    data.append("password", values.password);
    try {
      console.log(data);
      const response = await client.post("/api-token-auth/", data);
      //alert(response.data.token);
      alert("Welcome back!");
    } catch (error) {
      console.log(error);
    }
  };
        
  return (
    <View>
      <Formik
        initialValues={{
            username: "",
            password: "",
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        >
        {({ handleChange, handleSubmit, values, errors }) => (
          <SafeAreaView style={styles.content}>
            <View style={styles.container}>
                <Image
                    style={styles.pizzaImage}
                    source={{
                    uri: "https://bit.ly/book-pizza",
                    }}
                />
                <Text style={styles.title}>Login to your account</Text>
                <TextInput
                style={styles.textBox}
                value={values.username}
                type="text"
                placeholder="Username"
                onChangeText={handleChange("username")}
                />
                <Text style={styles.error}>{errors.username}</Text>
                <TextInput
                style={styles.textBox}
                value={values.password}
                placeholder="Password"
                onChangeText={handleChange("password")}
                />
                <Text style={styles.error}>{errors.password}</Text>
                <Button
                style={styles.addButton}
                onPress={handleSubmit}
                title="Submit"
                />
            </View>
          </SafeAreaView>
        )}
      </Formik>
    </View>
  );
};

export default LoginForm;