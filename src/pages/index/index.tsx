import { useState } from 'react'
import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { AtButton, AtAvatar, AtIcon } from 'taro-ui'
import classNames from 'classnames'

import logoIcon from '@/asset/imgs/icon/logo-icon.png'
import closeIcon from '@/asset/imgs/icon/close-icon.png'
import CenterContainer from '@/components/CenterContainer'
import cls from './index.module.less'

export default function Index() {
  const [hiddenAd, setHiddenAd] = useState(false)
  useLoad(() => {
    console.log('Page loaded.')
  })

  interface Point {
    x: number
    y: number
  }

  let point:Point = { x: 0, y: 0, z: 0 }

  return (
    <View className='index'>
      {!hiddenAd && (
        <View className={classNames('at-row', 'at-row__align--center', cls.commonTip)}>
          <View className='at-col-3'>
            <View className='at-row at-row__align--center at-row__justify--around'>
              <img src={closeIcon} alt='close' className={cls.closeIcon} />
              <AtAvatar image={logoIcon} size='small' className={cls.logoIcon}></AtAvatar>
            </View>
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
