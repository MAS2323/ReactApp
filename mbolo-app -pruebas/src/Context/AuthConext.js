import React, {Children, createContext} from "react";

export const AuthContext = createContext();

export const AuthProvider = (Children) => {
    return(
        //Con esta propiedad de context podemos pasar cualquier valor en cualquier pantalla de nuestra app 
        <AuthContext.Provider>
            {Children}
        </AuthContext.Provider>
    )
}