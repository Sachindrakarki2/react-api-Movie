const alphabets = "qwertyuioplkjhgfdsazxcvbnm";

export const randomChar = () => {
  return alphabets[Math.round(Math.random() * alphabets.length)];
};
