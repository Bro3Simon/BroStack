import React, { Component } from 'react';
import Card from '../ClientWork/Card';

class ClientWork extends Component {

    work = [
        {
            name: "Islam Uruguay",
            image: "images/IslamUruguay.jpg",
            href: "http://islamuruguay.com",
            description: "A WordPress site designed, developed and launched for a non-profit in South America."
        },
        {
            name: "Game Trainer",
            image: "images/GameTrainer.jpg",
            href: "https://brostack.net/game",
            description: "A landing page designed and developed for a gaming company, as a portal entrance for Skillsoft's training software."
        },
        {
            name: "gtd.",
            image: "images/gtd.jpg",
            href: "https://brostack.net/gtd",
            description: "A sample landing page designed and developed for a photography company."
        },

    ];

    workItems = this.work.map((work, index) =>
        <Card
            key={index}
            name={work.name}
            image={work.image}
            href={work.href}
            description={work.description} />
    )

    render() {
        return (
            <div className="hidden" id="clientWork">
                <div className="row justify-content-around">
                    {this.workItems}
                </div>
            </div>
        )
    }
}

export default ClientWork;