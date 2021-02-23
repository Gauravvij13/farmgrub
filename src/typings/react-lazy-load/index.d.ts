interface LazyLoadProps {
  offset?: number;
  offsetVertical?: number;
  offsetHorizontal?: number;
  offsetTop?: number;
  offsetBottom?: number;
  offsetLeft?: number;
  offsetRight?: number;
  throttle?: number;
  debounce?: boolean;
  height?: number | string;
  width?: number | string;
  elementType?: string;
  threshold?: number;
  onContentVisible?: () => void;
}

declare module 'react-lazy-load' {
  export default function LazyLoad(
    params: LazyLoadProps & { children: React.ReactNode },
  ): JSX.Element;
}
