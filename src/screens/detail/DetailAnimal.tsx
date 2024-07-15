import { StyleSheet } from "react-native";
import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonIcon,
  HStack,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  VStack,
} from "@gluestack-ui/themed";
import { StatusBar } from "expo-status-bar";
import { ArrowLeft2 } from "iconsax-react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../navigations/config";
import { animal } from "../../db/slide-data";
import { ButtonText } from "@gluestack-ui/themed";

type Props = {} & NativeStackScreenProps<RootStackParams, "DetailAnimal">;

const DetailAnimal = ({ navigation, route }: Props) => {
  const animalName = route.params.animalName;
  console.log("🚀 ~ DetailAnimal ~ animalName:", animalName);
  const [infoAnimal] = useState(animal[animalName]);
  console.log("🚀 ~ DetailAnimal ~ infoAnimal:", infoAnimal);

  if (!infoAnimal) {
    navigation.goBack();
  }
  return (
    <Box flex={1}>
      <StatusBar style="light" />
      <ImageBackground
        source={{ uri: infoAnimal.image }}
        w="$full"
        height={240}
      >
        <SafeAreaView>
          <HStack>
            <Button
              variant="link"
              size="lg"
              px="$2"
              onPress={() => navigation.goBack()}
            >
              <ButtonIcon as={ArrowLeft2} size="xl" color="$white" />
            </Button>
          </HStack>
        </SafeAreaView>
      </ImageBackground>
      <ScrollView>
        {/* Title */}
        <VStack p="$4" gap="$4">
          <Box marginTop={12}>
            <Text
              fontSize={"$2xl"}
              fontWeight={"$extrabold"}
              color="$primary600"
              textTransform="capitalize"
            >
              {infoAnimal.name}
            </Text>
          </Box>
          <VStack gap={"$2"}>
            <Text fontWeight={"$bold"} fontSize={"$lg"}>
              Cấu trúc cơ thể
            </Text>
            <Text>{infoAnimal.size}</Text>
          </VStack>
          <VStack gap={"$1"}>
            <Text fontWeight={"$bold"} fontSize={"$lg"}>
              Khu vực sống
            </Text>
            <Text>{infoAnimal.habitat}</Text>
          </VStack>
          <VStack gap={"$1"}>
            <Text fontWeight={"$bold"} fontSize={"$lg"}>
              Tuổi thọ
            </Text>
            <Text>{infoAnimal.age}</Text>
          </VStack>
          <VStack gap={"$1"}>
            <Text fontWeight={"$bold"} fontSize={"$lg"}>
              Sinh đẻ
            </Text>
            <Text>{infoAnimal.behavior}</Text>
          </VStack>
          <VStack gap={"$1"}>
            <Text fontWeight={"$bold"} fontSize={"$lg"}>
              Màu sắc
            </Text>
            <Text>{infoAnimal.color}</Text>
          </VStack>
          <VStack gap={"$1"}>
            <Text fontWeight={"$bold"} fontSize={"$lg"}>
              Con mồi
            </Text>
            <Text>{infoAnimal.food}</Text>
          </VStack>
        </VStack>
        <Box w={"$full"} alignItems="center">
          <Button
            onPress={() => {
              navigation.navigate("TabNavigation");
            }}
            variant="outline"
          >
            <ButtonText>Kết thúc</ButtonText>
          </Button>
        </Box>
      </ScrollView>
    </Box>
  );
};

export default DetailAnimal;
