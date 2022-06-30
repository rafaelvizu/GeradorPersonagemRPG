import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Author from './pages/Author/author'
import Error from './pages/Error'


function RouterApp() {
     return (
          <BrowserRouter>
               <Header/>
               <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/author' element={<Author/>}/>

                    
                    <Route path='*' element={<Error/>}/>
               </Routes>
          </BrowserRouter>
     )
}


export default RouterApp
