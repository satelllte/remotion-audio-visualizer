import {useCallback} from 'react';
import {continueRender, delayRender} from 'remotion';
import {useConst} from './useConst';

/**
 * TODO: contribute this hook to Remotion.
 * Looks like it has to be there by nature :)
 *
 * ```tsx
 * // (1) import:
 * import { useDelayRender } from 'remotion';
 *
 * // (2) usage:
 * const continueRender = useDelayRender();
 * ```
 */
export const useDelayRender = (label?: string) => {
	const handle = useConst(() => delayRender(label));
	return useCallback(() => {
		continueRender(handle);
	}, [handle]);
};
