import Message from "../Message";
import Wrapper from "../Wrapper";
import { ReactComponent as NoResultsPicture } from "../images/no_results.svg";

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