export const useHyphenate = () => {
  const hyphenate = (str: string) => {
    return str.toLowerCase().replace(/\s+/g, "-");
  };

  return { hyphenate };
};
