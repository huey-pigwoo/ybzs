import { View, Image, Picker } from '@tarojs/components';
import Taro from '@tarojs/taro';
import { useState, useEffect } from 'react';
import { AtIcon } from 'taro-ui'

import './index.less';


const AddressPicker = () => {

  const datahaha = [
        {
          code: 5101,
          name: '成都市',
          selected: 0,
          parentcode: 51,
          value: null,
          children: [
            {
              code: 510116,
              name: '双流区',
              selected: 0,
              parentcode: 5101,
              value: null,
              children: null,
            },
            {
              code: 510184,
              name: '邛州',
              selected: 0,
              parentcode: 5101,
              value: null,
              children: null,
            }
          ]
        },
        {
          code: 5106,
          name: '德阳市',
          selected: 0,
          parentcode: 51,
          value: null,
          children: [
            {
              code: 510623,
              name: '中江县',
              selected: 0,
              parentcode: 5106,
              value: null,
              children: null
            }
          ]
        }
  ]

    const [firstLevel, setFirstLevel] = useState([]);
    const [secLevel, setSecLevel] = useState([]);
    const [multiIndex, setMultiIndex] = useState([]); // multiIndex: [[第一级的 index]，[第二级的 index]]
    const [chooseAddress,setChooseAddress] = useState(null);


  useEffect(() => {
    if (multiIndex.length > 0) {
      const firstIndex = multiIndex[0];
      const secOptions = datahaha[firstIndex].children.map((item) => item.name);
      setSecLevel(secOptions);
      setChooseAddress(datahaha[multiIndex[0]].children[multiIndex[1]])
      setFirstLevel(datahaha.map((item) => item.name))
    }
  }, [multiIndex]);

  const mockData = [datahaha.map((item) => item.name), secLevel];

  const handleColumnChange = (e) => {
    const { column, value } = e.detail;
    if (column === 0) {
      setMultiIndex([value, 0]);
    }
  };

  const handleChange = (e) => {
    setMultiIndex(e.detail.value);
  };

  return (
    <View className='addressPick-container'>
      <Picker
        mode='multiSelector'
        value={multiIndex}
        range={mockData}
        onChange={handleChange}
        onColumnChange={handleColumnChange}
      >
        <View>{multiIndex.length === 0 ? '请选择' : `${firstLevel[multiIndex[0]]} , ${secLevel[multiIndex[1]]}`}</View>
      </Picker>
      <AtIcon value='chevron-down' size='10' />
    </View>
  );
};

export default AddressPicker;



