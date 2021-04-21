// useEffectはある一回の処理のみ
// APIなどでの一回など

import React, {useState, useEffect} from 'react'

const BasicUseEffect = () => {

  const [count, setCount] = useState(0)
  const [item, setItem] = useState("")

  // レンダリングされるたびに実行される
  useEffect(() => {
    alert("Effect")
    // 第二引数に[]をつけると1回目のレンダリングのみになる
    // []を記載すると[]の中身が変化すると実行される Stateを指定する
  },[count])

  return (
    <div>
      {/* クリックしたらcountが１上がる動作 */}
      <button onClick={()=> setCount(pc=>pc+1)}>useEffect {count}</button>
      {/* useEffectを使用すると */}
      <input type="text"
        value={item}
        onChange={e=>setItem(e.target.value)}
      />
    </div>
  )
}

export default BasicUseEffect
