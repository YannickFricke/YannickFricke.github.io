const getPrefixedNumber: (number: number) => string = (number: number) => {
    if (number > 9) {
        return number.toString();
    }

    return number.toString(10).padStart(2, '0');
};

export const FormatDate = (date: Date) => {
    return `${getPrefixedNumber(date.getDate())}.${getPrefixedNumber(date.getMonth() + 1)}.${date.getFullYear()}`;
};
