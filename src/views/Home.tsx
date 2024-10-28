import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/home.scss';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <h1 className="welcome-note">{t('welcome-note')}</h1>
      <p className="welcome-message">{t('welcome-message')}</p>
      <div className="promotional-text">
        <h2>{t('featured-products')}</h2>
        <p>{t('explore-collection')}</p>
        <h2>{t('why-choose-us')}</h2>
        <ul>
          <li>{t('exclusive-deals')}</li>
          <li>{t('quality-assurance')}</li>
          <li>{t('fast-reliable-shipping')}</li>
          <li>{t('customer-satisfaction')}</li>
        </ul>
        <p>{t('start-shopping')}</p>
      </div>
    </div>
  );
};

export default Home;
