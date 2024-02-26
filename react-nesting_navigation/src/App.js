import "./styles.css";

import avatar from "./img/avatar.jpg";
import logo from "./img/logo.jpg";
import Header from "./components/Header.js";
import Navigation from "./components/Navigation.js";
import Link from "./components/Link.js";

export default function App() {
  return (
    <>
      <Header>
        {/* <header className="header"> */}
        <a href="#">
          <img className="round-image" src={logo} alt="logo" />
        </a>
        <Navigation>
          {/* <nav> */}
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
          {/*   </nav> */}
        </Navigation>
        <button
          type="button"
          onClick={() => console.log("I could toggle a profile!")}
          aria-label="toggle profile"
        >
          <img className="round-image" src={avatar} alt="avatar" />
        </button>
        {/* </header> */}
      </Header>
      <main>content goes here…</main>
    </>
  );
}
