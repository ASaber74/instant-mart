import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { removeFromCart } from '../../services/apiCart';

export default function useRemoveFromCart() {
  const queryClient = useQueryClient();
  const { isPending: isLoading, mutateAsync: removeCart } = useMutation({
    mutationFn: removeFromCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });

  return { isLoading, removeCart };
}
