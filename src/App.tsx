/* eslint-disable linebreak-style */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { AppThemeProvider } from './shared/contexts/ThemeContext';
import { LateralMenu } from './shared/components';
import { DrawerProvider } from './shared/contexts';

export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>

        <BrowserRouter>

          <LateralMenu>
            <AppRoutes />
          </LateralMenu>
          
        </BrowserRouter>

      </DrawerProvider>
    </AppThemeProvider>
  );
};
