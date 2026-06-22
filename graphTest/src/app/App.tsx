import { useState } from 'react'
import './App.css'
import { MixedChart } from '../entities/chart/ui/MixedChart'
import { data } from '../shared/data/testData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MixedChart data={data} />
    </>
  )
}

export default App
