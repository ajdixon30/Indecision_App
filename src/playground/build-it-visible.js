// const appRoot = document.getElementById('app');

// let buttonText = 'Show Details'
// let buttonState = true

// const changeButtonText = () => {
//     buttonState = !buttonState;
//     if (buttonState) {
//         buttonText = 'Show Details'
//     } else {
//         buttonText = 'Hide Details'
//     }
//     renderVisibilityToggle();
// }

// const renderVisibilityToggle = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={changeButtonText}>{buttonText}</button>
//             <p hidden={buttonState}>Here are some details. Unhidden. For you. *Mwah*</p>
//         </div>
//     )
//     ReactDOM.render(template, appRoot)
// }
// renderVisibilityToggle();
class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this);
    this.state = {
      visible: false,
    };
  }
  handleVisibilityToggle() {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <button onClick={this.handleVisibilityToggle}>
          {this.state.visible ? "Hide Details" : "Show Details"}
        </button>
        <p hidden={!this.state.visible}>
          Here are some details. Unhidden. For you. *Mwah*
        </p>
      </div>
    );
  }
}

ReactDOM.render(
  <VisibilityToggle title="Visibility Toggle" />,
  document.getElementById("app")
);
