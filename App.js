/**
 *
 *  <div id ="parent">
 *       <div id = "child">
 *            <h1>I am h1 tag</h1>
 *            <h2> I am h2 tag</h2>
 *       </div>
 * 
 * <div id = "child2">
 *            <h1>I am h1 tag</h1>
 *            <h2> I am h2 tag</h2>
 *       </div>
 *  </div>
 *
 *
 */

const parent = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement(
            "div",
            { id: "child" },
            [React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2", {}, "I am h2 tag")]
        ), 
        React.createElement(
            "div",
            { id: "child2" },
            [React.createElement("h1", {}, "I am h1 tag"), React.createElement("h2", {}, "I am h2 tag")]
        )
    ]
);

//arrays is used to add multiple child elements inside a parent element

console.log(parent);
//heading is an object not h1 tag

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

//this render method takes an object and convert it into h1 tag and put it inside the root element
