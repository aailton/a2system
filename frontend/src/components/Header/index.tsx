import logo from '../../assets/img/image 1.svg'

import './styles.css'

function Header() {
    return (
        <header>
            <div className="a2system-logo-container">
                <img src={logo} alt="A2 System" />
                    <h1>A2 System</h1>
                    <p>Em desenvolvimento por
                        <a href="https://www.instagram.com/_aailton/">@_aailton</a>
                    </p>
            </div>
        </header>
    )
}

export default Header
