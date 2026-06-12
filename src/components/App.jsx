import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import api from "../utils/api";
import { useState, useEffect } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  const [popup, setPopup] = useState(null);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    api
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch(console.error);
  }, []);

  const handleUpdateUser = (data) => {
    (async () => {
      await api.updateUserInfo(data)
        .then((newData) => {
        setCurrentUser(newData);
        handleClosePopup();
      })
      .catch((error) => console.error(error));
    })();
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <div className="page__content">
      <CurrentUserContext.Provider value={{ currentUser, handleUpdateUser }}>
        <div className='page__content'>
          <Header />
          <Main
            onOpenPopup={handleOpenPopup}
            onClosePopup={handleClosePopup}
            popup={popup}
          />
          <Footer />
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
