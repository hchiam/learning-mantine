import { MantineProvider, Center } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import "./App.css";

import NotificationDemo from "./NotificationDemo.tsx";

function App() {
  return (
    <div className="App">
      <MantineProvider
        theme={{
          colorScheme: "dark",
          // Override any other properties from default theme
          fontFamily: "Open Sans, sans serif",
          spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
        }}
      >
        <NotificationsProvider>
          <Center style={{ width: "100%", height: "100%" }}>
            <NotificationDemo />
          </Center>
        </NotificationsProvider>
      </MantineProvider>
    </div>
  );
}

export default App;
