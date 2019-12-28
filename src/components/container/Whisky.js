import React from 'react';
import './Whisky.css';
import WhiskyName from '../presentation/WhiskyName';
import WhiskyDetails from '../presentation/WhiskyDetails';

class Whisky extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.whiskys.reduce((map, obj) => {
      map[obj.name] = true;
      return map;
    }, {});
  }

  /*
  Simplify this UI. Push the show/hide logic of displaying the WhiskyDetails
  into the WhiskyDetails component. Make it a simple state then.
  Have an expandable / collapsable section for the details.
  You can also tidy up that being in a table too.
  */
  render() {
    let whiskyNames = this.props.whiskys.map(whisky => {
      return (
        <div key={whisky.name} className="container">
            <WhiskyName whisky={whisky} />
            <WhiskyDetails whisky={whisky} show={this.state[whisky.name]}/>
        </div>
      );
    });
    return (
      <div className="Whisky">
        {whiskyNames}
      </div>
    );
  }
}

export default Whisky;