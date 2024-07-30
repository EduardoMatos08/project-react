import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './globalStyles';

import Page from './routes';

ReactDOM.render(
    <>
        <Page/>
        <GlobalStyle />
    </>,
    document.getElementById("root")
);