


const Header = ({ show, shower }) => {


    return (
        <header className="header">
            {shower ? <h1 onClick={() => show()}>Write review </h1> :
                <h1 onClick={() => show()}>Show reviews</h1>}
        </header>
    );
};

export default Header;
