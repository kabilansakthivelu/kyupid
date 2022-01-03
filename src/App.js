import Map from './Components/Map/Map';
import Search from './Components/Search/Search';
import Results from './Components/Results/Results';
import Header from './Components/Header/Header';
import Content from './Components/Content/Content';

function App() {
  return (
    <div className="App">
      <Header/>
      <Content/>
      <Map/>
      <Search/>
      <Results/>
    </div>
  );
}

export default App;
