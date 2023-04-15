import {connect} from 'react-redux';
import Show from './Show';
import {mapStateToProps,mapDispatchToProps} from './props';

export default connect(mapStateToProps,mapDispatchToProps)(Show);
// export default connect(mapStateToProps,{getCoupons})(Show);