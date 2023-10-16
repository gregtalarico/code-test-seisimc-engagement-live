const usersToSkills = require('./skills');

const sampleData = [
    {
        "userId": "a1",
        "name": "Alice",
        "skills": ["JavaScript", "React", "TypeScript", "CSS"]
    },
    {
        "userId": "b2",
        "name": "Bob",
        "skills": ["Angular", "TypeScript", "JavaScript"]
    },
    {
        "userId": "c3",
        "name": "Charlie",
        "skills": ["Vue", "CSS", "JavaScript"]
    }
]


describe("usersToSkills", () => {
    it("works with the sample data", () => {
        const result = usersToSkills(sampleData);
        expect(result['JavaScript']).toContain("Alice");
        expect(result['JavaScript']).toContain("Bob");
        expect(result['JavaScript']).toContain("Charlie");
        expect(result['JavaScript'].length).toBe(3);
        expect(result['React']).toContain("Alice");
        expect(result['React'].length).toBe(1);
        expect(result['Angular']).toContain("Bob");
        expect(result['Angular'].length).toBe(1);
        expect(result['TypeScript']).toContain("Alice");
        expect(result['TypeScript']).toContain("Bob");
        expect(result['TypeScript'].length).toBe(2);
        expect(result['Vue']).toContain("Charlie");
        expect(result['Vue'].length).toBe(1);
        expect(result['CSS']).toContain("Alice");
        expect(result['CSS']).toContain("Charlie");
        expect(result['CSS'].length).toBe(2);
    });

    it("works with empty data", () => {
        const result = usersToSkills([]);
        expect(result).toEqual({});
    });

    it("works with incorrect data", () => {
        const result = usersToSkills(null);
        expect(result).toEqual(null);
    });

});