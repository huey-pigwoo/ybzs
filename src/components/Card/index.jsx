import { View, Image } from '@tarojs/components';
import { useState } from 'react';
import Tag from '../Tag';
import BusinessTemp from './template/business';
import AnimalTemp from './template/animal';
import CompanyTemp from './template/company';
import './index.less';
// eslint-disable-next-line import/first
import img1 from 'static/img/img1.jpg';
// eslint-disable-next-line import/first
import { selectCardTemp } from 'utils/selectCardTemp';

/**
 * type： 卡片类型，企业(company)、物种(animal)、业务(business)
 * bgColor: 卡片背景颜色
 * 
 */

const Card = ({ type, bgColor, routerManager,listSource }) => {
    const tempMap = { BusinessTemp, AnimalTemp, CompanyTemp };
    // eslint-disable-next-line no-unused-vars
    const [listType, $listType] = useState('animal');
    // const listSource = {
    //   f1: '标题标题标题标题标题标题',
    //   f2: '描述描述描述描述描述',
    //   pic: '',
    //   f3: [
    //     { value: '正常', key: 'NORMAL' },
    //     { value: '驯养繁殖', key: 'WARNING' },
    //   ],
    //   f4: [
    //     { value: '动物 2 种 / 12 只' },
    //     { value: '2' },
    //   ],
    // };
  
    let Container = tempMap[selectCardTemp(type || listType)];
  
    const cardClick = () => {
      routerManager && routerManager(listSource)
    }
    return (
      <View
        className='card-container'
        onClick={cardClick}
        style={bgColor && { backgroundColor: bgColor }}
      >
        <Image className='card-image' src={listSource?.pic || img1} />
        <View className='text-area'>
          <View className='f1'>{listSource?.f1}</View>
          <View className='f2'>{listSource?.f2}</View>
          <View className='tag-area'>
            {listSource?.f3?.map(({ value, key }, index) => {
              return <Tag tagValue={value} type={key} key={index} />;
            })}
          </View>
          <Container dataSouce={listSource?.f4} />
        </View>
      </View>
    );
  };
  
  export default Card;
  