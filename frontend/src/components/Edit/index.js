import {connect} from 'react-redux';

import Edit from './Edit';
import {mapDispatchToProps, mapStateToProps } from './props';

export default connect(mapStateToProps,mapDispatchToProps)(Edit);