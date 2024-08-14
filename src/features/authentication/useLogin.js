import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isPending } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.invalidateQueries(['user']);
      queryClient.setQueryData(['user'], user);
      toast.success('Logged in successfully');
      navigate('/home', { replace: true });
    },
    onError: (error) => {
      const errorMessage =
        error.response?.data?.message ||
        'Provided email or password are incorrect';
      toast.error(errorMessage);
    },
  });
  return { login, isPending };
}
