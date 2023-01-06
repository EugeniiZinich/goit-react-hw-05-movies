import { ThreeDots } from 'react-loader-spinner';

const MyLoader = () => (
  <ThreeDots
    height="80"
    width="80"
    radius="9"
    color="blue"
    ariaLabel="three-dots-loading"
    wrapperStyle={{}}
    wrapperClassName=""
    visible={true}
  />
);

export default MyLoader;
