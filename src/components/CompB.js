// App.jsでcontextプロバイダーを継承している（プロバイダーの要素ないで定義されている）

import React from 'react'
import CompC from './CompC'

const CompB = () => {
  return (
    <div>
      <CompC/>
    </div>
  )
}

export default CompB
