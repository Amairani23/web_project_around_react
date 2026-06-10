import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import api from "../utils/api";
import { useState, useEffect } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch(console.error);
  }, []);
  return (
    <div className="page__content">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main />
        <Footer />
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
