// 非推奨のメソッドを表す @deprecateを実装しよう
function deprecated () {
  return function (target, key, descriptor) {
    // ここにコードを書く
  }
}

class Klass {
  constructor (text) {
    this.text = text
  }
  @deprecated()
  method1 () {
    return `${this.text}のメソッド`
  }
}

export default Klass
