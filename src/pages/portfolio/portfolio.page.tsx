import { PageHeaderContent } from "../../components";
import { BsInfoCircleFill } from "react-icons/bs";
import { portfolioData } from "../../utils.ts/portfolio";
import { Link } from "react-router-dom";

import "./portfolio.page.scss";
import { useState } from "react";

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Development",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

export const Portfolio = () => {
  const [filteredValue, setFilteredValue] = useState(1);

  const handleFilter = (id: number) =>{
    
  }

  const filteredItems = filteredValue === 1 ? portfolioData : portfolioData.filter(item=>item.id === filteredValue)

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li className={item.filterId === filteredValue ? 'active' : ''} onClick={handleFilter(item.filterId)} key={item.filterId}>{item.label}</li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {
            filteredItems.map((item)=>(
              <div key={`cardItem${item.name.trim()}`} className="portfolio__content__cards__item">
                <div className="portfolio__content__cards__item__img-wrapper">
                  <Link to={item.link}>
                    <img alt="image" src={item.image}/>
                  </Link>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};
