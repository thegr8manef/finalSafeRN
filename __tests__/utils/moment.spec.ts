import { convertDate, getLanguageCode } from "@utils/utils";
import moment from "moment";

describe('Date Utils', () => {
  describe('convertDate', () => {
    it('should convert date to a specific format', () => {
      const momentLocalMock = jest.spyOn(moment,'locale')

      const inputDate = '2023/08/15 12:00:00';
      const lang = 'fr';
      const result = convertDate(inputDate, lang);
    
      expect(result).toBe("")
      expect(momentLocalMock).toHaveBeenCalledWith("fr")
    });

    it('should return original date if an error occurs', () => {
      const inputDate = 'Invalid date';
      const lang = '';
      const result = convertDate(inputDate, lang);
      expect(result).toEqual(inputDate);
    });
  });

  describe('getLanguageCode', () => {
    it('should return correct language code from mapping', () => {
      const language = 'fr';
      const result = getLanguageCode(language);
      expect(result).toEqual('fr');
    });

    it('should default to provided language if not in mapping', () => {
      const language = 'es';
      const result = getLanguageCode(language);
      expect(result).toEqual('es'); // No mapping, returns the input language
    });
  });
});
