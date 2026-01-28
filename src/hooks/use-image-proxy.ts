import {useMemo} from 'react';
import {EDataSourceName} from "../../types";

export function useImageProxy(src) {
  return useMemo(() => {
    const giftsIdString = `_${EDataSourceName.Gifts}_`
      if (src.includes(giftsIdString)) {
        return `/api/gifts-image?path=${encodeURIComponent(src.replace(giftsIdString, ''))}`;
      }

      return src;
    },
    [src]
  );
}
