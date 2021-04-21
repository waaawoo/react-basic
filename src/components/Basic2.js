import React, { useState } from 'react'

const Basic2 = () => {

  // useStateの定義
  const [products, setProducts] = useState([])
  // 関数を用意
  const newProducts = () => {
    // 配列にどんどん追加するため...が必要
    setProducts([...products,{
      id: products.length,
      name: "",
    }])
  }

  return (
    <div>
      <p>配列を表示</p>
      <button onClick={newProducts}>button</button>
      <ul>
        {/* 配列を0番から取り出す
          mapは変数.map(割り当てる変数 => key{インデックス})で記載
         */}
        {products.map(product => (
          <li key={product.id}>id:{product.id}  {product.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Basic2
