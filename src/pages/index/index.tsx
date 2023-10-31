import { useState } from 'react'
import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { AtButton, AtAvatar, AtIcon } from 'taro-ui'

import logoImg from '@/asset/imgs/icon/logo-icon.png'
import CenterContainer from '@/components/CenterContainer'
import './index.less'

export default function Index() {
  const [hiddenAd, setHiddenAd] = useState(false)
  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      {!hiddenAd && (
        <View className='at-row '>
          <View className='at-col-3'>
            <AtIcon value='close' size='10' color='#fafafa'></AtIcon>
            <AtAvatar image={logoImg} size='small'></AtAvatar>
          </View>
          <View className='at-col-6'>
            <Text>打开京东APP,实惠又轻松</Text>
          </View>
          <View className='at-col-3'>
            <Text>立即打开</Text>
          </View>
        </View>
      )}
    </View>
  )
}
