// add query
export const setQueryToUrl = (router) => {
    router.push({
        pathname: router.pathname,
        query: router.query,
    });
};