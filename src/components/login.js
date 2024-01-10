import React from 'react'
import { useParams } from 'react-router-dom'

export const Login = () => {
  // Access route Id 
  const { id } = useParams();
  console.log(id + 5);

  return (
    <div>
      <h1>Login {id}</h1>
    </div>
  )
}
