import { View, Text, Input, Textarea, Form, Picker } from '@tarojs/components'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { AtIcon, AtButton, AtInput } from 'taro-ui'
import { useState, useEffect } from 'react'
// import img1 from 'static/img/img1.jpg';
import './detail.less'

// eslint-disable-next-line import/first
import HeaderNav from 'components/HeaderNav'
// eslint-disable-next-line import/first
import Card from 'components/Card'
// eslint-disable-next-line import/first
import FormCard from 'components/FormCard'
import Register from 'components/pageTemplate/RegisterPage'

function Detail() {


    const BtnGroupType = ['引种登记','繁殖登记','死亡登记','逃逸登记','出售登记','用药登记','展演登记','归还登记']
    // eslint-disable-next-line no-unused-vars
    const [detailList, $detailList] = useState('')
    // ----------------------------------------------------------------
    // 登记
    const [formList, $formList] = useState({})
    // 动物列表
    const [animalList, $animalList] = useState([])
    // 表单前选择到的动物
    const [realObj,$realObj] = useState({})

    const onOk = (data) => {
        const params = {
            url: 'http://192.168.167.135:8982/api/business',
            method: 'POST',
            header: {
                'content-type': 'application/json' // 默认值
            },
            data,
            success: function (res) {
                console.log(res.data);
            }
        }
        Taro.request(params)
    }

    // 1、当前逻辑为，从台长页面进来，先获取台账列表信息，确定头部导航烂的按钮信息
    // eslint-disable-next-line no-unused-vars
    const [navBtnGroup, $navBtnGroup] = useState()
    const [pickAnimal,$pickAnimal] = useState()
    const [detailContent, $detailContent] = useState(null)
    const { router } = getCurrentInstance();
    const { params } = router;
    const { routerLevel, type } = router.params
    useEffect(() => {
        console.log(`routerLevel${routerLevel}`,`type${type}`);
        if (routerLevel == 2) {
            $detailContent(type)
            $navBtnGroup([type])
        }
        if (routerLevel == 3) {
            if (type == 'business') {
                $detailContent('业务详情')
                $navBtnGroup(['业务详情'])
            }
            else if (type === '繁殖登记' || type === '死亡登记' || type === '逃逸登记'||type === '出售登记'||type === '用药登记'||type === '展演登记'||type === '归还登记') {
                $detailContent(type)
                $navBtnGroup([type])
                console.log('从业务动物中选择进来的对象信息',realObj);
            }
            // else if (type === '死亡登记') {
            //     $detailContent(type)
            //     $navBtnGroup([type])
            //     console.log('从业务动物中选择进来的对象信息',realObj);
            // }
        }
        if (routerLevel == 4) {
            if (type == '引种登记') {
                $detailContent('引种登记')
                $navBtnGroup(['引种登记'])
            }
            else if(type == 'business'){ 
                $detailContent('业务详情')
                $navBtnGroup(['业务详情'])
            }
        }
    }, [])

    const BreedingAnimal = (Num) => {
        return (
            <View className='fromCard-inner'>
                <View>数量： <Text>{Num}</Text> 只</View>
                <View>备注薪资： 顺利生产</View>
            </View>
        )
    }


    const changeInformation = () => {
        return (
            <View className='fromCard-inner'>
                <View>修改日期： 2017-10-03</View>
            </View>
        )
    }


    const [formattedInfoList,$formattedInfoList] = useState([
        {  // 业务登记列表 (草稿非必填)
            targetRealId: '', // 描述对象真实id
            note: '',
            registrationInfo: {     // 业务登记的字段 根据业务类型来填
                introductionNum: ''  // 引种数量
            }
        }
    ])

    return (
        <View >
            <HeaderNav navGroup={navBtnGroup} />
            {detailContent == '业务详情' && (<>
                <View className='page-detail-container'>
                    <View className='detail-img' >
                        <View className='detail-img-title'>现场影像</View>
                        <View className='business-detail'>
                            <View className='business-detail-left'>
                                <Text className='business-detail-left-address'>天府新区</Text>
                                <Text className='business-detail-left-time'>12 月 22 日 12:22</Text>
                            </View>
                            <View className='business-detail-right'>
                                <Text>四川省成都市府前路</Text>
                                <Text>张三</Text><Text>成都市某某某科技有限公司</Text>
                            </View>
                        </View>
                    </View>
                    <FormCard
                      innerContent={<Card dataSource={detailList} bgColor='#fff' />}
                      title='繁殖动物'
                    />
                    <FormCard
                      innerContent={BreedingAnimal()}
                      title='繁殖记录'
                    />
                    <FormCard
                      innerContent={changeInformation()}
                      title='修改记录'
                    />
                    <FormCard
                      innerContent={changeInformation()}
                      title='修改记录'
                    />
                </View>
            </>)
            }
            {BtnGroupType.includes(detailContent) && (<Register formType={type} />)}
        </View >
    )
}

export default Detail


