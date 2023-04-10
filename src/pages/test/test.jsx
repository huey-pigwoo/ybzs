import { useState, useEffect, useRouter } from 'react'
import { View, Text, Picker } from '@tarojs/components'
import './test.less'
import { AtList, AtListItem } from 'taro-ui'


import HeaderNav from 'components/HeaderNav'
import FormCard from 'components/FormCard'

function Test() {

    const [startDate, $startDate] = useState('')
    const [endDate, $endDate] = useState('')

    const onStartDateChange = (e) => {
        console.log(e.detail.value)
        $startDate(e.detail.value)
    }
    const onEndDateChange = (e) => {
        console.log(e.detail.value)
        $endDate(e.detail.value)
    }

    const timePicker = () => {
        return (
            <View className='date-section-container'>
                <Text>日期选择器</Text>
                <View className='date-section'>
                    <Picker mode='date' className='date-picker' onChange={onStartDateChange}>
                        <AtList>
                            <AtListItem extraText={startDate} />
                        </AtList>
                    </Picker>
                    ___
                    <Picker mode='date' className='date-picker' onChange={onEndDateChange}>
                        <AtList>
                            <AtListItem extraText={endDate} />
                        </AtList>
                    </Picker>
                </View>
            </View>
        )
    }

    return (
        <View className='page-list-container'>
            <HeaderNav titleBtn={['测试']} />
            <FormCard innerContent={timePicker()} title='测试时间选择器' />
        </View>
    )
}

export default Test

