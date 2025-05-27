import ListingCard from "@/components/search/listing-card";
import SearchingCard from "@/components/search/searching-card";
import { getAllListingNames } from "@/libs/actions/listingnames";

const Search = async ({searchParams}) => {
  const listingNames = await getAllListingNames();

  return (
    <section className="mt-12 max-w-[70rem] mx-auto relative p-8 space-y-10 mb-8">
      <div className="bg-gray-300 rounded-3xl search-bg mb-16">
        <h2 className="text-black md:w-2/3 w-full md:px-16 md:py-12 p-8">
          Zakažite vaš servis bez čekanja!
        </h2>
      </div>

      <SearchingCard searchParams={searchParams} listingNames={listingNames} />
      <ListingCard />
    </section>
  );
};

export default Search;
