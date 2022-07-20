import { Toolbar } from '../../shared/components';
import { BasicPageLayout } from '../../shared/layout';




export const Dashboard = () => {


  return (
    <BasicPageLayout title='Homepage' toolBar={(
      <Toolbar
        showInputSearch
      />
    )}>
        Testando
    </BasicPageLayout>
  );
};