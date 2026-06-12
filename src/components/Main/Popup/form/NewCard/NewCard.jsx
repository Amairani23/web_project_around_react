import { useRef, useContext } from "react";
import CurrentUserContext from "../../../../../contexts/CurrentUserContext";

export default function NewCard() {
  const { handleAddPlaceSubmit } = useContext(CurrentUserContext);
  const titleRef = useRef();
  const urlRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    handleAddPlaceSubmit({
      name: titleRef.current.value,
      link: urlRef.current.value,
    });
  }

  return (
    <form className="popup__form" id="new-card-form" onSubmit={handleSubmit}>
      <input
        id="title"
        className="popup__input popup__input_type_card-name"
        name="name"
        placeholder="Título"
        type="text"
        required
        ref={titleRef}
      />
      <span className="title-input-error form__input-error">
        Este campo es obligatorio.
      </span>
      <input
        id="url"
        className="popup__input popup__input_type_url"
        name="link"
        placeholder="Enlace a la imagen"
        type="url"
        required
        ref={urlRef}
      />
      <span className="url-input-error form__input-error">
        Este campo es obligatorio.
      </span>
      <button className="button popup__button new-button" type="submit">
        Crear
      </button>
    </form>
  );
}
