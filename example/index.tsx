import { CSSReset, theme, ThemeProvider } from '@chakra-ui/core';
import { MyBox } from 'chakra-tester';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <MyBox>Hello</MyBox>
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
