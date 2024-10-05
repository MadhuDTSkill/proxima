/* eslint-disable react/prop-types */
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

const SideBar = ({
  isDrawerOpen,
  setIsDrawerOpen,
}) => {
  

  return (
    <>
      <div
        className={`fixed top-0 left-0 h-full w-72 lg:w-64 text-sm bg-white shadow-lg rounded-xl transform transition-transform duration-300 z-10 ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 md:static`}
      >
        <div className="flex flex-col h-full p-1">
          <Header/>
          <Main/>
          <Footer/>
        </div>
      </div>

      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-0 md:hidden"
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
        >
        </div>
      )}
    </>
  );
};

export default SideBar;
