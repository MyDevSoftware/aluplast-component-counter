//store
import { clearDataAction as clearDataActionChemistry } from '../../../app/chemistry/store/actions/actions';
import { clearDataAction as clearDataActionGums } from '../../../app/gums/store/actions/actions';
import { clearDataAction as clearDataActionPigments } from '../../../app/pigments/store/actions/actions';
import { clearDataAction as clearDataActionSupplies } from '../../../app/supplies/store/actions/actions';
import { useAppDispatch } from '../../../hooks/hooks';
//components
import { ButtonDeleteWithConfirm } from '../../buttons';
//variables
import { CounterText, InterfaceText } from '../../../variables';
//styles
import style from './counters-setting.module.scss';

const CountersSetting = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const onClearAppsDataClickHandler = () => {
    console.log('clear');
    dispatch(clearDataActionChemistry());
    dispatch(clearDataActionGums());
    dispatch(clearDataActionPigments());
    dispatch(clearDataActionSupplies());
  };

  return (
    <section className={style['components-setting']}>
      <h2 className="content-primary-a heading-x-small">{CounterText.COUNTERS_SETTING}</h2>

      <div className={style['components-setting__controll-field']}>
        <p className="label-medium content-primary-a">{CounterText.CLEAR_ALL_COUNTERS_DATA}</p>
        <ButtonDeleteWithConfirm
          clickHandler={onClearAppsDataClickHandler}
          text={InterfaceText.DELETE}
          modalTitle={CounterText.CLEAR_ALL_COUNTERS_DATA_CONFIRM}
        />
      </div>
    </section>
  );
};

export default CountersSetting;
