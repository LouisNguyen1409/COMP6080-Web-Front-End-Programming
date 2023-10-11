import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [org, setOrg] = React.useState(0);

  React.useEffect(async () => {
    try {
      const res = await fetch(`https://api.github.com/orgs/microsoft`)
      const data = await res.json();
      setOrg(data.public_repos);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div style={{ margin: '50px'}}>
      <input disabled="true" type="text" value={org} />
    </div>
  );
}

export default App;
