import moment from "moment";

export function convertDate(date: string) {
    return moment(date, 'YYYY/MM/DD HH:mm:ss').format('DD MMMM YYYY');
}
