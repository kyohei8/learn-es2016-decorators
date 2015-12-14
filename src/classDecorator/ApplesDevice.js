function color (colors) {
  return function (target) {
    target.prototype.setColor = function (index) {
      this.color = colors[index]
    }
  }
}

function storage (storages) {
  return function (target) {
    target.prototype.setStorage = function (index) {
      this.storage = storages[index]
    }
  }
}

class ApplesDevice {
  constructor () {
    this.height = 0
    this.width = 0
  }

  size () {
    return `height:${this.height} inches x width: ${this.width} inches`
  }
}

@color(['Silver', 'Space Gray', 'Gold'])
@storage([16, 64, 128])
export class IPadAir2 extends ApplesDevice {
  constructor () {
    super()
    this.height = 9.4
    this.width = 6.6
  }
}

@storage([128, 256])
export class MacBookAir extends ApplesDevice {
  constructor () {
    super()
    this.height = 5.44
    this.width = 2.64
  }
}

@color(['Silver', 'Space Gray', 'Gold', 'Rose Gold'])
@storage([16, 64, 128])
export class IPhone6s extends ApplesDevice {
  constructor () {
    super()
    this.height = 5.44
    this.width = 2.64
  }
}

export class AppleWatch extends ApplesDevice {
  constructor () {
    super()
    this.height = 1.51
    this.width = 1.31
  }
}

