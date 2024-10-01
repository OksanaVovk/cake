import { Oval } from 'react-loader-spinner';
import { Wrapper, Backdrop } from './Loader.styled';

export default function Loader() {
  return (
    <Backdrop>
      <Wrapper>
        <Oval
          height={120}
          width={120}
          color="#FC842D"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#9B9FAA"
          strokeWidth={1}
          strokeWidthSecondary={1}
        />
      </Wrapper>
    </Backdrop>
  );
}
