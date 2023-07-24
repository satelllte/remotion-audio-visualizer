import {useRef} from 'react';

/**
 * Similar to: https://chakra-ui.com/docs/hooks/use-const
 */
export const useConst = <T>(initFn: () => T): T => {
  const ref = useRef<T>();
  if (ref.current === undefined) {
    ref.current = initFn();
  }

  return ref.current;
};
