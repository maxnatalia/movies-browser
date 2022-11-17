import { ErrorContainer, ErrorWrapper, Button } from "./styled";
import Message from "../common/Message";
import { ReactComponent as ErrorIcon } from "./Error.svg";

const Error = () => {
  return (
    <ErrorContainer>
      <ErrorWrapper icon> 
        <ErrorIcon />
      </ErrorWrapper>
      <Message>Ooops! Something went wrong...</Message>
      <Message advice>Please check your network connection and try again</Message>
      <ErrorWrapper>
        <Button>Back to home page</Button>
      </ErrorWrapper>
    </ErrorContainer>
  );
};

export default Error;