import { cookies } from "next/headers";

export default async function getRequestConfig() {
  // Get the locale from the cookies
  const cookieStore = cookies();
  const locale = (async () => {
    switch ((await cookieStore).get("NEXT_LOCALE")?.value) {
      case "en-US":
        return "en-US";
      case "en-GB":
        return "en-GB";
      default:
        return "en";
    }
  })();

  return {
    locale,
    messages: (await import(`../messages/${await locale || "en"}.json`)).default,
  };
}
