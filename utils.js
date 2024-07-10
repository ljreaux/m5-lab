import { useRef, useEffect } from 'react';

export function getSectionListData(data) {
  const categories = ['Appetizers', 'Salads', 'Beverages'];

  const menu = categories.map((category) => {
    return {
      title: category,
      data: data
        .filter((item) => item.category === category)
        .map(({ id, title, price }) => ({ id, title, price })),
    };
  });

  return menu;
}

export function useUpdateEffect(effect, dependencies = []) {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      return effect();
    }
  }, dependencies);
}
