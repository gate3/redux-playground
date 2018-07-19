import React,{Component} from 'react';
import './ErrorBoundary.css';

type State = {
  hasError:boolean
}

class ErrorBoundary extends Component<State> {
  constructor () {
    super()
    this.state = {
      hasError:false
    }
  }

  componentDidCatch (error, info) {
    //log error to an error logging service
  }

  render = () => {
    if(this.state.hasError){
      return <h1>An error occurred</h1>
    }else{
      return this.props.children
    }
  }
}

export default ErrorBoundary
