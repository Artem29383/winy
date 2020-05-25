import useSelector from 'hooks/useSelector';
import { isInitSelector } from 'models/auth/selectors';
import { useEffect } from 'react';
import useAction from 'hooks/useAction';
import { checkAuthUser } from 'models/auth/reducer';

const useInit = () => {
  const isInit = useSelector(isInitSelector);
  const checkUser = useAction(checkAuthUser);
  useEffect(() => {
    if (!isInit) {
      checkUser();
    }
  }, []);
  return isInit;
};

export default useInit;
