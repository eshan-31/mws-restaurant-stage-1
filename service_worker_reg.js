/**
 *Service worker registration
 */
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('service_worker.js').then(function(registration) {
            console.log('Service Worker registered successfuly'); //if the promise resolves
        }, function(error) { //if the promise doesn't resolve
            console.log('Service Worker registration failed');
        });
    });
}
