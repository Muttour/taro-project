import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { AtAvatar } from 'taro-ui'
import './index.less'

export default function Mycenter() {
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='myCenter'>
      <Text>Hello world!</Text>
      <AtAvatar text='    ' />
    </View>
  )
}
