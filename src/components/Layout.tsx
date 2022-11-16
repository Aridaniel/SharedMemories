import { FC } from "react";
import Navbar  from "./Navbar"

interface LayoutProps {}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="content">
      {children}
      <Navbar />
    </div>
  );
};

export default Layout;
