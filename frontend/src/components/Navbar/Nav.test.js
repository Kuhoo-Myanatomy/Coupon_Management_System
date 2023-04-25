import Nav from './Nav';
import{shallow,configure} from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

configure({ adapter: new Adapter() });

describe("Testing Navbar Component",()=>{
    it("Matching Navbar's snapshot",()=>{
        const component=shallow(<Nav/>);
        expect(component).toMatchSnapshot();
    });
});