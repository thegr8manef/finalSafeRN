import i18next from 'i18next';
import en from '../languages/en.json';
import fr from '../languages/fr.json';
import al from '../languages/al.json';
import bl from '../languages/bl.json';
import pl from '../languages/pl.json';

import {initReactI18next} from 'react-i18next';

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: en,
    fr: fr,
    al: al,
    bl: bl,
    pl: pl,
  },
  lng: 'fr', // Set the default language
  fallbackLng: 'fr', // Set the fallback language
});

export default i18next;
