# Front End Engineer Assessment

I started with Create-React-App and tried to work my way towards the solution as fast as possible.

For styling, I used reactstrap which is basically Bootstrap for React and I tried to showcase the different components which led to the application having a clean User Interface. This made the Header, Product and Table responsive.

For the graph, I initially started with `react-chartkick` but the chart came out to be imprecise as it was not able to handle the final `01-02-31` incorrect date.

I checked more libraries and chose `react-easy-chart` because I did not have to manipulate the data much.

Given more time, I would have set up tests that would have stopped the flow of incorrect data into the application, used a better charting library, and made separate stylesheets for every component instead of using the method of inline styling. Also, as this was a small dataset and there was a time crunch, I decided against using Redux. If I had more time, I would have incorporated Redux for the application state management.

This project is live. You can check it out [here](http://stackline.surge.sh).
