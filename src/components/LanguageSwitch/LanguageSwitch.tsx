import React, { useEffect } from 'react';
import { loadLanguage, loadDefaultLanguage } from '../../../i18nLoader';
import { useAppDispatch } from '../../redux/hooks';
import { setLanguage } from '../../redux/slices/products/productSlice';
import { useTranslation } from 'react-i18next';

const LanguageSwitch: React.FC = () => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    loadDefaultLanguage();
  }, []);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage = e.target.value;
    loadLanguage(selectedLanguage);
    dispatch(setLanguage(selectedLanguage));
  };

  const languageOptions = {
    en: 'English',
    es: 'Español',
    fr: 'Français',
    de: 'Deutsch',
    zh: '中文',
  };

  return (
    <div className="language-switch">
      <label htmlFor="language-select">{t('language')}</label>
      <select id="language-select" onChange={handleLanguageChange}>
        {Object.entries(languageOptions).map(([code, name]) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitch;
