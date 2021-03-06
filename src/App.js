import logo from './logo.svg';
import './App.css';

// コンポーネントインポート
import Basic1 from "./components/Basic1"
import Basic2 from "./components/Basic2"
import Basic3 from "./components/BasicUseEffect"
import TimerCom from "./components/TimerContainer"
import ApiFetch from "./components/ApiFetch"
import AppContext from "./components/contexts/AppContext"
import B from "./components/contexts/B"
import BasicReducer from './components/BasicReducer';
import CompB from './components/CompB';
// useReducerのインポート
import {useReducer, useState, useCallback} from "react"
import Memo from './components/Memo';
import CountDisplay from './components/CountDisplay';
import CountClick from './components/CountClick';

// 初期値
const initialState = 0
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

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)

  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  // レンダリング範囲を絞るため、第二引数に指定した値が変更したらレンダリングがされるようにする
  const AddCount1 = useCallback(() => {
    setCount1(pc1 => pc1 + 1)
  }, [])

  // レンダリング範囲を絞るため、第二引数に指定した値が変更したらレンダリングがされるようにする
  const AddCount2 = useCallback(() => {
    setCount2(pc2 => pc2 + 1)
  }, [])

  // Reducerの実体

  return (

    // Contextのproviderで囲ったコンポーネントないで使用できる
    // {{}}複数valueを渡す場合は二重にする
    <AppContext.Provider value={{countProvided: count, dispatchProvided: dispatch}}>
      <div className="App">
        <header className="App-header">

          {/* コンポーネント呼び出し name= 子コンポーネントへデータを渡す */}
          {/* <Basic1 name="Hooks" />
          <hr/>
          <Basic2 />
          <hr/>
          <Basic3/>
          <hr/>
          <TimerCom/>
          <hr/>
          <ApiFetch/>
          <hr/>
          <B />
          < BasicReducer /> */}

          {/* グローバルカウント */}
          {/* Count {count}
          <CompB/> */}
          {/* <Memo/> */}

          {/* -------------------- 全てレンダリングされてしまっている -------------------------- */}
          {/* nameとcountを渡す */}
          < CountDisplay name="count1" count={count1}/>

          {/* 関数を渡す
            <>この中はchildren変数で扱われる </>
           */}
          <CountClick handleClick={AddCount1}>AddCount1</CountClick>

          {/* nameとcountを渡す */}
          < CountDisplay name="count2" count={count2}/>

          {/* 関数を渡す
            <>この中はchildren変数で扱われる </>
           */}
          <CountClick handleClick={AddCount2}>AddCount2</CountClick>
          {/* -------------------- 全てレンダリングされてしまっている -------------------------- */}
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
