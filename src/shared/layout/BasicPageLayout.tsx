import { Icon, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { useDrawerContext } from '../contexts';

type IBasicPageLayout = {
    children: React.ReactNode;
    title: string;

}

export const BasicPageLayout = ({ children, title }: IBasicPageLayout) => {

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { toggleDrawerOpen } = useDrawerContext();

    
  return (
    <Box height="100%" display="flex" flexDirection="column" gap={1}>
      <Box display="flex" alignItems="center" padding={1} height={theme.spacing(12)} gap={1}>

        {smDown && (
          <IconButton onClick={toggleDrawerOpen}>
            <Icon>menu</Icon>
          </IconButton>)}

        <Typography variant="h5">
          { title }
        </Typography>
      </Box>

      <Box>
        Barra de ferramentas
      </Box>

      <Box>
        { children }
      </Box>

    </Box>
  );
};