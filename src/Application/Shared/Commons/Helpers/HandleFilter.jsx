export const returnFilter = (data, field) => {
  const idFilter = Object.entries(data).filter((item) => {
    return item[0] === field.id ? item[0]?.[1] : null;
  });
  return idFilter[0]?.[1];
};