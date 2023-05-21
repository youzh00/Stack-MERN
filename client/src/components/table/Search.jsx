import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
export default function Search({ setFilterValue, inputValue }) {
  return (
    <div>
      <div className="relative  rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          type="text"
          name="name"
          id="name"
          value={inputValue() ?? ""}
          onChange={(event) => setFilterValue(event.target.value)}
          className="block w-full rounded-md border-gray-300 pl-10 focus:border-gray-600 focus:ring-gray-600 sm:text-sm"
          placeholder="Search artists"
        />
      </div>
    </div>
  );
}
