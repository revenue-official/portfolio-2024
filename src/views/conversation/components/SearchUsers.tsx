import { Search } from "@/components/Icon/DefaultIcons";

export default function SearchUsers() {
    return (
        <>
            <label className="relative block w-full py-2 mb-5 cursor-text">
                <div className="absolute inset-y-0 left-0 flex items-center gap-2 pl-2">
                    <Search className="w-5 h-5 text-neutral-400 dark:text-neutral-600" />
                    <span className="text-sm font-quicksand text-neutral-400 dark:text-neutral-600">Search for anything...</span>
                </div>
                <input className="block w-full py-2 pr-3 text-sm outline-none rounded-xl pl-9 sm:text-sm" type="text" name="search" required />
            </label>
        </>
    );
}