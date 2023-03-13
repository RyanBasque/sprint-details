export const verifyIfObjectChange = (
  prevValue: Record<string, unknown>,
  atualValue: Record<string, unknown>
): boolean => {
  const hasValuesChanged = Object.keys(prevValue).map((value) => {
    return prevValue[value] === atualValue[value];
  });

  return hasValuesChanged.includes(false);
};
