import { PageHeaderContent } from "../../components";
import { BsInfoCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

import { usePortfolioPage } from "./hooks/usePortfolioPage";
import "./portfolio.page.scss";

export const Portfolio = () => {
  const {
    filterData,
    handleFilter,
    handleHover,
    hoveredValue,
    filteredItems,
    filteredValue,
  } = usePortfolioPage();

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredValue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              key={`cardItem${item.name.trim()}`}
              className="portfolio__content__cards__item"
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <Link to={item.link}>
                  <img alt="image" src={item.image} />
                </Link>
              </div>
              <Link to={item.link} target="_blank">
                <div className="overlay">
                  {index === hoveredValue && (
                    <div>
                      <p>{item.name}</p>
                      <button>Visit</button>
                    </div>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
