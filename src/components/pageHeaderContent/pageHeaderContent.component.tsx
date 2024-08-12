import { ReactNode } from "react";

import "./pageHeaderContent.component.scss";

interface headerProps {
  headerText: string;
  icon: ReactNode;
}

export const PageHeaderContent = (props: headerProps) => {
  const { headerText, icon } = props;
  return (
    <div className="wrapper">
      <h2>{headerText}</h2>
      <span>{icon}</span>
    </div>
  );
};
