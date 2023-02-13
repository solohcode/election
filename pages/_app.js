import Footer from '@/components/footer'
import Header from '@/components/header'
import '@/styles/globals.css'
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import DefaultLayout from '../components/layouts/DefaultLayout';
import { wrapper } from '../store/store';
import '../styles/style.scss';
// import 'antd/dist/antd.min.css';

function App({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  const getLayout = ((page) =>
    <DefaultLayout >
      {page}
    </DefaultLayout>
  );
  useEffect(() => {
    setTimeout(function () {
      document.getElementById('__next').classList.add('loaded');
    }, 100);
  }, []);

    return (
      <Provider store={store}>
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    )
}

export default App;
