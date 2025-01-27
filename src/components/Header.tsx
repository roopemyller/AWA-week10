
import '../styles/header.css'

function Header() {

    return (
        <header className="header">
            <h1>This app</h1>
            <nav>
                <ul>
                    <a href='/'>Home</a>
                    <a href='/about'>About</a>
                    <button>FI</button>
                    <button>EN</button>
                </ul>
            </nav>
        </header>
    )
}

export default Header;