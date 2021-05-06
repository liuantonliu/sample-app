// import MakeCard from "../../presentation/components/cardFormat";
import React, { useReducer, createContext } from 'react';
import { JSONDataInterface } from '../../infrastructure/api/getData';

type State = JSONDataInterface[];

type Action = { type: 'add', payload: State };

type Dispatch = React.Dispatch<Action>;

// the context
export const JSONDataContext = createContext<{state: State, dispatch: Dispatch}>(
  { state: [], dispatch: () => {} },
);

// the function that can modify the context
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'add':
      return [...state, ...action.payload];
    default:
      return [];
  }
};

// to wrap context around everything
const DataContext = ({ children }: React.PropsWithChildren<{}>) => {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <JSONDataContext.Provider value={{ state, dispatch }}>
      {children}
    </JSONDataContext.Provider>
  );
};

export default DataContext;