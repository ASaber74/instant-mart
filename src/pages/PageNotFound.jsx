import { useMoveBack } from '../hooks/useMoveBack';

function PageNotFound() {
  const moveBack = useMoveBack();
  return (
    <main className=" flex h-screen items-center justify-center bg-gray-50 p-12">
      <div className=" bg-gray-0 w-96- flex-none rounded-md border border-gray-100 px-12 text-center text-2xl">
        <h1 className="">The page you are looking for could not be found </h1>
      </div>
      <button
        className="text-sm text-blue-500 hover:text-blue-600"
        onClick={moveBack}
      >
        &larr; Go back
      </button>
    </main>
  );
}

export default PageNotFound;
