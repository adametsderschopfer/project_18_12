import {useMemo} from 'react';

export function useImageProxy(src) {
  return useMemo(() => {
      if (src.includes('thumbnails/')) {
        return `/api/gifts-image?path=${encodeURIComponent(src)}`;
      }

      return src;
    },
    [src]
  );
}
