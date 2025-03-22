import { Link } from 'react-router';

function LandingPage() {
  return (
    <main className="landing">
            <section className="hero">
        <h2 className="title">Proyectos molones</h2>
        <p className="hero__text">
          Escaparate en línea para recoger ideas a través de la tecnología
        </p>
        <Link className="button--link" to="create">
          Añadir un proyecto
        </Link>
      </section>
      <section className="list">

      </section>
    </main>
  );
}

export default LandingPage;