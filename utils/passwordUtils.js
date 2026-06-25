const bcrypt = require("bcryptjs");
require("dotenv").config();

async function generateHashPassword(password) {
	const salt = await bcrypt.genSalt(parseInt(process.env.SALT));
	const hashedPassword = await bcrypt.hash(password, salt);

	return hashedPassword;
}

async function validatePassword(plainPassword, storedHashedPassword) {
	const isMatch = await bcrypt.compare(plainPassword, storedHashedPassword);

	return isMatch;
}

module.exports = { generateHashPassword, validatePassword };
