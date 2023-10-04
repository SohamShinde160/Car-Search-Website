import { Helmet } from "react-helmet-async";

const Seo = ({ title }) => {
  return (
    <Helmet>
      <title className="capitalize">{title}</title>
      <meta
        name="description"
        content="Search your car in one click"
      />
    </Helmet>
  );
};

export default Seo;
