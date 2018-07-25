console.log('Starting app');

setTimeout(() => {
	console.log('Inside of callback');
}, 2000);

setTimeout(() => console.log('0 seconds'), 0);

console.log('Finishing up');