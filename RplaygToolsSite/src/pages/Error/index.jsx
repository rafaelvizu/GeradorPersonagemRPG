import { Link } from 'react-router-dom'

function Error() {
     return (
          <main className="error">
               <h2>Página não encontrada</h2> 
               <p>Volte para <Link to='/' className='link'>Home</Link></p> 
          </main>
     )
}


export default Error