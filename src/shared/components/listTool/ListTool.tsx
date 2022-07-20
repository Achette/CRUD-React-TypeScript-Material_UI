import { Box, Button, Icon, Paper, TextField, useTheme } from '@mui/material';

type IListToolProps = {
    searchText?: string;
    showInputSearch?: boolean;
    toggleSearchText?: (newText: string) => void;
    buttonNew?: string;
    showButton?: boolean;
    onClickButton?: () => void;
}

export const ListTool = ({ 
  searchText = '', 
  showInputSearch = false, 
  toggleSearchText, 
  buttonNew = 'New', 
  showButton = true, 
  onClickButton }: IListToolProps) => {

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
      {showInputSearch && (
        <TextField 
          size="small" 
          placeholder='Search...' 
          value={searchText} 
          onChange={(e) => toggleSearchText?.(e.target.value)}
        />
      )}

      <Box flex={1} display="flex" justifyContent="end">
        {showButton && (
          <Button 
            variant="contained" 
            disableElevation 
            color="primary" 
            endIcon={<Icon>add</Icon>}
            onClick={onClickButton}
          >{buttonNew}</Button>
        )}
      </Box>
    </Box>
  );
};