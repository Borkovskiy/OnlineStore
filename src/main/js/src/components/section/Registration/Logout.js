import React from 'react';
import { useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap'

export function Logout() {
  let history = useHistory();

  const handleLogOut = (e) => {
    localStorage.setItem("user-info", '');
    localStorage.clear();
    history.push("/login");

    e.preventDefault();
    const data = {};

    fetch('logout', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }).then(() => {
        console.log('user-info: ', data)
        // localStorage.setItem('user-info: ', JSON.stringify(data))
        // history.push({ pathname: "/login", state: { data: data } })
        localStorage.setItem("user-info", '');
        localStorage.clear();
        history.push("/login");
    })
  }

  return (
    <Button type='submit' variant="dark" onClick={handleLogOut}>
      Logout
    </Button>
  );
}

export default Logout