import React, { useEffect, useState } from 'react';
import http from '../http';

interface Props {
  name: string;
}

interface Posts {
  id: string;
  message: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
}


const LandingPage: React.FC<Props> = ({ name }) => {
  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    http.getAllPosts()
      .then((posts) => setPosts(posts))
  }, [])

  return (
    <div>
      {name}:
      {posts.map(({ message, title, id }) => {
        return <div key={id}>{title} : {message} </div>
      })}
    </div>
  )
}


export default LandingPage;