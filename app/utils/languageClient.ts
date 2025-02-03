import { Language } from '../types';
import { commonTranslations } from '../lib/translations';

export function getLanguageFromPath(path: string): Language {
  return path.startsWith('/es') ? 'es' : 'en';
}

export function getAlternateLanguage(currentLang: Language): Language {
  return currentLang === 'en' ? 'es' : 'en';
}

export function redirectToLanguage(currentPath: string, newLang: Language): string {
  const currentLang = getLanguageFromPath(currentPath);
  return currentPath.replace(`/${currentLang}`, `/${newLang}`);
}

// Helper function to get translation
export function getTranslation(
  key: string,
  lang: Language
): string {
  const keys = key.split('.');
  let current: any = commonTranslations;
  
  for (const k of keys) {
    if (current[k] === undefined) {
      console.warn(`Translation missing for key: ${key}`);
      return key;
    }
    current = current[k];
  }
  
  if (typeof current === 'object' && current[lang]) {
    return current[lang];
  }
  
  console.warn(`Translation missing for key: ${key} in language: ${lang}`);
  return key;
}
