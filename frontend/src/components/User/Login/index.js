import { connect } from "react-redux";

import Login from "./Login";
import { mapDispatchToProps, mapStateToProps } from "./props";

export default connect(mapStateToProps,mapDispatchToProps)(Login);