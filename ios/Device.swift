//
//  Device.swift
//  RNReactNativeIphoneXXrXsXsmax
//
//  Created by Juan Diego Urena Vasquez on 1/29/19.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation

@objc(Device)
class Device: NSObject {
    @objc
    func deviceName(_ callback: RCTResponseSenderBlock) {
        let deviceName = UIDevice.current.name
        callback([NSNull(), [
            "destinationPath": deviceName
            ]])
    }
    @objc
    static func requiresMainQueueSetup() -> Bool {
        return true
    }
}
