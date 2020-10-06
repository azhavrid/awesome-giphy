import React from 'react';
import AppStatusBar from './components/AppStatusBar';
import RootNavigator from './routes/RootNavigator';

const App: React.FC = () => (
  <>
    <AppStatusBar />
    <RootNavigator />
  </>
);

export default App;
