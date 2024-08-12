import { PageHeaderContent } from "../../components";
import { BsInfoCircleFill } from "react-icons/bs";

import "./contact.page.scss";

export const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
    </section>
  );
};
