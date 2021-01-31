// add query
export const setQueryToUrl = (key, value, router) => {
    console.log(value)
    let searchParams = new URLSearchParams(router.search); 
    searchParams.set(key, value);
    router.push({
        pathname: "/pharmacies/" + router.query.city,
        search: searchParams.toString()
    });
};