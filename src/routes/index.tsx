/* eslint-disable linebreak-style */
import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { PeopleList, Dashboard } from '../pages';
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
        icon: 'people',
        path: '/people',
        label: 'People'
      }
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Dashboard />} />
      <Route path="/people" element={<PeopleList />} />
      {/*    <Route path="/cities/details/id" element={<Dashboard />} /> */}

      <Route path="*" element={<Navigate to="pagina-inicial" />} />
    </Routes>
  );
};
