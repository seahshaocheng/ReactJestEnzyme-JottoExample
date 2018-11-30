/**
 * this is a file which jest conifguration is looking for.
 * When it finds it, it will run this before every test. 
 * 
 */
import Enzyme,{shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter:new EnzymeAdapter()});