import Message from "../common/Message";
import Wrapper from "../common/Wrapper";
import { ReactComponent as LoadingIcon } from "../common/images/loading.svg";

const Loading = () => {
  return (
    <>
      <Message search>Search results for “Mulan”</Message>
      <Wrapper loading>
        <LoadingIcon />
      </Wrapper>
    </>
  );
};

export default Loading;