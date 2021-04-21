import React,{useState, useEffect} from 'react'

const Timer = () => {

  const [count, setCount] = useState(0)
  const time = () =>{
    setCount(p => p + 1)
  }

  useEffect(() => {
    // 1秒ごとに上がる
    const interval = setInterval(time, 1000)
    return () => {
      // コンポーネントが破棄された場合、falseになった場合 cleanup
      clearInterval(interval)
      console.log("clear")
    }
  },[])
  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

export default Timer
