import { Link } from "react-router-dom";
import "./Style.css";

function Home() {
  return (
    <div>
     
      <p>Winter Mega Sale </p>

      <Link to="/men"><button>Men</button></Link>
      <Link to="/women"><button>Women</button></Link>
      <Link to="/kids"><button>Kids</button></Link>
    </div>
  );
}

export default Home;