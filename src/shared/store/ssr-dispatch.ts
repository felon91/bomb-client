import type { ToolkitStore } from '@reduxjs/toolkit/src/configureStore';
import type { Any } from '@/shared/types/types';

export const ssrDispatch = (dispatch: ToolkitStore['dispatch'], endpoint: Any) =>
  // @ts-ignore Think about how to use correct type
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  dispatch(endpoint);
