//components
import ComponentsListItem from './components-list-item/components-list-item';
//types
import { ComponentsDataListType } from '../../types';
//styles
import style from './components-list.module.scss';

interface IComponentsListProps {
  dataList: ComponentsDataListType;
}

const ComponentsList = ({ dataList }: IComponentsListProps): JSX.Element => {
  return (
    <ul className={style['components-list']}>
      {dataList.map((item, i) => {
        return <ComponentsListItem item={item} key={item.title + i} />;
      })}
    </ul>
  );
};

export default ComponentsList;
