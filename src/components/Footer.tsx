import React from 'react';
import '../styles/footer.scss';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer-container" aria-label="Footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} {t('footer-rights')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
