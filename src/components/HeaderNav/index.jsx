import React, { useState, useEffect } from 'react'
import Taro,{getCurrentInstance} from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import './index.less'
// chevron-left

const HeaderNav = ({navGroup, isIndexPage }) => {
    // 导航栏高度
    const [ navHeight, setNavHeight] = useState(null)
    const [ navBtnHeight, setNavBtnHeight] = useState(null)
    const { router } = getCurrentInstance();
    const goBackPage = () =>{
    Taro.navigateBack({
      delta: 1
    })
  }

  //获取每个设备的导航栏高度
  useEffect(()=> {
    getNavHeight()
  },[])

  const getNavHeight =() => {
    let menuButtonObject = wx.getMenuButtonBoundingClientRect(); //获取胶囊对象
    var sysinfo = wx.getSystemInfoSync(); // 获取设备系统对象
    let statusBarHeight = sysinfo.statusBarHeight; // 获取状态栏高度
    let menuBottonHeight =  menuButtonObject.height; //获取胶囊顶部高度
    let menuBottonTop =  menuButtonObject.top; // 获取胶囊距离顶部的高度
    let navBarHeight = statusBarHeight + menuBottonHeight + (menuBottonTop - statusBarHeight) * 2 ; //计算nav导航栏的高度（上图蓝色线段的长度）
    if(isIndexPage) {
      setNavHeight(menuBottonTop-10)
      setNavBtnHeight(null)
    }
    else {
      setNavHeight(navBarHeight)
      setNavBtnHeight(menuBottonTop)
    }
  }

  return (
    <View className='headerNav-container' style={{height: navHeight, paddingTop: navBtnHeight }}>
        {!isIndexPage && <AtIcon value='chevron-left' size='30' onClick={goBackPage} />}
        {
            navGroup && (
                <View className='header-nav-area' style={{fontSize: '16px'}}>
                {navGroup?.map(item => {
                    return <Text className={['header-nav-item','active']} >{item}</Text>
                })}
            </View>
            )
        }
    </View>
  )
}


export default HeaderNav