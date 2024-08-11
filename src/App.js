import './App.css'
import { Content } from './components/Content';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';

function App() {
  return (
    <div>
      <Menu/>
      <Content />
      <Footer />
    </div>
  );
}

export default App;
