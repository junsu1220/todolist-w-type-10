type StorageKey = 'access_token';

export const storage = {
  get: (key: StorageKey): string | null => localStorage.getItem(key),
  set: (key: StorageKey, value: string): void =>
    localStorage.setItem(key, value),
  remove: (key: StorageKey): void => localStorage.removeItem(key),
};
