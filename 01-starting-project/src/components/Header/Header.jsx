const reactDescriptions = ["Fundamental", "Crucial", "Core"];
import imageUrl from "../../assets/react-core-concepts.png";
import './Header.css';
function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
  }

export default function MyHeader() {
    const description = reactDescriptions[genRandomInt(2)];
    return (
      <header>
        <img src={imageUrl} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
    );
  }