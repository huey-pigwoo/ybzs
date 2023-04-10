import React from 'react'
import Taro from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './index.less'

const BusinessButtonGroup = ({handleClickUserButton}) => {

    const UserButton = (backgroundColor,btnName,fn) => {
        return (
            <View className='btn-box' onClick={() => fn(btnName)}>
                <View className='icon-surround' style={{ backgroundColor: backgroundColor }}>
                    <AtIcon value='star-2' size='30' color='#FFF'></AtIcon>
                </View>
                <View>{btnName}</View>
            </View>
        )
    }

    const colorMap = {
        'INTRODUCTION_REGISTRATION': '#43B4BB',
        'REPRODUCTION_REGISTRATION': '#3D71E7',
        'DEAD_REGISTRATION': '#FB6C03',
        'ESCAPE_REGISTRATION': '#17B4F7',
        'SALE_REGISTRATION': '#FFA945',
        'DRUG_REGISTRATION': '#FF5F96',
        'EXHIBITION_REGISTRATION': '#3674A0',
        'RETURN_REGISTRATION': '#A486FB'
    }
    // 代表的入参

    return (
        <View className='BtnGroup-container'>
            {UserButton(colorMap['INTRODUCTION_REGISTRATION'],'引种登记',handleClickUserButton)}
            {UserButton(colorMap['REPRODUCTION_REGISTRATION'],'繁殖登记',handleClickUserButton)}
            {UserButton(colorMap['DEAD_REGISTRATION'],'死亡登记',handleClickUserButton)}
            {UserButton(colorMap['ESCAPE_REGISTRATION'],'逃逸登记',handleClickUserButton)}
            {UserButton(colorMap['SALE_REGISTRATION'],'出售登记',handleClickUserButton)}
            {UserButton(colorMap['DRUG_REGISTRATION'],'用药登记',handleClickUserButton)}
            {UserButton(colorMap['EXHIBITION_REGISTRATION'],'展演登记',handleClickUserButton)}
            {UserButton(colorMap['RETURN_REGISTRATION'],'归还登记',handleClickUserButton)}

        </View>
    )
}

export default BusinessButtonGroup