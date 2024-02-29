//data types
import { CHEMISTRY_STORAGE_NAME } from '../app/chemistry/variables';
import type { IGumsData } from '../app/gums/types/data-types';
import { GUMS_STORAGE_NAME } from '../app/gums/variables/data-variables';
import type { IPigmentsData } from '../app/pigments/types/data-type';
import { PIGMENTS_STORAGE_NAME } from '../app/pigments/variables/data-variables';

//componentsList type we use in main page for show all components in overview page
interface IComponentsListDataItem {
  title: string;
  link: string;
  image: string;
}

type ComponentsListDataType = IComponentsListDataItem[];

//card type we use inside a card components
interface IItemCardData {
  UNID: string;
  name: string;
  description: string;
  itemNumber: string;
  packagingInfo: string;
  image: string;
  amount: number;
}

type ItemsCardListDataType = IItemCardData[];

//data types for apps/counters
interface ILogs {
  [key: string]: {
    log: string[];
    name: string;
  };
}

interface ISettings {
  [key: string]: {
    settingValue: number;
    name: string;
  };
}

interface IDataPackage<I> {
  dataPackageName: string;
  dataPackageUNID: number;
  items: I[];
}

interface IDataItem<L extends ILogs, S extends ISettings> {
  UNID: string;
  packageName?: string;
  amount: number;
  firm: string;
  name: string;
  itemNumber: string;
  description: string;
  image: string;
  color: string;
  logs: L;
  lastChange: string | null;
  settings: S;
  additionalResources: string[];
  packagingInfo: string;
  manufacturer: string;
}

interface IData<I> {
  [UNID: string]: I;
}

//aliases
type DataAliasType = IGumsData | IPigmentsData;

type storageNamesAliasType =
  | typeof CHEMISTRY_STORAGE_NAME
  | typeof GUMS_STORAGE_NAME
  | typeof PIGMENTS_STORAGE_NAME;

export type {
  IComponentsListDataItem,
  ComponentsListDataType,
  IItemCardData,
  ItemsCardListDataType,
  ILogs,
  DataAliasType,
  ISettings,
  IDataItem,
  IDataPackage,
  IData,
  storageNamesAliasType,
};
