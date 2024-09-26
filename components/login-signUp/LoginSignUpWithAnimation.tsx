import React, { memo, useRef, useState } from "react";
import { Animated, StyleSheet, View } from "react-native";
import { appColors } from "../../utils";
import { SimpleButton } from "../buttons";
import { SimpleInput } from "../inputs";
import { AppText } from "../texts";

const LoginSignUpWithAnimation = () => {
  const [isLogin, setIsLogin] = useState(true);
  const formAnim = useRef(new Animated.Value(0)).current;

  const toggleForm = () => {
    Animated.timing(formAnim, {
      toValue: isLogin ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      setIsLogin(!isLogin);
    });
  };

  const loginFormOpacity = formAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const signUpFormOpacity = formAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const translateXLogin = formAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 100],
  });

  const translateXSignUp = formAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-100, 0],
  });

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Animated.View
          style={[
            styles.form,
            {
              opacity: loginFormOpacity,
              transform: [{ translateX: translateXLogin }],
            },
          ]}
        >
          <AppText style={styles.formTitle} label="Login" />

          <SimpleInput placeholder="Email" style={styles.input} />

          <SimpleInput
            secureTextEntry
            style={styles.input}
            placeholder="Password"
          />

          <SimpleButton
            label="Login"
            onPress={() => {}}
            style={styles.submitButton}
            lblStyle={{ color: appColors.white }}
          />
        </Animated.View>

        <Animated.View
          style={[
            styles.form,
            {
              opacity: signUpFormOpacity,
              transform: [{ translateX: translateXSignUp }],
            },
          ]}
        >
          <AppText style={styles.formTitle} label="SignUp" />

          <SimpleInput placeholder="Username" style={styles.input} />

          <SimpleInput placeholder="Email" style={styles.input} />

          <SimpleInput
            secureTextEntry
            style={styles.input}
            placeholder="Password"
          />

          <SimpleButton
            label="SignUp"
            onPress={() => {}}
            style={styles.submitButton}
            lblStyle={{ color: appColors.white }}
          />
        </Animated.View>
      </View>

      <View style={styles.toggleContainer}>
        <AppText
          style={styles.toggleText}
          label={
            isLogin ? "Don't have an account? " : "Already have an account? "
          }
        />

        <SimpleButton
          onPress={toggleForm}
          style={{ width: "20%" }}
          lblStyle={styles.toggleButtonText}
          label={isLogin ? "SignUp" : "Login"}
        />
      </View>
    </View>
  );
};

export default memo(LoginSignUpWithAnimation);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderColor: appColors.lightGrey,
  },
  formContainer: {
    width: "80%",
    height: 300,
    position: "relative",
  },
  form: {
    width: "100%",
    position: "absolute",
  },
  formTitle: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    padding: 10,
    width: "100%",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    backgroundColor: appColors.white,
  },
  submitButton: {
    width: "100%",
    borderRadius: 5,
    alignItems: "center",
    backgroundColor: appColors.blue,
  },
  submitButtonText: {
    color: appColors.white,
  },
  toggleContainer: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  toggleText: {
    fontSize: 16,
    color: appColors.black,
  },
  toggleButtonText: {
    fontSize: 16,
    color: appColors.blue,
  },
});
