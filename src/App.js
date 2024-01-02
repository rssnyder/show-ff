import './App.css';

import { useFeatureFlags } from '@harnessio/ff-react-client-sdk'

function App() {
  const allFlagValues = useFeatureFlags()
  return (
    <div className="App">
      <header className="App-header">
        <p>{JSON.stringify(allFlagValues, null, 2)}</p>
      </header>
    </div>
  );
}

export default App;
