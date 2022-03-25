import { createProfile } from "../lens-actions/create-profile";
import { Component } from "react";

class ProfileForm extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A username was submitted: ' + this.state.value);
        createProfile({
            handle: this.state.value,
            profilePictureUri: null,
            followModule: {
                emptyFollowModule: true
            }
        }
        )
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default ProfileForm;