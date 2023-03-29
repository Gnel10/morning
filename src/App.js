import './App.scss'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from './components/header/header'
import HomePage from '../src/pages/homePage/HomePage'
import AllProducts from './pages/AllProducts/AllProducts'
import Blog from './pages/blog/Blog'
import About from './pages/about/About'
import Faq from './pages/faq/Faq'
import { Provider } from 'react-redux'
import store from './redux/redux-store'

function App() {
  return (
  <Provider store={store}>
    <BrowserRouter>
    <Header/>
         <Routes>
           <Route path='/' element={<HomePage/>}/>
           <Route path='/allproducts' element={<AllProducts/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/faq' element={<Faq/>}/>
           <Route path='/blog' element={<Blog/>}/>
         </Routes> 
    </BrowserRouter>
    </Provider>
  );

}

export default App;
