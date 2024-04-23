import i18next from 'i18next';
import us from '../languages/us.json';
import fr from '../languages/fr.json';
import al from '../languages/al.json';
import nl from '../languages/nl.json';
import pl from '../languages/pl.json';

import {initReactI18next} from 'react-i18next';

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: us,
    fr: fr,
    al: al,
    nl: nl,
    pl: pl,
  },
  lng: 'fr', // Set the default language
  fallbackLng: 'fr', // Set the fallback language
});

export default i18next;
