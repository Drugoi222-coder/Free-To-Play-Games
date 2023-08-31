import "normalize.css";
import Router from "../../Router/Router";
import { Provider } from "react-redux/es/exports";
import { store } from "../../Redux/store";

const App = () => {
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    );
};

export default App;
