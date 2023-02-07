export const atLeastOneFieldFilled = (
  values: Record<string, unknown>
): boolean => {
  const fieldValues = Object.values(values);

  const hasOneFilled = fieldValues.some((currentValue) => !!currentValue);

  return hasOneFilled;
};
