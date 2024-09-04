import React from "react";
import EmailForm from "../components/EmailForm";
import DiscussionList from "../components/DiscussionList";
import { discussions } from "../data/discussions";
import './DiscussionPage.css';

const DiscussionPage: React.FC = () => {
    return (
        <div className="discussion-page">
            <h1>Discussion Page</h1>
            <DiscussionList discussions={discussions} />
            <div className="email-form">
                <EmailForm />
            </div>
        </div>
    );
};

export default DiscussionPage;