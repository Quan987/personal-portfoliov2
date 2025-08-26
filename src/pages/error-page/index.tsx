import { HTTP_STATUS } from "@/constants/http.constants";
import ErrorLayout from "@/layouts/ErrorLayout";
import { getElement } from "@/utils/dom-utils";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  if (typeof window !== "undefined") {
    const splash = getElement("splash-screen");
    if (splash) splash.remove();
  }
  const error = useRouteError();

  let statusCode = "Error";
  let title = "An unexpected error occurred";
  let message = "Something went wrong while loading this page.";

  if (isRouteErrorResponse(error)) {
    statusCode = error.status.toString();
    switch (error.status) {
      case HTTP_STATUS.BAD_REQUEST:
        title = "Bad Request";
        message =
          "The request was invalid. Please check your input and try again.";
        break;
      case HTTP_STATUS.UNAUTHORIZED:
        title = "Unauthorized";
        message = "You are not authorized to view this page.";
        break;
      case HTTP_STATUS.FORBIDDEN:
        title = "Forbidden";
        message = "You don't have permission to access this resource.";
        break;
      case HTTP_STATUS.NOT_FOUND:
        title = "Page Not Found";
        message = "We couldn't find the resource or page you requested.";
        break;
      case HTTP_STATUS.INTERNAL_ERROR:
        title = "Server Error";
        message = "Something went wrong on our end. Please try again later.";
        break;
      default:
        title = `Error ${error.status}`;
        message = error.statusText || "An unknown error occurred.";
        break;
    }
  } else if (error instanceof Error) {
    title = "Unexpected Error";
    message = error.message;
  }

  return (
    <ErrorLayout statusCode={statusCode} title={title} message={message} />
  );
}
