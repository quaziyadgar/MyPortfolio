import { BsInfoCircleFill } from "react-icons/bs";
import { PageHeaderContent } from "../../components";
import { expData } from "../../utils.ts/resume";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

import 'react-vertical-timeline-component/style.min.css';
import "./resume.page.scss";

export const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="Resume"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="timeline">
        <div className="timeline__experience">
          <h5 className="timeline__experience__header-text">Experience</h5>
          <VerticalTimeline
            layout="1-column"
            lineColor="var(--yellow-theme-main-color)"
          >
            {expData.experience.map((item,i)=>(
              <VerticalTimelineElement
              key={i}
              className="timeline__experience__vertical-timeline-element"
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3 className="vertical-timeline-element-title">
                    {item.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {item.company}
                  </h4>

                  <h5 className="vertical-timeline-element-description">
                    {item.description}
                  </h5>
                  <h5 className="vertical-timeline-element-jobType">
                    Job type: {item.jobType}
                  </h5>
                  <h5 className="vertical-timeline-element-place">
                    Place: {item.place}
                  </h5>
                  <h5 className="vertical-timeline-element-project">
                    Projects: {item.project}
                  </h5>
                  <h5 className="vertical-timeline-element-duration">
                    {item.duration}
                  </h5>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="timeline__education">
          <h5 className="timeline__education__header-text">Education</h5>
        </div>
      </div>
    </section>
  );
};
