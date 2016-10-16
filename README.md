# SimpleAnalyticsApp

This is an exercise app to build single page analytics app for a given data format.
The data is fetched from a static server similar to : https://github.com/bbhati/noderStaticServer

The app consists of 3 components, : a dropdown, a chart and a datagrid. A container component contains all 3 components and manages the application state.

React is a good candidate for building the UI, since the state of the page can be maintained by the container component.
And flows to the downstream components as props.

