/* eslint-disable linebreak-style */
import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { CitiesList, Dashboard } from '../pages';
import { useDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        path: '/pagina-inicial',
        label: 'Home'
      },
      {
        icon: 'location_city',
        path: '/cities',
        label: 'Cities'
      }
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashboard />} />
      <Route path="/cities" element={<CitiesList />} />
      {/*    <Route path="/cities/details/id" element={<Dashboard />} /> */}

      <Route path="*" element={<Navigate to="pagina-inicial" />} />
    </Routes>
  );
};
