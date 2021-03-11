import "./Login.css";
import "./Home.css";
import { Link } from "react-router-dom";

//create a function to invoke getPlaform
//make api call to get allseries
//function inside said call
//include history.push('/series/:name') to redirect to series page
//look at getall foods or flavors

export default function Home(props) {
  return (
    <div className="App">
      <h1>Browse by:</h1>

      <div className="Platforms1">
        <Link to="/series/netflix">
          <div className="Netflix"></div>
        </Link>
        <Link to="/series/hulu">
          <div className="Hulu"></div>
        </Link>
        <Link to="/series/hbomax">
          <div className="HBOMax"></div>
        </Link>
      </div>
      <div className="Platforms2">
        <Link to="/series/prime">
          <div className="Prime"></div>
        </Link>
        <Link to="/series/disney+">
          <div className="Disney"></div>
        </Link>
        <Link to="/series/starz">
          <div className="Starz"></div>
        </Link>
      </div>
    </div>
  );
}
