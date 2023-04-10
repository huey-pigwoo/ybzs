import { View,Button } from '@tarojs/components'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { useState, useEffect } from 'react'
import './list.less'

// eslint-disable-next-line import/first
import HeaderNav from 'components/HeaderNav'
// eslint-disable-next-line import/first
import Card from 'components/Card'
// eslint-disable-next-line import/first
import List from 'components/List'


function ListPage() {
    const [resObj, $resObj] = useState([
        // {
        //     id: 3,
        //     pic: '',
        //     f1: '成都第一家公司',
        //     f2: '成都是打四代是大红色大上课打卡时间到',
        //     f3: [
        //         { value: '正常', key: 'NORMAL' },
        //         { value: '驯养繁殖', key: 'NORMAL' },
        //     ],
        //     f4: [
        //         { value: '动物 2 种 / 12 只' },
        //         { value: 2 }
        //     ]
        // }
    ])

    // eslint-disable-next-line no-unused-vars
    const [forListBtn, $forListBtn] = useState([])
    const [navBtnGroup, $navBtnGroup] = useState([])
    const [listBtnChoose, $listBtnChoose] = useState(null)

    const chooseListBtn = (buttonName) => {
        console.log(buttonName)
        $listBtnChoose(buttonName)
    }


    // 1、当前逻辑为，从台长页面进来，先获取台账列表信息，确定头部导航烂的按钮信息
    const { router } = getCurrentInstance();
    const { params } = router;
    const { routerLevel, type } = router.params
    useEffect(() => {
        if(routerLevel == 2) {
            Taro.request({
                url: 'http://7yi3w4.natappfree.cc/api/company/companyAccountList',
                method: 'POST',
                data: {
                    id: "BusinessLedgerPageHandler",
                    filterList:[{
                        key:"businessStatus",
                        operation: "EQ",
                        values: ["DRAFT"]
                    }]
                },
                success: function (res) {
                    console.log(res.data.data.records);
                    $resObj(res.data.data.records)
                }
            })
                    // Taro.request({
        //     url: chooseURL(),
        //     method: 'POST',
        //     data:
        //     {
        //         "id": "AnimalLedgerPageHandler",
        //         "filterList": [{
        //             "key": "companyType",
        //             "operation": "IN",
        //             "values": item,
        //         }],
        //         "orderList": []
        //     },
        //     success: function (res) {
        //         $resObj(res.data.data.records)
        //     }
        // })

        }
        if (routerLevel == 3) {
            switch (type) {
                case 'animal':
                    $navBtnGroup(['物种详情'])
                    break;
                case 'business':
                    $navBtnGroup(['业务台账'])
                    break;
            }
        }
        else if (routerLevel == 4 && type == 'animal') {
            switch (type) {
                case 'animal':
                    $navBtnGroup([`业务历史`, `企业主页`])
                    break
            }
        }
    }, [routerLevel, type])

    // 路由方法
    const routerManager = (data) => {
            if(routerLevel == 2) {
                console.log('这里是第二层，是业务登记的首页进来的',data,type)
                Taro.setStorage({
                    key: 'animalObj',
                    data,
                  });
                Taro.navigateTo({url: `/pages/detail/detail?routerLevel=3&type=${type}`})
            }
            else if (routerLevel == 3) {
                if (listBtnChoose === '相关业务') {
                    Taro.navigateTo({ url: '/pages/detail/detail?routerLevel=4&type=business' })
                }
                else if (listBtnChoose == '物种列表' ) {
                    Taro.navigateTo({ url: '/pages/list/list?routerLevel=4&type=animal' })
                }
                else {
                    switch (type) {
                        case 'animal':
                            Taro.navigateTo({ url: '/pages/list/list?routerLevel=4&type=animal' })
                            break;
                        case 'business':
                            Taro.navigateTo({ url: '/pages/detail/detail?routerLevel=4&type=business' })
                    }
            if (routerLevel == 4) {
                switch (type) {
                    case 'animal':
                        Taro.navigateTo({ url: '/pages/detail/detail?routerLevel=5&type=animal' })
                        break
                }
            }
        }}
    }

    return (
        <View >
            <HeaderNav navGroup={navBtnGroup} />
            <View className='page-list-container'>
            {/* {type !== 'incomeApply' && <Card bgColor='#FFF' />} */}
            {/* {type !== 'incomeApply' && 
                <List
                  listSource={resObj}
                  listType={params.listType}
                  listNavBtn={
                    (routerLevel == 3 && type == 'animal' && [{ id: 1, name: '相关企业' }, { id: 2, name: '相关业务' }] )|| 
                    (routerLevel == 3 && type == 'business' && [{ id: 1, name: '业务列表' }, { id: 2, name: '物种列表' }])  || 
                    (routerLevel == 4 && type == 'animal' && [{ id: 1, name: '动物业务历史' }, { id: 2, name: '数量异常' }]) 
                }
                  routerManager={routerManager}
                  chooseListBtn={chooseListBtn}
                />} */}
                <Button onClick={()=> {console.log(resObj)}}>resObj</Button>
                <List listSource={resObj} listNavBtn={[]} listType={params.listType} routerManager={routerManager} />
            </View>
        </View>
    )
}

export default ListPage
