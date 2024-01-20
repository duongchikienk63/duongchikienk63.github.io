import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import DefaultLayout from './components/Layout/DefaultLayout';
import { UserAuthContextProvider } from './components/LoginWeb/context/UserAuthContext';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

function App() {
    const initialPaypalOptions = {
        'client-id': 'ATaU_vrGDQVRy-6jL7fQtgXU5YzQwntZyEldwnhRHCeecbo6-wgnPPPy12NlHRNWTkZ1_6BQaqjyt3sn',
        vault: true,
    };

    return (
        <UserAuthContextProvider>
            <PayPalScriptProvider options={initialPaypalOptions}>
                <Router>
                    <div className="App">
                        <Routes>
                            {publicRoutes.map((route, index) => {
                                const Page = route.component;

                                // Đặt layout bằng layout mặc định
                                let Layout = DefaultLayout;

                                // Đặt điều kiện nếu có layout riêng thì lấy layout của chính nó và layout bằng null thì để Fragment
                                if (route.layout) {
                                    Layout = route.layout;
                                } else if (route.layout === null) {
                                    Layout = Fragment;
                                }

                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        element={
                                            <Layout>
                                                <Page />
                                            </Layout>
                                        }
                                    />
                                );
                            })}
                        </Routes>
                    </div>
                </Router>
            </PayPalScriptProvider>
        </UserAuthContextProvider>
    );
}

export default App;
