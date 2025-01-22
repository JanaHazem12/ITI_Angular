import { Routes } from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        component: ProductsListComponent,
        title: 'ProductsApp'
    },
    {
        path: 'product-details/:id', // does NOT have to be id, we can name it ay haga, this syntax means I can receive a dynamic thing
        component: ProductDetailsComponent,
        title: 'Details'
    },
    {
        path: 'register',
        component: UserRegisterComponent,
        title: 'Register'
    },
    {
        path: 'login',
        component: UserLoginComponent,
        title: 'Login'
    },
    {
        path: 'cart',
        component: CartComponent,
        title: 'Cart'
    },
    {
        path: '**',
        component: NotFoundComponent,
        title: 'NotFound'
    }
];
