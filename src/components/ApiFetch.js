import React, {useState, useEffect} from 'react'
// axios導入 npm install axios
import axios from 'axios'

const ApiFetch = () => {

  const [posts, setPosts] = useState([])
  // IDを管理するState
  const [id, setId] = useState(1)
  // ID入力判定
  const [clicked, setClicked] = useState(false)
  const handlerClick=() => {
    setClicked(!clicked)
  }
  useEffect(() => {
    // // axiosを使用して外部APIを使う
    // axios.get('https://jsonplaceholder.typicode.com/posts')
    // // thenは全て
    // .then(res => {
    //   // dataでjsonオブジェクトを取得する
    //   setPosts(res.data)
    // })


    // fetchの場合
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{method: 'GET'})
    // fetchではHTMLの形で返されるので、jsonの形に直すため、.jsonを記載している
    .then(res => res.json())
    .then(data => {
      setPosts(data)
    })
    // 最初の一回のみ取得すれば良いので[]を記載する
    // 変化した値を見て変更させるならば第二引数へ変数を指定する必要がある
  },[clicked])

  return (
    <div>
      {/* <ul>
        {
          posts.map(post => <li key={post.id}>{post.id}: {post.title} </li>)
        }
      </ul> */}
      <input type="text"
       name=""
        id=""
        value={id}
        onChange={e=>setId(e.target.value)}
        />
        <button onClick={handlerClick}>検索</button>
        <p>{posts.title}</p>
    </div>
  )
}

export default ApiFetch
