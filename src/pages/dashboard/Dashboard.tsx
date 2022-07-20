import { ListTool } from '../../shared/components';
import { BasicPageLayout } from '../../shared/layout';




export const Dashboard = () => {


  return (
    <BasicPageLayout title='Homepage' toolBar={(
      <ListTool
        showInputSearch
      />
    )}>
        Testando
    </BasicPageLayout>
  );
};