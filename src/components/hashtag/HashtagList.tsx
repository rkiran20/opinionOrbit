import { useFeedbackItemsStore } from "../../store/feedbackItemsStore";
import HashtagItem from "./HashtagItem";

export default function HashtagList() {
  const companyList = useFeedbackItemsStore((state) => state.getCompanyList());
  console.log(companyList);
  const selectCompany = useFeedbackItemsStore((state) => state.selectCompany);

  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashtagItem
          key={company}
          company={company}
          onSelectedCompany={selectCompany}
        />
      ))}
    </ul>
  );
}
