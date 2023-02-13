export const parseDate = (value?: string): Date => {
  if (value) {
    const date = Date.parse(value);
    return new Date(date);
  }

  return new Date();
};
