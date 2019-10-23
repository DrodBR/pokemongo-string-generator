import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light main-bg-1">
                <a className="navbar-brand" href="#"><i class="fab fa-superpowers"></i>Pokémon Go: String Generator</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="https://github.com/DrodBR/pokemongo-string-generator" rel="noopener noreferrer" target="_blank">GitHub</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="https://www.linkedin.com/in/danielfgrodrigues/" rel="noopener noreferrer" target="_blank">LinkedIn</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar