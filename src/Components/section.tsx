import { FC, ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  classname?: string;
};

const Section: FC<SectionProps> = ({ children, classname="" }) => {
  return <div className={`${classname} mx-[5%] lg:mx-30`}>{children}</div>;
};

export default Section;
