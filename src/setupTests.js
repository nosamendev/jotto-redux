import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({
  adapter: new EnzymeAdapter(),
  disableLifecycleMethods: true, //spira ComponentDidMount, kogato pravim App shallow wrapper
  //pri testvane na getSecretWord action creator on App mount
});