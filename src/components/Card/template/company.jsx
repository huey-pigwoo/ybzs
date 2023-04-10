import { View } from '@tarojs/components'
import { useEffect } from 'react'
import './template.less'

const CompanyTemp = ({dataSouce}) => {

  return (
    <View className={['temp-container','companyTemp']} >
        <View>{dataSouce[0].value}</View>
        <View>企业 {dataSouce[1].value} 件</View>
    </View>
  )
}

export default CompanyTemp