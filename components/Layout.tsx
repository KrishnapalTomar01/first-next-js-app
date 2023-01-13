import Footer from "./Footer";
import Navbar from "./Navbar";

type LayoutProp = {
  children: React.ReactNode;
};

const Layout = (prop: LayoutProp) => {
  return (
    <div className="content">
      <Navbar />
      {prop.children}
      <Footer />
    </div>
  );
};

export default Layout;
