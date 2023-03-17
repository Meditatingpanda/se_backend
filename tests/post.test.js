import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app.js";

chai.use(chaiHttp);
chai.should();
let token = "";
let postId = "";

describe("Auth", () => {
    describe("POST /api/authenticate", () => {
        it("should register a new user", done => {
            const user = {
                email: "jhon@wick.com",
                password: "123456"
            };
            chai
                .request(app)
                .post("/api/authenticate")
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    res.body.should.have.property("token");
                    token = res.body.token;

                    done();
                });
        });
    });
});
                                
describe("Post", () => {
    describe("GET api/all_posts", () => {
        it("should get all posts", done => {
            chai
                .request(app)
                .get("/api/all_posts")
                .set("Authorization", `Bearer ${token}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("array");
                    postId = res.body[0]._id;
                    done();
                });
        });
    });
}
)

describe("Post", () => {
    describe("GET api/posts/:id", () => {
        it("should get a single post", done => {
            chai
                .request(app)
                .get(`/api/posts/${postId}`)
                .set("Authorization", `Bearer ${token}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    done();
                });
        });
    });
});

describe("Post", () => {
    describe("POST api/posts", () => {
        it("should create a new post", done => {
            const post = {
                title: "Madara Uchia",
                description: "“The concept of hope is nothing more than giving up. A word that holds no true meaning.” – Madara Uchiha"
            };
            chai
                .request(app)
                .post("/api/posts")
                .set("Authorization", `Bearer ${token}`)
                .send(post)
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a("object");
                    done();
                });
        });
    });
}
)

