// Write your code here
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeContainerClass = isDarkTheme
        ? 'dark-container'
        : 'light-container'

      const homeClass = isDarkTheme ? 'darkheading-class' : 'lightheading-class'

      return (
        <div>
          <Navbar />
          <div className={homeContainerClass}>
            {isDarkTheme ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
                className="home"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
                className="home"
              />
            )}
            <h1 className={homeClass}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
