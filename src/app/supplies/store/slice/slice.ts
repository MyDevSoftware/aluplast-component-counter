import { createSlice, PayloadAction } from '@reduxjs/toolkit';
//variables
import { SuppliesLogsNames, SuppliesSettingsNames } from '../../variables/';
//state
import gumsState from '../state/state';
//types
import type {
  IChangeItemSettingActionPayload,
  IClearItemActionPayload,
  IData,
  IIncDecActionPayload,
  ILogActionPayload,
} from '../../../../types';

export const suppliesSlice = createSlice({
  name: 'supplies',
  initialState: gumsState,

  reducers: {
    increment: (state, action: PayloadAction<IIncDecActionPayload<SuppliesLogsNames>>) => {
      const { UNID, value } = action.payload;
      state[UNID].amount = state[UNID].amount + value;
    },
    decrement: (state, action: PayloadAction<IIncDecActionPayload<SuppliesLogsNames>>) => {
      const { UNID, value } = action.payload;
      state[UNID].amount = state[UNID].amount - value;
    },
    log: (state, action: PayloadAction<ILogActionPayload<SuppliesLogsNames>>) => {
      const { UNID, logName, log } = action.payload;
      state[UNID].logs[logName].log.push(log);
      state[UNID].logs[logName].lastChange = new Date().getTime().toString();
    },
    clearItem: (state, action: PayloadAction<IClearItemActionPayload>) => {
      const { UNID } = action.payload.item;
      state[UNID] = action.payload.item;
    },
    clearData: (state, action: PayloadAction<IData>) => {
      return action.payload;
    },
    changeItemSetting: (
      state,
      action: PayloadAction<IChangeItemSettingActionPayload<SuppliesSettingsNames>>,
    ) => {
      const { UNID, settingName, newSettingValue } = action.payload;
      state[UNID].settings[settingName].settingValue = newSettingValue;
    },
  },
});

export const { increment, decrement, log, clearItem, clearData, changeItemSetting } =
  suppliesSlice.actions;

export default suppliesSlice.reducer;
