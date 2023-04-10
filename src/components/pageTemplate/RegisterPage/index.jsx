import { useEffect, useState } from 'react'
import { View, Button, Picker, Text, Textarea, RadioGroup, Label, Radio } from '@tarojs/components'
import { AtList, AtInput, AtListItem, AtIcon, AtRadio } from 'taro-ui'
import Card from 'components/card'
import Taro from '@tarojs/taro'
// import baseUrl from 'services/api'
import './index.less'

import FormCard from 'components/FormCard'
import CameraComp from 'components/CameraComp'

const baseUrl = 'http://e58wpc.natappfree.cc'

const infoNameMap = {
    '引种登记': 'INTRODUCTION_REGISTRATION',
    '繁殖登记': 'REPRODUCTION_REGISTRATION',
    '死亡登记': 'DEAD_REGISTRATION',
    '逃逸登记': 'ESCAPE_REGISTRATION',
    '出售登记': 'SALE_REGISTRATION',
    '用药登记': 'DRUG_REGISTRATION',
    '展演登记': 'EXHIBITION_REGISTRATION',
    '归还登记': 'RETURN_REGISTRATION'
}

function Register({ formType }) {
    // 请求得到的动物列表
    const [tmpAnimal, $tmpAnimal] = useState([])
    // picker 中的动物列表
    const [pickerAnimal, $pickerAnimal] = useState([])
    // 在繁殖登记、死亡登记等页面选择到的动物信息
    const [animalCardInfo,$animalCardInfo] = useState({})

    useEffect(() => {
        console.log(`进来的是${formType}表单, 代号是: ${infoNameMap[formType]}`);
        console.log('页面栈',Taro.getCurrentPages())
        Taro.getStorage({
            key: 'animalObj',
            success: function (res) {
                console.log('能够获取到的动物资料',res.data.id)
                handleActiveFormChange(0,'targetRealId',res.data.id)
                $animalCardInfo(res.data)
            },
          });
        console.log(baseUrl)
        // 引种的动物列表
        const requestAnimalParams = {
            url: 'http://7yi3w4.natappfree.cc/api/animal/page',
            method: 'POST',
            header: {
                'content-type': 'application/json' // 默认值
            },
            data: {
                current: 1,
                size: 10,
            },
            success: function (res) {
                $tmpAnimal(res.data.data.records)
                $pickerAnimal(res.data.data.records.map(item => item.animalName))
            }
        }
        Taro.request(requestAnimalParams)
    }, [])

    const submit = () => {
        const requestParams = {
            url: `${baseUrl}api/business`,
            method: 'POST',
            header: {
                'content-type': 'application/json' // 默认值
            },
            data: {
                ...infoParams,
                registrationType: infoNameMap[formType],
                actionType: "COMMIT",
                formattedInfoList,
            },
            success: function (res) {
                console.log(res);
                if(res.data.msg === 'SUCCESS') Taro.reLaunch({url: `/pages/index/index`})
            }
        }
        Taro.request(requestParams)
        console.log('requestParams', requestParams);
    }

    const [noteToggle, $noteToggle] = useState(false)
    const [startDate, $startDate] = useState(null)
    const [endDate, $endDate] = useState(null)
    // 引种登记的表单
    // 不同类型按钮进来的的表单结构

    // 格式化描述
    const [formattedInfoList, $formattedInfoList] = useState([
        {
            targetRealId: animalCardInfo.id || '',   // 动物 Id
            note: '',   // 备注
            registrationInfo: {
            introductionNum: '', // 引种数量

            acceptNum: '', //接收数量 ACCEPT_REGISTRATION

            releaseNum: '', // 放归数量 SALVAGE_REGISTRATION
            resettleNum: '', // 收容数量 SALVAGE_REGISTRATION
            deadNum: '', // 死亡对象 SALVAGE_REGISTRATION
            exceptionNum: '', //异常数量  SALVAGE_REGISTRATION
            totalNum: '', // 总数量  SALVAGE_REGISTRATION

            reproductionNum: '',// 繁殖数量 REPRODUCTION_REGISTRATION

            deadNum: '',  // 死亡数量  DEAD_REGISTRATION
            processMethod: 'HARMLESS_TREATMENT', // 死亡方式

            // DRUG_REGISTRATION
            drugInfoList: [{
                drugName: '',
                dosage: '', // 药物剂量
                dosageUnitName: '', //单位 可不传 默认ml
            }],

            escapeNum: '', // 逃离只数  ESCAPE_REGISTRATION

            saleNum: '',  // 出售只数  SALE_REGISTRATION

            // 展演登记 EXHIBITION_REGISTRATION
            exhibitionNum: '', // 展演数量
            startDate: '0000-00-00', // 展演开始日期 "yyyy-MM-dd"
            endDate: '0000-00-00', // 展演结束日期 "yyyy-MM-dd"

            // 归还登记  RETURN_REGISTRATION
            returnNum: 3, //  归还数量
        },
        }
    ])
    // 
    const [infoParams, $infoParams] = useState({
        // registrationType: "INTRODUCTION_REGISTRATION",
        // actionType: "DRAFT",
        unformattedInfo: {  // 非格式化描述(必填)
            materialIdList: [1, 2, 3],
            documentNoInfo: {
                documentNo: '',
                companyName: '',
            },
            targetCompanyName:'123公司'
        },
    })


    // 开始日期
    const onStartDateChange = (e) => {
        console.log(e.detail.value)
        $startDate(e.detail.value)
    }
    // 结束日期
    const onEndDateChange = (e) => {
        console.log(e.detail.value)
        $endDate(e.detail.value)
    }

    // 单选框
    const deathHandleMethod = [
        {
            value: 'HARMLESS_TREATMENT',
            text: '无害化处理',
            checked: true
        },
        {
            value: 'OTHER',
            text: '其他',
            checked: false
        }
    ]

    // 添加引种表单项
    const handleAddForm = () => {
        $formattedInfoList(prevState => [
            ...prevState,
            {
                targetRealId: '',
                note: '',
                registrationInfo: {
                    introductionNum: '',
                acceptNum: '', //接收数量 ACCEPT_REGISTRATION

                releaseNum: '', // 放归数量 SALVAGE_REGISTRATION
                resettleNum: '', // 收容数量 SALVAGE_REGISTRATION
                // deadNum: '', // 死亡对象 SALVAGE_REGISTRATION
                exceptionNum: '', //异常数量  SALVAGE_REGISTRATION
                totalNum: '', // 总数量  SALVAGE_REGISTRATION

                reproductionNum: '',// 繁殖数量 REPRODUCTION_REGISTRATION

                deadNum: '',  // 死亡数量  DEAD_REGISTRATION
                processMethod: 'HARMLESS_TREATMENT',

                // DRUG_REGISTRATION
                drugInfoList: [{
                    drugName: '',
                    dosage: '', // 药物剂量
                    dosageUnitName: '', //单位 可不传 默认ml
                }],

                escapeNum: '', // 逃离只数  ESCAPE_REGISTRATION

                saleNum: '',  // 出售只数  SALE_REGISTRATION

                // 展演登记 EXHIBITION_REGISTRATION
                exhibitionNum: '', // 展演数量
                startDate: '0000-00-00', // 展演开始日期 "yyyy-MM-dd"
                endDate: '0000-00-00', // 展演结束日期 "yyyy-MM-dd"

                // 归还登记  RETURN_REGISTRATION
                returnNum: 3 //  归还数量
            },
            }
        ])
    }

    const handleActiveFormChange = (index, key, value) => {
        $formattedInfoList(prevState => {
          const newState = [...prevState];
          if (key === 'note') {
            newState[index][key] = value.detail.value;
          } else {
            newState[index][key] = value;
          }
          return newState;
        });
      };
    // 引种单位表单项数据变更
    const handleFormChange = (value, type) => {
        const newState = { ...infoParams };
        newState.unformattedInfo.documentNoInfo[type] = value
    }
    // 照相机
    const camera = () => { return (<View className='fromCard-inner'><CameraComp /></View>) }
    // 引种记录模版
    const introductionNote = (formItem, index) => {
        return (
            <View key={index} className='fromCard-inner'>
                <Picker
                    name={`targetRealId-${index}`}
                    mode='selector'
                    range={pickerAnimal}
                    value={formItem.targetRealId}
                    onChange={e => handleActiveFormChange(index, 'targetRealId', tmpAnimal[e.detail.value].entityId)}
                >
                    <View className='input-item'>
                        <Text className='input-item-label'>名称</Text><AtInput
                            name={`targetRealId-${index}`}
                            type='text'
                            placeholder='请输入动物名称'
                            value={tmpAnimal.find(item => item.entityId == formItem.targetRealId)?.animalName}
                            editable={false}
                        />
                    </View>
                </Picker>
                <View className='input-item'>
                    <Text className='input-item-label'>数量</Text><AtInput
                        name={`introductionNum-${index}`}
                        type='number'
                        placeholder='请输入引种数量'
                        value={formItem.registrationInfo.introductionNum}
                        onChange={value => handleActiveFormChange(index, 'registrationInfo', { ...formItem.registrationInfo, introductionNum: value })}
                    />
                </View >
                <Text
                    style='remarkToggle'
                    onClick={() => {
                        $formattedInfoList(prevState => {
                            const newState = [...prevState];
                            newState[index].isNoteShown = !formItem.isNoteShown;
                            return newState;
                        })
                    }}
                >
                    {formItem.isNoteShown ?
                        `点击收起备注信息`
                        :
                        `点击输入备注信息`
                    }<AtIcon value={formItem.isNoteShown ? 'chevron-up' : 'chevron-down'} size='10' />
                </Text>
                {formItem.isNoteShown ? (
                    <Textarea
                        name={`note-${index}`}
                        className='input-item-textarea'
                        type='text'
                        placeholder='请输入备注'
                        value={formItem.note}
                        onInput={value => handleActiveFormChange(index, 'note', value)}
                    />
                ) : null}
            </View>
        )
    }
    // 引种、出售单位模版
    const introductionCompany = () => {
        return (
            <View className='fromCard-inner'>
                <View className='input-item'>
                    <Text className='input-item-label'>文号</Text>
                    <AtInput
                        name='documentNo'
                        placeholder='请填写批准文号'
                        value={infoParams.unformattedInfo.documentNoInfo.documentNo}
                        onChange={value => handleFormChange(value, 'documentNo')}
                    />
                </View>
                <View className='input-item'>
                    <Text className='input-item-label'>单位</Text>
                    <AtInput name='companyName'
                        placeholder='请填写对方单位名称'
                        value={infoParams.unformattedInfo.documentNoInfo.companyName}
                        onChange={value => handleFormChange(value, 'companyName')}
                    />
                </View>
            </View>
        )
    }


    // 繁殖数量模版
    const breedCount = (formItem, index) => {
        return (
            <View className='fromCard-inner'>
                <View className='input-item'>
                    <View className='input-item-label'>数量
                    <AtInput name='documentNo' 
                    value={formItem.registrationInfo.reproductionNum}
                    onChange={value => handleActiveFormChange(index, 'registrationInfo', { ...formItem.registrationInfo, reproductionNum: value })}
                    placeholder='请填写数量' />只</View>
                </View> 
                <Text
                  style='remarkToggle'
                  onClick={() => {
                        $formattedInfoList(prevState => {
                            const newState = [...prevState];
                            newState[index].isNoteShown = !formItem.isNoteShown;
                            return newState;
                        })
                    }}
                >
                    {formItem.isNoteShown ?
                        `点击收起备注信息`
                        :
                        `点击输入备注信息`
                    }<AtIcon value={formItem.isNoteShown ? 'chevron-up' : 'chevron-down'} size='10' />
                </Text>
                {formItem.isNoteShown ? (
                    <Textarea
                        name={`note-${index}`}
                        className='input-item-textarea'
                        type='text'
                        placeholder='请输入备注'
                        value={formItem.note}
                        onInput={value => handleActiveFormChange(index, 'note', value)}
                    />
                ) : null}
            </View>
        )
    }

    // 逃逸
    const escapeNum = (formItem, index) => {
        return (
            <View className='fromCard-inner'>
                <View className='input-item'>
                    <View className='input-item-label'>数量
                    <AtInput name='documentNo' 
                    value={formItem.registrationInfo.escapeNum}
                    onChange={value => handleActiveFormChange(index, 'registrationInfo', { ...formItem.registrationInfo, escapeNum: value })}
                    placeholder='请填写数量' />只</View>
                </View> 
                <Text
                  style='remarkToggle'
                  onClick={() => {
                        $formattedInfoList(prevState => {
                            const newState = [...prevState];
                            newState[index].isNoteShown = !formItem.isNoteShown;
                            return newState;
                        })
                    }}
                >
                    {formItem.isNoteShown ?
                        `点击收起备注信息`
                        :
                        `点击输入备注信息`
                    }<AtIcon value={formItem.isNoteShown ? 'chevron-up' : 'chevron-down'} size='10' />
                </Text>
                {formItem.isNoteShown ? (
                    <Textarea
                        name={`note-${index}`}
                        className='input-item-textarea'
                        type='text'
                        placeholder='请输入备注'
                        value={formItem.note}
                        onInput={value => handleActiveFormChange(index, 'note', value)}
                    />
                ) : null}
            </View>
        )
    }


    // 出售
    const salesNum = (formItem, index) => {
        return (
            <View className='fromCard-inner'>
                <View className='input-item'>
                    <View className='input-item-label'>数量
                    <AtInput name='documentNo' 
                    value={formItem.registrationInfo.saleNum}
                    onChange={value => handleActiveFormChange(index, 'registrationInfo', { ...formItem.registrationInfo, saleNum: value })}
                    placeholder='请填写数量' />只</View>
                </View> 
                <Text
                  style='remarkToggle'
                  onClick={() => {
                        $formattedInfoList(prevState => {
                            const newState = [...prevState];
                            newState[index].isNoteShown = !formItem.isNoteShown;
                            return newState;
                        })
                    }}
                >
                    {formItem.isNoteShown ?
                        `点击收起备注信息`
                        :
                        `点击输入备注信息`
                    }<AtIcon value={formItem.isNoteShown ? 'chevron-up' : 'chevron-down'} size='10' />
                </Text>
                {formItem.isNoteShown ? (
                    <Textarea
                        name={`note-${index}`}
                        className='input-item-textarea'
                        type='text'
                        placeholder='请输入备注'
                        value={formItem.note}
                        onInput={value => handleActiveFormChange(index, 'note', value)}
                    />
                ) : null}
            </View>
        )
    }
    // 死亡记录模版
    const deathRecode = (formItem, index) => {
        return (
            <View className='fromCard-inner'>
                <View className='input-item'>
                    <View className='input-item-label'>数量
                    <AtInput
                        name='deadNum'
                        placeholder='请填写死亡数量'
                        value={formItem.registrationInfo.deadNum} 
                        onChange={value => handleActiveFormChange(index, 'registrationInfo', { ...formItem.registrationInfo, deadNum: value })}
                    />只</View>
                </View>
                <View>
                    <View className='input-item'>处理方式
                        <RadioGroup onChange={(e) => handleActiveFormChange(index, 'registrationInfo', { ...formItem.registrationInfo, processMethod: e.target.value })}>
                            {deathHandleMethod.map((item, i) => {
                                return (
                                    <Label className='radio-list__label' for={i} key={i}>
                                        <Radio className='radio-list__radio' value={item.value}  checked={item.checked}>{item.text}</Radio>
                                    </Label>
                                )
                            })}
                        </RadioGroup>
                    </View>
                </View>
                <Text
                    style='remarkToggle'
                    onClick={() => {
                        $formattedInfoList(prevState => {
                            const newState = [...prevState];
                            newState[index].isNoteShown = !formItem.isNoteShown;
                            return newState;
                        })
                    }}
                >
                    {formItem.isNoteShown ?
                        `点击收起备注信息`
                        :
                        `点击输入备注信息`
                    }<AtIcon value={formItem.isNoteShown ? 'chevron-up' : 'chevron-down'} size='10' />
                </Text>
                {formItem.isNoteShown ? (
                    <Textarea
                        name={`note-${index}`}
                        className='input-item-textarea'
                        type='text'
                        placeholder='请输入备注'
                        value={formItem.note}
                        onInput={value => handleActiveFormChange(index, 'note', value)}
                    />
                ) : null}
            </View>
        )
    }
    // 用药记录模版
    const drugRecode = (formItem,index) => {
        return (
            <View className='fromCard-inner'>
                <View className='input-item'>
                    <Text className='input-item-label'>药物</Text>
                    <AtInput
                      name='drugName'
                      placeholder='请填写药物名称'
                      value={formItem.registrationInfo.drugInfoList[index].drugName}
                      onChange={(value) =>
                        handleActiveFormChange(index, "registrationInfo", {
                          ...formItem.registrationInfo,
                          drugInfoList: [
                            ...formItem.registrationInfo.drugInfoList.slice(0, index),
                            {
                              ...formItem.registrationInfo.drugInfoList[index],
                              drugName: value,
                            },
                            ...formItem.registrationInfo.drugInfoList.slice(index + 1),
                          ],
                        })
                      }
                    />
                </View>
                <View className='input-item'>
                    <Text className='input-item-label'>剂量</Text>
                    <AtInput 
                        name='dosage'
                        placeholder='请填写剂量'
                        value={formItem.registrationInfo.drugInfoList[index].dosage}
                        onChange={(value) =>
                            handleActiveFormChange(index, "registrationInfo", {
                              ...formItem.registrationInfo,
                              drugInfoList: [
                                ...formItem.registrationInfo.drugInfoList.slice(0, index),
                                {
                                  ...formItem.registrationInfo.drugInfoList[index],
                                  dosage: value,
                                },
                                ...formItem.registrationInfo.drugInfoList.slice(index + 1),
                              ],
                            })
                          }
                    />
                </View>
                <Text
                    style='remarkToggle'
                    onClick={() => {
                        $formattedInfoList(prevState => {
                            const newState = [...prevState];
                            newState[index].isNoteShown = !formItem.isNoteShown;
                            return newState;
                        })
                    }}
                >
                    {formItem.isNoteShown ?
                        `点击收起备注信息`
                        :
                        `点击输入备注信息`
                    }<AtIcon value={formItem.isNoteShown ? 'chevron-up' : 'chevron-down'} size='10' />
                </Text>
                {formItem.isNoteShown ? (
                    <Textarea
                        name={`note-${index}`}
                        className='input-item-textarea'
                        type='text'
                        placeholder='请输入备注'
                        value={formItem.note}
                        onInput={value => handleActiveFormChange(index, 'note', value)}
                    />
                ) : null}
            </View>
        )
    }
    // 展演记录模版
    const showRecode = (formItem,index) => {
        return (
            <View className='fromCard-inner'>
                <View className='input-item'>
                    <Text className='input-item-label'>数量</Text>
                    <AtInput
                        name='documentNo'
                        placeholder='请填写数量'
                        value={formItem.registrationInfo.exhibitionNum} 
                        onChange={value => handleActiveFormChange(index, 'registrationInfo', { ...formItem.registrationInfo, exhibitionNum: value })}
                    />只
                </View>
                <View className='input-item'>
                    <Text className='input-item-label'>时间</Text>
                    <View className='date-section-container'>
                        <Picker mode='date' 
                          className='date-picker' 
                          value={formItem.registrationInfo.startDate}
                          onChange={e => handleActiveFormChange(index, 'registrationInfo', { ...formItem.registrationInfo, startDate: e.detail.value })}
                        >
                            <AtList>
                                <AtListItem extraText={formItem.registrationInfo.startDate} />
                            </AtList>
                        </Picker>
                        ___
                        <Picker mode='date' 
                        className='date-picker'
                        value={formItem.registrationInfo.endDate}
                        onChange={e => handleActiveFormChange(index, 'registrationInfo', { ...formItem.registrationInfo, endDate: e.detail.value })}
                        >
                            <AtList>
                                <AtListItem extraText={formItem.registrationInfo.endDate} />
                            </AtList>
                        </Picker>
                    </View>
                </View>
                <Text
                    style='remarkToggle'
                    onClick={() => {
                        $formattedInfoList(prevState => {
                            const newState = [...prevState];
                            newState[index].isNoteShown = !formItem.isNoteShown;
                            return newState;
                        })
                    }}
                >
                    {formItem.isNoteShown ?
                        `点击收起备注信息`
                        :
                        `点击输入备注信息`
                    }<AtIcon value={formItem.isNoteShown ? 'chevron-up' : 'chevron-down'} size='10' />
                </Text>
                {formItem.isNoteShown ? (
                    <Textarea
                        name={`note-${index}`}
                        className='input-item-textarea'
                        type='text'
                        placeholder='请输入备注'
                        value={formItem.note}
                        onInput={value => handleActiveFormChange(index, 'note', value)}
                    />
                ) : null}
            </View>
        )
    }
    // 归还登记模版
    const returnRecode = () => {
        return (
            <View className='fromCard-inner'>
                    <View className='input-item'>
                    <Text className='input-item-label'>数量</Text>
                    <AtInput
                        name='returnNum'
                        value={formattedInfoList[0].registrationInfo.returnNum} 
                        disabled
                    />只
                </View>
                <View className='input-item'>
                    <Text className='input-item-label'>数量</Text>
                    <AtInput
                        name='documentNo'
                        value={formattedInfoList[0].note} 
                        disabled
                    />
                </View>
            </View>
        )
    }


    return (
        <View>
            <View className='register-from-container'>
                <FormCard innerContent={camera()} title='现场影像' />

                {formType !== '引种登记' && <Card bgColor='#FFF' listSource={animalCardInfo} />}
                {formType == '繁殖登记' && (
                    formattedInfoList.map((formItem, index) => (
                        <FormCard
                          key={formItem - index}
                          innerContent={breedCount(formItem, index)}
                          title='繁殖数量'
                        />
                    ))
                )}
                {formType == '死亡登记' && (
                    formattedInfoList.map((formItem, index) => (
                        <FormCard
                          key={formItem - index}
                          innerContent={deathRecode(formItem, index)}
                          title='死亡记录'
                        />
                    ))
                )}
                {formType == '逃逸登记' && (
                    formattedInfoList.map((formItem, index) => (
                        <FormCard
                          key={formItem - index}
                          innerContent={escapeNum(formItem, index)}
                          title='逃逸记录'
                        />
                    ))
                )}
                {formType == '归还登记' && (<FormCard innerContent={returnRecode()} title='归还记录' />)}
                {formType == '用药登记' && (formattedInfoList.map((formItem, index) => (
                        <FormCard
                          key={formItem - index}
                          innerContent={drugRecode(formItem, index)}
                          title='用药记录'
                        />
                    )))}
                {formType == '引种登记' && (
                    <>
                        <FormCard
                            innerContent={introductionCompany()}
                            title='引种单位'
                        />
                        {formattedInfoList.map((formItem, index) => (
                            <FormCard
                                key={formItem - index}
                                innerContent={introductionNote(formItem, index)}
                                title='引种记录'
                            />
                        ))}
                        {/* <View>还有其他动物吗？<Text onClick={handleAddForm} style={{ color: '#3D71E7' }}>点击添加动物</Text></View> */}
                    </>
                )}
                {formType == '出售登记' && (
                    <>
                        <FormCard
                            innerContent={introductionCompany()}
                            title='出售单位'
                        />
                        {formattedInfoList.map((formItem, index) => (
                            <FormCard
                                key={formItem - index}
                                innerContent={salesNum(formItem, index)}
                                title='出售数量'
                            />
                        ))}
                    </>
                )}
                {formType == '展演登记' && (
                <>
                    <FormCard
                        innerContent={introductionCompany()}
                        title='接收单位'
                    />
                    {formattedInfoList.map((formItem, index) => (
                            <FormCard
                                key={formItem - index}
                                innerContent={showRecode(formItem, index)}
                                title='展演记录'
                            />
                        ))}
                </>
                )}
            {formType == '引种登记' && <View>还有其他动物吗？<Text onClick={handleAddForm} style={{ color: '#3D71E7' }}>点击添加动物</Text></View>}
            </View>
            <View className='submitArea'>
                <Button disabled>清空</Button>
                <Button onClick={submit}>确认</Button>
            </View>

        </View>
    )
}

export default Register
