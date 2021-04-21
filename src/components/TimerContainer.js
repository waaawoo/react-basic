import React, {useState} from 'react'
import Timer from "./Timer"

const TimerContainer = () => {

  // ディスプレイのOnOffを切り替えるためのステート
  const [display, setDisplay] = useState(false)

  return (
    <div>
      <button onClick={()=> setDisplay(!display)}>ディスプレイ切り替え</button>
      {/* 論理積で表示判定をする */}
      { display && <Timer /> }
    </div>
  )
}

export default TimerContainer
