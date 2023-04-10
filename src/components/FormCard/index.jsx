import { useState } from 'react'
import { View } from '@tarojs/components'
import './index.less'



const FormCard = ({ innerContent, title }) => {
  return (
    <View className='fromCard-container'>
        <View className='fromCard-title'>{title}</View>
        { innerContent }
    </View>
  )
}

export default FormCard