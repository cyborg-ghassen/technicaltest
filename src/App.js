import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import is from 'is_js';
import AppContext from './context/Context';
import Routes from './routes';
import { CloseButton } from './components/common/Toast';

const App = () => {
    const HTMLClassList = document.getElementsByTagName('html')[0].classList;
    const {
        config: { navbarPosition}
    } = useContext(AppContext);

    useEffect(() => {
        if (is.windows()) {
            HTMLClassList.add('windows');
        }
        if (is.chrome()) {
            HTMLClassList.add('chrome');
        }
        if (is.firefox()) {
            HTMLClassList.add('firefox');
        }
        if (is.safari()) {
            HTMLClassList.add('safari');
        }
    }, [HTMLClassList]);

    useEffect(() => {
        if (navbarPosition === 'double-top') {
            HTMLClassList.add('double-top-nav-layout');
        }
        return () => HTMLClassList.remove('double-top-nav-layout');
        // eslint-disable-next-line
    }, [navbarPosition]);

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Routes />
            <ToastContainer
                closeButton={CloseButton}
                icon={false}
                position={toast.POSITION.BOTTOM_LEFT}
            />
        </Router>
    );
};

export default App;
