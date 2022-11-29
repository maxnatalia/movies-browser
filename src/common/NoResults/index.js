import Message from "../Message";
import Wrapper from "../Wrapper";
import { ReactComponent as NoResultsPicture } from "../images/no_results.svg";

const NoResults = ({ noResultMessage }) => {
  return (
    <>
      <Message search>{noResultMessage}</Message>
      <Wrapper noResult>
        <NoResultsPicture />
      </Wrapper>
    </>
  );
};

export default NoResults;