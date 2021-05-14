import Search from './components/Search'
import Results from './components/Results'
import Popup from './components/Popup'
import {useState} from 'react'
import axios from 'axios'


function App() {

  const [state,setState] = useState({
    s:'',
    results:[],
    selected:{}
  })

  const url = "http://www.omdbapi.com/?i=tt3896198&apikey=6fe55dfb"

  const search = (e) =>{
    if (e.key === "Enter") {
      axios(url + "&s=" + state.s).then(
        ({data}) =>{
          let res = data.Search
          setState(prevState =>{
            return {...prevState,results:res}
          })
        }
      )
    }
  }

  const handleInput = (e) => {
    let s = e.target.value
    setState(prevState =>{
      return {...prevState,s:s}
    })
  }

  const openPopup = id => {
    axios(url + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () =>{
    setState(prevState=>{
      return {...prevState,selected:{}}
    })
  }

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} handleSearch={search}/>
        <Results results={state.results} openPopup={openPopup} />

        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
      </main>

      
    </div>
  );
}

export default App;
