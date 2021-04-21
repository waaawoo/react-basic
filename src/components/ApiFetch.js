import React, {useState, useEffect} from 'react'
// axios導入 npm install axios
import axios from 'axios'

const ApiFetch = () => {

  const [posts, setPosts] = useState([])
  useEffect(() => {
    // axiosを使用して外部APIを使う
    axios.get('https://jsonplaceholder.typicode.com/posts')
    // thenは全て
    .then(res => {
      // dataでjsonオブジェクトを取得する
      setPosts(res.data)
    })
    // 最初の一回のみ取得すれば良いので[]を記載する
  },[])

  return (
    <div>
      <ul>
        {
          posts.map(post => <li key={post.id}> {post.title} </li>)
        }
      </ul>
    </div>
  )
}

export default ApiFetch
