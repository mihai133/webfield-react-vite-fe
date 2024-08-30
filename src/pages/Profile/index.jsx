import React, { useState } from "react";
import { useUserContext } from "../../context/UserContext";
import { fetchData } from "../../api/fetch";
import { getSession, setSession } from "../../api/session";

export default function Profile() {
  const { user, setUser } = useUserContext();
  const [userData, setUserData] = useState(user);

  function handleChange(e) {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchData(`user/${user.userId}`, "PUT", userData, {
      Authorization: `Bearer ${getSession()?.token}`,
    }).then((res) => {
      let newUser = {
        userId: res.user_id,
        name: res.name,
        email: res.email,
      };
      setSession(newUser);
      setUser(newUser);
    });
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={userData.name}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={userData.email}
          onChange={(e) => handleChange(e)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
