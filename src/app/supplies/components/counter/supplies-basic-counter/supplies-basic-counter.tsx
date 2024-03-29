//components
import { BasicCounter } from '../../../../../components';
//store
import { useAppDispatch, useAppSelector } from '../../../../../hooks/hooks';
import { decrementAction, incrementAction } from '../../../store/actions/actions';
import { SelectorGetItemSetting } from '../../../store/slectors/selectors';
//variables
import { SUPPLIES_TEXT, SuppliesLogsNames, SuppliesSettingsNames } from '../../../variables';

interface ISuppliesBasicCounterProps {
  UNID: string;
}

const SuppliesBasicCounter = ({ UNID }: ISuppliesBasicCounterProps): JSX.Element => {
  const gumsBasicCounterDefaultValue = useAppSelector(
    SelectorGetItemSetting(UNID, SuppliesSettingsNames.BASE_COUNTER_VALUE),
  );

  const dispatch = useAppDispatch();

  const inc = (value: number): void => {
    dispatch(incrementAction({ UNID: UNID, value: value, logName: SuppliesLogsNames.COUNTER }));
  };

  const dec = (value: number): void => {
    dispatch(decrementAction({ UNID: UNID, value: value, logName: SuppliesLogsNames.COUNTER }));
  };

  return (
    <BasicCounter
      inc={inc}
      dec={dec}
      title={SUPPLIES_TEXT.SUPPLIES_BASIC_COUNTER_INPUT_FIELD_TEXT}
      defaultValue={gumsBasicCounterDefaultValue}
    />
  );
};

export default SuppliesBasicCounter;
