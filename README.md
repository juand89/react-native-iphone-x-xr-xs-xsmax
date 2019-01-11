# react-native-iphone-x-xr-xs-xsmax
A small library that checks the size of the iPhone screen and determines if it is iPhone X, XR, XS or XS MAX

## Install

```
$ npm install @juand89/react-native-iphone-x-xr-xs-xsmax
```

## Usage

```js
import { isIphoneX } from 'react-native-iphone-x-xr-xs-xsmax'

const HEADER_SIZE = isIphoneX() ? 130 : 100;
```
