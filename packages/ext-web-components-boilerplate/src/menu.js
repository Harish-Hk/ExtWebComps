import AboutComponent from './view/about/AboutComponent.js';
import HomeComponent from './view/home/HomeComponent.js';

export default function getMenu() {
    return [
        { text: 'Home', component: HomeComponent, iconCls: 'x-fa fa-home', default: true },
        { text: 'About', component: AboutComponent, iconCls: 'x-fa fa-question' },
    ];
}
