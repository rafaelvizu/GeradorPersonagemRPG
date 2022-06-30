import './header.css'
import { Link } from 'react-router-dom'
function Header() {
     return (
          <div className='header-container'>
               <header>
                    <h1>RplayG Tools</h1>
               </header>
               <nav>
                    <Link to='/' className='link'>Home</Link>
                    <Link to='/author' className='link'>Criador</Link>
               </nav>
          </div>
     )
}


export default Header