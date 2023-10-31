import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.less'

export default function Shoppingcart() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='shoppingCart'>
      <Text>Shop Cart</Text>
    </View>
  )
}
