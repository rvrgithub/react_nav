
import './App.css';

function App() {
  const links = ["service","Project","About"]
  return (
    <div className="App">
    <div className='mid_div'><div>LOGOBAKERY</div>
    <div className='links'>{links.map((e)=>{
      return <p>{e}</p>
    })}
      </div>
    <button>Contect</button></div>
    </div>
  );
}

export default App;
