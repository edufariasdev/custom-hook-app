import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { FormatDate } from '../utils/format-date';

export interface TimeContextProps {
    time: string
}

export interface TimeProviderProps {
    children: React.ReactNode;
}

export const TimeContext = createContext({} as TimeContextProps);

const TIME_MS = 1000;

const TimeProvider = ({children}: TimeProviderProps) => {
    const [time, setTime] = useState<string>('--:--:--');

    useEffect(() => {
        let eventTime: NodeJS.Timeout;
        eventTime = setTimeout(() => handleUpdateTime(), TIME_MS);
        
        return () => clearTimeout(eventTime)
    }, [time])

    const handleUpdateTime = useCallback(() => {
        setTime(FormatDate(new Date(), ' HH:mm:ss', 'PT'))
    }, [time])

    return <TimeContext.Provider value={{time}}>{children}</TimeContext.Provider>
}

const useTime = () => {
    const context = useContext(TimeContext);
    if(!context) throw new Error('useTime must be used within a TimeProvider');
    return context;
}

export { useTime, TimeProvider }
