import { createContext, useContext, useState } from "react";


const DashContext = createContext();

export const DashProvider = ({children}) => {
    
    const [menuOption, setMenuOption] = useState('Home');
    
    return (
        <DashContext.Provider value={{menuOption, setMenuOption}}>
            {children}
        </DashContext.Provider>
    )

};

export const useDash = () => {

    return useContext(DashContext);
}


