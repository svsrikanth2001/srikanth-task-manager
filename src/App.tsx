import React from "react";

import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  ReadyPage,
  ErrorComponent,
  AuthPage,
} from "@pankod/refine-antd";

import "@pankod/refine-antd/dist/styles.min.css";
import routerProvider from "@pankod/refine-react-router-v6";
import { dataProvider, liveProvider } from "@pankod/refine-supabase";
import { supabaseClient } from "utility";
import {
  Title,
  Header,
  Sider,
  Footer,
  Layout,
  OffLayoutArea,
} from "components/layout";
import authProvider from "./authProvider";

function App() {
  return (
    <Refine
      notificationProvider={notificationProvider}
      ReadyPage={ReadyPage}
      catchAll={<ErrorComponent />}
      dataProvider={dataProvider(supabaseClient)}
      liveProvider={liveProvider(supabaseClient)}
      authProvider={authProvider}
      routerProvider={{
        ...routerProvider,
        routes: [
          {
            path: "/register",
            element: <AuthPage type="register" />,
          },
          {
            path: "/forgot-password",
            element: <AuthPage type="forgotPassword" />,
          },
          {
            path: "/update-password",
            element: <AuthPage type="updatePassword" />,
          },
        ],
      }}
      LoginPage={() => (
        <AuthPage
          type="login"
          providers={[
            {
              name: "google",
              label: "Sign in with Google",
            },
          ]}
          formProps={{
            initialValues: {
              email: "info@refine.dev",
              password: "refine-supabase",
            },
          }}
        />
      )}
      Title={Title}
      Header={Header}
      Sider={Sider}
      Footer={Footer}
      Layout={Layout}
      OffLayoutArea={OffLayoutArea}
    />
  );
}

export default App;
