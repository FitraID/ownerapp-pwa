import Vue from "vue";
import VueRouter from "vue-router";
import Locked from "./views/auth/Locked";
import Reset from "./views/auth/Reset";
import Signin from "./views/auth/Signin";
import Signup from "./views/auth/Signup";
import VerifyCode from "./views/auth/VerifyCode";
import VerifyEmail from "./views/auth/VerifyEmail";
import VerifyPhone from "./views/auth/VerifyPhone";
// DashBoard
import Index from "./views/dashboard/Index";
import Price from "./views/dashboard/Price";
import PriceDetails from "./views/dashboard/PriceDetails";
import Profile from "./views/dashboard/Profile";
import Activity from "./views/dashboard/settings/Activity";
import API from "./views/dashboard/settings/API";
import Application from "./views/dashboard/settings/Application";
import Fees from "./views/dashboard/settings/Fees";
import Payment from "./views/dashboard/settings/Payment";
import Privacy from "./views/dashboard/settings/Privacy";
// setting
import SettingProfile from "./views/dashboard/settings/ProfileEdit";
import Security from "./views/dashboard/settings/Security";
import Trade from "./views/dashboard/Trade";
import Wallet from "./views/dashboard/Wallet";
// Landing page
import Demo from "./views/Demo";
import Intro from "./views/Intro";

Vue.use(VueRouter);

const routes = [
  {
    path: "/demo",
    name: "Demo",
    component: Demo,
  },
  {
    path: "/intro",
    name: "Intro",
    component: Intro,
  },
  // Dashboard
  {
    path: "/",
    name: "Index",
    component: Index,
  },
  {
    path: "/price",
    name: "Price",
    component: Price,
  },
  {
    path: "/price-details",
    name: "PriceDetails",
    component: PriceDetails,
  },
  {
    path: "/trade",
    name: "Trade",
    component: Trade,
  },
  {
    path: "/wallet",
    name: "Wallet",
    component: Wallet,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },

  {
    path: "/settings-application",
    name: "Application",
    component: Application,
  },
  {
    path: "/settings-security",
    name: "Security",
    component: Security,
  },
  {
    path: "/settings-profile",
    name: "SettingProfile",
    component: SettingProfile,
  },
  {
    path: "/settings-activity",
    name: "Activity",
    component: Activity,
  },
  {
    path: "/settings-privacy",
    name: "Privacy",
    component: Privacy,
  },
  {
    path: "/settings-payment-method",
    name: "Payment",
    component: Payment,
  },
  {
    path: "/settings-api",
    name: "API",
    component: API,
  },
  {
    path: "/settings-fees",
    name: "Fees",
    component: Fees,
  },
  {
    path: "/signin",
    name: "Signin",
    component: Signin,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/reset",
    name: "Reset",
    component: Reset,
  },
  {
    path: "/verify-email",
    name: "VerifyEmail",
    component: VerifyEmail,
  },
  {
    path: "/otp-1",
    name: "VerifyPhone",
    component: VerifyPhone,
  },
  {
    path: "/otp-2",
    name: "VerifyCode",
    component: VerifyCode,
  },
  {
    path: "/lock",
    name: "Locked",
    component: Locked,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
