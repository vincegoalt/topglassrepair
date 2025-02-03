import { Language } from '../types';
import { headers } from 'next/headers';

// Server-side language utilities
export function getCurrentPath(): string {
  const headersList = headers();
  return headersList.get('x-pathname') || '';
}

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
