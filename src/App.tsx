import { Refine } from "@pankod/refine-core";
import {
    notificationProvider,
    Layout,
    ErrorComponent,
} from "@pankod/refine-antd";
import routerProvider from "@pankod/refine-react-router-v6";
import { dataProvider } from "@pankod/refine-supabase";
import authProvider from "./authProvider";
import { supabaseClient } from "utility";
import "@pankod/refine-antd/dist/styles.min.css";
import { Login } from "./login";
function App() {
    return (
        <Refine
            dataProvider={dataProvider(supabaseClient)}
            authProvider={authProvider}
            LoginPage={Login}
            routerProvider={{
                ...routerProvider,
                routes: [
                    /*
                    {
                        element: <Signup />,
                        path: "/signup",
                    },
                    */
                ] as typeof routerProvider.routes,
            }}
            notificationProvider={notificationProvider}
            Layout={Layout}
            catchAll={<ErrorComponent />}
        />
    );
}

export default App;
