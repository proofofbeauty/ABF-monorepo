import { NextPage } from 'next';
import React from 'react';
import { PageDiv } from '../../components/divs';
import { DocsBackButton } from '../../components/layouts/docs';
import { Specification } from '../../components/layouts/spec';
import { Footer } from '../../components/navs/footer';
import { Header } from '../../components/navs/header';

const SpecificationPage: NextPage = () => {
  return (
    <PageDiv>
      <Header />
      <DocsBackButton />
      <Specification />
      <Footer />
    </PageDiv>
  );
};

export default React.memo(SpecificationPage);
