import { View } from '@tarojs/components'

const BusinessTemp = () => {
  return (
    <View className={['temp-container','businessTemp']}>
        <View className={['tempItem','companyName']}>单位名字把咔吧咔吧咔吧咔吧咔吧咖</View>
        <View className='tempItem'>日期</View>
        <View className='tempItem'>业务 1234 件</View>
    </View>
  )
}

export default BusinessTemp