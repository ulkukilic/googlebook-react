import Header from './Components/Layouts/Header';
import Footer from './Components/Layouts/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import HomePage from './Components/Books/HomePage';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
     <Footer />
    </div>
  );
}

export default App;
