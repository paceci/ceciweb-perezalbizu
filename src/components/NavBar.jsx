import image from "../logoDLT.png";

const NavBarId = () => {
    return (
        <>
        <ul className="nav justify-content-center">
            <a className="navbar-brand" href="App.js">
                <img className="rounded-circle Logo" src={image} alt="logo" />
            </a>
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="App.js">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="App.js">Imagenes</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="App.js">Compra</a>
            </li>
            <li classNameName="nav-item">
                <a className="nav-link" href="App.js">Contacto</a>
            </li>
        </ul></>
    );
};

export default NavBarId;