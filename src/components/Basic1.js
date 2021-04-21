// raで補完メニューが出てくるrafceを選択
import React from 'react'

// Functionコンポーネンtの(reactではClassコンポーネントは基本使わない)
// 親からのデータを受け取る際は引数へpropsを記載
const Basic1 = (props) => {

  // イベント関数
  const click = () => {
    alert("click");
  }

  return (
    <div>

      {/* 引数で受け取ったpropsの変数を指定して表示する */}
      <h1>Hello React1 {props.name}  </h1>
      <h1>Hello React2</h1>

      {/* イベントハンドラー */}
      <button onClick={click}>click</button>
    </div>
  )
}

export default Basic1
