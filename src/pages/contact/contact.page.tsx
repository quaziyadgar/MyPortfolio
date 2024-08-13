import { useContactPage } from "./hooks/useContactPage";
import { PageHeaderContent } from "../../components";
import { BsInfoCircleFill } from "react-icons/bs";

import { Animate } from "react-simple-animate";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub, FaWhatsapp } from "react-icons/fa";

import "./contact.page.scss";

export const Contact = () => {
  const { formData, handleChange, handleSubmit } = useContactPage();

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className="contact__content__form">
              <div className="contact__content__form__controls-wrapper">
                <div>
                  <input
                    name="user_name"
                    type="text"
                    className="inputName"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="name" className="nameLabel">
                    Name
                  </label>
                </div>
                <div>
                  <input
                    name="user_email"
                    type="email"
                    className="inputEmail"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="email" className="emailLabel">
                    Email
                  </label>
                </div>
                <div>
                  <input
                    name="user_mob"
                    type="tel"
                    className="inputEmail"
                    value={formData.user_mob}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="email" className="emailLabel">
                    Mobile
                  </label>
                </div>
                <div>
                  <textarea
                    name="message"
                    rows={5}
                    className="inputDescription"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="description" className="descriptionLabel">
                    Message
                  </label>
                </div>
              </div>
              <button type="submit">Send</button>
            </div>
          </form>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="social-media-contact">
            <h3>Social Contacts</h3>
            <div className="icons">
              <a
                href="https://www.linkedin.com/in/quazi-yadgar-husain-5a83291b4/"
                target="_blank"
              >
                <FaLinkedinIn color="#0077b5" cursor="pointer" size={32} />
              </a>
              <a href="https://github.com/quaziyadgar" target="_blank">
                <FaGithub cursor="pointer" size={32} />
              </a>
              <a href="https://wa.me/8299723374" target="_blank">
                <FaWhatsapp cursor="pointer" size={32} color="#25d366" />
              </a>
            </div>
          </div>
        </Animate>
      </div>
    </section>
  );
};
