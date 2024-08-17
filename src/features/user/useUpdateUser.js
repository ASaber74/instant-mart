import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUser } from '../../services/apiUser';

export default function useUpdateUser() {
  const queryClient = useQueryClient();

  const {
    mutateAsync: updateProfile,
    isPending: isUpdating,
    data: updateResponse,
  } = useMutation({
    mutationFn: updateUser,
    onSuccess: () => {
      queryClient.invalidateQueries(['userProfile']);
    },
  });

  return { updateProfile, isUpdating, updateResponse };
}
