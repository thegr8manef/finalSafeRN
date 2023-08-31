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

