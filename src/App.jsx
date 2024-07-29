import './App.css'
import ResultsCard from './ResultsCard';
import data from "../data/result-data.js";

function App() {

  return (
    <div>
      <h1>Results</h1>
      <h4>Healthcare provider realities</h4>
      <p>Source: IBM Institute for Business Value study, "Better health outcomes with AI-powered virtual assistants"</p>
      <div className='window'>
        {data.map((result, i) => {
          return <ResultsCard key = {i} percentage = {result.percentage} title = {result.title} description = {result.description} />
        })}
      </div>
    </div>
  )
}

export default App
