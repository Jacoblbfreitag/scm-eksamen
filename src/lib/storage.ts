// localStorage can be missing or throw (private mode, some test environments). Never let it crash the app.
export function load<T>(key: string, fallback: T): T {
  try {
    const s = globalThis.localStorage?.getItem(key);
    return s ? (JSON.parse(s) as T) : fallback;
  } catch {
    return fallback;
  }
}
export function save(key: string, value: unknown) {
  try {
    globalThis.localStorage?.setItem(key, JSON.stringify(value));
  } catch {
    /* ignore */
  }
}
