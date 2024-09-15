import { useFeedbackItemsStore } from "../../store/feedbackItemsStore";
import FeedbackForm from "../feedback/FeedbackForm";
import PageHeading from "../PageHeading";
import Pattern from "../Pattern";

export default function Header() {
  const addItemToList = useFeedbackItemsStore((state) => state.addItemToList);

  return (
    <header>
      <Pattern />
      <a href="/" className="logo">
        <h1 style={{ marginBottom: "1rem" }}>opinionOrbit</h1>
      </a>
      <PageHeading />
      <FeedbackForm onAddToList={addItemToList} />
    </header>
  );
}
