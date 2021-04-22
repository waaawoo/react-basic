import React from 'react'

const CountClick = ({handleClick, children}) => {
  console.log('clicked', children)
  return (
    <div>
      <button onClick={handleClick}>{children}</button>
    </div>
  )
}

// React.memoは変化した内容にのみ反応するようにしている
export default React.memo(CountClick)
