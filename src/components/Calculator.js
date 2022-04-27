import React, { Component } from "react";
import { Container,Row, Col, Card, Button, FormControl, InputGroup } from "react-bootstrap";


class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueMass: "",
      valueHeight: "",
      bmiResult:"",
      showBmi:false
    };
    this.calculateBmi = this.calculateBmi.bind(this);
  }
 
  handleChangeMass = e => {
    this.setState({
      valueMass: e.target.value
    });
  }


  handleChangeHeight = e => {
    this.setState({
      valueHeight: e.target.value
    });
  }

  calculateBmi = (valueHeight, valueMass) => {
    let bmi = (this.state.valueMass / (this.state.valueHeight ** 2)) * 10 ** 4;
    console.log(bmi);
    this.setState({
      bmiResult: (bmi).toFixed(2),
      showBmi: true
    });
      return (
        <div> {this.state.handleChangeHeight}  </div>
      )
    }

  render() {
    return (
        
      <Card>
        <Card.Header>
            BMI Calculator
        </Card.Header>
        <Card.Body>
          <InputGroup className="inputbars" >
          <FormControl
              className="input1"
              onChange={this.handleChangeHeight}
              value={this.valueMass}
              placeholder="Your Height (cm)" />
            
            <div>
            <FormControl
              className="input1"
              onChange={this.handleChangeMass}
              value={this.valueMass}
              placeholder="Your Mass (kg)"
            />
            </div>
            
          </InputGroup>
        </Card.Body>
        <Button className="buttonBmi" onClick={this.calculateBmi} >Learn Your BMI</Button>
        <div>
            {
                this.state.showBmi &&
            
        <p className="yourbmi" i>
            <h5> Your body mass index is: </h5>
             {this.state.bmiResult}</p>
        
            }

        </div>

      </Card>
    );
  }
}

export default Calculator;