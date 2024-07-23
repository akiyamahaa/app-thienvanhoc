import { StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Box, ImageBackground, Text, VStack } from "@gluestack-ui/themed";
import { EData, IData } from "../../../db/home-data";
import { useNavigation } from "@react-navigation/native";

export default function MemberImage(props: IData) {
  const navigation = useNavigation<any>();
  const { image, title, description } = props;

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("DetailCommon", {
          id: props.id,
          dataType: EData.HEADER_SLIDE,
        });
      }}
    >
      <Box rounded={"$2xl"} overflow="hidden" height={"$96"}>
        <ImageBackground
          source={typeof image == "string" ? { uri: image } : image}
          w="$full"
          alt="Animal"
          h={"$full"}
          resizeMode={"stretch"}
        >
          <Box
            p={"$4"}
            flexDirection="column"
            justifyContent="flex-end"
            flex={1}
          >
            <VStack
              gap={"$3"}
              w={"$full"}
              bg="$white"
              opacity={"$60"}
              p="$4"
              borderRadius={"$2xl"}
            >
              <Text color="$black" fontSize={18} fontWeight="$bold">
                {title}
              </Text>
              <Text color="$black" ellipsizeMode="tail" numberOfLines={3}>
                {description}
              </Text>
            </VStack>
          </Box>
        </ImageBackground>
      </Box>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
