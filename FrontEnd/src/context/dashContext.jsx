import { createContext, useContext, useEffect, useState } from "react";
import { Token } from "../services/token";

const DashContext = createContext();

export const DashProvider = ({children}) => {

    const [ userInfo, setUserInfo ] = useState(null);

    useEffect(() => {
        const user = Token();
        if(user){
            setUserInfo(user)
        }
    },[]);
    
    const [menuOption, setMenuOption] = useState('Home');
    const [capId, setCapId] = useState(null);
    
    return (
        <DashContext.Provider value={{menuOption, setMenuOption, capId, setCapId, userInfo}}>
            {children}
        </DashContext.Provider>
    )

};

export const useDash = () => {

    return useContext(DashContext);
}


