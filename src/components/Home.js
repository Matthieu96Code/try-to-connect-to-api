import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react'
import { getUsers } from '../store/users/usersSlice';

const Home = () => {
  const { users, isLoading, error } = useSelector((state) => state.users)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers(123))
  }, []);

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
          <p key={data.login.uuid} > {data.name.first} {data.name.last}</p>
        ))}
      </div>
    )
  }
  
}

export default Home