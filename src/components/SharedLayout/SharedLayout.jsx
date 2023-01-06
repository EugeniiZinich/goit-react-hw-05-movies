import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavList, Link } from './SharedLayout.styled';
import { RiMovie2Line } from 'react-icons/ri';

const SharedLayout = () => {
  return (
    <div>
      <header>
        <div>
          <span>
            <RiMovie2Line color="red" fontSize="50px" />
            MovieHD
          </span>
        </div>
        <nav>
          <NavList>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/movies">MOVIE</Link>
            </li>
          </NavList>
        </nav>
      </header>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;

// export const SharedLayout = () => {
//   return (
//     <Container>
//       <Header>
//         <Logo>
//           <span role="img" aria-label="computer icon">
//             💻
//           </span>{' '}
//           GoMerch Store
//         </Logo>
//         <nav>
//           <Link to="/" end>
//             Home
//           </Link>
//           <Link to="/about">About</Link>
//           <Link to="/products">Products</Link>
//         </nav>
//       </Header>
//       <Outlet />
//     </Container>
//   );
// };
