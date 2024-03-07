import { useParams } from 'react-router-dom';
//components
import { ShortCardWithLogs } from '../../../../components';
//store
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
import { clearItemDataAction } from '../../store/actions/actions';
//services
import gumsAdapterService from '../../services/gums-adapter.service';
import {
  SelectorCheckIfElementExistsByUNID,
  SelectorGetCurrentGum,
} from '../../store/slectors/selectors';
//types
import type { IGumsItem } from '../../types';
import type { IItemDataToDisplay } from '../../../../types';

const CountableItemInfo = (): JSX.Element => {
  const { UNID } = useParams();

  const itemFromUnidIsset = useAppSelector(SelectorCheckIfElementExistsByUNID(UNID));
  const item: IGumsItem | undefined =
    UNID && itemFromUnidIsset ? useAppSelector(SelectorGetCurrentGum(UNID)) : undefined;

  const dispatch = useAppDispatch();

  let convertedItem: IItemDataToDisplay | undefined;

  if (item !== undefined && item) {
    convertedItem = gumsAdapterService.adaptItemDataToDisplay(item);
  } else {
    convertedItem = undefined;
  }

  const clearDataHandler = () => {
    if (item) {
      dispatch(clearItemDataAction({ item: item }));
    }
  };

  return (
    <ShortCardWithLogs
      item={convertedItem}
      itemLogs={item?.logs}
      clearDataHandler={clearDataHandler}
    />
  );
};

export default CountableItemInfo;