import { useRouteError } from "react-router-dom";
import PageContent from "./PageContent";

function ErrorPage() {
  const error = useRouteError();
  let title = "An Error Occured!";
  let message = "Something went wrong";

  if (error.status == 500) {
    title = "Internal Error";
    message = JSON.parse(error.data).message;
  }

  if (error.status == 404) {
    title = "Not Found!";
    message = "Could not find the resource or page!";
  }

  return <PageContent title={title}>{message}</PageContent>;
}

export default ErrorPage;
