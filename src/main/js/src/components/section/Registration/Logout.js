import React from 'react';
import { useHistory } from "react-router-dom";
import { Button } from 'react-bootstrap'

export function Logout() {
  let history = useHistory();

  function handleLogOut() {
    localStorage.setItem("user-info", '');
    localStorage.clear();
    history.push("/login");
  }

  return (
    <Button type='submit' variant="dark" onClick={handleLogOut}>
      Logout
    </Button>
  );
}

export default Logout