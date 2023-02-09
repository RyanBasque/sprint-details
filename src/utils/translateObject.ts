export const translateObject = (object?: any[]): any => {
  if (object) {
    const filteredObject = Object.entries(object).map((element) => {
      const objectWithId = { ...element[1], id: element[0] };
      return objectWithId;
    });

    return filteredObject;
  }

  return [];
};
