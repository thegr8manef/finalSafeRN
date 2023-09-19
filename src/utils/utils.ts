import languageCodeMap from "@config/languageMapping";
import 'moment/locale/fr';
import 'moment/locale/nl';
import 'moment/locale/de';
import 'moment/locale/pl';
import 'moment/locale/en-in';
import moment from "moment";

// Function to convert a date to a specific format
export function convertDate(date: string, lang: string): string {
    try {
        const changeLangCode = getLanguageCode(lang)
        // Set the locale based on the language code
        moment.locale(changeLangCode);
        // Parse the input date using Moment.js and format it as 'DD MMMM YYYY'
        return moment(date, 'YYYY/MM/DD HH:mm:ss').format('DD MMMM YYYY');
    } catch (error) {
        // Handle any errors that might occur during the operation
        return date; // Return the original date if an error occurs
    }
}
// Function to get the language code based on language name
export function getLanguageCode(language: string) {
    // Use the language-to-code mapping to convert the language name to a code
    // If not found in the mapping, default to the provided language name
    return languageCodeMap[language] || language;
}

export const observations = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Every staff member wears PPE(Personal Protection Equipment) including glasses and gloves.',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'The sales and Operayions paln is up to date. It mentions pedestrain and vehicle traffic.',
    },
    {
      id: '58694a0f-3da1-471f-bd9h6-145571e29d72',
      title: 'Pedestrain circulaion is marked out, clean and unobstructed.',
    },
    {
      id: '58694a0f-3da1-471fv-bd96-145571e29d72',
      title: 'Presence in the Site Health and Safety Risk Assessment Report of a chapter describing what is ...',
    },
    {
      id: '58694a0f-3da1-471fk-bd96-145571e29d72',
      title: 'No ladders or stepladders on site, even for ST',
    },
    {
      id: '58694a0f-3da1-471ùf-bd96-145571e29d72',
      title: '100% of our subcontractors wear helmets andd safety shoes',
    },
    {
      id: '58694a0f-3da1-47h1f-bd96-145571e29d72',
      title: 'Each site is visited at least twice a month (FinalSafe) by a site supervisor',
    },
    {
      id: '58694a0f-3da1-471f-bd96u-145571e29d72',
      title: 'QH-TEST MAJ Oct 2018',
    },
    {
      id: '58694a"0f-3da1-471f-bd96-145571e29d72',
      title: 'Commentaires',
    },
  ];
  export const observationsToBeLifted = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'test',
      date:'04/09/2023'
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'hhh',
      date:'22/08/2023'

    },
    {
      id: '58694a0f-3da1-471f-bd9h6-145571e29d72',
      title: 'test',
      date:'21/08/2023'

    },
    {
      id: '58694a0f-3da1-471fv-bd96-145571e29d72',
      title: 'vfverf',
      date:'18/08/2023'

    },
    {
      id: '58694a0f-3da1-471fk-bd96-145571e29d72',
      title: 'vfverf',
      date:'18/08/2023'
    },
    {
      id: '58694a0f-3da1-471ùf-bd96-145571e29d72',
      title: 'vfverf',
      date:'18/08/2023'
    },
    {
      id: '58694a0f-3da1-47h1f-bd96-145571e29d72',
      title: 'vfverf',
      date:'18/08/2023'
    },
    {
      id: '58694a0f-3da1-471f-bd96u-145571e29d72',
      title: 'vfverf',
      date:'18/08/2023'
    },
  ];

  export const accompanying = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      Name: 'agnon comp',
      reference:'DR EIC TESTS'
    },
    {
      id: 'bd7acbea-c1b1-46c2-aebd5-3ad53abb28ba',
      Name: 'APPLE Finalsafe',
      reference:'DR EIC TESTS'
    },
    {
      id: 'bd7acbea-c1b1-f46c2-aed5-3ad53abb28ba',
      Name: 'BENBIA Zakaria',
      reference:'DR EIC TESTS'
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb282ba',
      Name: 'BENYAMIN David',
      reference:'DR EIC TESTS'
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3abd53abb28ba',
      Name: 'Besbes Yassin',
      reference:'DR EIC TESTS'
    },
    {
      id: 'bd7acb0ea-c1b1-46c2-aed5-3ad53abb28ba',
      Name: 'Besbes Yassin',
      reference:'DR EIC TESTS'
    },
    {
      id: 'bd77acbea-c1b1-46c2-aed5-3ad53abb28ba',
      Name: 'Besbes3 Yassin',
      reference:'DR EIC TESTS'
    },
    {
      id: 'bd7acbea-c1b1-46cf2-aed5-3ad53abb28ba',
      Name: 'Besbes4 Yassin',
      reference:'DR EIC TESTS'
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3adm53abb28ba',
      Name: 'Besbes5 Yassin',
      reference:'DR EIC TESTS'
    },
    {
      id: 'bd7acbea-c1b1-46c2-aedd5-3adm53abb28ba',
      Name: 'Besbes6 Yassin',
      reference:'DR EIC TESTS'
    },
  ];