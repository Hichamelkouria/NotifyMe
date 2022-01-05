import React, { useEffect, Suspense } from "react";
import "./App.scss";
import socketIOClient from "socket.io-client";
import toast, { Toaster } from "react-hot-toast";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ROUTES from "./utils/ROUTES";
import Screen from "./layouts/screen";

//importing functions
import { getNotifications } from "./services/notifications-services";

//importing pages
import Loading from "./components/loading";
import MessageEntity from "./utils/notification/NotificationEntity";
const Login = React.lazy(() => import("./pages/login"));

function App() {
  //init teh socketr server
  let socket = socketIOClient(`${process.env.REACT_APP_SOCKET_SERVER}`);

  // Handel incoming  notifications
  function handleNewNotification(notification: any) {
    toast(notification.message + notification.id, {
      id: notification.id,
      duration: 2000,
      position: "top-right",
    });
  }
  useEffect(() => {
    socket.on("notification", (data) => {
      handleNewNotification(data);
    });
  });

  // collect Toast messages
  useEffect(() => {
    async function callNotificationApi() {
      try {
        const messages: MessageEntity[] = await getNotifications();
        messages.forEach((notification) => {
          toast(notification.description + notification.id, {
            id: notification.id,
            duration: 2000,
            position: "top-right",
          });
        });
      } catch (error) {
        console.error("GET ALL NOTIFICATION HAS AN ERROR");
      }
    }
    callNotificationApi();
  }, []);

  return (
    <>
      <Router>
        <Suspense fallback={<Loading />}>
          <Screen>
            <Routes>
              <Route path={"/"} element={<Login />}></Route>
              <Route path={ROUTES.Login} element={<Login />}></Route>
            </Routes>
            <Toaster />
          </Screen>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
