export const qualities = [
  {
    label: "High Quality",
    value: 1080,
  },
  {
    label: "Standard Quality",
    value: 720,
  },
  {
    label: "Low Quality",
    value: 640,
  },
];

export const getQuality = (quality: number) =>
  qualities.find((item) => item.value === quality);
