import React, { Component } from "react";
import "./Header.scss";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <img
          src="https://lh3.googleusercontent.com/Npl4sWIz_4GJK-e_3opNpKHNfLYl9Wja7AWHAt_2Ri0nwgZ_Equk-4shiyTg0_GTVoLZOvwGtLyqKFIZ9fEZl7Opol2AZilGtiLLKgcQO_QqCsD78HaJ1_H2MpdlG7rtYUQiVIOmHLBqK-CcgpCizQ1EAFiyREDpKRmUsKcmklc7gB-t-NkuJvWa6toJPcLQthTl64LUzRk_KVtj7xXES3_rI1rwX__Ppc0QfsHwetzqVtYeoyNLso3vuJ7f2C1ouiL-zt9vfbGAXb05ULrM6qwQww0RlDT-jXBQtKQfmVHB0fQNJK0clommNo20Uzcgt2xR0sxPjozdkaacxF-VTUffdnlE3wZogBNWkAsBF49N0O2dIECrSN0ufH7QTEaKoz-eN6F_pCqS6y4qS8wiiVUIdRxFfzsbXAV8xI9vO12QRPysTzfzv6qmaXSmHA9NPWPjm6_kc-gfKD8XQ-EPeQ9EffBO6_IF-YiV-DFzFcyJ4GCsK80YzP93rcxlaOj5pUOtM4640eidoHb9nUhgs7N4OxWjLpnphX_4FhJdn23XXu8UDg_IpLZGylkm0L2iQ8Q2Hi1of6Dh6R2NHkDMLZhKheGcCZw3HTDa43Rmm3za__3DoWVibkmEdMQv_N4JxirdNj46UWKZPfDhsmb120OGXZTvZmiYsf0THPr_hzr32OJmliKgfeRpVd-NaRsZuz7xBNuyacMzbvV6mqVK-mQ_D8Je2fIs0bOK6lI3JgePsQE4=w688-h690-no"
          alt=""
        />
        <h1>What the Truck?</h1>
        <i className="fas fa-hamburger"></i>
      </div>
    );
  }
}
