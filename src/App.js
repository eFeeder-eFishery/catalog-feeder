import './App.css';
import Header from "./sections/Header";
import WhyFeeder from "./sections/WhyFeeder";
import Footer from "./sections/Footer";
import Homepage from './sections/Homepage';
import Cobox from './sections/Cobox';
import Fish from './sections/Fish';
import DownloadApp from './sections/DownloadApp';
import DetailApp from './sections/DetailApp';
import Outro from './sections/Outro';
import ProductDetail from './sections/ProductDetail';


function App() {
  return (
    <div className="App">
      <Header/>
      <Homepage/>
      <WhyFeeder/>
      <Fish/>
      <ProductDetail/>
      <Cobox/>
      <DownloadApp/>
      <DetailApp/>
      <Outro/>
      <Footer/> 
    </div>
  );
}

export default App;
