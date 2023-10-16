/*
 * Add your solution to the `flattenSkills` function below.
 * It’s more important for the return value to be correct than it is for the algorithm to be highly optimized.
 * You should not change function names or return types of the provided functions since our test cases depend on those not changing.
 */

interface User {
    "userId": string
    "name": string
    "skills": string[]
    "subordinates"?: User[]
}

interface FlattenedSkills {
    [skill: string]: User["name"][]
}

const flattenSkills = (users: User) => {
    // Your code goes here
}


module.exports = flattenSkills;
