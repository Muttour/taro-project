import { View, Text } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import { AtButton, AtAvatar } from 'taro-ui'

import img from '@/asset/imgs/icon/home-icon.png'
import CenterContainer from "@/components/CenterContainer";
import "./index.less";

export default function Index() {
  useLoad(() => {
    console.log("Page loaded.");
  });

  return (
    <View className='index'>
      <AtButton type='primary'>按钮文案</AtButton>
      <AtAvatar image={img}></AtAvatar>
      <Text>test</Text>

      <CenterContainer />
    </View>
  );
}
