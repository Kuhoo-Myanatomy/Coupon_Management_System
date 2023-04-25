process.env.NODE_ENV = "test";

const chai=require("chai");
const chaiHttp=require("chai-http");
const mongoose=require("mongoose");
const server=require("./index");
const Coupon=require("./models/Coupon");
const Admin=require("./models/Admin");
const should = chai.should();

chai.use(chaiHttp);

describe("/GET Coupons",()=>{
    before("Login",(done)=>{
        const Admin={
            email:"saxenak.0909@gmail.com",
            password:"Abcd@1234"
        };
        chai
            .request(server)
            .post("/api/users/login")
            .send(Admin)
            .end((err,res)=>{
                token = res.body.token;
                res.should.have.status(200);
                res.body.should.have.property("message").eql("Login Succuessful");
                done();
            });
    });

    it("Get all coupons",(done)=>{
        console.log("tokkennn....",token);
        chai
            .request(server)
            .get('/api/coupons')
            .set('Authorization', `Bearer ${token}`)
            .end((err,res)=>{
                res.should.have.status(200);
                res.body.coupons.should.be.an('array');
                res.body.should.have.property("coupons");
            done();
        });      
    })
})

describe('/POST Coupons', () => {
    before("Login",(done)=>{
        const Admin={
            email:"saxenak.0909@gmail.com",
            password:"Abcd@1234"
        };
        chai
            .request(server)
            .post("/api/users/login")
            .send(Admin)
            .end((err,res)=>{
                token = res.body.token;
                res.should.have.status(200);
                res.body.should.have.property("message").eql("Login Succuessful");
                done();
            });
    });
    it('Add a couppon with correct fields', (done) => {
        let coupon = {
            couponCode: "Test",
            discount: 10,
            issueDate:"2023-04-26",
            expiryDate:"2023-04-28"
        }
        const email="saxenak.0909@gmail.com";
        chai.request(server)
          .post(`/api/coupons/add/${email}`)
          .send(coupon)
          .set('Authorization', `Bearer ${token}`)
          .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('coupon');
            done();
          });
    });
    it('Error while adding -ive discout value', (done) => {
        let coupon = {
            couponCode: "Test",
            discount: -10,
            issueDate:"2023-04-26",
            expiryDate:"2023-04-28"
        }
        const email="saxenak.0909@gmail.com";
        chai.request(server)
          .post(`/api/coupons/add/${email}`)
          .send(coupon)
          .set('Authorization', `Bearer ${token}`)
          .end((err, res) => {
            console.log("Ress...",res);
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.errors.should.be.an('array');
                res.body.should.have.property('errors');
                const error = res.body.errors.find(error => error.param === 'discount');
                error.should.exist;
                error.should.have.property('msg', 'Enter some positive discount value');
            done();
          });
    });
    it('Error while adding wrong issue date value', (done) => {
        let coupon = {
            couponCode: "Test",
            discount: 10,
            issueDate:"2023-04-20",
            expiryDate:"2023-04-28"
        }
        const email="saxenak.0909@gmail.com";
        chai.request(server)
          .post(`/api/coupons/add/${email}`)
          .send(coupon)
          .set('Authorization', `Bearer ${token}`)
          .end((err, res) => {
            console.log("Ress...",res);
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.errors.should.be.an('array');
                res.body.should.have.property('errors');
                // console.log("Ress....",res.body);
                const error = res.body.errors.find(error => error.param === 'issueDate');
                error.should.exist;
                error.should.have.property('msg', "Issue Date can't be of back date.");
            done();
          });
    });

});

describe("/DELETE Coupon by id",()=>{
    before("Login",(done)=>{
        const Admin={
            email:"saxenak.0909@gmail.com",
            password:"Abcd@1234"
        };
        chai
            .request(server)
            .post("/api/users/login")
            .send(Admin)
            .end((err,res)=>{
                token = res.body.token;
                res.should.have.status(200);
                res.body.should.have.property("message").eql("Login Succuessful");
                done();
            });
    });

    it("Delete coupon by id error if id not exist ",(done)=>{
        console.log("tokkennn....",token);
        const id="641ca0e260c272a814eae734";
        chai
            .request(server)
            .delete(`/api/coupons/delete/${id}`)
            .set('Authorization', `Bearer ${token}`)
            .end((err,res)=>{
                res.should.have.status(500);
                res.body.should.have.property("message").eql("Unable to Delete....not found");
                done();
        });      
    });
    it("Sccuessful Delete coupon by id ",(done)=>{
        console.log("tokkennn....",token);
        let coupon = {
            couponCode: "DynamicTest",
            discount: 100,
            issueDate:"2023-04-28",
            expiryDate:"2023-04-30"
        }
        const email="saxenak.0909@gmail.com";
        chai.request(server)
          .post(`/api/coupons/add/${email}`)
          .send(coupon)
          .set('Authorization', `Bearer ${token}`)
          .end((err, res) => {
            const id = new Object(res.body.coupon._id);
            chai
                .request(server)
                .delete(`/api/coupons/delete/${id}`)
                .set('Authorization', `Bearer ${token}`)
                .end((err,res)=>{
                    
                    res.should.have.status(200);
                    res.body.should.have.property("message").eql("Successfully Deleted. ");
                    done();
                });
            // done();
        });      
    });
});

describe('/PUT Coupons', () => {
    before("Login",(done)=>{
        const Admin={
            email:"saxenak.0909@gmail.com",
            password:"Abcd@1234"
        };
        chai
            .request(server)
            .post("/api/users/login")
            .send(Admin)
            .end((err,res)=>{
                token = res.body.token;
                res.should.have.status(200);
                res.body.should.have.property("message").eql("Login Succuessful");
                done();
            });
    });
    
    it("Sccuessful Update coupon details by id ",(done)=>{
        console.log("tokkennn....",token);
        let coupon = {
            couponCode: "DynamicTest",
            discount: 100,
            issueDate:"2023-04-28",
            expiryDate:"2023-04-30"
        }
        const email="saxenak.0909@gmail.com";
        chai.request(server)
          .post(`/api/coupons/add/${email}`)
          .send(coupon)
          .set('Authorization', `Bearer ${token}`)
          .end((err, res) => {
            const id = new Object(res.body.coupon._id);
            let updatedcoupon = {
                couponCode: "EditTest",
                discount: 500,
                issueDate:"2023-04-28",
                expiryDate:"2023-04-30"
            }
            chai
                .request(server)
                .put(`/api/coupons/edit/${id}`)
                .send(updatedcoupon)
                .set('Authorization', `Bearer ${token}`)
                .end((err,res)=>{
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('coupon');
                    // res.body.should.have.property("message").eql("Successfully Deleted. ");
                    done();
                });
            
        });      
    });
});