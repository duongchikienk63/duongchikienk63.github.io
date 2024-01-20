import Home from '~/pages/Home';
import Brand from '~/pages/Brand';
import DetailsArticle from '~/pages/DetailsArticle';
import Product from '~/pages/Product';
import Collection from '~/pages/Collection';
import ProductDetails from '~/pages/ProductDetails';
import Cart from '~/pages/Cart';
import Payment from '~/pages/Payment';
import Trouser from '~/pages/Trouser';
import Shift from '~/pages/Shirt';
import Login from '~/pages/Login';
import Admin from '~/pages/Admin';
import LoginUser from '~/components/LoginWeb/phoneAuth/LoginUser';
import Signup from '~/components/LoginWeb/phoneAuth/Signup';
import PhoneSignUp from '~/components/LoginWeb/phoneAuth/PhoneSignUp';
import Bill from '~/pages/Bill';

const publicRoutes = [
    { path: '/', component: Home, layout: Home },
    { path: '/brand', component: Brand, layout: Brand },
    {
        path: '/detailsarticle',
        component: DetailsArticle,
        layout: DetailsArticle,
    },
    { path: '/product', component: Product, layout: Product },
    { path: '/collection', component: Collection, layout: Collection },
    {
        path: '/productdetails',
        component: ProductDetails,
        layout: ProductDetails,
    },
    { path: '/cart', component: Cart, layout: Cart },
    { path: '/payment', component: Payment, layout: Payment },

    { path: '/shirt', component: Shift, layout: Shift },
    { path: '/trouser', component: Trouser, layout: Trouser },

    { path: '/admin', component: Admin, layout: Admin },
    { path: '/bill', component: Bill, layout: Bill },

    { path: '/login/*', component: Login, layout: Login },
    { path: '/loginauth/*', component: LoginUser, layout: LoginUser },
    { path: '/signup/*', component: Signup, layout: Signup },
    { path: '/phonesignup/*', component: PhoneSignUp, layout: PhoneSignUp },
];
const privateRoutes = [];

export { privateRoutes, publicRoutes };
