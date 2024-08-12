import { PageHeaderContent } from "../../components";
import { BsInfoCircleFill } from "react-icons/bs";

import "./portfolio.page.scss";

export const Portfolio = () => {
  return <section id="portfolio" className="portfolio">
  <PageHeaderContent
      headerText="Portfolio"
      icon={<BsInfoCircleFill size={40} />}
    />
</section>;;
};
