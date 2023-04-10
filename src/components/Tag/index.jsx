import React from 'react'
import { View, Button } from '@tarojs/components'
import './index.less'

const Tag = ({tagValue='',type=''}) => {

    const typeStyle = type || 'NORMAL'

  return (
    <View className={['tag-container',typeStyle]}>{tagValue}</View>
  )
}

export default Tag