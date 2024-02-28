import './App.css';

import { useFeatureFlags } from '@harnessio/ff-react-client-sdk'

const getFlagContent = (flags) => {
  let content = [];
  for (var key in flags){
    let value = "None!"
    if (flags[key]) {
      value = "True!"
    } else {
      value = "False!"
    }
    content.push(<li key={key}>{key}: {value}</li>);
  }
  return content;
};

function App() {
  const allFlagValues = useFeatureFlags()
  return (
    <div className="App">
      <header className="App-header">
        <ul>{getFlagContent(allFlagValues)}</ul>;
      </header>
    </div>
  );
}

export default App;
