import { useState } from "react";
import { Link } from "react-router";

const EMPTY_DATA = {
  name: "",
  author: "",
};

function CreatePage({ onCreate }) {
  const [data, setData] = useState(EMPTY_DATA);
  const [cardURL, setCardURL] = useState("");
  const [errors, setErrors] = useState("");

  const handleInput = (ev) => {
    const { name, value } = ev.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    setCardURL("");
    setErrors("");

    const { success, cardURL, error } = await onCreate(data);

    console.log({ success, cardURL, error });
    if (success) {
      setCardURL(cardURL);
    } else {
      setErrors(error);
    }
  };

  return (
    <main className="main">
      <section className="hero">
        <h2 className="title">Proyectos molones</h2>
        <p className="hero__text">
          Escaparate en línea para recoger ideas a través de la tecnología
        </p>
        <Link className="button--link" to="/">
          Ver proyectos
        </Link>
      </section>

      <section className="preview">
        <article className="card">
          <h2 className="card__projectTitle">
            <span className="card__projectTitle--text">
              Personal project card
            </span>
          </h2>

          <div className="card__author">
            <div className="card__authorPhoto"></div>
            <h3 className="card__name">{data.author || "Emmelie Bjôrklund"}</h3>
          </div>

          <div className="card__project">
            <h3 className="card__name">{data.name || "Elegant Workspace"}</h3>
          </div>
        </article>
      </section>
      <form className="addForm" onSubmit={handleSubmit}>
        <fieldset className="addForm__group">
          <legend className="addForm__title">
            Cuéntanos sobre el proyecto
          </legend>
          <input
            className="addForm__input"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre del proyecto"
            onInput={handleInput}
            value={data.name}
          />
        </fieldset>

        <fieldset className="addForm__group">
          <legend className="addForm__title">Cuéntanos sobre la autora</legend>
          <input
            className="addForm__input"
            type="text"
            name="author"
            id="author"
            placeholder="Nombre"
            onInput={handleInput}
            value={data.author}
          />
        </fieldset>

        <fieldset className="addForm__group--upload">
          {errors && <p>{errors}</p>}
          <button className="button--large">Guardar proyecto</button>
          {cardURL && (
            <p>
              Podés ver tu proyecto en este enlace:
              <a style={{color: "white"}} href={cardURL} target='BLANK'>{cardURL}</a>
            </p>
          )}
        </fieldset>
      </form>
    </main>
  );
}

export default CreatePage;
