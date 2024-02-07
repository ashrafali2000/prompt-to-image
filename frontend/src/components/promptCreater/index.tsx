export default function PromptCreater() {
  return (
    <div className="max-w-lg pl-5 z-30 relative">
      <h2 className="text-xl md:text-2xl py-4 font-semibold text-white">
        Hello da Vinci,Start Creating Now!
      </h2>
      <form>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only "
        >
          Create
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
          <input
            type="search"
            id="default-search"
            className="block outline-none w-full rounded-3xl p-4 ps-5 text-sm text-gray-900 bg-gray-100 focus:ring-teal-200 focus:ring-2 "
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            type="submit"
            className="text-gray-800 rounded-3xl absolute end-2.5 bottom-2.5 bg-teal-200 hover:bg-teal-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
