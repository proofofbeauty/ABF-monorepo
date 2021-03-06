import { NextPage } from 'next';
import React from 'react';
import { PageDiv } from '../components/divs';
import { Landing } from '../components/layouts/landing';
import { Footer } from '../components/navs/footer';
import { Header } from '../components/navs/header';

const IndexPage: NextPage = () => {
  return (
    <PageDiv>
      <Header />
      <Landing />
      {/* <ProjectBuilder /> */}
      <Footer />
    </PageDiv>
  );
};
export default React.memo(IndexPage);
