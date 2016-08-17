var middleware = {
	requireAuthentication: function (req, res, next) {
		console.log('private route');
		next();
	},
	logger: function (req, res, next) {
		console.log(new Date().toString());
		console.log(req.method+ ' '+req.originalUrl);
		next();
	}
}

module.exports = middleware;