export default function PromptCreater() {
  return (
    <div className="max-w-xl lg:max-w-3xl md:pl-5 z-30 relative pt-2 md:pt-4 lg:pt-10 flex flex-col gap-3">
      <h2 className="mx-auto font-inika text-xl md:text-3xl  lg:text-[43px] py-1 md:py-2 lg:py-4 lg:pb-6 font-bold text-primary">
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
            className="block outline-none w-full rounded-full p-4 md:p-5 lg:p-8 ps-5 text-sm lg:text-2xl text-gray-900 bg-lightGray focus:ring-teal-200 focus:ring-2 "
            placeholder="Create An Image..."
            required
          />
          <button
            type="submit"
            className="text-gray-800 font-inika rounded-full absolute end-2.5 bottom-1 lg:bottom-3 bg-lightGreen hover:bg-teal-300 focus:ring-4 focus:outline-none focus:ring-blue-300 md:text-lg lg:text-2xl font-semibold px-3 py-2 md:px-5 lg:px-10 md:py-3 lg:py-5"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
