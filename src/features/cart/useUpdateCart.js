import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addToCart } from '../../services/apiCart';

export default function useUpdateCart() {
  const queryClient = useQueryClient();
  const { isPending: isLoading, mutateAsync: updateCart } = useMutation({
    mutationFn: addToCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });

  return { isLoading, updateCart };
}
