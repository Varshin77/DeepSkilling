import './App.css';
import { CalculateScore } from './Components/CalculateScore';

function App() {
  return(
    <div>      
      <CalculateScore Name="Rishikesh" 
      School="GRIET" 
      total={100} 
      goal={100} />
    </div>
  )
}

export default App;
