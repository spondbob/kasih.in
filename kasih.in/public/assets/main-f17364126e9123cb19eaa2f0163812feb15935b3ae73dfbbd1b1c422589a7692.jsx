class Main extends React.Component {
  render() {
    return (
        <h1>Hello world</h1>
    );
  }
}

let documentReady = () => {
  ReactDOM.render(
    <Main />,
    document.getElementById('main')
  );
};

$(documentReady);
