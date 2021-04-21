import logo from './logo.svg';
import './App.css';

// コンポーネントインポート
import Basic1 from "./components/Basic1"
import Basic2 from "./components/Basic2"
import Basic3 from "./components/BasicUseEffect"
import TimerCom from "./components/TimerContainer"


function App() {
  return (
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
      </header>
    </div>
  );
}

export default App;
