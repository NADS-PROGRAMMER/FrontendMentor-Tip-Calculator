import TipCalculator from './app components/TipCalculator'
import { CalculatorProvider } from './contexts/CalculatorContext';
function App() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-tipLightGrayishCyan">
      <CalculatorProvider>
        <TipCalculator />
      </CalculatorProvider>
    </main>
  );
}

export default App;
