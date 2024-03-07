const http = require("http");
const Blog = require("./controllers");

const PORT = process.env.PORT || 8080;

const server = http.createServer(async (req, res) => {
    // /api/blog : GET
    if (req.url === "/api/blog" && req.method === "GET") {
        try {
            const blogPosts = await new Blog().getAllPosts();
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(blogPosts));
        }
        catch (error) {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: error }));
        }
    }

    // /api/blog/:id : GET
    else if (req.url.match(/\/api\/blog\/([0-9]+)/) && req.method === "GET") {
        try {
            const id = req.url.split("/")[3];
            const blogPost = await new Blog().getPost(id);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(blogPost));
        } catch (error) {
            res.writeHead(404, { "Content-Type": "application/json" });
            res.end(JSON.stringify({ message: error }));
        }
    }

    // No matching route
    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Route not found" }));
    }
});

server.listen(PORT, () => {
    console.log(`server started on port: ${PORT}`);
});