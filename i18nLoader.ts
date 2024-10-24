import i18n from './i18n';

interface CustomError extends Error {
  status?: number;
}

export const loadLanguage = async (language: string): Promise<void> => {
  try {
    const response = await fetch(`/locales/${language}/translation.json`);
    if (!response.ok) {
      const errorMessage = i18n.t('load-error', { language, error: response.statusText });
      const error: CustomError = new Error(errorMessage);
      error.status = response.status; // Optional: Store the status code if needed
      throw error;
    }
    
    const translation = await response.json();
    i18n.addResources(language, 'translation', translation);
    i18n.changeLanguage(language);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    }
  }
};

// Load the default language (English) on app startup
export const loadDefaultLanguage = (): Promise<void> => loadLanguage('en');
