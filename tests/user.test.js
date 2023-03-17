import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app.js";

chai.use(chaiHttp);
chai.should();
let token = "";
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

describe("User", () => {
    describe("GET api/user", () => {
        it("get authenticated user", done => {
            chai
                .request(app)
                .get("/api/user")
                .set("Authorization", `Bearer ${token}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a("object");
                    done();
                });
        });
    });
}
)