import { useState } from 'react'
import JSONDATA from './mockdata.json'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div className='App'>
      <input type='text' placeholder='search...' onChange={(e) => setSearchTerm(e.target.value)} />
      {JSONDATA.filter((val) => {
        if (searchTerm === '') {
          return val
        } else if (val.first_name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map((val, key) => {
        return <div> {val.first_name} </div>
      })}
    </div>
  )
}

export default App
