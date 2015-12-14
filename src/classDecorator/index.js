import { IPadAir2, IPhone6s, AppleWatch, MacBookAir } from './ApplesDevice'

const iPad = new IPadAir2()
console.log(iPad.size())
iPad.setStorage(1)
iPad.setColor(2)
console.log(iPad.storage, iPad.color) // 64 Gold

const iPhone = new IPhone6s()
iPhone.setStorage(2)
iPhone.setColor(3)
console.log(iPhone.storage, iPhone.color) // 128 Rose Gold

const mac = new MacBookAir()
mac.setStorage(1)
console.log(mac.storage) // 256

const appleWatch = new AppleWatch()
console.log(appleWatch.size())
appleWatch.setStorage(0) // error
