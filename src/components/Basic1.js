// raで補完メニューが出てくるrafceを選択
// {useState}でユーズステートをインポート
import React, {useState} from 'react'


// Functionコンポーネンtの(reactHooksではClassコンポーネントは基本使わない)
// 親からのデータを受け取る際は引数へpropsを記載
const Basic1 = () => {

// カウンター用のstateを用意
// count 数値の変数
// setCount 関数
const [count, setCount] = useState(0);
// オブジェクトでのState
const [product, setProducts] = useState({
  name: "",
  price: "",
})

  // イベント関数


  return (
    <div>

      {/*
        カウンタ-
        secCount(新しい値)setCountの新しい値がcountへ入る
      */}
      {/* <button onClick={() => setCount(count+1)}>button {count} </button> */}
      {/* 処理を二つ設定できるが、同じ処理をしてもレンダリング時に処理を行うので0に1を足すことになる */}
      {/* <button onClick={() => {setCount(count+1); setCount(count+1); }}>double {count} </button> */}
      {/*
        setCountの引数に変数を指定すると（今回はprevCount）現在の値がprevCountに入り、
        現在の値から＋１した値が返され、countへ入る
      */}
      {/* <button onClick={() => {setCount(prevCount=>prevCount+1); setCount(prevCount=>prevCount+1); }}>double {count} </button> */}

      {/* 引数で受け取ったpropsの変数を指定して表示する */}
      {/* <h1>Hello React1 {props.name}  </h1> */}
      {/* <h1>Hello React2</h1> */}

      {/* イベントハンドラー */}
      {/* <button onClick={click}>click</button> */}
      <form action="">
        <input
          type="text"
          value={ product.name }
          // evtはどんな変数でも良いがハンドラー情報が入っていくるものeで良い
          // ...はオブジェクトの中身を分解して,nameの部分だけ変更している
          // evt.target.valueはinputのvalueをとっている
          onChange={evt => setProducts({...product, name: evt.target.value})}
        />
        { product.name }
        <input
          type="text"
          value={ product.price }
          onChange={e => setProducts({...product, price: e.target.value  }) }
        />
        { product.price }
      </form>
    </div>
  )
}

export default Basic1
