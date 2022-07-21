import { DetailTools, ListTool } from '../../shared/components';
import { BasicPageLayout } from '../../shared/layout';




export const Dashboard = () => {


  return (
    <BasicPageLayout title='Homepage' toolBar={(
      <DetailTools  />
    )}>
        Testando
    </BasicPageLayout>
  );
};