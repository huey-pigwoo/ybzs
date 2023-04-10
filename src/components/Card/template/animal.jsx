import { View } from '@tarojs/components'

const BusinessTemp = () => {
  return (
    <View className={['temp-container','animalTemp']}>
        <View className='tempItem'>动物 1234 只</View>
        <View className='tempItem'>企业 1234 家</View>
        <View className='tempItem'>业务 1234 件</View>
    </View>
  )
}

export default BusinessTemp