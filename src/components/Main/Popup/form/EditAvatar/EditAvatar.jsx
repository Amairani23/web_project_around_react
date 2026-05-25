export default function EditAvatar() {
  return (
    <form className="popup__form" name="avatar-form" novalidate>
      <input
        id="avatar"
        type="url"
        className="popup__input popup__input_type_avatar-url"
        name="avatar"
        placeholder="Enlace a la imagen"
        required
      />
      <span className="avatar-input-error form__input-error">
        Este campo es obligatorio.
      </span>
      <button
        type="submit"
        className="popup__button popup__button_disabled"
        disabled
      >
        Guardar
      </button>
    </form>
  );
}
