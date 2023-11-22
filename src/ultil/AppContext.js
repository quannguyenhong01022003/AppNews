import {createContext, useState} from 'react';

export const AppContext = createContext(); // giúp chia sẻ dữ liệu giữa các thành phần trong ứng dụng React.

export const AppContextProvider = props => {
  // là kho chung
  const {children} = props;
  const [isLogin, setisLogin] = useState(false);
  return (
    <AppContext.Provider value={{isLogin, setisLogin}}>
      {/* những màn hình mình muốn sử dụng data ở trong kho */}
      {children}
    </AppContext.Provider>
  );
};
