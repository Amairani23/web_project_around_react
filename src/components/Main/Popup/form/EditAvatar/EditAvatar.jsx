import { useRef, useContext } from "react";
import CurrentUserContext from "../../../../../contexts/CurrentUserContext";

export default function EditAvatar() {
  const avatarRef = useRef();
  const { handleUpdateAvatar } = useContext(CurrentUserContext);

  function handleSubmit(e) {
    e.preventDefault();

    handleUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <form
      className="popup__form"
      name="avatar-form"
      noValidate
      onSubmit={handleSubmit}
    >
      <input
        id="avatar"
        type="url"
        className="popup__input popup__input_type_avatar-url"
        name="avatar"
        placeholder="Enlace a la imagen"
        required
        ref={avatarRef}
      />
      <span className="avatar-input-error form__input-error">
        Este campo es obligatorio.
      </span>
      <button type="submit" className="popup__button ">
        Guardar
      </button>
    </form>
  );
}
