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
import { groupSea } from "../../db/slide-data";

type Props = {} & NativeStackScreenProps<RootStackParams, "Detail">;

const Detail = ({ navigation, route }: Props) => {
  const groupSeaName = route.params.groupSeaName;
  const [data] = useState(groupSea[groupSeaName]);
  return (
    <Box flex={1}>
      <StatusBar style="light" />
      <ImageBackground source={{ uri: data.image }} w="$full" height={240}>
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
            >
              {data.title}
            </Text>
          </Box>
          <VStack gap={"$2"}>
            <Text fontWeight={"$bold"} fontSize={"$lg"}>
              Cấu trúc cơ thể
            </Text>
            <Text>{data.structure}</Text>
          </VStack>
          <VStack gap={"$1"}>
            <Text fontWeight={"$bold"} fontSize={"$lg"}>
              Khu vực sống
            </Text>
            <Text>{data.habitat}</Text>
          </VStack>
          <VStack gap={"$1"}>
            <Text fontWeight={"$bold"} fontSize={"$lg"}>
              Di chuyển
            </Text>
            <Text>{data.movement}</Text>
          </VStack>
          <VStack gap={"$1"}>
            <Text fontWeight={"$bold"} fontSize={"$lg"}>
              Sinh đẻ
            </Text>
            <Text>{data.behavior}</Text>
          </VStack>
          <VStack gap={"$1"}>
            <Text fontWeight={"$bold"} fontSize={"$lg"}>
              Sự thích nghi thú vị
            </Text>
            <Text>{data.adaptation}</Text>
          </VStack>
          <VStack gap={"$1"}>
            <Text fontWeight={"$bold"} fontSize={"$lg"}>
              Ví dụ
            </Text>
            <Text>{data.example}</Text>
          </VStack>
        </VStack>
      </ScrollView>
    </Box>
  );
};

export default Detail;
