export const getAge = (birthdate: string) =>
  Math.floor((Number(new Date()) - new Date(birthdate).getTime()) / 3.15576e10);
