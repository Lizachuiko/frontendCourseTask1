import { iphoneCatalog } from '../../data-mock/mock';

export interface Suggestion {
  title: string;
  additionalInfo?: string;
  price?: number;
}

export function chooseIPhone(input: string): Suggestion[] | void {
  if (!input) return;
  // вместо мока запрос на данные 
  const filteredRes = iphoneCatalog.filter( iphone => {
      const iphoneDescr = iphone.title + ' ' + iphone.generation + iphone.size + ' ' + iphone.memory + ' ' + iphone.color;
      return iphoneDescr.toLowerCase().includes(input.toLowerCase());
  })
  const fullTitle = filteredRes.map( iphone => ({
    title: iphone.title + ' ' + iphone.generation + iphone.size + ' ' + iphone.memory + ' ' + iphone.color,
  }));
  return fullTitle;
}