import './App.css';
import Header from './component/Header';
import Section from './component/Section';
import Footer from './component/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProductProvider from './component/ProductContext';

function App() {
  return (
    <ProductProvider>
       <Header/>
     <Section/>
     <Footer/>
  
    </ProductProvider>
    
  )
}
export default App;
