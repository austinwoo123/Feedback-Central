import React from 'react';
import Form from "../components/Form";
import Footer from '../components/Footer';
import styled from "styled-components";
import { Navbar } from '../components/navbar';
import BackgroundImg2 from "../../src/assets/pictures/gradient-grey-blue-linear-1920x1080-c2-808080-afeeee-a-60-f-14.png"



//  breakpoints = ["0em", "30em", "48em", "62em", "80em", "96em"]


const PageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 0;
  position: relative;
  background-size: cover;
  background: lightblue;
`;

const BackgroundFilter2 = styled.div`
  // width: 100%;
  // height: 100%;
  // background-color: lightgrey;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // background-size: cover;
  background-image: url(${BackgroundImg2});
`;

// export const Box = styled.div`
//   padding: 0px 60px;
//   background: #00b5ad;
//   position:relative ;
//   bottom: 0;
//   width: 100%;

//   height={[
//     base: "100%", 
//     md: "50%", 
//     xl: "25%", 
//   ]}
// `;

function LoginPage() {
  return (
    <>
      {/* <PageContainer> */}
      <BackgroundFilter2>
        <Navbar />
        <Form />
        <Footer />
      </BackgroundFilter2>
      {/* </PageContainer> */}
    </>

  );
}
export default LoginPage;