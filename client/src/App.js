import {BrowserRouter as Router} from 'react-router-dom'
import AppRouter from "./components/AppRouter"
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import {check} from "./http/userAPI";
import {CircularProgress} from "@mui/material";

const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then(data => {
      user.setUser(true)
      user.setIsAuth(true)
    }).finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <CircularProgress/>
  }

  return (
    <Router>
      <NavBar/>
      <AppRouter/>
    </Router>
  );
})

export default App;
