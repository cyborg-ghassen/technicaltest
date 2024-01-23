import {
    faChartBar,
} from '@fortawesome/free-solid-svg-icons';

export const dashboardRoutes = {
    label: 'Dashboard',
    labelDisable: true,
    children: [
        {
            name: 'Overview',
            active: true,
            icon: 'chart-pie',
            to: '/',
        },
        {
            name: 'Analytics',
            active: true,
            icon: faChartBar,
            to: '/analytics',
        }
    ]
};
export const appRoutes = {
    label: 'app',
    children: [

    ]
};

// eslint-disable-next-line
export default [dashboardRoutes, appRoutes];
