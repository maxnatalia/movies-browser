import Message from "../common/Message";
import Wrapper from "../common/Wrapper";
import { ReactComponent as NoResultsPicture } from "../common/images/no_results.svg";

const NoResults = () => {
  return (
    <>
      <Message search>Sorry, there are no results for “Muan”</Message>
      <Wrapper noResult>
        <NoResultsPicture />
      </Wrapper>
    </>
  );
};

export default NoResults;