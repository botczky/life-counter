import './App.css'

export default function App() {
  const birthdate = new Date('2002-11-24').getTime()
  const now = Date.now()
  const age = (now - birthdate) / 31_536_000_000

  return <div className="App">{age}</div>
}
