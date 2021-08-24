
import {mount} from 'enzyme';
import {findByTestAttr} from '../test/testUtils';
import App from './App';

//activate global mock to make sure getSecretWord doesn't make network call
jest.mock('./actions');
import { getSecretWord as mockGetSecretWord } from './actions';

const setup = () => {
    //use mount as useEffect is not called om shallow 
    return mount(<App />);
}

test('renders without error', () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, 'component-app');
    expect(appComponent).toHaveLength(1);
});

//test useEffect after 'actions' module is mocked:
describe('get secret word', () =>{
      beforeEach(() => {
        mockGetSecretWord.mockClear();
      });
      test("getSecretWord runs on app mount", () => {
        const wrapper = setup();
        expect(mockGetSecretWord).toHaveBeenCalledTimes(1);
      });
      test("getSecretWord does not run on app update", () => {
        const wrapper = setup();
        mockGetSecretWord.mockClear();
    
        // using setProps because wrapper.update() doesn't trigger useEffect
        // https://github.com/enzymejs/enzyme/issues/2254
        wrapper.setProps();
    
        expect(mockGetSecretWord).toHaveBeenCalledTimes(0);
      });
});
