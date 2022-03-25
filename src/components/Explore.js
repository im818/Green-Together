import { explorePublications } from "../lens-actions/explore-publications";
import ProfileForm from "./ProfileForm";

class Explore extends ProfileForm {

    handleSubmit(event) {
        explorePublications({
            "sortCriteria": "TOP_COLLECTED",
            "limit": 10
        }
        )
        event.preventDefault();
    }

    render() {
        return (
            <button type="submit" value="Explore" />
        );
    }
}

export default Explore;