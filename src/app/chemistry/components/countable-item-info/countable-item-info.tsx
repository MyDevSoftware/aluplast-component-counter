import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../../hooks/hooks';
//services
import chemistryAdapterService from '../../services/chemistry-adapter.service';
//store
import { clearItemDataAction } from '../../store/actions/actions';
import {
  SelectorCheckIfElementExistsByUNID,
  SelectorGetCurrentChemistry,
} from '../../store/slectors/selectors';
//variables
import { ChemistryPackagesNames } from '../../variables/data-variables';
//components
import { ItemCardShortSkeleton, ShortCardWithLogs } from '../../../../components/cards';
//types
import type { IItemCardData } from '../../../../types';
import type { IChemistryItem } from '../../types/data-types';

interface ICountableItemInfoProps {
  packageName: ChemistryPackagesNames;
}

const CountableItemInfo = ({ packageName }: ICountableItemInfoProps): JSX.Element => {
  const { UNID } = useParams();
  const itemFromUnidIsset = useAppSelector(SelectorCheckIfElementExistsByUNID(UNID, packageName));
  const item: IChemistryItem | null =
    UNID && itemFromUnidIsset
      ? useAppSelector(SelectorGetCurrentChemistry(UNID, packageName))
      : null;

  const dispatch = useAppDispatch();

  let convertedItem: IItemCardData | undefined;

  if (item !== undefined && item) {
    convertedItem = chemistryAdapterService.adaptItemDataToCard(item);
  } else {
    convertedItem = undefined;
  }

  const clearDataHandler = () => {
    if (item) {
      dispatch(clearItemDataAction({ item: item, packageName: item.packageName }));
    }
  };

  return (
    <>
      {convertedItem && !!item ? (
        <ShortCardWithLogs
          item={convertedItem}
          itemLogs={item.logs}
          clearDataHandler={clearDataHandler}
        />
      ) : (
        <ItemCardShortSkeleton />
      )}
    </>
  );
};

export default CountableItemInfo;
