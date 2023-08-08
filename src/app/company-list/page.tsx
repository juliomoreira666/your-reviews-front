import CompanyList from "@/components/CompanyList";
import SeoMeta from "@/partials/SeoMeta";

const CompanyListPage = () => {
  return (
    <>
      <SeoMeta title={"YourReviews - Lista de empresas avaliadas"} />
      <CompanyList/>
    </>
  );
};

export default CompanyListPage;