import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import CardContent from './cardContent';
import CardFooter from './cardFooter';
import CardAction from './cardAction';

class Card extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    
    let classes = classnames({
      "card": true,
    });

    let style = {
      maxWidth: this.props.width ? this.props.width : undefined,
      maxHeight: this.props.height ? this.props.height : undefined,
      width: this.props.width ? this.props.width : undefined,
      height: this.props.height ? this.props.height : undefined
    }


    return (<div className={classes} style={style}>
              {this.props.children}
            </div>);
  }
}

Card.Content = CardContent;
Card.Footer = CardFooter;
Card.Action = CardAction;

export default Card;