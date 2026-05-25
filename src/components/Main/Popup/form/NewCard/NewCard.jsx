export default function NewCard() {
  return (
    <form className="popup__form" id="new-card-form" novalidate>
      <input
        id="title"
        className="popup__input popup__input_type_card-name"
        name="name"
        placeholder="Título"
        required
        type="text"
        required
      />
      <span className="title-input-error form__input-error">
        Este campo es obligatorio.
      </span>
      <input
        id="url"
        className="popup__input popup__input_type_url"
        name="link"
        placeholder="Enlace a la imagen"
        required
        type="url"
        required
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
