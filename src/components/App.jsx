import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import api from "../utils/api";
import { useState, useEffect } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
  const [popup, setPopup] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const louding = isLoading ? "Guardando..." : "Guardar";

  useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch(console.error);
  }, []);

  async function handleCardLike(card) {
    // Verifica una vez más si a esta tarjeta ya les has dado like
    const isLiked = card.isLiked;

    // Envía una solicitud a la API y obtén los datos actualizados de la tarjeta
    await api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard,
          ),
        );
      })
      .catch((error) => console.error(error));
  }

  async function handleCardDelete(card) {
    // Envía una solicitud a la API y obtén los datos actualizados de la tarjeta
    await api
      .deleteCard(card._id)
      .then((newCard) => {
        setCards((state) =>
          state.filter((currentCard) => currentCard._id !== card._id),
        );
        handleClosePopup();
      })
      .catch((error) => console.error(error));
  }

  const handleAddPlaceSubmit = (card) => {
    (async () => {
      await api
        .addCard(card)
        .then((newCard) => {
          setCards([newCard, ...cards]);
          handleClosePopup();
        })
        .catch((error) => console.error(error));
    })();
  };

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
      await api
        .updateUserInfo(data)
        .then((newData) => {
          setCurrentUser(newData);
          handleClosePopup();
        })
        .catch((error) => console.error(error));
    })();
  };

  const handleUpdateAvatar = (data) => {
    (async () => {
      await api
        .updateAvatar(data)
        .then((newData) => {
          setCurrentUser(newData);
          handleClosePopup();
        })
        .catch((error) => console.error(error));
    })();
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
    setIsLoading(false);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <div className="page__content">
      <CurrentUserContext.Provider
        value={{
          currentUser,
          handleUpdateUser,
          handleUpdateAvatar,
          handleAddPlaceSubmit,
          louding,
          setIsLoading,
        }}
      >
        <div className="page__content">
          <Header />
          <Main
            onOpenPopup={handleOpenPopup}
            onClosePopup={handleClosePopup}
            popup={popup}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
          <Footer />
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
