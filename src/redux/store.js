/*
* redux最核心的管理 对象模块
* */
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";

export default createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));