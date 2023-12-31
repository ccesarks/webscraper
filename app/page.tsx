import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";

function HomePage() {
  return (
        <div className="flex flex-col items-center justify-center">
            <DocumentMagnifyingGlassIcon className="h-64 w-64 text-indigo-600/20" />

            <h1 className="text-3xl text-center mt-2 text-black font-bold mb-5">Welcome to the Caio's Web Scraper</h1>

            <h2 className="text-lg italic text-center text-black/50">"Check, compare and conquer the best prices!"</h2>

            <h3 className="text-lg text-center italic text-black/50">http://localhost:3000/</h3>
        </div>
  )
}

export default HomePage