// シングルトンのクラスを作ってみよう
function singleton () {
  return function (TargetClass) {
    // ここにコードを書く
  }
}

@singleton()
class SingleClass {
  call1 () {
    return 'call1'
  }
}

export default SingleClass
