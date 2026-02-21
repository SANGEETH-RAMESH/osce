import LandingPage from './component/LandingPage'
import Page1 from './component/Page1'
import Page3 from './component/Page3'

function App() {

  return (
    <div id="print-area">

      <div className="print-page center-page">
        <LandingPage />
      </div>

      <div className="print-page center-page">
        <Page1 start={0} end={5} />
      </div>

      <div className="print-page center-page">
        <Page1 start={5} end={10} />
      </div>

      <div className="print-page">
        <Page3 />
      </div>

    </div>
  )
}

export default App;