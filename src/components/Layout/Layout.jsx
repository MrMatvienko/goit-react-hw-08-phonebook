import { AppBar } from 'components/AppBar/AppBar';
import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div>
      <AppBar />{' '}
      {/*Виводимо компонент AppBar, який містить навігаційну панель */}
      <Suspense fallback={<Loader />}>
        <Outlet />
        {/* Виводимо дочірній компонент Outlet, який буде містити відповідний компонент в залежності від поточного шляху */}
      </Suspense>
    </div>
  );
};
