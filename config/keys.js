/* Notice how we have used this file to store all the sensitive information that our app uses.
This is to improve the security of our application. In practice, we would add this file to our .gitignore file. */
module.exports ={
	google: {
		clientID: '240141948346-mtl9kgm1t834ei3q7hv41gvf9tb8mg5c.apps.googleusercontent.com',
		clientSecret: 'E-vtqwLvEgpkFjoFS4AAnArB'
	},
	mongoDB: {
		dbURI: 'mongodb+srv://xdode:xdode1234@cluster0-grraz.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true'
	},
	session: {
		cookieKey: 'hyperion!1253453425'
	}
}