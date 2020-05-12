import { useState, useCallback } from 'react';
import useSelector from 'hooks/useSelector';
import { errorSelector, loadingSelector } from 'models/user/selectors';
import useAction from 'hooks/useAction';
import { setError, setLoader } from 'models/user/reducer';

const useFetchingError = () => {
  const [action, setAction] = useState('');
  const setIsLoading = useAction(setLoader);
  const isLoading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const errorSet = useAction(setError);

  const reset = useCallback(() => {
    errorSet({
      message: '',
      idError: '',
    });
  }, [error]);

  const setErrorHandle = useCallback(
    (message, idError) => {
      errorSet({
        message,
        idError,
      });
    },
    [error]
  );

  return {
    isLoad: isLoading,
    setIsLoading,
    fetchError: error.message,
    idError: error.idError,
    resetError: reset,
    action,
    setAction,
    setErrorHandle,
  };
};

export default useFetchingError;
