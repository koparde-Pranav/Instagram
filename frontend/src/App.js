import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Router from "./Pages/Router/Router";
import { getUserProfileAction } from "./Redux/User/Action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(getUserProfileAction(token));
    }
  }, [dispatch]);

  return (
    <div className="App">
      <Router></Router>
    </div>
  );
}

export default App;
