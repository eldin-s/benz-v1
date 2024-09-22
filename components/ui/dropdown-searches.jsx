"use client";

const DropdownSearches = ({
  setOdGodine,
  setDoGodine,
  setVrstaGoriva,
  setOdCene,
  setDoCene,
  setKaroserija,
}) => {
  const currentYear = new Date().getFullYear();

  const getPriceOptions = () => {
    const priceOptions = [];

    // Add options from 2000 to 10000 with a step of 2000
    for (let price = 2000; price < 10000; price += 2000) {
      priceOptions.push(
        <option key={price} value={price} className="rounded-2xl">
          {price}
        </option>
      );
    }

    // Add options from 10000 to 50000 with a step of 5000
    for (let price = 10000; price <= 50000; price += 5000) {
      priceOptions.push(
        <option key={price} value={price} className="rounded-2xl">
          {price}
        </option>
      );
    }

    return priceOptions;
  };
  return (
    <div>
      <div className="flex items-center gap-x-4 flex-wrap">
        <div className="flex-1">
          <select
            name="odGodine"
            id=""
            className="border rounded-2xl border-gray-400 px-2 py-4 mt-4 w-full"
            onChange={(e) => setOdGodine(e.target.value)}
          >
            <option value="">Od godine</option>
            {Array.from({ length: currentYear - 1989 }, (_, i) => 1990 + i).map(
              (year) => (
                <option key={year} value={year} className="rounded-2xl">
                  {year}
                </option>
              )
            )}
          </select>
        </div>

        <div className="flex-1">
          <select
            name=""
            id=""
            className="border rounded-2xl border-gray-400 px-2 py-4 mt-4 w-full"
            onChange={(e) => setDoGodine(e.target.value)}
          >
            <option value="">Do godine</option>
            {Array.from({ length: currentYear - 1989 }, (_, i) => 1990 + i).map(
              (year) => (
                <option key={year} value={year} className="rounded-2xl">
                  {year}
                </option>
              )
            )}
          </select>
        </div>

        <div className="flex-1">
          <select
            name=""
            id=""
            className="border rounded-2xl border-gray-400 px-2 py-4 mt-4 w-full"
            onChange={(e) => setVrstaGoriva(e.target.value)}
          >
            <option value="">Vrsta goriva</option>
            <option value="Benzin">Benzin</option>
            <option value="Dizel">Dizel</option>
            <option value="Hibrid">Hibrid</option>
            <option value="Električni">Električni</option>
          </select>
        </div>
      </div>

      <div className="flex items-center gap-4 flex-wrap">
        <div className="flex-1">
          <select
            name=""
            id=""
            className="border rounded-2xl border-gray-400 px-2 py-4 mt-4 w-full"
            onChange={(e) => setOdCene(e.target.value)}
          >
            {getPriceOptions()}
          </select>
        </div>

        <div className="flex-1">
          <select
            name=""
            id=""
            className="border rounded-2xl border-gray-400 px-2 py-4 mt-4 w-full"
            onChange={(e) => setDoCene(e.target.value)}
          >
            {getPriceOptions()}
          </select>
        </div>

        <div className="flex-1">
          <select
            name=""
            id=""
            className="border rounded-2xl border-gray-400 px-2 py-4 mt-4 w-full"
            onChange={(e) => setKaroserija(e.target.value)}
          >
            <option value="">Karoserija</option>
            <option value="Sedan">Sedan</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Karavan">Karavan</option>
            <option value="Kupe">Kupe</option>
            <option value="Kabrio">Kabrio</option>
            <option value="Suv">Suv</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default DropdownSearches;
