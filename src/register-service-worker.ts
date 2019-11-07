export const register = () => {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('sw.js', { scope: '/' });
        });
    }
};

export const unregister = () => {};
