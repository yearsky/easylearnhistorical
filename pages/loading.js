export default function Loading({ length }) {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <>
      {[...Array(length)].map((_, index) => (
        <div
          className="lg:col-span-2 xl:col-auto w-full bg-gray-200 rounded-2xl animate-pulse"
          key={index}
        >
          <div className="flex flex-col justify-between w-full h-ful py-10 px-14">
            <div className="bg-gray-300 w-16 h-16 mb-4 rounded-full"></div>
            <div className="bg-gray-300 h-6 w-4/5 mb-4 rounded"></div>
            <div className="bg-gray-300 h-6 w-1/2 rounded"></div>
          </div>
        </div>
      ))}
    </>
  );
}
