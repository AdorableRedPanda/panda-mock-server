export const formPath = (path: string) => `/${
    path
        .trim()
        .split('/')
        .filter((segment) => segment.length)
        .join('/')
}`;