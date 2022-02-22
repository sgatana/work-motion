import { useEffect, useState } from 'react';
import { Employee } from '../interfaces/exployee';

export const useFetchData = (action: () => Employee[], refresh: Boolean) => {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [data, setData] = useState<Employee[]>([]);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setData([])
      try {
        const result = await action();
        console.log({result})
        setData(result);
        setIsLoading(false);
      } catch (ex: any) {
        console.log({ex})
        setIsLoading(false);
        setError(ex);
      }
    };
    fetchData()
  }, [action, refresh]);

  return [isLoading, data, error];
};
