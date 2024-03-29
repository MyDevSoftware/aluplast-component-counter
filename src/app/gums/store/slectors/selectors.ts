//variables
import { GumsSettingsNames } from '../../variables';
//types
import type { IData, IItemData, RootState } from '../../../../types';

export const SelectorGetData =
  () =>
  (state: RootState): IData => {
    return state.gums;
  };

export const SelectorGetItemData =
  (UNID: string) =>
  (state: RootState): IItemData =>
    state.gums[UNID];

export const SelectorGetItemSetting =
  (UNID: string, settingName: GumsSettingsNames) =>
  (state: RootState): number =>
    state.gums[UNID].settings[settingName].settingValue;

export const SelectorCheckIfElementExistsByUNID =
  (UNID: string | undefined) =>
  (state: RootState): boolean => {
    let result = false;
    if (!UNID) {
      result = false;
    } else {
      if (!state.gums[UNID]) {
        result = false;
      } else {
        result = true;
      }
    }
    return result;
  };
