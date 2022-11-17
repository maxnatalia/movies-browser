import Message from "../Message";
import Wrapper from "../Wrapper";
import { ReactComponent as LoadingIcon } from "../images/loading.svg";

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