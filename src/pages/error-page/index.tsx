import ErrorLayout from "@/layouts/ErrorLayout";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  let statusCode = "Error";
  let title = "An unexpected error occurred";
  let message = "Something went wrong while loading this page.";

  if (isRouteErrorResponse(error)) {
    statusCode = error.status.toString();
    switch (error.status) {
      case 401:
        title = "Unauthorized";
        message = "You are not authorized to view this page.";
        break;
      case 403:
        title = "Forbidden";
        message = "You don't have permission to access this resource.";
        break;
      case 404:
        title = "Not Found";
        message = "We couldn't find the resource or page you requested.";
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
