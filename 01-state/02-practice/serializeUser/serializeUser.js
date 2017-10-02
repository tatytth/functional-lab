const serializeUser = user => {
  const newUser = Object.assign({}, user)

	newUser.name = (user.name.length > 10) ? `${user.name.slice(0, 7)}...` : user.name;
	newUser.date = user.date.toJSON();
	return JSON.stringify(newUser);
};

module.exports = serializeUser;
