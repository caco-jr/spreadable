export const PROJECT_NAME = 'Spreadable';

export const slugify = (text: string): string => {
  if (!text || typeof text !== 'string') {
    throw new Error('Parameter "text" must be a string');
  }

  return text
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
};

export const toCamelCase = str =>
  str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
