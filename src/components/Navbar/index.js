// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NavBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onToggleTheme = () => {
        toggleTheme()
      }

      const navcontainerClassName = isDarkTheme
        ? 'darknav-container'
        : 'lightnav-container'

      const linkClass = isDarkTheme ? 'dark-class' : 'light-class'

      return (
        <div className={navcontainerClassName}>
          {isDarkTheme ? (
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
              alt="website logo"
              className="website-logo"
            />
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
              alt="website logo"
              className="website-logo"
            />
          )}
          <ul className="nav-items">
            <li>
              <Link to="/">
              <h1 className={linkClass}>Home</h1>
            </Link>
            </li>
            <li>
              <Link to="/about">
              <h1 className={linkClass}>About</h1>
            </Link>
            </li>
          </ul>
          <button onClick={onToggleTheme} type="button" data-testid="theme">
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                alt="theme"
                className="theme"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                alt="theme"
                className="theme"
              />
            )}
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NavBar
