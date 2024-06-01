import { Search } from '@/components/Icon/DefaultIcons';

export default function SearchUsers() {
  return (
    <>
      <label className="relative mb-5 block w-full cursor-text py-2">
        <div className="absolute inset-y-0 left-0 flex items-center gap-2 pl-2">
          <Search className="h-5 w-5 text-neutral-400 dark:text-neutral-600" />
          <span className="font-quicksand text-sm text-neutral-400 dark:text-neutral-600">
            Search for anything...
          </span>
        </div>
        <input
          className="block w-full rounded-xl py-2 pl-9 pr-3 text-sm outline-none sm:text-sm"
          type="text"
          name="search"
          required
        />
      </label>
    </>
  );
}
