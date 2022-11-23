import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'reactstrap';
import AdminPage from './components/pages/AdminPage';
import AuthPage from './components/pages/AuthPage';
import CounterPage from './components/pages/CounterPage';
import MainPage from './components/pages/MainPage';
import PostsPage from './components/pages/PostsPage';
import NavBar from './components/ui/NavBar';
import { UserContext } from './contexts/UserContext';
import PrivateRoute from './HOC/PrivateRoute';
import { getPosts } from './redux/actions/postsActions';
import { checkAuth } from './redux/actions/userActions';

function App() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
    dispatch(checkAuth());
  }, []);
  return (
    <Container>
      {user
        ? (
          <>
            <NavBar />
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route element={<PrivateRoute isAllowed={!user?.id} redirectPath="/posts" />}>
                <Route path="/auth" element={<AuthPage />} />
              </Route>
              <Route element={<PrivateRoute isAllowed={user?.id} />}>
                <Route path="/posts" element={<PostsPage />} />
                <Route path="/counter" element={<CounterPage />} />
              </Route>
              <Route
                path="/admin"
                element={(
                  <PrivateRoute isAllowed={user?.id && user?.name === 'alex'}>
                    <AdminPage />
                  </PrivateRoute>
        )}
              />
            </Routes>
          </>
        )
        : <h1>LOADING..</h1>}
    </Container>
  );
}

export default App;
