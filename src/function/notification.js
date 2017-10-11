import axios from 'axios';
import ons from 'onsenui';
import { WEB_API_URL, ROLE } from '../../.env';

/* global FCMPlugin */
const app = {
  initialize(self) {
    document.addEventListener('deviceready', this.onDeviceReady.bind(self), false);
  },

  onDeviceReady() {
    const authorizationtoken = window.localStorage.getItem('access_token');
    const config = {
      headers: { Authorization: authorizationtoken },
    };
    FCMPlugin.getToken(
      (token) => {
        const data = {
          device_token: token,
          role: ROLE,
        };
        axios.put(`${WEB_API_URL}/v1/users/me/device_token`, data, config)
            .then((response) => {
              console.log(response);
            });
      },
      (err) => {
        console.log(`error retrieving token: ${err}`);
      },
    );

    FCMPlugin.onNotification(
      (data) => {
        if (data.wasTapped) {
          // Notification was received on device tray and tapped by the user.
        } else {
          // Notification was received in foreground. Maybe the user needs to be notified.
          ons.notification.toast('You got a response, please reload.', { timeout: 2000 });
        }
        this.REFETCH_PROBLEMS();
      },
      (msg) => {
        console.log(`onNotification callback successfully registered: ${msg}`);
      },
      (err) => {
        console.log(`Error registering onNotification callback: ${err}`);
      },
    );
  },
};

export default app;
