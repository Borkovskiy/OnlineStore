import React, {useContext} from 'react';
import { useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap'
import { UserContext } from './UserProvider'

export function Logout() {
  let history = useHistory();
  const data = useContext(UserContext)

  const handleLogOut = (e) => {
    localStorage.setItem("user-info", '');
    localStorage.clear();
    history.push("/login");

    e.preventDefault();
    const data = {};

    fetch('https://online-store-120.herokuapp.com/logout', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    }).then(() => {
        console.log('user-info: ', data)
        localStorage.setItem("user-info", '');
        localStorage.clear();
        data.handleLogout()
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