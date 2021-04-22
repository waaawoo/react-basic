import React, {useContext} from 'react'

// 親コンポーネントインポート
import AppContext from "../contexts/AppContext"
const C = () => {
  // 親の親コンポーネントのvalueを受け取り 親コンポーネントを飛ばして受け取れる
  const value = useContext(AppContext)
  return (
    <div>
      <h3>Cコンポーネント</h3>
      {value}
    </div>
  )
}

export default C
