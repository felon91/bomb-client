import { get } from 'react-hook-form';

export const getErrorForm = <T>(
  obj: Record<string, unknown>,
  path: string,
  defaultValue?: unknown
): T | undefined => get(obj, path, defaultValue) as T | undefined;
