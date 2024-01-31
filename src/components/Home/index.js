// Write your code here
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

const Home = () => (
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
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
                className="home"
              />
            ) : (
              <img
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
                className="home"
              />
            )}
            <h1>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
