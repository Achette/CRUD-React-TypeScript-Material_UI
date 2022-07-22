import { Box, Button, Divider, Icon, Paper, Skeleton, Typography, useMediaQuery, useTheme } from '@mui/material';

type IDetailToolsProps = {
  buttonTextNew?: string;
  showButtonNew?: boolean;
  showButtonDelete?: boolean;
  showButtonBack?: boolean;
  showButtonSave?: boolean;
  showButtonSaveAndClose?: boolean;

  showButtonNewLoading?: boolean;
  showButtonDeleteLoading?: boolean;
  showButtonBackLoading?: boolean;
  showButtonSaveLoading?: boolean;
  showButtonSaveAndCloseLoading?: boolean;

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

  showButtonNewLoading = false,
  showButtonBackLoading = false,
  showButtonDeleteLoading = false,
  showButtonSaveLoading = false,
  showButtonSaveAndCloseLoading = false,

  onClickNew,
  onClickBack,
  onClickDelete,
  onClickSave,
  onClickSaveAndClose,
}: IDetailToolsProps) => {

  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const mdDown = useMediaQuery(theme.breakpoints.down('md'));

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
      {(showButtonSave && !showButtonSaveLoading) && (
        <Button 
          variant="contained" 
          disableElevation 
          color="primary" 
          onClick={onClickSave}
          startIcon={<Icon>save</Icon>}
        >
          <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>
            Save
          </Typography>
        </Button>
      )}

      {showButtonSaveLoading && (<Skeleton width={110} height={60}/>)}

      {(showButtonSaveAndClose && !showButtonSaveAndCloseLoading && !smDown && !mdDown) && (
        <Button 
          variant="outlined" 
          disableElevation 
          color="primary" 
          onClick={onClickSaveAndClose}
          startIcon={<Icon>save</Icon>}
        >
          <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>
            Save and Close
          </Typography>
        </Button>
      )}

      {(showButtonSaveAndCloseLoading && !smDown && !mdDown) && (<Skeleton width={180} height={60}/>)}

      {(showButtonDelete && !showButtonDeleteLoading) && (
        <Button 
          variant="outlined" 
          disableElevation 
          color="primary" 
          onClick={onClickDelete}
          startIcon={<Icon>delete</Icon>}
        >
          <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>
            Delete
          </Typography>
        </Button>
      )}

      {showButtonDeleteLoading && (<Skeleton width={110} height={60}/>)}

      {(showButtonNew && !showButtonNewLoading && !smDown) && (
        <Button 
          variant="outlined" 
          disableElevation 
          color="primary" 
          onClick={onClickNew}
          startIcon={<Icon>add</Icon>}
        >
          <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>
            {buttonTextNew}
          </Typography>
        </Button>
      )}

      {(showButtonNewLoading && !smDown) && (<Skeleton width={110} height={60}/>)}

      <Divider variant="middle" orientation="vertical"/>

      {(showButtonBack && !showButtonBackLoading) && (
        <Button 
          variant="outlined" 
          disableElevation 
          color="primary" 
          onClick={onClickBack}
          startIcon={<Icon>arrow_back</Icon>}
        >
          <Typography variant='button' whiteSpace='nowrap' textOverflow='ellipsis' overflow='hidden'>
            Back
          </Typography>
        </Button> 
      )}

      {showButtonBackLoading && (<Skeleton width={110} height={60}/>)}

    </Box>
  );
};