import GameInfoPage, { gameInfoLoader } from "../Pages/GameInfoPage/GameInfoPage";
import GameListPage from "../Pages/GameListPage/GameListPage";
import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<GameListPage />} />
            <Route path="/game/id/:id" element={<GameInfoPage />} loader={gameInfoLoader} />
        </>
    )
);

const Router = () => <RouterProvider router={router}/>;

export default Router;