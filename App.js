import * as React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native'
import Counter from './Counter.js'

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default class App extends React.Component{
  constructor (props) {
    super(props)
    this.state = {
      showCounter: true,
    }
  }

  toggleCounter = () => this.setState (prevState => ({
    showCounter: !prevState.showCounter,
  })) 

  render() {
    return (
      <View style={styles.appContainer}>
        <Button title="toggle" onPress={this.toggleCounter} />
        {this.state.showCounter && <Counter count={0} />}
      </View>
    )
  }
}

// returns the node????
//  {this.state.showCounter && <Counter />} 
//











//UPDATE:
/*
import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native'


const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  count:{
    fontSize: 48,
  }
})

class CountEvenNumbers extends React.Component {

  shouldComponentUpdate (nextProps) {
    return !(nextProps.count % 2)
  }

  componentDidUpdate (){
    console.log(this.props.count)
  }

  render(){
    return (
      <Text style={styles.count} > {this.props.count} </Text>
    )
  }
}

//react component
export default class App extends React.Component {  
  
  constructor() {
    super()
    this.state = {
      count: 0,
    }
  }

  componentDidMount(){
    //console.log("hello")
    setInterval(this.inc, 1000)
  }
    
  // ES new syntax : class properties
  inc = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }
  
  render() {
    return (
      <View style={styles.appContainer}>
        <CountEvenNumbers count={this.state.count} />
      </View>
    )
  }
}

*/




// MOUNT:

/*
import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native'


const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  count:{
    fontSize: 48,
  }
})

//react component
export default class App extends React.Component {  
  
  constructor() {
    super()
    this.state = {
      count: 0,
    }
  }

  componentDidMount(){
    //console.log("hello")
    setInterval(this.inc, 1000)
  }
    
  // ES new syntax : class properties
  inc = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }
  
  render() {
    return (
      <View style={styles.appContainer}>
        <Text style={styles.count}> {this.state.count} </Text>
      </View>
    )
  }
}*/
