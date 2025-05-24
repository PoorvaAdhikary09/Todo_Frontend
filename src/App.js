import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Container} from '@mui/material';
import { lightTheme, darkTheme } from './theme/theme';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskTable from './components/TaskTable';

function App() {

  const [themeMode, setThemeMode] = useState('light');

const toggleTheme = () => {
  setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
};

  return (
    <ThemeProvider theme={themeMode === 'light' ? lightTheme : darkTheme}>
      <CssBaseline />
      <Container>
         <Header themeMode={themeMode} toggleTheme={toggleTheme} />
        <TaskForm />
        <TaskTable/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
