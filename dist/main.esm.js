import * as React from 'react';

function ExampleComponent() {
    var greeting = 'Hello Function Component!';
    return React.createElement('h1', null, [greeting]);
}

// ANCHOR: Import Modules
// ANCHOR: Export Modules
var main = {
    ExampleComponent: ExampleComponent
};

export { main as default };
