import ErrorMessage from "../common/ErrorMessage";
import Wrapper from "../common/Wrapper";
import { ReactComponent as NoResultsPicture } from "./no_results.svg";

const NoResults = () => {
  return (
    <>
      <ErrorMessage search>Sorry, there are no results for “Muan”</ErrorMessage>
      <Wrapper>
        <NoResultsPicture />
      </Wrapper>
    </>
  );
};

export default NoResults;