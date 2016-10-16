# SimpleAnalyticsApp

This is an exercise app to build single page analytics app for a given data format.
The data is fetched from a static server : https://github.com/bbhati/noderStaticServer

The app consists of 3 components, : a dropdown, a chart and a datagrid. A container component contains all 3 components and manages the application state.

React is a good candidate for building the UI, since the state of the page can be maintained by the container component.
And flows to the downstream components as props.

Building instructions:

1)	Install required dependencies  
	npm install --save-dev babel-core babel-loader babel-plugin-react-hot babel-preset-es2015 babel-preset-react react react-dom react-highcharts react-hot-loader webpack webpack-dev-server

	npm install --save jquery

2)  Fetch and start the nodeserver https://github.com/bbhati/noderStaticServer

3)	npm start 

4)	Access service at http://localhost:8080


