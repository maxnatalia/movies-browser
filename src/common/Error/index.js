import { Link } from "react-router-dom";
import Message from "../Message";
import { ErrorContainer, ErrorWrapper, Button } from "./styled";
import { ReactComponent as ErrorIcon } from "../images/Error.svg";

const Error = () => {
  return (
    <ErrorContainer>
      <ErrorWrapper icon> 
        <ErrorIcon />
      </ErrorWrapper>
      <Message>Ooops! Something went wrong...</Message>
      <Message advice>Please check your network connection and try again</Message>
      <ErrorWrapper>
        <Link to="/">
          <Button>Back to home page</Button>
        </Link>
      </ErrorWrapper>
    </ErrorContainer>
  );
};

export default Error;