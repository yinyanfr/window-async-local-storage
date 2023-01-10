export function getItem(key: string): Promise<string | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(localStorage.getItem(key));
    }, 0);
  });
}

export function setItem(key: string, value: string): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.setItem(key, value);
      resolve();
    }, 0);
  });
}

export function removeItem(key: string): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.removeItem(key);
      resolve();
    }, 0);
  });
}

export function clear(): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      localStorage.clear();
      resolve();
    }, 0);
  });
}
