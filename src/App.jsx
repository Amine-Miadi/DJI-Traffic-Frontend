import './App.css'
import Form from './Components/SearchForm'
import ContentTable from './Components/ContentTable'

function App() {

  let data = [
    {
      id: '02325-23251-2332',
      location: '41.40338, 2.17403',
      speedlimit: 100,
      detectedspeed: 120,
      datetime: new Date(),
      image:'leeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
    }
  ]
  
  return (
    <>
      <>
        Traffic-Reports
      </>
      <Form/>
      <ContentTable rows={data}/>
    </>
  )
}

export default App
