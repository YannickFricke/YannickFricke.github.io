export const FormatDate = (date: Date) => {
    return `${getPrefixedNumber(date.getMonth() + 1)}.${getPrefixedNumber(date.getDay())}.${date.getFullYear()}`;
};

const getPrefixedNumber: (number: number) => string = (number: number) => {
    if (number > 9) {
        return number.toString();
    }

    return number.toString(10).padStart(2, '0');
};
