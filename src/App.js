import logo from './logo.svg';
import './App.css';

// コンポーネントインポート
import Basic1 from "./components/Basic1"

function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* コンポーネント呼び出し name= 子コンポーネントへデータを渡す */}
        <Basic1 name="Hooks" />
      </header>
    </div>
  );
}

export default App;
