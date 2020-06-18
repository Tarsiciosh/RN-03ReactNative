import React from 'react'
import {StyleSheet, Text} from 'react-native'
import PropTypes from 'prop-types'


const styles = StyleSheet.create({
    text:{fontSize: 48},
})


export default class Counter extends React.Component {  
  static propTypes = {
    count: PropTypes.number.isRequired,
  }
  
  constructor() {
    super()
    this.state = {
      count: 0,
    }
  }

  componentDidMount(){
    //console.log("hello")
    this.interval = setInterval(this.inc, 1000)
  }

  componentWillUnmount() {
    clearInterval (this.interval)
  }
    
  // ES new syntax : class properties
  inc = () => {
    console.log("incrementing:" + this.state.count)
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }
  
  render() {
    return (    
        <Text style={styles.text} > {this.state.count} </Text> 
    )
  }
}
