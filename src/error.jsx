import { useRouteError } from "react-router-dom";
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>ERROR {error.statusText}</h1>
      <p>
        <i>{error.message}</i>
      </p>
    </div>
  );
}
