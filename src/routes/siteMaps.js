import {
    faGear, faInfoCircle, faLifeRing, faReceipt,
} from '@fortawesome/free-solid-svg-icons';

export const dashboardRoutes = {
    label: 'Dashboard',
    labelDisable: false,
    children: [
        {
            name: 'Overview',
            active: true,
            icon: 'home',
            to: '/',
        },
        {
            name: 'Requests',
            active: true,
            icon: faReceipt,
            to: '/requests',
            badge: {
              type: "warning",
              text: "5"
            },
            children: [
                {
                    name: 'Requests',
                    active: true,
                    icon: faReceipt,
                    to: '/requests',
                },
            ]
        },
        {
            name: 'Settings',
            active: true,
            icon: faGear,
            to: '/settings',
        }
    ]
};
export const helpRoutes = {
    label: 'Help and Support',
    children: [
        {
            name: 'FAQ',
            active: true,
            icon: faInfoCircle,
            to: '/faq',
        },
        {
            name: 'Contact Us',
            active: true,
            icon: faLifeRing,
            to: '/contact',
        },
    ]
};

// eslint-disable-next-line
export default [dashboardRoutes, helpRoutes];
