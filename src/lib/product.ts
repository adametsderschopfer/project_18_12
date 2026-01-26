export const parseProductPictures = (pictures: string): string[] => {
  try {
    return JSON.parse(pictures);
  } catch (e) {
    console.error('Ошибка парсинга pictures JSON', e);
    return [];
  }
}
