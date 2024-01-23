import { createContext } from 'react';
import { settings } from '../config';

const AppContext = createContext(settings);

export const RequestWizardContext = createContext({ request: {} });

export default AppContext;
