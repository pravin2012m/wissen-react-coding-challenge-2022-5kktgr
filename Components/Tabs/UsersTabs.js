import React, { useState, useEffect } from 'react';
import { SubmitGetRequest } from '../../services';
const UsersTabs = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    getUserList();
    //eslint-disable-next-line
  }, []);
  const getUserList = () => {
    setisLoading(true);
    SubmitGetRequest('https://reqres.in/api/unknown')
      .then((res) => {
        setUsers(res.data);
        setisLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setisLoading(false);
      });
  };

  const userList =
    users.length > 0 &&
    users.map((user) => {
      return (
        <>
          <li
            className="user-list"
            style={{ background: user.color }}
            key={user.id}
          >
            <p> {user.id}</p>
            <p> {user.name}</p>
            <p> {user.year}</p>
            <p> {user.pantone_value}</p>
          </li>
        </>
      );
    });
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <ul>
            <li className="user-list-head">
              <p> Id</p>
              <p> Name</p>
              <p> Year</p>
              <p> Pantone</p>
            </li>
          </ul>
          <ul>{userList}</ul>
        </>
      )}
    </div>
  );
};
export default UsersTabs;
