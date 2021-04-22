// App.jsのReducerを実行する
import React,{useContext} from 'react'
import AppContext from "./contexts/AppContext"

const CompC = () => {
  // App.jsで定義したContextの値を指定{dispatchProvided} useContext(インポートしたcontext)AppContext
  const {dispatchProvided, countProvided} = useContext(AppContext)
  return (
    <div>
      {/* contextでとってきた値を変更 */}
      <button onClick={()=>dispatchProvided("add_1")}>Add + 1</button>
    </div>
  )
}

export default CompC
