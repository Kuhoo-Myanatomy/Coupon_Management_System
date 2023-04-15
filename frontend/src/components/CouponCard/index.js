import {connect} from 'react-redux';
import Coupon from './Coupon';
import {mapStateToProps,mapDispatchToProps} from './props';

export default connect(mapStateToProps,mapDispatchToProps)(Coupon);