import React from 'react';

interface Discussion {
    id: number;
    title: string;
    content: string;
    author: string;
    date: string;
}

interface DiscussionListProps {
    discussions: Discussion[];
}

const DiscussionList: React.FC<DiscussionListProps> = ({ discussions }) => {
    return (
        <div className="discussion-list">
            <h2>Discussions</h2>
            {discussions.length > 0 ? (
                <ul>
                    {discussions.map((discussion) => (
                        <div key={discussion.id} className="discussion-item">
                            <h3>{discussion.title}</h3>
                            <p>{discussion.content}</p>
                            <small>— {discussion.author}, {discussion.date}</small>
                        </div>
                    ))}
                </ul>
            ) : (
                <p>No discussions available yet.</p>
            )}
        </div>
    );
};

export default DiscussionList;