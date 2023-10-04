import { useParams } from "react-router-dom";
import CarCard from "../components/CarCard";
import { cars } from "../data/carsData";
import { useEffect, useState } from "react";
import Seo from "../components/Seo";

const Search = () => {
  const { query } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const uniqueTilte = new Set();

  useEffect(() => {
    setSearchQuery(query);
  }, [query]);

  useEffect(() => {
    const filteredCars = cars?.filter((car) => {
      const title = car.title ? car.title.toLowerCase() : "";

      if (uniqueTilte.has(car.title)) {
        return false;
      }
      uniqueTilte.add(car.title);
      return title.includes(searchQuery.toLowerCase());
    });
    setSearchResult(filteredCars);
  }, [searchQuery, query]);

  return (
    <>
    <Seo title={`${query} - Car Search Website`}/>
    <main className="w-full h-full flex flex-col my-5 px-5">
      <section className="grid grid-cols-3 gap-10">
        {searchResult?.map((car, index) => (
          <section key={`${car.id}-${index}`}>
            <CarCard car={car} />
          </section>
        ))}
      </section>
    </main>
    </>
  );
};

export default Search;
