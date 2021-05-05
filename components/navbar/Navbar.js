import Link from 'next/link'
import { useRouter } from 'next/router'

function NavBar() {
  const router = useRouter()
  const isActive = (res) => {
    if (res === router.pathname) {
      return " active "
    } else {
      return ""
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link href='/'>
          <a className="navbar-brand"><b>LogoCompany</b></a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav nav-pills rounded ">
            <li className="nav-item">
              <Link href='/users'>
                <a className={"nav-link" + isActive('/users')}> <i className="fas fa-users"></i>  USERS</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href='/orders'>
                <a className={"nav-link" + isActive('/orders')}><i className="fas fa-chart-line"></i> ORDERS</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href='/products'>
                <a className={"nav-link" + isActive('/products')}><i className="fas fa-cart-arrow-down"></i> PRODUCTS</a>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                USER NAME
            </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a className="dropdown-item">SETTING</a></li>
                <li><a className="dropdown-item">LOGOUT</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
