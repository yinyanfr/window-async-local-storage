/**
 * Retrieves an item from the local storage based on the provided key.
 *
 * @param {string} key - The key of the item to retrieve from local storage.
 * @returns {Promise<string | null>} A Promise that resolves with the retrieved item's value (as a string) if found, or null if the item is not present.
 * @example
 * const key = 'myKey';
 * getItem(key)
 *   .then((value) => {
 *     if (value !== null) {
 *       console.log(`Value for ${key}:`, value);
 *     } else {
 *       console.log(`Item with key ${key} not found.`);
 *     }
 *   })
 *   .catch((error) => {
 *     console.error('An error occurred:', error);
 *   });
 */
export function getItem(key: string): Promise<string | null> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(localStorage.getItem(key));
    }, 0);
  });
}

/**
 * Sets the value of an item in the local storage based on the provided key.
 *
 * @param {string} key - The key of the item to set in local storage.
 * @param {string} value - The value to set for the item.
 * @returns {Promise<void>} A Promise that resolves when the item is successfully set in local storage.
 * @example
 * const key = 'myKey';
 * const value = 'myValue';
 * setItem(key, value)
 *   .then(() => {
 *     console.log(`Value ${value} set for key ${key}.`);
 *   })
 *   .catch((error) => {
 *     console.error('An error occurred:', error);
 *   });
 */
export function setItem(key: string, value: string): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(localStorage.setItem(key, value));
    }, 0);
  });
}

/**
 * Removes an item from the local storage based on the provided key.
 *
 * @param {string} key - The key of the item to remove from local storage.
 * @returns {Promise<void>} A Promise that resolves when the item is successfully removed from local storage.
 * @example
 * const key = 'myKey';
 * removeItem(key)
 *   .then(() => {
 *     console.log(`Item with key ${key} removed.`);
 *   })
 *   .catch((error) => {
 *     console.error('An error occurred:', error);
 *   });
 */
export function removeItem(key: string): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(localStorage.removeItem(key));
    }, 0);
  });
}

/**
 * Clears all items from the local storage.
 *
 * @returns {Promise<void>} A Promise that resolves when all items are successfully cleared from local storage.
 * @example
 * clear()
 *   .then(() => {
 *     console.log('Local storage has been cleared.');
 *   })
 *   .catch((error) => {
 *     console.error('An error occurred:', error);
 *   });
 */
export function clear(): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(localStorage.clear());
    }, 0);
  });
}

/**
 * Merges a new value with an existing item stored in local storage based on the provided key.
 *
 * @param {string} key - The key of the item to merge with in local storage.
 * @param {string} value - The value to merge with the existing item.
 * @returns {Promise<string | null>} A Promise that resolves with the merged item's JSON string if successful, or null if merging was not possible or an error occurred.
 * @example
 * const key = 'myKey';
 * const value = '{"additionalProperty": "additionalValue"}';
 * mergeItem(key, value)
 *   .then((mergedItem) => {
 *     if (mergedItem !== null) {
 *       console.log('Item merged successfully:', mergedItem);
 *     } else {
 *       console.log('Merging was not possible or an error occurred.');
 *     }
 *   })
 *   .catch((error) => {
 *     console.error('An error occurred:', error);
 *   });
 */
export function mergeItem(key: string, value: string) {
  return new Promise(resolve => {
    getItem(key).then(item => {
      try {
        if (!item) {
          throw new Error('ITEM_NOT_FOUND');
        }
        const parsedItem = JSON.parse(item);
        const parsedValue = JSON.parse(value);
        const mergedItem =
          Array.isArray(parsedItem) && Array.isArray(parsedValue)
            ? [...parsedItem, parsedValue]
            : { ...parsedItem, ...parsedValue };
        resolve(JSON.stringify(mergedItem));
      } catch {
        resolve(null);
      }
    });
  });
}

/**
 * Retrieves an array of all keys present in the local storage.
 *
 * @returns {Promise<Array<string>>} A Promise that resolves with an array of all keys present in the local storage.
 * @example
 * getAllkeys()
 *   .then((keys) => {
 *     console.log('All keys in local storage:', keys);
 *   })
 *   .catch((error) => {
 *     console.error('An error occurred:', error);
 *   });
 */
export function getAllkeys() {
  return new Promise(resolve => {
    resolve(Object.keys(localStorage));
  });
}

/**
 * Retrieves values from local storage for multiple keys asynchronously.
 *
 * @param {Array<string>} keys - An array of keys for which values are to be retrieved from local storage.
 * @returns {Promise<Array<string | null>>} A Promise that resolves with an array of values corresponding to the provided keys. If a key has no corresponding value, the value in the array will be null.
 * @example
 * const keys = ['key1', 'key2', 'key3'];
 * multiGet(keys)
 *   .then((values) => {
 *     console.log('Values retrieved:', values);
 *   })
 *   .catch((error) => {
 *     console.error('An error occurred:', error);
 *   });
 */
export async function multiGet(keys: string[]) {
  const getters = keys.map(key => getItem(key));
  const data = await Promise.all(getters);
  return data;
}

/**
 * Sets multiple key-value pairs in local storage asynchronously.
 *
 * @param {Array<Array<string>>} keyValuePairs - An array of arrays, each containing a key-value pair to be set in local storage.
 * @returns {Promise<Array<void>>} A Promise that resolves when all key-value pairs have been successfully set in local storage.
 * @example
 * const keyValuePairs = [['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']];
 * multiSet(keyValuePairs)
 *   .then(() => {
 *     console.log('Key-value pairs set successfully.');
 *   })
 *   .catch((error) => {
 *     console.error('An error occurred:', error);
 *   });
 */
export async function multiSet(keyValuePairs: string[][]) {
  const setters = keyValuePairs.map(([key, value]) => setItem(key, value));
  const data = await Promise.all(setters);
  return data;
}

/**
 * Merges multiple key-value pairs with existing items in local storage asynchronously.
 *
 * @param {Array<Array<string>>} keyValuePairs - An array of arrays, each containing a key-value pair to be merged with the existing item in local storage.
 * @returns {Promise<Array<string | null>>} A Promise that resolves with an array of merged item JSON strings corresponding to the provided keys. If merging was not possible or an error occurred, the value in the array will be null.
 * @example
 * const keyValuePairs = [['key1', '{"additionalProperty": "value1"}'], ['key2', '{"anotherProperty": "value2"}']];
 * multiMerge(keyValuePairs)
 *   .then((mergedItems) => {
 *     console.log('Items merged successfully:', mergedItems);
 *   })
 *   .catch((error) => {
 *     console.error('An error occurred:', error);
 *   });
 */
export async function multiMerge(keyValuePairs: string[][]) {
  const mergers = keyValuePairs.map(([key, value]) => mergeItem(key, value));
  const data = await Promise.all(mergers);
  return data;
}

/**
 * Removes multiple items from local storage based on the provided keys asynchronously.
 *
 * @param {Array<string>} keys - An array of keys corresponding to items to be removed from local storage.
 * @returns {Promise<Array<void>>} A Promise that resolves when all items corresponding to the provided keys have been successfully removed from local storage.
 * @example
 * const keys = ['key1', 'key2', 'key3'];
 * multiRemove(keys)
 *   .then(() => {
 *     console.log('Items removed successfully.');
 *   })
 *   .catch((error) => {
 *     console.error('An error occurred:', error);
 *   });
 */
export async function multiRemove(keys: string[]) {
  const removers = keys.map(key => removeItem(key));
  const data = Promise.all(removers);
  return data;
}
