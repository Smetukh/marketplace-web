import React from 'react';
import s from './Home.module.scss';
import { Header } from '../../components';
import { Footer } from '../../components';

function Home() {
	return (
  <>
    <div className={s.container}>
      <Header />
      {/* <div className={s.content}>Content</div> */}
    </div>
    <Footer />
  </>
	)
}

export default Home;