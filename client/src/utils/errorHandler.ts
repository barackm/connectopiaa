export const parseError = (error: any) => {
    const errorString = error.message;
    const reasonRegex = /Reason: (.+)/;
    const matches = reasonRegex.exec(errorString);
    const reason = matches ? matches[1] : null;
    return reason;
};