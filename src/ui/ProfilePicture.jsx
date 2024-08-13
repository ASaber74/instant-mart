import useUser from '../features/authentication/useUser';

function ProfilePicture() {
  const user = useUser();

  return (
    <div className="flex items-center justify-center gap-2">
      <img
        alt="Profile"
        src="images\Ai.png"
        className="mt-1  w-8 rounded-full object-cover"
      />
      <span className="mt-1 capitalize font-semibold">{user?.user?.name}</span>
    </div>
  );
}

export default ProfilePicture;
