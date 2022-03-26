import React from 'react';

const Quatsion = () => {
    return (
        <div>
            <p>  Quatsion 2: How to useState work?</p>
            <p>
                Answer 2: useStateYou can manage the state of function components by using
                useStateReturns state and the function that updates it
                By passing the function as useState argument, it is possible to prevent initialization at the second and subsequent renderings.
            </p>
            <p>
                Call only at the top level in a function component custom hook
                state does not make destructive changes, updates with new state
                The state updated by useState is not updated immediately, so if you want to perform processing that depends on the state immediately after the update, update using a function.
            </p>
            <p>
                Quatsion 3:What's different between props vs state ?
            </p>
            <p>
                Answer 3: State and Props are the primary ways React components can receive, handle, and display data.
                Knowing the difference between these two concepts will help you use React efficiently.
                State: The state that the component has
                Props: Properties passed by the parent component
                State

                changleable data
                maintained by component
                can change it
                should be considered private
                State is variable data.  Changing the State is the basic way to  virtual DOM, update the actual DOM, and read the component.


                The State is maintained by the component itself and is not passed from component to component.
                The State can be UI-related state (such as whether the dropdown is open or closed) or a state related to external data (such as the name of the currently logged in user.
                The value of State is updated by calling this.setState () within the component.  When called, it replaces the existing State with the new State and executes the component's render () method.
            </p>
            <p>
                Quatsion 1: How does react work ?
            </p>
            Answer 1:  JavaScript library specializing in creating UI
            React is a JavaScript library for building UI parts on websites developed by Facebook. Sometimes called React.js or React.JS. It's often compared to AngularJS and jQuery, but React itself isn't a framework, it's just a library that builds the UI.
            Currently, it is the most powerful library that has been adopted all over the world, such as "Facebook" and "Instagram", as well as "Yahoo!", "Airbnb", "Reddit", "Netflix", "Slack" and "Uber". .. It's also open source, so it's constantly being improved and quality is maintained.
            <p>

            </p>

        </div>
    );
};

export default Quatsion;