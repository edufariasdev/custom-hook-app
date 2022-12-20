import React from 'react';

import {TimeProvider} from './use-time';

export interface AppProviderProps {
    children: React.ReactNode;
}

export const AppProvider = ({children}:AppProviderProps) => {
    return <TimeProvider>{children}</TimeProvider>
}