import React from 'react'
import { View, AtIcon } from '@tarojs/components'

const UserButton = () => {
    return (
        <View>
            <View className='icon-surround' style={{ 
                backgroundColor: 'red',
                padding: '12rpx',
                borderRadius: '15Px'
                }}
            >
                <AtIcon value='star-2' size='30' color='#FFF'></AtIcon>
            </View>
            <View>按钮</View>
        </View>
    )
}

export default UserButton