import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { Explore } from './pages/Explore/Explore';
import { Authorization } from './pages/Autorization/Authorization';
import { AuthorizationForm } from './components/AuthorizationForm/AuthorizationForm';
import { Profile } from './pages/Profile/Profile';
import { MyPosts } from './components/MyPosts/MyPosts';
import { AddPost } from './components/AddPost/AddPost';
import { PostDetails } from './pages/PostDetails/PostDetails';
import { Routes, Route } from 'react-router';
import { PrivateRoute } from './components/PrivateRoute';
import { PublicRoute } from './components/PublicRoute';
import { refreshUser } from './redux/auth/operations';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/authorization" element={<Authorization />}>
            <Route
              path="register"
              element={<PublicRoute component={<AuthorizationForm />} redirect="/profile" />}
            />
            <Route
              path="login"
              element={<PublicRoute component={<AuthorizationForm login />} redirect="/profile" />}
            />
          </Route>
          <Route
            path="/profile"
            element={<PrivateRoute component={<Profile />} redirect="/authorization/login" />}
          >
            <Route path="posts" element={<MyPosts />} />
            <Route path="add" element={<AddPost />} />
            <Route path="add/:id" element={<AddPost />} />
          </Route>
          <Route path="/post/:id" element={<PostDetails />}></Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </>
    )
  );
}

export default App;
