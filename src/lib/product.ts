export const parseProductPictures = (pictures: string): { url: string }[] => {
  try {
    return JSON.parse(pictures);
  } catch (e) {
    console.error('Ошибка парсинга pictures JSON', e);
    return [];
  }
}
