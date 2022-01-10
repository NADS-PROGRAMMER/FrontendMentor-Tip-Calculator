import TipCalculator from './app components/TipCalculator'
import { CalculatorProvider } from './contexts/CalculatorContext';
function App() {
  return (
    <main className="min-h-screen flex flex-col bg-tipLightGrayishCyan">
      <CalculatorProvider>
        <TipCalculator />
      </CalculatorProvider>
    </main>
  );
}

export default App;
