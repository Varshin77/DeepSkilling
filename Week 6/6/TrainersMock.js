import Trainer from "./trainer";

const trainers = [
    new Trainer(1, "Rishi",
        "rishi@example.com",
        "123-456-7890",
        "React",
        ["React", "JavaScript", "CSS"]),
    new Trainer(2,
        "Kesh",
        "keshh@example.com",
        "987-654-3210",
        "Java",
        ["Java", "Spring Boot", "Hibernate"]),
    new Trainer(3,
        "Rike",
        "rike@example.com",
        "555-666-7777",
        "Python",
        ["Python", "Django", "Flask"]),
];

export default trainers;
