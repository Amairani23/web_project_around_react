export default function EditProfile() {
  return (
    <form className="popup__form" id="edit-profile-form">
      <input
        id="name"
        className="popup__input popup__input_type_name"
        name="name"
        placeholder="Nombre"
        type="text"
        required
      />
      <span className="name-input-error form__input-error">
        Este campo es obligatorio.
      </span>

      <input
        id="description"
        className="popup__input popup__input_type_description"
        name="about"
        placeholder="Acerca de mí"
        type="text"
        required
      />

      <span className="description-input-error form__input-error">
        Este campo es obligatorio.
      </span>
      <button className="button popup__button edit-button" type="submit">
        Guardar
      </button>
    </form>
  );
}
