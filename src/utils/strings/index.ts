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

export const toCamelCase = (str: string): string =>
  str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());

export const replaceMe = (
  template: string,
  data: Record<string, string>
): string => {
  const pattern = /{\s*(\w+?)\s*}/g; // {property}

  return template.replace(pattern, (_, token) => data[token] || '');
};
