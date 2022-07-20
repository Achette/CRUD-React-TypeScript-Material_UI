/* eslint-disable linebreak-style */
import { Button } from '@mui/material';
import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAppThemeContext, useDrawerContext } from '../shared/contexts';

export const AppRoutes = () => {
  const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        icon: 'home',
        path: '/pagina-inicial',
        label: 'Home'
      },
      {
        icon: 'star',
        path: '/cidades',
        label: 'Cities'
      }
    ]);
  }, []);

  return (
    <Routes>
      <Route
        path="/pagina-inicial"
        element={
          <Button variant="contained" color="primary" onClick={toggleDrawerOpen}>
            Toggle Drawer
          </Button>
        }
      />

      <Route path="*" element={<Navigate to="pagina-inicial" />} />
    </Routes>
  );
};
