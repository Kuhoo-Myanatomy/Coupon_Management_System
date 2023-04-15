import {connect} from 'react-redux';

import AddCoupon from './AddCoupon';
import {mapDispatchToProps, mapStateToProps } from './props';

export default connect(mapStateToProps,mapDispatchToProps)(AddCoupon);