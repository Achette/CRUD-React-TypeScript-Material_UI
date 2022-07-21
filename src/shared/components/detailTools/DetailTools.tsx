import { Box, Button, Divider, Icon, Paper, useTheme } from '@mui/material';

type IDetailToolsProps = {
  buttonTextNew?: string;
  showButtonNew?: boolean;
  showButtonDelete?: boolean;
  showButtonBack?: boolean;
  showButtonSave?: boolean;
  showButtonSaveAndClose?: boolean;

  onClickNew?: () => void;
  onClickBack?: () => void;
  onClickDelete?: () => void;
  onClickSave?: () => void;
  onClickSaveAndClose?: () => void;
}

export const DetailTools = ({ 
  buttonTextNew = 'NEW', 
  showButtonNew = true,
  showButtonBack = true,
  showButtonDelete = true,
  showButtonSave = true,
  showButtonSaveAndClose = false,

  onClickNew,
  onClickBack,
  onClickDelete,
  onClickSave,
  onClickSaveAndClose,
}: IDetailToolsProps) => {

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
      {showButtonSave && (
        <Button 
          variant="contained" 
          disableElevation 
          color="primary" 
          onClick={onClickSave}
          startIcon={<Icon>save</Icon>}
        >Save</Button>
      )}

      {showButtonSaveAndClose && (
        <Button 
          variant="outlined" 
          disableElevation 
          color="primary" 
          onClick={onClickSaveAndClose}
          startIcon={<Icon>save</Icon>}
        >Save and go back</Button>
      )}

      {showButtonDelete && (
        <Button 
          variant="outlined" 
          disableElevation 
          color="primary" 
          onClick={onClickDelete}
          startIcon={<Icon>delete</Icon>}
        >Delete</Button>
      )}

      {showButtonNew && (
        <Button 
          variant="outlined" 
          disableElevation 
          color="primary" 
          onClick={onClickNew}
          startIcon={<Icon>add</Icon>}
        >{buttonTextNew}</Button>
      )}

      <Divider variant="middle" orientation="vertical"/>

      {showButtonBack && (
        <Button 
          variant="outlined" 
          disableElevation 
          color="primary" 
          onClick={onClickBack}
          startIcon={<Icon>arrow_back</Icon>}
        >Back</Button> 
      )}   

    </Box>
  );
};