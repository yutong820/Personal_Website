const data = require("./data");

class Controller {
    async getAllPosts() {
        return new Promise((resolve, _) => resolve(data));
    }

    async getPost(id) {
        return new Promise((resolve, reject) => {
            let post = data.find((post) => post.id === parseInt(id));
            if (post) {
                resolve(post);
            } else {
                reject(`Post with id ${id} not found.`);
            }
        });
    }
}

module.exports = Controller;