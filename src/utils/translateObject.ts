export const translateObject = <T>(obj?: Record<string, T>): T[] => {
  if (obj) {
    const filteredObject = Object.entries(obj).map((element) => {
      const objectWithId = { ...element[1], id: element[0] };
      return objectWithId;
    });

    return filteredObject;
  }

  return [];
};
