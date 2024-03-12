import { useMutation } from '@tanstack/react-query';
import { signup as signupApi } from '../../services/apiAuth';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useSignup() {
  const navigate = useNavigate();
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      toast.success('Account successfully created!');
      navigate('/login');
    },
    onError: (err) => {
      toast.error('Provided email or password are incorrect');
    },
  });
  return { signup, isPending };
}
