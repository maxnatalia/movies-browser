import { ErrorContainer, ErrorMessage, Wrapper, Button } from "./styled";
import { ReactComponent as ErrorIcon } from "./Error.svg";

const Error = () => {
  return (
    <ErrorContainer>
      <Wrapper icon> 
        <ErrorIcon />
      </Wrapper>
      <ErrorMessage>Ooops! Something went wrong...</ErrorMessage>
      <ErrorMessage advice>Please check your network connection and try again</ErrorMessage>
      <Wrapper>
        <Button>Back to homepage</Button>
      </Wrapper>
    </ErrorContainer>
  );
};

export default Error;