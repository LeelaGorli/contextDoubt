// Write your code here
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const notfoundContainer = isDarkTheme
        ? 'dark-container'
        : 'light-container'
      const nameClass = isDarkTheme ? 'darkheading-class' : 'lightheading-class'
      return (
        <div>
          <Navbar />
          <div className={notfoundContainer}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
            />
            <h1 className={nameClass}>Lost Your Way</h1>
            <p className={nameClass}>We cannot seem to find the page</p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
