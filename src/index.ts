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
      resolve(localStorage.setItem(key, value));
    }, 0);
  });
}

export function removeItem(key: string): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(localStorage.removeItem(key));
    }, 0);
  });
}

export function clear(): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(localStorage.clear());
    }, 0);
  });
}
