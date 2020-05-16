export const getLocation = () => {
    const {origin, hash = '', search} = document.location;

    return {
        host: origin,
        fragment: hash.substr(1)
    }
};