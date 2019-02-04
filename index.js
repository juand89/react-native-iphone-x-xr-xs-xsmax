import { Dimensions, Platform, NativeModules } from 'react-native'
const { Device } = NativeModules
export async function isIphoneX() {
  const dim = Dimensions.get('window')
  await Device.deviceName((error, name) => {
    console.log('name', name)
  })
  return (
    // This has to be iOS
    Platform.OS === 'ios' &&
    // Check either, iPhone X or XR
    (isIPhoneXSize(dim) || isIPhoneXrSize(dim))
  )
}

export function isIPhoneXSize(dim) {
  return dim.height == 812 || dim.width == 812
}

export function isIPhoneXrSize(dim) {
  return dim.height == 896 || dim.width == 896
}
