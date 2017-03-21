import Widgets from '../../api/widgets';

function getWidgets() {
  return async function(dispatch) {
    const widgets = await Meteor.callPromise('widgets.fetch');

    return dispatch({
      type: 'GET_WIDGETS',
      payload: widgets
    });
  }
}

function createWidget(data) {
  return async function(dispatch) {
    const { name } = data;
    const widgetId = await Meteor.callPromise('widgets.insert', { name });

    return dispatch({
      type: 'CREATE_WIDGET',
      payload: {
        _id: widgetId,
        name
      }
    })
  }
}

export default {
  createWidget,
  getWidgets
}
