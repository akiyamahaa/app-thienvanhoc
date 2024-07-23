import { StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ErrorOverlay from "../components/common/ErrorOverlay";
import LoadingOverlay from "../components/common/LoadingOverlay";
import { RootStackParams } from "./config";
import TabNavigation from "./TabNavigation";
import QuizzResult from "../screens/quizz-mode/QuizzResult";
import QuizzScreen from "../screens/quizz-mode/QuizzScreen";
import PracticeResult from "../screens/guess-word/PracticeResult";
import PracticeScreen from "../screens/guess-word/PracticeScreen";
import { UseTokenColor } from "../hook/UseTokenColor";
import PuzzleScreen from "../screens/puzzle/PuzzleScreen";
import DetailCommon from "../screens/detail/DetailCommon";

const Stack = createNativeStackNavigator<RootStackParams>();

const Root = () => {
  const colors = UseTokenColor();
  return (
    <>
      <LoadingOverlay />
      <ErrorOverlay />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="TabNavigation" component={TabNavigation} />
          <Stack.Screen name="DetailCommon" component={DetailCommon} />

          <Stack.Screen
            name="QuizzResult"
            component={QuizzResult}
            options={{
              headerShown: true,
              title: "Kết quả trắc nghiệm",
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: colors.white,
              },
              headerTitleStyle: {
                color: colors.primary600,
              },
              headerTintColor: colors.primary600,
            }}
          />
          <Stack.Screen
            name="QuizzScreen"
            component={QuizzScreen}
            options={{
              headerShown: true,
              title: "Bài trắc nghiệm",
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: colors.white,
              },
              headerTitleStyle: {
                color: colors.primary600,
              },
              headerTintColor: colors.primary600,
            }}
          />
          <Stack.Screen
            name="PracticeScreen"
            component={PracticeScreen}
            options={{
              headerShown: true,
              title: "Bài thực hành",
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: colors.white,
              },
              headerTitleStyle: {
                color: colors.primary600,
              },
              headerTintColor: colors.primary600,
            }}
          />
          <Stack.Screen
            name="PracticeResult"
            component={PracticeResult}
            options={{
              headerShown: true,
              title: "Kết quủa thực hành",
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: colors.white,
              },
              headerTitleStyle: {
                color: colors.primary600,
              },
              headerTintColor: colors.primary600,
            }}
          />
          <Stack.Screen
            name="PuzzleScreen"
            component={PuzzleScreen}
            options={{
              headerShown: true,
              title: "Trò chơi",
              headerBackTitleVisible: false,
              headerStyle: {
                backgroundColor: colors.white,
              },
              headerTitleStyle: {
                color: colors.primary600,
              },
              headerTintColor: colors.primary600,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Root;

const styles = StyleSheet.create({});
