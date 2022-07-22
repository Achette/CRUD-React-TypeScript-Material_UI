import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ListTool } from '../../shared/components';
import { BasicPageLayout } from '../../shared/layout';
import { PessoasService } from '../../shared/services/api/pessoas/PessoasService';


export const PeopleList: React.FC = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  
  const search = useMemo(() => {
    return searchParams.get('search') || '';
  }, [searchParams]);

  useEffect(() => {

    PessoasService.getAll(1, search)
      .then((result) => {
        if(result instanceof Error) {
          alert(result.message);
        } else {
          console.log(result);
        }
      });
  }, [search]);

  return (
    <div>
      <BasicPageLayout title="List of people"
        toolBar={<ListTool 
          showInputSearch
          searchText={search}
          toggleSearchText={txt => setSearchParams({ search: txt }, { replace: true })}
        />} />
    </div>
  );
};