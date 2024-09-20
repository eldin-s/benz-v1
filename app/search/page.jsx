import ListingCard from "@/components/search/listing-card";
import SearchingCard from "@/components/search/searching-card";

const Search = () => {
  return (
    <section className="mt-12 max-w-[70rem] mx-auto relative p-8 space-y-10">
      <div className="bg-gray-300 rounded-3xl search-bg mb-16">
        <h2 className="text-black w-2/3 px-16 py-12">
          Zakažite vaš servis bez čekanja!
        </h2>
      </div>

      <SearchingCard />
      <ListingCard />
    </section>
  );
};

export default Search;
