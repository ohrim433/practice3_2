import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import Card from "./components/card/Card";

//class component
class App extends React.Component {
  state = {
    data: null,
    user: "Vasya"
  };

  componentDidMount() {
      setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(responce => responce.json())
        .then(result => {
          console.log(result);
          this.setState({data: result})
        })}, 3000)
  }

  // handler = () => {
  //     this.setState({
  //         data: this.state.sort()
  //     })
  // };
    handler = () => {
        const {data} = this.state;
        const newData = data.sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;}
    );
      this.setState({
          data: newData
      })
  };

    hand2 = () => {
        const {data} = this.state;
        const newData = data.sort((a, b) => {
            if (a.address.city > b.address.city) {
                return 1;
            }
            if (a.address.city < b.address.city) {
                return -1;
            }
            return 0;}
        );
        this.setState({
            data: newData
        })
    };

  render() {
      const {data} = this.state;
    return (
        <div className="App">
            <Header authorSort={this.handler} citySort={this.hand2}/>
            {data ? data.map(i => {return <Card user={i} key={i.id} />}) : "Loading"}
        </div>
    );
  }
}

export default App;

