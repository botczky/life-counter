# usePreferredColorScheme

### problem: `@mantine/hooks/use-color-scheme`

ожидается что хук будет возвращать preferred color scheme но при использовании ведет себя по другому

1. при создании компонента всегда возвращает `light`
2. если preferred `dark` то after mount обновляется и возвращает `dark`, иначе не обновляется

```typescript
import useMediaQuery from '../use-media-query'

function useColorScheme(initialValue?: 'dark' | 'light') {
  return useMediaQuery('(prefers-color-scheme: dark)', initialValue === 'dark')
    ? 'dark'
    : 'light'
}
```

[sourse](https://github.com/mantinedev/mantine/blob/master/src/mantine-hooks/src/use-color-scheme/use-color-scheme.ts)

косяк в том что нет смысла передавать `initialValue` в этот хук. Значит в `useMediaQuery` всегда передается `false`. Значит return `light` всегда, независимо что это SSR или SPA

```typescript
function getInitialValue(query: string, initialValue?: boolean) {
  if (initialValue !== undefined) {
    return initialValue;
  }

  if (typeof window !== 'undefined' && 'matchMedia' in window) {
    return window.matchMedia(query).matches;
  }

  return false
}

function useMediaQuery(query: string, initialValue?: boolean) {
  const [matches, setMatches] = useState(getInitialValue(query, initialValue));

  useEffect(() => {
    setMatches(window.matchMedia(query).matches)
    // ...
  }, [query]);

  return matches;
}

```
[sourse](https://github.com/mantinedev/mantine/blob/master/src/mantine-hooks/src/use-media-query/use-media-query.ts)

### similar issues:

[https://github.com/mantinedev/mantine/issues/814](https://github.com/mantinedev/mantine/issues/814)
