'use client';

import {useImageProxy} from "@/hooks/use-image-proxy";

export function SmartImage({ src, alt, ...props }) {
  const proxiedSrc = useImageProxy(src);

  return (
    <img
      src={proxiedSrc}
      alt={alt}
      {...props}
    />
  );
}
