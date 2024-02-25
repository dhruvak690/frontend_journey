const parent = React.createElement(
    "div",
    {id:"parent"},
    [React.createElement(
        "div",
        {id:"child"},
        [React.createElement(
            "h1",
            {},
            "i am a big tag",
        ),React.createElement(
            "h2",
            {},
            "i am a small tag",
        )]
    ),React.createElement(
        "div",
        {id:"child2"},
        [React.createElement(
            "h1",
            {},
            "i am a big tag",
        ),React.createElement(
            "h2",
            {},
            "i am a small tag",
        )]
    ),]
    )





console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);