import React from "react";
import Form from "../src/Form";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { isEmptyState: true }
  }

  triggerAddTripState = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isAddTripState: true
    })
  }
}

const AddTripButton = props => {
  return <button onClick={props.addTrip}>Add a trip</button>;
};
render() {
  return (
    <div>
      {this.state.isEmptyState && <AddTripButton addTrip={this.triggerAddTripState} />};

      {this.state.isAddTripState && <Form />}
    </div>
}
  )
}


export default AddTripButton;
