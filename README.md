# Learning [mantine](https://mantine.dev/core/center/)

Just one of the things I'm learning. https://github.com/hchiam/learning

Example docs: https://mantine.dev/core/center

It's a component library with utility React [hooks](https://mantine.dev/hooks/use-debounced-value/), Emotion-based CSS-in-JS, [theming with `MantineProvider`](https://mantine.dev/theming/mantine-provider/), and a bunch of [core components](https://mantine.dev/core/breadcrumbs/) as well as [forms](https://mantine.dev/form/use-form/), [notifications](https://mantine.dev/others/notifications/), [rich text editor](https://mantine.dev/others/rte/), [drag-and-drop zones](https://mantine.dev/others/dropzone/), [modals](https://mantine.dev/others/modals/), [dates/calendars](https://mantine.dev/dates/getting-started/), SSR utils, etc.

The docs have clear guides for setting up each component/feature: see installation/demo/usage info in the docs, for example: https://mantine.dev/others/notifications

https://mantine.dev/getting-started

https://mantine.dev/pages/basics

https://mantine.dev/theming/mantine-provider/

https://github.com/mantinedev/mantine

## Example setup from scratch:

1. https://mantine.dev/getting-started/
2. choose packages, like @mantine/core and @mantine/hooks and @mantine/notifications
3. choose a tooling option, like Vite and go through the instructions (download or CLI commands), for example:

```sh
yarn create @vitejs/app mantine-vite --template react-ts
yarn add @mantine/core @mantine/hooks @mantine/notifications
cd mantine-vite
yarn
yarn dev
# http://localhost:3000
```

Or all in one line:

```sh
yarn create @vitejs/app mantine-vite --template react-ts; yarn add @mantine/core @mantine/hooks @mantine/notifications; cd mantine-vite; yarn; yarn dev;

# http://localhost:3000
```

```jsx
// src/App.tsx
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
```
