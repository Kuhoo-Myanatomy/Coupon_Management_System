import Coupon from './Coupon';
import{shallow,configure} from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

configure({ adapter: new Adapter() });

describe("Testing Coupon Component",()=>{
    it("Matching Coupon's snapshot",()=>{
        const component=shallow(<Coupon/>);
        expect(component).toMatchSnapshot();
    });
});