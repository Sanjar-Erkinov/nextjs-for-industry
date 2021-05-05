// import { composeWithDevTools } from 'redux-devtools-extension'
import { createContext, useReducer } from 'react';
import userRegisterReducer from './Reducers'


export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialState = { userInfo: {}, error: {} }
  const [state, dispatсh] = useReducer(userRegisterReducer, initialState)

  return (
    <DataContext.Provider value={[state, dispatсh]}>
      {children}
    </DataContext.Provider>
  )

}