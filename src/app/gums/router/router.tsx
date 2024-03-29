import { Route, Routes } from 'react-router-dom';
//store
import {
  SelectorCheckIfElementExistsByUNID,
  SelectorGetItemData,
  SelectorGetData,
} from '../store/slectors/selectors';
import { clearItemDataAction } from '../store/actions/actions';
//pages
import { ComponentRootPage, CounterPage } from '../../../pages';
//components
import { Counter } from '../components';
//variables
import { GUMS_TEXT, GumsAppRouting } from '../variables';

const Router = (): JSX.Element => {
  return (
    <Routes>
      <Route
        index
        element={
          <ComponentRootPage
            SelectorGetComponentState={SelectorGetData}
            headerTitle={GUMS_TEXT.GUMS}
          />
        }
      />

      <Route
        path={GumsAppRouting.COUNTER.route}
        element={
          <CounterPage
            backLink={GumsAppRouting.ROOT.path}
            headerTitle={GUMS_TEXT.GUMS_COUNTER_TITLE}
            SelectorCheckIfElementExistsByUNID={SelectorCheckIfElementExistsByUNID}
            SelectorGetCurrentItemData={SelectorGetItemData}
            clearItemDataAction={clearItemDataAction}
          >
            <Counter />
          </CounterPage>
        }
      />
    </Routes>
  );
};

export default Router;
