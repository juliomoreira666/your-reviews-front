import CompanyProfile from "@/components/CompanyProfile";
import SeoMeta from "@/partials/SeoMeta";

const CompanyListPage = () => {
  return (
    <>
      <SeoMeta title={"YourReviews - Lista de empresas avaliadas"} />
     <CompanyProfile/>
    </>
  );
};

export default CompanyListPage;