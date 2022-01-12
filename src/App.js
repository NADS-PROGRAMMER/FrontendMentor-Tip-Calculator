import TipCalculator from './app components/TipCalculator'
import { CalculatorProvider } from './contexts/CalculatorContext';
function App() {

  document.title = 'Tip Calculator'
  return (
    <main className="min-h-screen flex flex-col gap-3 justify-end md:justify-center items-center bg-tipLightGrayishCyan">
      <CalculatorProvider>
        <TipCalculator />
      </CalculatorProvider>
      <div className="hidden lg:flex gap-2">
        <span className="text-tipVeryDarkCyan font-[700]">
          Challenge by <a className="text-tipStrongCyan" href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        </span>
        <span className="text-tipVeryDarkCyan font-[700]">
          Coded by <a className="text-tipStrongCyan" href="#">Nads Marcelo</a>.
        </span> 
      </div>
    </main>
  );
}

export default App;
