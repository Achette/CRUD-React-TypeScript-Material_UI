import { Box, Button, Divider, Icon, Paper, useTheme } from '@mui/material';



export const DetailTools = () => {

  const theme = useTheme();

  return (
    <Box
      height={theme.spacing(5)} 
      marginX={1} 
      paddingX={2} 
      padding={1} 
      display="flex" 
      gap={1} 
      alignItems="center" 
      component={Paper}
    >
      <Button 
        variant="contained" 
        disableElevation 
        color="primary" 
        startIcon={<Icon>save</Icon>}
      >Save</Button>

      <Button 
        variant="outlined" 
        disableElevation 
        color="primary" 
        startIcon={<Icon>save</Icon>}
      >Save and go back</Button>

      <Button 
        variant="outlined" 
        disableElevation 
        color="primary" 
        startIcon={<Icon>delete</Icon>}
      >Delete</Button>

      <Button 
        variant="outlined" 
        disableElevation 
        color="primary" 
        startIcon={<Icon>add</Icon>}
      >New</Button>

      <Divider variant="middle" orientation="vertical"/>

      <Button 
        variant="outlined" 
        disableElevation 
        color="primary" 
        startIcon={<Icon>arrow_back</Icon>}
      >Go back</Button>    

    </Box>
  );
};