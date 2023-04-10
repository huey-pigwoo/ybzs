import { View, Text, Picker, Input } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import Taro from '@tarojs/taro'
import { useState, useEffect } from 'react'
// import api from '../services/api'

import './about.less'


// eslint-disable-next-line import/first
import List from 'components/List'
// eslint-disable-next-line import/first
import HeaderNav from 'components/HeaderNav'
// eslint-disable-next-line import/first
import AddressPicker from 'components/AddressPicker'




function About() {

    const selectOption = ['企业名称', '人员姓名', '动物名称', '业务类型', '保护级别']
    const [listName, $listName] = useState('企业')
    const [filterOption, $filterOption] = useState('DOMESTICATION_BREED')
    // 筛选项的条件
    // eslint-disable-next-line no-unused-vars
    const [filter, $filter] = useState({})
    // 描述文字对象
    // eslint-disable-next-line no-unused-vars
    const [textArr, $textArr] = useState()
    //  筛选项中的选择框
    const [multiIndex, $multiIndex] = useState(selectOption[0])
    //  筛选框中的 input 状态
    const [selectStatus, $selectStatus] = useState(true)
    // eslint-disable-next-line no-unused-vars
    const [resObj, $resObj] = useState([
        {
            id: 3,
            pic: '',
            f1: '成都第一家公司',
            f2: '成都是打四代是大红色大上课打卡时间到',
            f3: [
                { value: '正常', key: 'NORMAL' },
                { value: '驯养繁殖', key: 'NORMAL' },
            ],
            f4: [
                { value: '动物 2 种 / 12 只' },
                { value: 2 }
            ]
        }
    ])

    const navBtnGroup = [`${listName}台账`,`${listName}总览`]

    // 获取列表名
    const getListName = (name) => {
        if(name === '物种列表') $listName('物种')
        else if(name === '企业列表') $listName('企业')
        else if(name === '业务列表') $listName('业务')
    }

    const filterObject = (item) => {
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
        $filterOption(item)
    }

    const ChangeSelect = (e) => {
        $multiIndex(selectOption[e.detail.value])
    }
    const changeStatus = () => {
        $selectStatus(!selectStatus)
    }

    const routerMap = {
        '企业': '/pages/index/index?routerLevel=3&type=company',
        '物种': '/pages/list/list?routerLevel=3&type=animal',
        '业务': '/pages/detail/detail?routerLevel=3&type=business',
      }


    // 管理列表内的卡片跳转地址
    const routerManager = () => {
        Taro.navigateTo({ url: routerMap[listName] })
    }


    return (
        <View>
            <HeaderNav navGroup={navBtnGroup} />
            <View className='page-about-container'>
                <View className='about-filter-nav-area'>
                    <View className='filter-row'>
                    <AddressPicker />
                    <View className={['inputArea', !selectStatus ? 'active' : '']}>
                        {selectStatus && (
                                <>
                                    <AtIcon value='search' size='20' onClick={changeStatus} />
                                    <Text className='search-text' style={{ margin: '0 10rpx' }}>查询</Text>
                                </>
                            )}
                        {!selectStatus &&
                            <>
                                <AtIcon value='search' size='20' onClick={changeStatus} />
                                <Picker className='selectInput' mode='selector' range={selectOption} onChange={ChangeSelect}>
                                    <View className='picker'>{multiIndex}</View>
                                </Picker>
                                <Input className='filter-input' placeholder='点击输入（对应）名称' /></>
                        }
                    </View>
                    </View>

                    <View className='switchArea'>
                        <View className={['about-filter-nav-item', filterOption == 'DOMESTICATION_BREED' ? 'filter-nav-active' : '']} onClick={() => filterObject(['DOMESTICATION_BREED'])}>驯养繁殖</View>
                        <View className={['about-filter-nav-item', filterOption == 'CONTAINMENT_ASSISTANCE' ? 'filter-nav-active' : '']} onClick={() => filterObject(['CONTAINMENT_ASSISTANCE'])}>收容救助</View>
                    </View>
                </View>
                <View className='text-area' style={{ margin: '10px' }}>
                    {
                        listName == '企业' ?
                            <View>
                                在<Text>{textArr?.numberOfSubRegions}</Text>个区县内分布有<Text>{textArr?.numberOfBusinessPieces}</Text>家驯养繁殖企业。总面积为<Text>{textArr?.numberOfAnimalSpecies}</Text>万亩，总人数为<Text>{textArr?.numberOfTotalPeople}</Text>人。共开展<Text>{textArr?.numberOfBusinessTypes}</Text>类<Text>{textArr?.numberOfAnimalSpecies}</Text>件业务，涉及动物<Text>{textArr?.numberOfEnterprises}</Text>种共<Text>{textArr?.numberOfTotalAnimal}</Text>万只。
                            </View>
                            :
                            <View>
                                在<Text>{textArr?.numberOfSubRegions}</Text>个区县的<Text>{textArr?.numberOfBusinessPieces}</Text>家驯养繁殖企业对<Text>{textArr?.numberOfEnterprises}</Text>种动物共<Text>{textArr?.numberOfAnimalSpecies}</Text>只开展<Text>{textArr?.numberOfBusinessTypes}</Text>类<Text></Text>件驯养繁殖业务。其中一级<Text>{textArr?.numberOfBusinessPieces}</Text>只，二级<Text>{textArr?.numberOfTotalAnimal}</Text>只，三级有<Text>{textArr?.numberOfTotalAnimal}</Text>只，外来<Text>{textArr?.numberOfBusinessPieces}</Text>只。
                            </View>
                    }
                </View>
                <List 
                  listSource={resObj} 
                  getListName={getListName} 
                  routerManager={routerManager} 
                />
            </View>
        </View>
    )
}

export default About