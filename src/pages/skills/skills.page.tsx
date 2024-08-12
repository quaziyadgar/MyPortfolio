import { PageHeaderContent } from "../../components";
import { BsInfoCircleFill } from "react-icons/bs";

import { skillsData } from "../../utils.ts/skills";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";
import "./skills.page.scss";

export const Skills = () => {
  return (
    <section id="skills" className="skills">
      <PageHeaderContent
        headerText=" My Skills"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="skills__content-wrapper">
        {skillsData.map((skill, index) => (
          <div key={index} className="skills__content-wrapper__inner-content">
            <Animate
              play
              duration={1}
              delay={0.3}
              start={{ transform: "translateX(-200px)" }}
              end={{ transform: "translateY(0px)" }}
            >
              <h3 className="skills__content-wrapper__inner-content__category-text">
                {skill.label}
              </h3>
              <div className="skills__content-wrapper__inner-content__progressbar-container">
                {skill.data.map((item, i) => (
                  <AnimateKeyframes
                    play
                    duration={1}
                    keyframes={["opacity : 1", "opacity : 0"]}
                    iterationCount="1"
                  >
                    <div className="progressbar-wrapper" key={i}>
                      <p>{item.name}</p>
                      <Line
                        percent={item.value}
                        strokeWidth={2}
                        strokeColor="var(--yellow-theme-main-color)"
                        trailWidth={2}
                        strokeLinecap="square"
                      />
                    </div>
                  </AnimateKeyframes>
                ))}
              </div>
            </Animate>
          </div>
        ))}
      </div>
    </section>
  );
};
