import NavBar from '../navbar/Navbar'

function Layout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  )
}

export default Layout