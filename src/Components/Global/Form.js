import React,{Component} from 'react';

import PropTypes from 'prop-types';

class Form extends Component {
    static propTypes = {
        body:PropTypes.object.isRequired
    }

    render() {
        const {body} = this.props;
            return(
                <div className="Content" style={{backgroundColor : "#4287f5", paddingTop: "0px"}}>
                    {body}
                </div>
            );
    };
}

export default Form;