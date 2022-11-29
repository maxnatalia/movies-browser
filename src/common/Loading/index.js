import Message from "../Message";
import Wrapper from "../Wrapper";
import { ReactComponent as LoadingIcon } from "../images/loading.svg";

const Loading = ({ loadingMessage }) => {

  return (
    <>
      <Message search>{loadingMessage}</Message>
      <Wrapper loadingComponent>
        <LoadingIcon />
      </Wrapper>
    </>
  );
};

export default Loading;