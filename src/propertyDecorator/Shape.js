// 読込専用のdecorator
function readonly (target, key, descriptor) {
  descriptor.writable = false
  return descriptor
}

class Shape {

  /**
   * コンストラクタ
   *
   * @param {number} x x座標
   * @param {number} y y座標
   */
  constructor (x, y) {
    this.x = x
    this.y = y
  }

  /**
   * 位置の座標を返す
   *
   * @return {string} 座標
   */
  @readonly
  position () {
    return `${this.x} ${this.y}`
  }
}

export default Shape
