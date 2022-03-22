import { Button } from "@mantine/core";
import { useNotifications } from "@mantine/notifications";

function NotificationDemo() {
  const notifications = useNotifications();

  function showNotification() {
    const id = notifications.showNotification({
      title: "Loading",
      message: "Wait 3 seconds. User can't close this yet.",
      loading: true,
      autoClose: false,
      disallowClose: true,
    });

    setTimeout(() => {
      notifications.updateNotification(id, {
        id,
        color: "teal",
        title: "Ready",
        message: "User can close this now, or it'll auto-close in 2 seconds.",
        icon: "✓",
        autoClose: 2000,
      });
    }, 3000);
  }

  return <Button onClick={() => showNotification()}>Show notification</Button>;
}

export default NotificationDemo;
