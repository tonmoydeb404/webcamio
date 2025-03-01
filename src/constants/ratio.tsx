export const ratios = [
  {
    label: "Square",
    value: "1/1",
    width: 400,
  },
  {
    label: "Portrait",
    value: "9/16",
    width: 300,
  },
  {
    label: "Landscape",
    value: "16/9",
    width: 700,
  },
];

export const getRatio = (ratio: string) =>
  ratios.find((item) => item.value === ratio);
