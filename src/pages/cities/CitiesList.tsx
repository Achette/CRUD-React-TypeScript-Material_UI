import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ListTool } from '../../shared/components';
import { BasicPageLayout } from '../../shared/layout';


export const CitiesList: React.FC = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  
  const search = useMemo(() => {
    return searchParams.get('search') || '';
  }, [searchParams]);

  return (
    <div>
      <BasicPageLayout title="List of cities"
        toolBar={<ListTool 
          showInputSearch
          searchText={search}
          toggleSearchText={txt => setSearchParams({ search: txt }, { replace: true })}
        />} />
    </div>
  );
};