import React from 'react'
import UserCard from './components/UserCard'
import Eagle from './assets/eagle.jpg'
import Goose from './assets/goose.jpg'
import Penguin from './assets/penguin.jpg'
import Macaw from './assets/macaw.jpg'

function App() {
  return (
    <div className="container">
      <UserCard name="Eagle" desc="description1" image={Eagle} />
      <UserCard name="Goose" desc="description2" image={Goose} />
      <UserCard name="Penguin" desc="description3" image={Penguin} />
      <UserCard name="Macaw" desc="description4" image={Macaw} />
    </div>
  )
}

export default App
