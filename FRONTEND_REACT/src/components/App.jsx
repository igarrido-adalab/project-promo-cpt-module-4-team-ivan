import { Routes, Route } from 'react-router';

import CreatePage from '../pages/CreatePage';
import api from '../lib/coolProjectApi';

import LogoAdalab from "../images/adalab.png"
import IconLaptop from "../images/laptop-code-solid.svg";
import "../styles/App.scss";
import LandingPage from '../pages/LandingPage';

function App() {

  return (
    <div className="container">
      <header className="header">
        <a
          className="header__brand"
          href="./"
          title="Haz click para volver a la página inicial"
        >
          <img
            className="header__companyLogo"
            src={IconLaptop}
            alt="Logo proyectos molones"
          />
          <h1 className="header__title">Proyectos molones</h1>
        </a>
        <img
          className="logoSponsor"
          src={LogoAdalab}
          alt="Logo Adalab"
        />
      </header>

      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='create' element={<CreatePage onCreate={api.createProject} />} />
      </Routes>

      <footer className="footer">
        <img
          className="logoSponsor"
          src={LogoAdalab}
          alt="Logo Adalab"
        />
      </footer>
    </div>
  );
}

export default App;
