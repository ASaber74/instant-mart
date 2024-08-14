import { useQuery } from '@tanstack/react-query';
import { getBooks } from '../../services/apiBooks';

export function useBooks() {

  const { isLoading, data: books } = useQuery({
    queryKey: ['books'],
    queryFn: getBooks,
    staleTime: 60000,
    cacheTime: 300000,
    onError: (error) => {
      console.error('Error fetching books:', error);
    },
  });

  return { isLoading, books };
}

export default useBooks;
