import MessageCard from "./MessageCard";
import React from "react";
function App() {
    return (
        <div>
            <MessageCard title="Hello" message="This is a message card." />
            <MessageCard title="Welcome" message="Thanks for visiting this application!" />
            <MessageCard title="Reminder" message="Don't forget to submit your assignment." />
            <MessageCard title="Goodbye" message="See you next time!" />
        </div>
    );
}
export default App;