import React from 'react'
import { useSelector } from 'react-redux';

const Home = () => {
  const { users, isLoading, error } = useSelector((state) => state.users)
  
  if (isLoading) {
    return (
      <h1>Loading...</h1>
    )
  } else if (error) {
    return (
      <div>Error</div>
    )
  } else {
    return (
      <div key="usersList">
        {users.map((data) => (
          <p key={data.id} > {data.firstName} {data.lastName}</p>
        ))}
      </div>
    )
  }
  
}

export default Home