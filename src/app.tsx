import React from 'react';
import { AppProvider } from './hooks';

import { HomePage } from './pages';

export const App = () => {
    return (
        <AppProvider>
            <HomePage/>
        </AppProvider>
    )
}