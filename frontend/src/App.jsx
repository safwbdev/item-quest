import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDataContext } from './context/DataContext'

function App() {
  const { catergories } = useDataContext();
  console.log(catergories);


  return (
    <div>
      {catergories.map((catergory) => (<h1>{catergory}</h1>))}
    </div>
  )
}

export default App
