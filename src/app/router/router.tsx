import { Route, Routes, BrowserRouter } from 'react-router-dom';
//pages
import * as Pages from '../../pages';
//aps
import ChemistryApp from '../chemistry/app';
import GumsApp from '../gums/app';
import PigmentsApp from '../pigments/app';
import SuppliesApp from '../supplies/app';
//variables
import { AppRouting, rootBaseName, ComponentsRouting } from '../../variables';

const Router = (): JSX.Element => {
  return (
    <BrowserRouter basename={rootBaseName}>
      <Routes>
        <Route index element={<Pages.MainPage />} />
        <Route path={AppRouting.INFORMATION.route} element={<Pages.InfoPage />} />
        <Route path={AppRouting.SETTINGS.route} element={<Pages.SettingsPage />} />
        <Route
          path={AppRouting.COMPONENTS_OVERVIEW.route}
          element={<Pages.ComponentOverviewPage />}
        />

        <Route path={`${ComponentsRouting.CHEMISTRY.route}/*`} element={<ChemistryApp />} />
        <Route path={`${ComponentsRouting.GUMS.route}/*`} element={<GumsApp />} />
        <Route path={`${ComponentsRouting.PIGMENTS.route}/*`} element={<PigmentsApp />} />
        <Route path={`${ComponentsRouting.SUPPLIES.route}/*`} element={<SuppliesApp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
