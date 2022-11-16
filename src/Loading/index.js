import ErrorMessage from "../common/ErrorMessage";
import Wrapper from "../common/Wrapper";
import { ReactComponent as LoadingIcon } from "./loading.svg";

const Loading = () => {
  return (
    <>
      <ErrorMessage search>Search results for “Mulan”</ErrorMessage>
      <Wrapper loading>
        <LoadingIcon />
      </Wrapper>
    </>
  );
};

export default Loading;