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

function App() {
  return (

    // Contextのproviderで囲ったコンポーネントないで使用できる
    <AppContext.Provider value={"value from App.js"}>
      <div className="App">
        <header className="App-header">

          {/* コンポーネント呼び出し name= 子コンポーネントへデータを渡す */}
          <Basic1 name="Hooks" />
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
        </header>
      </div>
    </AppContext.Provider>
  );
}

export default App;
