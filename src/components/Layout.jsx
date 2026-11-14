import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from "./Navbar";
import ScrollToTop from "./ScrollToTop";


const Layout = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.substring(1);
    const pageTitle = path ? path.charAt(0).toUpperCase() + path.slice(1) : 'Home';
    document.title = `GATE | ${pageTitle}`;
  }, [location]);
  return (
    <>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <main style={{ paddingLeft: "9px", paddingRight: "9px" , paddingTop : "2px" ,width: "100%"}}>
          <div>
            <ScrollToTop />
            <Navbar />
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
};

export default Layout;
