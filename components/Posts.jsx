import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { db } from '../firebase'
import Post from './Post'

const Posts = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const q = query(collection(db, 'posts'), orderBy('timeStamp', 'desc'))
    return onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs)
    })
  }, [db])

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  )
}

export default Posts
