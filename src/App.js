import React, { PureComponent as Component } from "react";
import ChatWindow from "./components/ChatWindow";
import Launcher from "./components/Launcher";
import { messaging } from "./init-fcm";

const URL =
  window.location.host !== "localhost:3000"
    ? `wss://${window.location.host}/ws/vitacat/chat/`
    : `ws://${window.location.host}/ws/vitacat/chat/`;

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./firebase-messaging-sw.js")
    .then(function(registration) {
      console.log("Registration successful, scope is:", registration.scope);
    })
    .catch(function(err) {
      console.log("Service worker registration failed, error:", err);
    });
}

class App extends Component {
  ws = new WebSocket(URL);

  constructor() {
    super();
    this.state = {
      chatOpen: false,
      new_message: {
        recived: false,
        message: ""
      },
      messages: [],
      notification: false,
      new_messages_count: -1
    };
  }

  componentDidMount() {
    this.ws.onopen = () => {};

    this.ws.onmessage = evt => {
      const message = JSON.parse(evt.data);

      this.setState({
        messages: Array.isArray(message)
          ? [...this.state.messages, ...message]
          : [...this.state.messages, message],
        new_messages_count: this.state.chatOpen
          ? 0
          : this.state.new_messages_count + 1
      });
    };

    this.ws.onclose = () => {
      // Автоматическое подключения если соккет упал
      this.setState({
        ws: new WebSocket(URL)
      });
    };

    messaging
      .requestPermission()
      .then(async function() {
        function getCookie(name) {
          var cookieValue = null;
          if (document.cookie && document.cookie !== "") {
            var cookies = document.cookie.split(";");
            for (var i = 0; i < cookies.length; i++) {
              var cookie = cookies[i].trim();
              // Does this cookie string begin with the name we want?
              if (cookie.substring(0, name.length + 1) === name + "=") {
                cookieValue = decodeURIComponent(
                  cookie.substring(name.length + 1)
                );
                break;
              }
            }
          }
          return cookieValue;
        }

        const token = await messaging.getToken();
        const csrfmiddlewaretoken = getCookie("csrftoken");
        let fcmToken = {
          fcmToken: token,
          csrfmiddlewaretoken: csrfmiddlewaretoken
        };
        console.log(fcmToken);
        fetch(
          `${window.location.protocol}//${window.location.host}/api/v1/app/user/fbt/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "X-CSRFToken": csrfmiddlewaretoken
            },
            body: JSON.stringify(fcmToken)
          }
        )
          .then(response => response.json())
          .then(result => console.log(result));
      })
      .catch(function(err) {
        console.log("Unable to get permission to notify.", err);
      });

    navigator.serviceWorker.addEventListener("message", message => {
      let notification = message.data.firebaseMessaging.payload.notification;
      let newMessage = {
        recived: true,
        message: notification.body
      };

      this.setState({
        messages: [...this.state.messages, newMessage],
        notification: this.state.chatOpen ? false : true,
        new_messages_count: this.state.chatOpen
          ? 0
          : this.state.new_messages_count + 1
      });
    });
  }

  componentWillUnmount() {
    navigator.serviceWorker.removeEventListener("message");
  }

  // state = {
  //   chatOpen: false,
  //   new_message: {
  //     recived: false,
  //     message: ""
  //   },
  //   messages: [
  //     {
  //       recived: true,
  //       message: "Привет"
  //     },
  //     {
  //       recived: false,
  //       message: "Привет"
  //     },
  //     {
  //       recived: false,
  //       message: "Как дела"
  //     },
  //     {
  //       recived: true,
  //       message: "Нормально"
  //     },
  //     {
  //       recived: false,
  //       message: "Хорошо"
  //     },
  //     {
  //       recived: true,
  //       message: "Я сломался"
  //     }
  //   ]
  // };

  onClickOpenChat = e => {
    this.setState({
      chatOpen: !this.state.chatOpen,
      notification: false
    });
  };

  sendMessage = message => {
    this.ws.send(JSON.stringify(message));
    this.setState({
      messages: [...this.state.messages, message],
      new_message: {
        recived: false,
        message: ""
      }
    });
  };

  _handleSendMessage = e => {
    if (this.state.new_message.message) {
      let message = this.state.new_message;
      this.sendMessage(message);
    }
  };

  _updateInputValue = e => {
    this.setState({
      new_message: {
        recived: false,
        message: e.target.value
      }
    });
  };

  _handleKeyDown = e => {
    if (e.keyCode === 13 && !e.shiftKey) {
      if (this.state.new_message.message) {
        let message = this.state.new_message;
        this.sendMessage(message);
      }
    }
  };

  render() {
    console.log(this.state.new_messages_count);
    return (
      <div>
        <ChatWindow
          messages={this.state.messages}
          new_message={this.state.new_message}
          chatOpen={this.state.chatOpen}
          handleOnClickOpenChat={this.onClickOpenChat}
          handleSendMessage={this._handleSendMessage}
          updateInputValue={this._updateInputValue}
          handleKeyDown={this._handleKeyDown}
        ></ChatWindow>
        <Launcher
          chatOpen={this.state.chatOpen}
          handleOnClickOpenChat={this.onClickOpenChat}
          notification={this.state.notification}
          new_messages_count={this.state.new_messages_count}
        ></Launcher>
      </div>
    );
  }
}

export default App;
