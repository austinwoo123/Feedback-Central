import React from 'react';
import Form from "../components/Form";
import Footer from '../components/Footer';
import styled from "styled-components";
import { Navbar } from '../components/navbar';



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
            <Navbar />
            <Form />
            <Footer />
            {/* </PageContainer> */}
        </>

    );
}
export default LoginPage;