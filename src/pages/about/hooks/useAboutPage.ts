// interface personalDetailsType {
//         label: string,
//         value: string
//     }

const today = new Date();
    const birthDate = new Date('1997-08-01');
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    const currAge = (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate()))? age-- : age

export const useAboutPage = () => {
  const personalDetails = [
    { label: "Name", value: "Quazi Yadgar Husain" },
    {
      label: "Age",
      value: currAge,
    },
    {
      label: "Address",
      value: "India",
    },
    {
      label: "Email",
      value: "quaziyadgar@gmail.com",
    },
    {
      label: "Contact No",
      value: "+91 8299723374",
    },
  ];

  const jobSummary =
    "Seasoned and independent Front End Developer with 3 years of experience in blending the art of design with skill of programming to deliver an immersive and engaging user experience through efficient website development, proactive feature optimization, and relentless debugging. Very passionate about aesthetics and UI design. It is imperative that you provide a thorough and professional approach to your resume. As a Front End Developer you will be judged by your ability to use UX and UI concepts and follow design guidelines. It is about expressing your attention to detail and how you can help implement design ideas for your future employer";

  return {personalDetails, jobSummary};
};
