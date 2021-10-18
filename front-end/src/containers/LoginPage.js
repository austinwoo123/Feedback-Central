import React from 'react';
import Form from "../components/Form";
import Footer from '../components/Footer';
import styled from "styled-components";
import { Navbar } from '../components/navbar';


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

export const Box = styled.div`
  padding: 0px 60px;
  background: #00b5ad;
  position: fixed;
  bottom: 0;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

function LoginPage() {
  return (
    <>
      <PageContainer>
        <Navbar />
        <div>
          <Form />
        </div>

        <Box>
          <Footer position="fixed" />
        </Box>
      </PageContainer>
    </>
  );
}
export default LoginPage;