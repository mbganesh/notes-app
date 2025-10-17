export const generateColor = (): string => {
  const randomChannel = () => Math.floor(Math.random() * 75) + 180;
  const r = randomChannel();
  const g = randomChannel();
  const b = randomChannel();

  return `#${((1 << 24) + (r << 16) + (g << 8) + b)
    .toString(16)
    .slice(1)
    .toUpperCase()}`;
};

export const generateId = (): string => {
  return (
    "note_" +
    Math.random().toString(36).substring(2, 9) +
    "_" +
    Date.now().toString(36)
  );
};
