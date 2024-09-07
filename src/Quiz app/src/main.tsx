
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import AppRoutes from './routes/AppRoutes.tsx'
import { Provider } from 'react-redux';
import store from "./store/index.ts"

ReactDOM.createRoot(document.getElementById('root')!).render(
<Provider store={store}>
<AppRoutes/>
</Provider>
)

