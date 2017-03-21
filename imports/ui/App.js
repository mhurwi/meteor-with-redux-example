import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import widgetActionCreators from './actions/widget-actions';

class App extends React.Component {

  componentDidMount() {
    const { widgetActions } = this.props;

    widgetActions.getWidgets();
  }

  handleForm(e) {
    e.preventDefault();
    const { widgetActions } = this.props;
    const name = this.refs.name.value;

    this.props.widgetActions.createWidget({ name });

    this.refs.name.value = '';
  }

  render() {
    const { widgets, widgetActions } = this.props;

    return (
      <div>
        <h1>widgets</h1>
        <ul>
          { widgets
            ?
            widgets.map(w => <li key={w._id}>{w.name}</li>)
            :
            <li>none</li>
          }
        </ul>
        <form onSubmit={this.handleForm.bind(this)}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" ref="name" />
          <input type="submit" value="Add Widget" />
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    widgets: state.widgets
  }
}

function mapDispatchToProps(dispatch) {
  return {
    widgetActions: bindActionCreators(widgetActionCreators, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
