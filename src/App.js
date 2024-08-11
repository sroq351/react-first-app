import "./App.css";
import { Content } from "./components/Content";
import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";
import { Offers } from "./components/Offers";
import { Form } from "./components/Form";

function App() {
  const getValueFromAPI = (phrase) => {};
  return (
    <div>
      <Menu />
      <Content />
      <Offers title={"Our offers"} />
      <Footer />
      <Form onSearchSubmit={getValueFromAPI} />
    </div>
  );
}

export default App;
