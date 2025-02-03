export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-6 sm:p-20 bg-white">
      <p className="font-geist text-3xl drop-shadow-2xl text-gray-800">
        anand munjuluri
      </p>
      
      <div className="mt-4 flex flex-col items-center gap-3">
        <p className="text-gray-500 text-lg font-light tracking-wider">
          brewing something special
        </p>
        <div className="flex gap-3 mt-2">
          <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse delay-75"></div>
          <div className="w-2 h-2 bg-gray-300 rounded-full animate-pulse delay-150"></div>
        </div>
      </div>
    </div>
  );
}