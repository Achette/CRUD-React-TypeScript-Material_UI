import { Box, Button, Icon, Paper, TextField, useTheme } from '@mui/material';
import { Enviroment } from '../../environment';

type IListToolProps = {
    searchText?: string;
    showInputSearch?: boolean;
    toggleSearchText?: (newText: string) => void;
    buttonTxt?: string;
    showButton?: boolean;
    onClickButton?: () => void;
}

export const ListTool = ({ 
  searchText = '', 
  showInputSearch = false, 
  toggleSearchText, 
  buttonTxt = 'New', 
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
          placeholder={Enviroment.INPUT_DE_BUSCA}
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
          >{buttonTxt}</Button>
        )}
      </Box>
    </Box>
  );
};