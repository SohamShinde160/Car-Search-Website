import { useNavigate } from "react-router-dom";
import CarCard from "../components/CarCard";
import { cars } from "../data/carsData";
import { useMemo, useState } from "react";
import ReactPaginate from "react-paginate";
import Seo from "../components/Seo";

const CarList = () => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);

  const carParPage = 6;
  const handlePageClick = ({ selected }) => {
    window.scrollTo(0, 0);
    setCurrentPage(selected + 1);
    navigate(`/page/${selected + 1}`);
  };

  const currentPageData = useMemo(() => {
    const offset = (currentPage - 1) * carParPage;
    return cars?.slice(offset, offset + carParPage);
  }, [cars, currentPage]);

  return (
    <>
    <Seo title="Car Search Website"/>
    <main className="w-full h-full flex flex-col my-5 px-5">
      <section className="grid grid-cols-3 gap-10">
        {currentPageData.map((car) => (
          <section key={car.id}>
            <CarCard car={car} />
          </section>
        ))}
      </section>
      <section className="pagination">
        <ReactPaginate
          previousLabel={"←"}
          nextLabel={"→"}
          pageCount={10}
          onPageChange={handlePageClick}
          containerClassName="flex item-center justify-center gap-5 py-10 text-white"
          activeClassName="bg-orange-700 px-2 rounded-full text-white"
        />
      </section>
    </main>
    </>
  );
};

export default CarList;
