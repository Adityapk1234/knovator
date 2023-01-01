

const Header = ({ show }) => {

    return (
        <header className="header">
            <h1 onClick={show}>Reviews </h1>
            <h1 onClick={show}>Show review</h1>
        </header>
    );
};

export default Header;
