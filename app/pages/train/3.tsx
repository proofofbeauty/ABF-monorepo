import { NextPage } from 'next';
import React from 'react';
import { PageDiv } from '../../components/divs';
import { Tutorial3 } from '../../components/layouts/tutorials/3';
import { Footer } from '../../components/navs/footer';
import { Header } from '../../components/navs/header';

const Tutorial3Page: NextPage = () => {
  return (
    <PageDiv>
      <Header />
      <Tutorial3 />
      <Footer />
    </PageDiv>
  );
};
export default React.memo(Tutorial3Page);
