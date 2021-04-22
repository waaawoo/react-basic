// reducerを使った状態の管理
// useReducerを孫コンポーネントで実行しようとするとuseContextと組み合わせる必要がある

// Reducerをインポート
import React, {useReducer} from 'react'

// カウンターの様々な動作
const initialState = 0

//
const reducer = (currentState, action) => {
  switch(action){
    case "add_1":
      return currentState + 1
    case "multiple_3":
      return currentState * 3
    case "initialState":
      return initialState
    default:
      return currentState
  }
}

const BasicReducer = () => {
  // countで現在の値を確認できる変数を定義
  // dispatchの引数にactionを指定する
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <div>Count {count}</div>
      {/* dispatchが呼ばれてた時にreucerのactionが発火する */}
      {/* dispatchにアクションを指定してイベントへ設置する */}
      <button onClick={()=>dispatch("add_1")}>Add + 1</button>
      <button onClick={()=>dispatch("multiple_3")}>multiple * 3</button>
      <button onClick={()=>dispatch("initialState")}>reset</button>
    </div>
  )
}

export default BasicReducer
