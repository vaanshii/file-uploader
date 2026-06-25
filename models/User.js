const { prisma } = require("../lib/prisma.js");

class User {
	static async getByUsername(username) {
		try {
			const user = await prisma.user.findUnique({
				where: { username: username },
			});

			return user;
		} catch (error) {
			console.error("[getByUsername] Query Error: ", error);
			throw error;
		}
	}

	static async getById(id) {
		try {
			const user = await prisma.user.findUnique({
				where: { id: id },
			});

			return user;
		} catch (error) {
			console.error("[getById] Query Error: ", error);
			throw error;
		}
	}
}

module.exports = User;
