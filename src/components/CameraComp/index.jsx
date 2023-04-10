import Taro from '@tarojs/taro'
import { useState, useEffect } from 'react'
import { View, Camera, Button, Image } from '@tarojs/components'
import { Buffer } from 'buffer';
import OSS from 'ali-oss'

import './index.less'

const CameraComp = () => {
  const [tmpMes, $tmpMes] = useState(null)
  const [savedFilePath, $savedFilePath] = useState(null)
  const [imgName, $imgName] = useState(null)
  const [cameraStatus, $cameraStatus] = useState(true)
  const [ossProof, $ossProof] = useState(null)
  const [imgObj, $imgObj] = useState(null)

  const uploadHandler = async () => {
    console.log(savedFilePath);
    Taro.uploadFile({
      url: 'http://192.168.167.235:8982/api/oss/add',
      filePath: savedFilePath,
      name: 'file',
      formData: {
        scene: 'registration'
      },
      success: (uploadRes) => {
        console.log('上传成功', uploadRes);
        // 处理上传成功后的逻辑
      },
      fail: (uploadRes) => {
        console.log('上传失败', uploadRes);
        // 处理上传失败后的逻辑
      }
    })
  }

  const getTempFile = async () => {
    console.log('savedFilePath', savedFilePath)
  }

  const takePhoto = async () => {
    const ctx = Taro.createCameraContext();
    ctx.takePhoto({
      quality: 'high',
      success: (res) => {
        console.log('拍照成功', res.tempImagePath);
        $tmpMes(res.tempImagePath)
        $cameraStatus(!cameraStatus)

        Taro.saveFile({
          tempFilePath: res.tempImagePath,
          success: (saveRes) => {
            $savedFilePath(saveRes.savedFilePath)
            console.log('保存后', saveRes)
            // 上传文件
            Taro.uploadFile({
              url: 'http://192.168.167.235:8982/api/oss/add',
              filePath: saveRes.savedFilePath,
              name: 'file',
              formData: {
                scene: 'registration'
              },
              success: (uploadRes) => {
                console.log('上传成功', uploadRes);
                $tmpMes(`上传成功 + ${uploadRes}`)
                // 处理上传成功后的逻辑
              },
              fail: (uploadRes) => {
                console.log('上传失败', uploadRes);
                // 处理上传失败后的逻辑
              }
            })
          }
        })
      },
      fail: (res) => {
        console.log('拍照失败', res);
      }
    });
  };

  const takePhoto2 = async () => {
    Taro.chooseImage({
      count: 1, // 选择一张照片
      sourceType: ['camera'], // 从相机选择
      success: (res)=> {
        console.log(res.tempFilePaths[0])
        $tmpMes(res.tempFilePaths[0])
        $cameraStatus(!cameraStatus)
        Taro.saveFile({
          tempFilePath: res.tempFilePaths[0],
          success: (saveRes) => {
            $savedFilePath(saveRes.savedFilePath)
            console.log('保存后', saveRes)
            Taro.uploadFile({
              url: 'http://192.168.167.235:8982/api/oss/add',
              filePath: saveRes.savedFilePath,
              name: 'file',
              formData: {
                scene: 'registration'
              },
              success: (uploadRes) => {
                console.log('上传成功', uploadRes);
                $tmpMes(`上传成功 + ${uploadRes}`)
                // 处理上传成功后的逻辑
              },
              fail: (uploadRes) => {
                console.log('上传失败', uploadRes);
                // 处理上传失败后的逻辑
              }
            })
            Taro.saveImageToPhotosAlbum({
              filePath: saveRes.savedFilePath,
              success: (savePhoneRes) => {
                console.log('照片保存成功',savePhoneRes);
              },
            })
          }
        })
      }
    })
  }

  return (
    <View className='camera-comp'>
      <Camera
        className='camera'
        mode='normal'
        devicePosition='back'
        flash='auto'
        style={{visibility: 'hidden',position: 'absolute'}}
        frameSize='large'
      />
      <Image src={savedFilePath} />
      <Button onClick={takePhoto2}>拍照</Button>
    </View>
  )
}

export default CameraComp
