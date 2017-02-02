import React from 'react';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import cloneDeep from 'lodash/cloneDeep';
import isArray from 'lodash/isArray';
import Child from './boxChild';

class Box extends React.Component {

  constructor(props) {
    super(props);
  }

  setupChildProps(props) {
    if(props.children && props.columns) {

      let gutter = this.parseGutter(props.gutter);
      if(gutter && gutter.number) {
        gutter = (gutter.number/2) + gutter.measure;
      }

      if(isArray(props.children)) {
          return props.children.map(function(element) {

            let wide = element.props.wide ? element.props.wide : 1;

            return React.cloneElement(
              element, {
                columns: props.columns,
                gutter: gutter ? gutter : "0.5rem"
              }
          )}, this);
      } else {
        return React.cloneElement(
          props.children, {
            columns: props.columns,
            gutter: gutter ? gutter : "0.5rem"
          }
        )
      }
    } else {
      return props.children;
    }
  }

  parseGutter(gutter) {

    if(!gutter)
      return;

    let number = parseFloat(gutter);

    return {
              number: number,
              measure: gutter.replace(number, "")
           }
  }


  render () {

    let {horizontal, vertical, autoFill, centered, justify, children, columns, gutter, ...rest} = this.props;
    
    if(!gutter) {
      gutter = '0.5rem';
    }

    let classes = classnames({
      box: true,
      horizontal: vertical == null ? true : false,
      vertical: vertical,
      "fill-space": autoFill,
      centered: (justify == 'center'),
      left: (justify == 'left'),
      right: (justify == 'right')
    });

    gutter = this.parseGutter(gutter);

    if(gutter && gutter.number) {
      gutter = (gutter.number/2*-1) + gutter.measure;
    }

    let cstyle = {
      marginLeft: gutter,
      marginRight: gutter
    }

    return (
              <div {...rest} style={cstyle} className={classes}>
                { this.setupChildProps(this.props) }
              </div>
           );
  }
}

Box.Child = Child;

Box.propTypes = {
  children: function (props, propName, componentName) {
    const prop = props[propName]

    let error = null
    React.Children.forEach(prop, function (child) {
      if (child.type !== Child) {
        error = new Error('`' + componentName + '` children should be of type `Box.Child`.');
      }
    })
    return error
  }
}

export default Box;