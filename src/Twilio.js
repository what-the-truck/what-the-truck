// import React, { Component } from "react";
// import axios from "axios";
// const { REACT_APP_TWILIO_RECIPIENT } = process.env;

// export default class Twilio extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: {
//         recipient: REACT_APP_TWILIO_RECIPIENT,
//         message: "Testing twilio"
//       }
//     };
//   }

  // sendTexts = (nums, message) => {
  //   nums.map(number => {
  //     return axios.get(`/send-text?recipient=${number}&textmessage=${message}`);
  //   });
  // };

//   submit = () =>{
//       this.sendTexts(this.props.nums, this.props.message)
//   }

//   sendText = () => {
//     console.log("hit", process.env.REACT_APP_TWILIO_RECIPIENT);
//     const { text } = this.state;
//     //pass text variables via query
//     axios.get(
//       `/send-text?recipient=${text.recipient}&textmessage=${text.message}`
//     );
//   };

//   render() {
//     return (
//       <div>
       
//       </div>
//     );
//   }
// }
