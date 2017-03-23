import React from "react";
import classnames from "classnames";
import suitupable from "../component";

@suitupable(true, true)
class Icon extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        let { size, circle, name, screen, ...rest } = this.props;

        let classes = {
            "material-icons": true,
            "md-18": size == 18,
            "md-24": size == 24,
            "md-36": size == 36,
            "md-48": size == 48,
            circle: circle
        };

        classes = classnames(classes);

        return (
            <i {...rest} className={classes}>
                {name}
            </i>
        );
    }
}

export default Icon;