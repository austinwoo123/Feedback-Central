import React from 'react';
import Form from "../components/Form";
import Footer from '../components/Footer';
import styled from "styled-components";


const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0;
  position: relative;
  background-size: cover;
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