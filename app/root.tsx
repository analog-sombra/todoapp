import type { MetaFunction } from "@remix-run/node";
import styles from "./styles/app.css"

export function links() {
  return [{ rel: "stylesheet", href: styles }]
}
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import NavBar from "./components/NavBar";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <NavBar></NavBar>
        </header>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }: any) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <title>This is an error</title>
      </head>
      <body>
        <header>
          <NavBar></NavBar>
        </header>
        <main className="h-screen grid place-items-center w-full">
          <div className="bg-red-500 bg-opacity-10 w-96 rounded-md p-4">
            <h1 className="text-red-500 text-2xl font-medium  text-center">An Error occurred!</h1>
            <p className="text-red-500 text-lg  text-center">{error.message}</p>
            <p className="text-gray-500 text-lg text-center">Back to <Link to="/" className="text-blue-500 underline">safety!</Link></p>
          </div>
        </main>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );

}
