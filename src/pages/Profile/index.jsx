import { useState } from "react";
import { useUserContext } from "../../context/UserContext";
import { fetchData } from "../../api/fetch";
import { getSession, setSession } from "../../api/session";
import { Card } from "react-bootstrap";

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
        userId: res.userId,
        name: res.name,
        email: res.email,
      };
      setSession(newUser);
      setUser(newUser);
    });
  }

  return (
    <Card>
      <Card.Header>
        <Card.Title as={"h1"}>Profile</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>Id: {user.userId}</Card.Text>
        <Card.Text>Name: {user.name}</Card.Text>
        <Card.Text>Email: {user.email}</Card.Text>
        <form onSubmit={handleSubmit}>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              autoComplete="name"
              value={userData.name}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="form-outline mb-4">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              className="form-control"
              value={userData.email}
              onChange={(e) => handleChange(e)}
            />
          </div>

          <button className="btn btn-primary" type="submit">
            Update details
          </button>
        </form>
      </Card.Body>
    </Card>

    // <div>
    //   <h1>Profile</h1>
    //   <p>Name: {user.name}</p>
    //   <p>Email: {user.email}</p>

    //   <form onSubmit={handleSubmit}>
    //     <label htmlFor="name">Name</label>
    //     <input
    //       type="text"
    //       id="name"
    //       name="name"
    //       value={userData.name}
    //       onChange={(e) => handleChange(e)}
    //     />
    //     <label htmlFor="email">Email</label>
    //     <input
    //       type="email"
    //       id="email"
    //       name="email"
    //       value={userData.email}
    //       onChange={(e) => handleChange(e)}
    //     />
    //     <button type="submit">Update</button>
    //   </form>
    // </div>
  );
}
