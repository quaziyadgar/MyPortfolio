import { BsInfoCircleFill } from "react-icons/bs";
import { PageHeaderContent } from "../../components";
import { expData } from "../../utils.ts/resume";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import "./resume.page.scss";
import { MdWork } from "react-icons/md";

export const Resume = () => {
  return (
    <section id="resume" className="resume">
      <PageHeaderContent
        headerText="My Resume"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text">Experience</h3>
          <VerticalTimeline
            layout="1-column"
            lineColor="var(--yellow-theme-main-color)"
          >
            {expData.experience.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: "none",
                  color: "var(--yellow-theme-sub-text-color)",
                  border: "1.5px solid var(--yellow-theme-main-color)",
                }}
                iconStyle={{
                  background: "#181818",
                  color: "var(--yellow-theme-main-color)",
                }}
                icon={<MdWork />}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>{item.title}</h3>
                  <h4>{item.company}</h4>

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
                    Duration: {item.duration}
                  </h5>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
        <div className="timeline__education">
          <h3 className="timeline__education__header-text">Education</h3>
          <VerticalTimeline
            layout="1-column"
            lineColor="var(--yellow-theme-main-color)"
          >
            {expData.education.map((item, i) => (
              <VerticalTimelineElement
                key={i}
                className="timeline__experience__vertical-timeline-element"
                contentStyle={{
                  background: "none",
                  color: "var(--yellow-theme-sub-text-color)",
                  border: "1.5px solid var(--yellow-theme-main-color)",
                }}
                iconStyle={{
                  background: "#181818",
                  color: "var(--yellow-theme-main-color)",
                }}
                icon={<MdWork />}
              >
                <div className="vertical-timeline-element-title-wrapper">
                  <h3>{item.title}</h3>
                  <h4>{item.subTitle}</h4>

                  <h5 className="vertical-timeline-element-course">
                    {item.course}
                  </h5>
                  <h5 className="vertical-timeline-element-year">
                    Passing Year: {item.year}
                  </h5>
                  <h5 className="vertical-timeline-element-place">
                    Place: {item.place}
                  </h5>
                  <h5 className="vertical-timeline-element-grade">
                    Percentage: {item.grade}
                  </h5>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
};
