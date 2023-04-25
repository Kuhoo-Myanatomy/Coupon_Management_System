import Enzyme, { shallow } from 'enzyme'
import Adapter from '@cfaester/enzyme-adapter-react-18';
import AddCoupon from './AddCoupon';

Enzyme.configure({ adapter: new Adapter() })

describe("Testing AddCoupon Component",()=>{
    let component;
    beforeEach(()=>{
        component=shallow(<AddCoupon/>);
    })

    it("Matching Addcoupon's snapshot",()=>{
        expect(component).toMatchSnapshot();
    });

    it("check if couponCode input is clicked and state flag updated",()=>{
        expect(component.state("couponCodeClicked")).toBe(false);
        component.find('input[name="couponCode"]').simulate('click');
        expect(component.state("couponCodeClicked")).toBe(true);
        component.setState({ couponCode: 'TEST100'});
        expect(component.state("couponCode")).toBe("TEST100");
    })

    it("check title message if button diabled",()=>{
        expect(component.find('button').prop('disabled')).toBe(true);
        expect(component.find('button').prop('title')).toBe("Please fill the details to enable the submit button");
        component.setState({ couponCode: 'TEST100', discount: 10, issueDate: '2023-04-29', expiryDate: '2023-05-01' });
        expect(component.find('button').prop('disabled')).toBe(false);
        expect(component.find('button').prop('title')).toBe("");
    })


    it("disable submit button if fields are empty else enabled", () => {
        expect(component.find('button').prop('disabled')).toBe(true);
        expect(component.find('button').prop('disabled')).toBe(true);
        component.setState({ couponCode: 'TEST100', discount: 10, issueDate: '2023-04-29' });
        expect(component.find('button').prop('disabled')).toBe(true);
        component.setState({ couponCode: 'TEST100', discount: 10, issueDate: '2023-04-29', expiryDate: '2023-05-21' });
        expect(component.find('button').prop('disabled')).toBe(false);
    });

    it('check error message displayed when couponCode is clicked and left empty', () => {
        expect(component.find('p').length).toBe(0);
        component.find('input[name="couponCode"]').simulate('click');
        expect(component.find('p').length).toBe(1);
        expect(component.find('p').text()).toBe("This field can't be left blank");
        component.find('input[name="couponCode"]').simulate('click');
        component.setState({ couponCode: 'TEST100'});
        expect(component.find('p').length).toBe(0);
    });


    it('error message if discount is clicked and written negative or 0 value', () => {
        component.find('input[name="discount"]').simulate('click');
        
        component.setState({ discount: -10 });
        expect(component.find('p').length).toBe(1);
        expect(component.find('p').text()).toBe("Discount should be greater than 0");
        component.find('input[name="couponCode"]').simulate('click');
        component.setState({ discount: -10 ,couponCode:"  "});
        expect(component.find('p').length).toBe(2);
        // expect(component.find('p').text()).toBe("Discount should be greater than 0");
    });


    it('error message displayed when issueDate is clicked and left empty', () => {
        expect(component.find('p').length).toBe(0);
        component.find('input[name="issueDate"]').simulate('click');
        expect(component.find('p').length).toBe(1);
        expect(component.find('p').text()).toBe("This field can't be left blank");
        component.find('input[name="issueDate"]').simulate('click');
        component.setState({ issueDate: '2023-04-29'});
        expect(component.find('p').length).toBe(0);
    });


    it('check error for expiryDate is clicked and left blank', () => {
        expect(component.find('p').length).toBe(0);
        component.find('input[name="expiryDate"]').simulate('click');
        expect(component.find('p').length).toBe(1);
        expect(component.find('p').text()).toBe("This field can't be left blank");
        component.find('input[name="expiryDate"]').simulate('click');
        component.setState({ expiryDate: '2023-05-29'});
        expect(component.find('p').length).toBe(0);
    });

    it("check if add button is clicked and confirm dialog opens",()=>{
        const fun=jest.fn();
        window.confirm=fun;
        expect(fun).toHaveBeenCalledTimes(0);
        component.find('button[type="submit"]').props().onClick();
        expect(fun).toHaveBeenCalledTimes(1);
    })

    it('saveCoupon function call when Add button and confirm in dialog box', () => {
        const saveCouponMock = jest.fn(); //created a function
        component.instance().saveCoupon = saveCouponMock; //assigned it to saveCoupon() of component instance
        window.confirm = jest.fn(() => true); //setting always true value to window.confirm
        component.find('button[type="submit"]').simulate('click'); 
        expect(saveCouponMock).toHaveBeenCalled(); 
    });


    it('saveCoupon function call when Add button and cancel in confirm dialog box', () => {
        const saveCouponMock = jest.fn();
        component.instance().saveCoupon = saveCouponMock;
        window.confirm = jest.fn(() => false);
        component.find('button[type="submit"]').simulate('click');
        expect(saveCouponMock).not.toHaveBeenCalled();
    });
})