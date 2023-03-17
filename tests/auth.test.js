import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app.js";

chai.use(chaiHttp);
chai.should();

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
                    done();
                });
        });
    });
});

