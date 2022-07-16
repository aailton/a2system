import logo from '../../assets/img/pngwing.png'

import './styles.css'

function Header() {
    return (      
            <main className="container-padding">
                <div className="container-header">
                    <p className="welcome">Bem-vindo, Usuário!</p>
                    <br/>
                        <div className="container-info">
                            <div className="a2system-logo-container">
                                <img src={logo} alt="A2 System"/>
                                    <p>A2 System</p>
                            </div>
                        </div>
                </div>
            </main>
    )
};

export default Header