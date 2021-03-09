import './Home.css';


export default function Home(props) {
  const { currentUser, handleLogout } = props;
  return (
  <div className="App">
      <h1>Browse by:</h1>
    <div className ="Platforms1">
      <div className="Netflix">
      </div>
      <div className="Hulu">
      </div>
      <div className="HBOMax">
        </div>
      </div>
    <div className ="Platforms2">
      <div className="Prime">
      </div>
      <div className="Disney">
      </div>
      <div className="Starz">
        </div>
      </div>
    

 </div>


     
    
  

  )
}





