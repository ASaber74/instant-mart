import Button from '../ui/Button';

function Account() {
  return (
    <div className="max-container my-8 w-2/3 ">
      <div className="border-b border-grey-3 pb-5">
        <h1 className="text-3xl font-semibold text-grey-6">Account</h1>
        <p className="mt-1 text-grey-5">
          Real-time information and activities of your property.
        </p>
      </div>
      
      <div className="flex flex-col gap-4 border-b border-grey-3 pb-8">
        <div className="flex items-center justify-between my-8">
          <div className="flex items-center justify-center gap-6">
            <img
              className="w-24  rounded-full"
              src="images/Ai.png"
              alt="profilePic"
            />
            <div>
              <p className="text-xl font-bold">Profile Picture</p>
              <p className="text-grey-4">PNG, JPEG under 15MB</p>
            </div>
          </div>
          <Button type={'primary'}>Upload New picture</Button>
        </div>

        <div>
          <p className='text-xl font-semibold mb-2'>Full Name</p>
          <div className="flex gap-4">
            <input className='input w-1/2' placeholder="First name" />
            <input className='input w-1/2' placeholder="Last name" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 border-b border-grey-3 py-3 pb-8 my-8">
        <div>
          <p className='text-xl font-semibold mb-2'>Contact email</p>
          <p className="text-grey-4 mb-2">Manage your account's email address for the invoices.</p>
          <div className="flex items-center gap-4">
            <input className='input flex-grow' placeholder="Email" />
            <Button type={'secondary'}>Add another email</Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 py-3">
        <div>
          <p className='text-xl font-semibold mb-2'>Password</p>
          <p className="text-grey-4 mb-2">Modify your current password.</p>
          <div className="flex gap-4">
            <div className="w-1/2">
              <p className="text-grey-5 mb-1">Current password</p>
              <input type="password" className='input w-full' />
            </div>
            <div className="w-1/2">
              <p className="text-grey-5 mb-1">New password</p>
              <input type="password" className='input w-full' />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Button type={'primary'}>Save changes</Button>
      </div>
    </div>
  );
}

export default Account;