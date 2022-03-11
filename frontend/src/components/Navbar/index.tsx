import {ReactComponent as GithubIcon} from 'assets/img/github.svg';
import './style.css';
function Navbar() {

    return(
        <header>
        <nav className = 'container'>
          <div className='movie-app-nav-content'>
            <h1>Movie App</h1>
            <a href='https://github.com/Jrevoredo42'>
              <div className='movie-app-contact-container'>
                <GithubIcon className='icon-git'/>
                <p className='movie-app-contact-link'>/João revoredo</p>
              </div>
            </a>
          </div>
        </nav>
      </header>
    )
}

export default Navbar;