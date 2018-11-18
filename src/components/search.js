import {React, Component} from 'react';
import { Search, Grid, Header, Segment } from 'semantic-ui-react'

export default class SearchComponent extends Component {
  componentWillMount() {
    this.resetComponent()
  }

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      
      

      this.setState({
        isLoading: false,
        results:''
      })
    }, 300)
  }

  render() {
    const { isLoading, value, results } = this.state

    return (
      <Grid>
        <Grid.Column width={6}>
          <Search
            loading=''
            onResultSelect=''           
            results=''
            value=''
            {...this.props}
          />
        </Grid.Column>
        <Grid.Column width={10}>
          <Segment>
            <Header>State</Header>
            
            <Header>Options</Header>
            
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}