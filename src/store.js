import { createStore } from "redux";
import rootReducer from "./redux/rootReducer";

const store = createStore(rootReducer);
// console.log(store);
export default store;