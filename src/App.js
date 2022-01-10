// Testing the Textfield jsx
import Textfield from './base components/Textfield'

// Testing TipButton
import TipButton from './base components/TipButton'

import DollarSign from './images/icon-dollar.svg'
function App() {
  return (
    <div className="min-h-screen flex flex-col gap-8 justify-center items-center">

      <Textfield type="text" svgLogo={DollarSign}/>
      <TipButton percent="5"/>
      <TipButton percent="10"/>
      <TipButton percent="15"/>
      <TipButton percent="25"/>
      <TipButton percent="50"/>
    </div>
  );
}

export default App;
