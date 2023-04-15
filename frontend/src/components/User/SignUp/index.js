import { connect } from "react-redux";

import SignUp from "./SignUp";
import { mapDispatchToProps, mapStateToProps } from "./props";

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);