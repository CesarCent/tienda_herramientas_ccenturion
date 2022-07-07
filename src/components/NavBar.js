import CartWidget from "./CartWidget"

import {NavLink} from "react-router-dom"

const NavBar = () =>{
    return(
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">Tienda Herramientas</a> */}
    <NavLink to={'/'} className="navbar-brand" >Tienda Herramientas</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to={'/category/jardin'}>Jardineria</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={'/category/hogar'}>Hogar</NavLink>
        </li>
        <li className="nav-item">
           <CartWidget/>
        </li>

      </ul>
    </div>
  </div>
</nav>
    )
}

export default NavBar