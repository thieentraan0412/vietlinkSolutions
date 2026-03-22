import React, { useState } from 'react';
import { MyContext } from './MyContext';

const MyProvider = ({ children }) => {
    const [state, setState] = useState({ Language: 'vi', page: 0 });

    const value = {
        state,
        setState
    };

    return (
        <MyContext.Provider value={value}>
            {children}
        </MyContext.Provider>
    );
};

export default MyProvider;
