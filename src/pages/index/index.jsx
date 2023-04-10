import { useState, useEffect } from 'react'
import { View, Text, Image } from '@tarojs/components'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import img2 from 'static/img/img2.jpg';
import './index.less'

// eslint-disable-next-line import/first
import HeaderNav from 'components/HeaderNav'
import BusinessButtonGroup from 'components/BusinessButtonGroup';

function Index() {

  //   首页样式
  // eslint-disable-next-line no-unused-vars
  const [reqNum, $reqNum] = useState()
  //  表示当前是一层路由，在首页中
  const [isIndexPage, $isIndexPage] = useState(true)

  // 1、当前逻辑为，从台长页面进来，先获取台账列表信息，确定头部导航烂的按钮信息
  const [navBtnGroup, $navBtnGroup] = useState()
  const { router } = getCurrentInstance();
  const { params } = router;
  const { routerLevel, type } = params;
  useEffect(() => {
    if (routerLevel == 3) {
      $isIndexPage(false)
      if (type == 'company') $navBtnGroup(['企业详情'])
    }
  }, [])

  // 首页按钮跳转路由管理
  const routerManager = (type) => {
    console.log('首页进来的type',type);
    if(isIndexPage) {
      if(type === '引种登记') Taro.navigateTo({ url: `/pages/detail/detail?routerLevel=2&type=${type}`})
      else {
        // 不是引种登记的情况下，需要去列表中选择对应的动物
        Taro.navigateTo({ url: `/pages/list/list?routerLevel=2&type=${type}`})
      }
    }
  }
  // 企业主页的路由管理
  const navClick = (listType) => {
    if (listType === 'business') Taro.navigateTo({ url: `/pages/list/list?routerLevel=3&&type=${listType}` })
    else Taro.navigateTo({ url: `/pages/list/list?routerLevel=3&&type=${listType}` })
  }

  const handleClickUserButton = (btnInfo) => {
    console.log('btnInfo',btnInfo)
    routerManager(btnInfo)
  }

  return (
    <View >
      {
        isIndexPage ?
          <View className='indexPage-container'>
            <HeaderNav navGroup={navBtnGroup} isIndexPage={isIndexPage} />
            <Image className='indexPage-image' src={img2} />
            <View className='indexPage-inner'>
              <BusinessButtonGroup handleClickUserButton={handleClickUserButton} />
            </View>
          </View>
          :
          <>
            <HeaderNav navGroup={navBtnGroup} />
            <View className='page-index-container'>
              <View className='index-img' >
                <View className='index-text'>
                  <View className='companyName'>成都信达科技有限公司</View>
                  <View className='address'>四川省成都市双林路145号</View>
                  <View className='manAndPhone'>张文 12345678901</View>
                </View>
              </View>
              <View className='index-list-nav'>
                <View className={['index-list-item', 'businessList']} onClick={() => navClick('business')}>
                  业务总览
                  <View><Text className={['index-list-number']}>{reqNum?.a_type_num}</Text>类<Text className={['index-list-number']}>{reqNum?.a_type_num}</Text>万件</View>
                </View>
                <View className={['index-list-item', 'animalList']} onClick={() => navClick('animal')}>
                  物种总览
                  <View><Text className={['index-list-number']}>{reqNum?.b_type_num}</Text>种<Text className={['index-list-number']}>{reqNum?.b_total_num || 1000}</Text>万只</View>
                </View>
              </View>
            </View>
          </>
      }
    </View>
  )
}

export default Index