var expect = chai.expect;

describe('App', function () {

    describe("BusClass", function () {
        this.timeout(15000);

        it("Bus validate place 0,0,north", function () {
            var myBus = new bus();
            var resul = myBus.validatePlace("place 0,0,north");
            expect(resul).to.equal(1);
        });

        it("Validate KEY is not NULL and  KEY=MOVE", function () {
            var myBus = new bus();
            var key = myBus.validateNull("MOVE");
            expect(key).to.not.equal(null);
        });

        it("Bus can set position-X", function () {
            var myBus = new bus();
            myBus.setvalues(3, 2, 0);
            expect(myBus.x).to.equal(3);
        });

        it("Validating direction: EAST", function () {
            var myBus = new bus();
            myBus.setvalues(3, 2, 0);
            expect(myBus.direction).to.equal(0);
        });

    });

    describe("GridClass", function () {

        var a = 'hello';
        this.timeout(15000);

        it('Grid values between (1,1) and (5,5)', function () {
            var MyGrid = new grid();
            var key = MyGrid.validateGrid(5, 5)
            expect(key).to.not.equal(null);
        });


        it('app return hello', function () {

            expect(a).to.equal('hello');
        });

        it('should start empty', function () {
            var arr = [];

            //expect.equal(arr.length, 0);
            expect(arr.length).to.equal(0);
        });
        it('1 is equal to 1', () => {
            expect(1).to.equal(1);
        });
    });
});