const isDev = process && process.env && process.env.NODE_ENV === 'development';

export const initSentry = () => {
    if (isDev) {
        console.warn(new Error('Sentry wouldn’t run at localhost'))
    }

    window.Sentry.init({
        dsn: 'https://30b586ae715c4e19b6654cb98b5412e8@sentry.io/2958514'
    });
};
