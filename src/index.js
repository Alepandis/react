import React, { Component } from "react";
import { Button, Text, TextInput, View } from "react-native";
import ReactDOM from "react-dom";

import "./styles.css";

export default class Intro extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Introduce el número de participantes"
          onChangeText={text => this.setState({ text })}
        />

        <Text style={{ padding: 10, fontSize: 20 }}>
          Tu número de participantes es: {this.state.text}
        </Text>
      </View>
    );
  }
}

class Boton extends React.Component {
  // This syntax ensures `this` is bound within handleClick.
  // Warning: this is *experimental* syntax.
  handleClick = () => {
    console.log(Math.floor(Math.random() * 10));
    console.log("valor");
  };

  render() {
    return (
      <button
        title="Inicia la rifa"
        buttonstyle={{ width: 50, height: 30 }}
        onClick={this.handleClick}
      />
    );
  }
}

if (document.getElementById("intro")) {
  ReactDOM.render(<Intro />, document.getElementById("intro"));
}

if (document.getElementById("root")) {
  ReactDOM.render(<Boton />, document.getElementById("root"));
}

/*const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);*/
