/* eslint-disable class-methods-use-this */
import NotificationEntity from "../utils/notification/NotificationEntity";
import NotificationRaw from "../utils/notification/NotificationRaw";

class NotificationNormalizer {
  normalize(notifications: NotificationRaw[]): NotificationEntity[] {
    return notifications.map((notification) => {
      return this.normalizeSingle(notification);
    });
  }

  normalizeSingle(notification: NotificationRaw): NotificationEntity {
    return {
      id: notification.id,
      title: notification.title,
      description: notification.message,
    };
  }
}

export default new NotificationNormalizer();
