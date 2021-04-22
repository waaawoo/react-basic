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
import {useReducer} from "react"
import Memo from './components/Memo';

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

  // Reducerの実体
  const [count, dispatch] = useReducer(reducer, initialState)
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
          <Memo/>

        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
