import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <Link to="/">Home</Link>

      <div>
        {" "}
        <Link to="/movies">Movies</Link>
     
     <><Link to = "/movies/form">Movie Form</Link></>
      </div>
    </div>
  );
};

export default NavBar;
