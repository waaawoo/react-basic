import React, {useState, useMemo} from 'react'

const Memo = () => {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  const AddCount1 = () => {
    setCount1(pc1 => pc1 + 1)
  }
  const AddCount2 = () => {
    setCount2(pc1 => pc1 + 1)
  }

  // 奇数判定
  // const isOdd = () =>{
  //   // 計算を擬似的に長くする
  //   let i = 0
  //   while(i < 500000000)
  //   i++
  //   return count1 % 2 !== 0
  // }

  // useMemoで記載
  const isOdd = useMemo(() =>{
    // 計算を擬似的に長くする
    let i = 0
    while(i < 500000000)
    i++
    return count1 % 2 !== 0
    // 第二引数へ再計算トリガーを指定
  }, [count1])


  return (
    <div>
      <button onClick={AddCount1}>count1: {count1}</button>
      <br/>
      {/* 奇数判定 */}
      <span>{isOdd ? "odd number" : "Even number"}</span>
      <br/>
      <button onClick={AddCount2}>count2: {count2}</button>
      <br/>
    </div>
  )
}

export default Memo
