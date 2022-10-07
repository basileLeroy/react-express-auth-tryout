import './styles/messenger.css'
const MessengerDashboard = () => {
    return (
        <div className={"messengerDashboard"}>
            Hello world
            <div id="messenger-content">
                <div id="chat-rooms">
                    <li>room 1</li>
                    <li>room 2</li>
                    <li>room 3</li>
                    <li>room 4</li>
                </div>
                <div id="chat-window">
                    content here
                </div>
            </div>
        </div>
    );
}

export {MessengerDashboard};