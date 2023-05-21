import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";

export default function Pagination({
  previousPage,
  disabledPrevious,
  nextPage,
  disabledNext,
  pageCount,
  setPageIndex,
}) {
  return (
    <nav className="flex h-[64px] items-center gap-32   bg-uiGray sm:px-0">
      {/* Previous page */}
      <div>
        <button
          onClick={previousPage}
          disabled={disabledPrevious}
          className={
            disabledPrevious
              ? " ml-4 flex items-center text-sm font-medium text-gray-400 "
              : " ml-4 flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
          }
        >
          Previous page
        </button>
      </div>
      {/* Page numbers */}
      <div className="flex items-center justify-center gap-3  md:-mt-px md:flex">
        {Array.from({ length: pageCount }, (_, i) => (
          <button
            key={i}
            onClick={() => setPageIndex(i)}
            className="flex h-[30px] w-[30px] items-center  justify-center rounded-full  bg-pgNumberBg  text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            {i + 1}
          </button>
        ))}

        {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
      </div>
      {/* Next page */}
      <div>
        <button
          onClick={nextPage}
          disabled={disabledNext}
          className={
            disabledNext
              ? " mr-4 flex items-center text-sm font-medium text-gray-400 "
              : " mr-4 flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
          }
        >
          Next page
        </button>
      </div>
    </nav>
  );
}
