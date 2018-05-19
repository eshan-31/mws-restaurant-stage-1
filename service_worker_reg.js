/**
*Service worker registration
*/
if ('serviceWorker' in navigator) {
	window.addEventListener('load', function () {
		navigator.serviceWorker.register('service_worker.js').then(function (registration) {
			console.log('Service Worker registered successfuly');
		}, function (error) {
			console.log('Service Worker registration failed');
		});
	});
}
