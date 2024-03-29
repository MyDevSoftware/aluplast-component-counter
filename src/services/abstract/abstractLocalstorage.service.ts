//types
import type { IData, ILocalstorageService } from '../../types';

abstract class AbstractLocalstorageService implements ILocalstorageService {
  getItems(storageName: string): IData | Error | null {
    try {
      const jsonData: string | null = localStorage.getItem(storageName);

      if (jsonData) {
        const parsedJsonData: IData = JSON.parse(jsonData);
        return parsedJsonData;
      } else {
        return null;
      }
    } catch (err) {
      if (err instanceof Error) {
        return new Error(err.message);
      } else {
        return new Error('Failed to get data from localStorage');
      }
    }
  }

  setItems(data: IData, storageName: string): IData | Error {
    try {
      localStorage.setItem(storageName, JSON.stringify(data));
      return data;
    } catch (err) {
      if (err instanceof Error) {
        return new Error(err.message);
      } else {
        return new Error('Failed to write data to localStorage');
      }
    }
  }

  clearStore(storageName: string) {
    localStorage.removeItem(storageName);
  }
}

export default AbstractLocalstorageService;
