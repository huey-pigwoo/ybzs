import { useState, useEffect } from 'react'
import { View } from '@tarojs/components'
import './index.less'

// eslint-disable-next-line import/first
import Card from 'components/Card'

const List = ({ listSource, getListName, listType, handleListNav, routerManager, chooseListBtn, listNavBtn }) => {

    const [listNavStatus,setListBavStatus] = useState(false)
    // 列表名
    const [navList, $navList] = useState([
        { id: 1, name: "企业列表" },
        { id: 2, name: "物种列表" },
        { id: 3, name: "业务列表" },
    ])

    const [navIndex, $navIndex] = useState(1)
    const [listName, $listName] = useState('')

    const listNameMap = {
        '企业': 'company',
        '物种': 'animal',
        '业务': 'business',
    }

    // 选择列表类型
    const chooseItem = (item) => {
        {chooseListBtn && chooseListBtn(item.name)}
        $navIndex(item.id)
        $listName(item.name)
        getListName && getListName(item.name)
        handleListNav && handleListNav(item.name)
    }

    useEffect(() => {
        if(listNavBtn){
            $navList(listNavBtn)
            setListBavStatus(!listNavStatus)
        }
        $listName(navList[0].name)
    }, [])

    return (
        <View className='list-container'>
            <View className='nav-area'>
                {
                    navList?.map((item, index) => {
                        return (
                            <View className={['nav-item', item.id == navIndex ? 'active' : '']} key={index} onClick={() => chooseItem(item)} style={{ flexGrow: listNavStatus ? 0 : ''}}>
                                <View className='nav-item-text'>{item.name}</View>
                            </View>
                        )
                    })
                }
            </View>
            {listSource && listSource?.map((item, index) => {
                return (<View className={['item-area', 'active']} key={index} >
                    <Card
                      type={listType || listNameMap[listName]}
                      routerManager={routerManager}
                      listSource={item}
                    />
                </View>)
            })}
        </View>
    )
}

export default List

