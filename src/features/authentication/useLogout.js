import { useMutation, useQueryClient } from '@tanstack/react-query';
import { logout as logoutApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      console.log('Logout successful');
      queryClient.removeQueries(['user']);
      navigate('/login', { replace: true });
    },
    onError: (error) => {
      console.error('Logout Error:', error);
    },
  });

  return { logout, isPending };
}
