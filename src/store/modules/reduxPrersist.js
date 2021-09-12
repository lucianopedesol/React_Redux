import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      // NOME-DA-APLICACAO
      key: 'REACT-BASE',
      storage,
      whitelist: ['example'],
    },
    reducers
  );

  return persistedReducer;
};
