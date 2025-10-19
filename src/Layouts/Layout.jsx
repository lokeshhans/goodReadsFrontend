import Footer from "Components/Footer/Footer";
import Navbar from "Components/Navbar/Navbar";

function Layout({children}) {
  return (
    <>
        <Navbar />
        <div className='h-[90vh] flex justify-center items-start'>
            <div className="w-8/10 ">
                {children}
            </div>
        </div>
        <Footer />
    </>
  );
}

export default Layout;