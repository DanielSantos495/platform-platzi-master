import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// Config enzyme y adapter para que se pueda trabajar con React
configure({ adapter: new Adapter() })
// Config del mock para peticiones fetch
global.fecth = require('jest-fetch-mock')
