import useUser from '../features/authentication/useUser';

function ProfilePicture() {
  const user = useUser();

  return (
    <div className="flex items-center justify-center gap-2">
      <img
        alt="Profile"
        src="src\data\images\Ai.png"
        className="mt-1  w-8 rounded-full object-cover"
      />
      <p className="mt-1"></p>
    </div>
  );
}

export default ProfilePicture;
