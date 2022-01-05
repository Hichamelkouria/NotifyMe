import axios from "axios";
import NotificationEntity from "../utils/notification/NotificationEntity";
import NotificationNormalizer from "../normalizer/NotificationNormalizer";

export async function getNotifications(): Promise<NotificationEntity[]> {
  const url = `${process.env.REACT_APP_BASE_API_URL}/messages`;
  let result: NotificationEntity[] = [];
  try {
    const resp = await axios({
      method: "GET",
      url,
    });
    const res = resp?.data;
    if (res.length) result = NotificationNormalizer.normalize(res);
  } catch (err) {
    console.error("error");
  }
  return result;
}
