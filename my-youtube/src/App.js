/** @format */
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

function App() {
  const AppRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        { path: "/", element: <MainContainer /> },
        { path: "/watch", element: <WatchPage /> },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      <div>
        <Header></Header>
        <RouterProvider router={AppRouter} />
      </div>
    </Provider>
  );
}

export default App;
