import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import "./index.less";

export default function Category() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View>
      <Text> category!</Text>
    </View>
  );
}
