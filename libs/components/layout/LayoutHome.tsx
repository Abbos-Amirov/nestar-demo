import { Stack } from "@mui/material";
import Head from "next/head";
import Top from "../Top";
import Footer from "../Footer";
import HeaderFilter from "../homePage/HeaderFilter";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const withLayoutMain = (Component: any) => {
  return (props: any) => {
    return (
      <>
        <Head>
          <title>Nestar</title>
        </Head>

        <Stack id="pc-wrap">
          {/* === Header Top === */}
          <Stack id="top">
            <Top />
          </Stack>

          
          <Stack className="header-main">
          <Stack className="container">
            <HeaderFilter />
          </Stack>

          </Stack>

       

          {/* === Main Content === */}
          <Stack id="main">
            <Component {...props} />
          </Stack>

          {/* === Footer === */}
          <Stack id="footer">
            <Footer />
          </Stack>
        </Stack>
      </>
    );
  };
};

export default withLayoutMain;