import { NavLink, Outlet } from 'react-router-dom';

const SharedLayout = () => {
  return (
    <div>
      <header>
        <div>
          <span>LOGO</span>
        </div>
        <nav>
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/movies">MOVIE</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
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
