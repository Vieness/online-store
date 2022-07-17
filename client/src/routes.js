import Admin from "./page/Admin";
import Basket from "./page/Basket";
import {
  ADMIN_ROUTE, ADMIN_ROUTE_PRODUCT,
  BASKET_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from "./utils/constants";
import Shop from "./page/Shop";
import Auth from "./page/Auth";
import DevicePage from "./page/DevicePage";
import AdminListProduct from "./components/AdminPunel/AdminListProduct";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: <Admin/>
  },
  {
    path: BASKET_ROUTE,
    Component: <Basket/>
  },
  {
    path: ADMIN_ROUTE_PRODUCT,
    Component: <AdminListProduct/>
  },

]
export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    Component: <Shop/>
  },
  {
    path: LOGIN_ROUTE,
    Component: <Auth/>
  },
  {
    path: REGISTRATION_ROUTE,
    Component: <Auth/>
  },
  {
    path: DEVICE_ROUTE + '/:id',
    Component: <DevicePage/>
  },
]