import { Search } from "@/components/Icon/DefaultIcons";

export default function SearchUsers() {
  return (
    <>
      <label className="relative mb-5 flex w-full cursor-text items-center py-2">
        <input
          className="peer block w-full rounded-xl py-2 pl-9 pr-3 text-sm text-neutral-400 outline-none sm:text-sm"
          type="text"
          name="search"
          required
          autoComplete="off"
        />
        <Search className="absolute ml-2 h-5 w-5 text-neutral-400 dark:text-neutral-600" />
        <span className="absolute ml-10 font-quicksand text-sm text-neutral-400 peer-valid:hidden dark:text-neutral-600">
          Search for anything...
        </span>
      </label>
    </>
  );
}
