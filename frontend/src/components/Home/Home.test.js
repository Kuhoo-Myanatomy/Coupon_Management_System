import Home from './Home';
import{shallow,configure} from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

configure({ adapter: new Adapter() });

describe("Testing Home Component",()=>{
    it("Matching Home's snapshot",()=>{
        const component=shallow(<Home/>);
        expect(component).toMatchSnapshot();
    });
});