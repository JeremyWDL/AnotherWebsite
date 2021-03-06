import '../styles/Header.css'
import { NavLink } from 'react-router-dom'

export function Header(props) {

  const Navigation = (props) => {
    return (
      props.items.map
        ((navObject, key) => {
          if (navObject.link === '/') {
            return (
              <NavLink key={key} exact to={navObject.link}>
                {navObject.name}
              </NavLink>
            )
          }
          else {
            return (
              <NavLink key={key} to={navObject.link}>
                {navObject.name}
              </NavLink>
            )
          }
        })
    )
  }

  return (
    <header className="main-header">
      <img className="logo" src={props.logo} alt="" />
      <h1>{props.title}</h1>
      <nav className="navigation">
        <Navigation items={props.navigation} />
      </nav>
    </header>
  )
}

export default Header