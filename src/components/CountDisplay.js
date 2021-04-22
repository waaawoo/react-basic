import React from 'react'

// propsの値を受け取るために引数をとる
const CountDisplay = ({name, count}) => {
  console.log(`display ${name} ${count}`)

  return (
    <div>
      {count}
    </div>
  )
}

// React.memoは変化した内容にのみ反応するようにしている
export default React.memo(CountDisplay)
