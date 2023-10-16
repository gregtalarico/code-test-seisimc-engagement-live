## Background:
For the purpose of rendering components in an efficient manner, it's often necessary to transform the raw data retrieved from APIs into a format that is optimized for the UI. In this test, you're expected to write a transformation function that translates an input data structure into a specifically desired output format.

## Task Description:
### Input Data Structure:
You're given an array of objects representing a list of users and their skill sets, in the following format:

```
[
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

```

### Desired Output Data Structure:
You are required to transform the input into an object where keys are skill names and values are arrays of user names who have that skill, in the following format:

```
{
    "JavaScript": ["Alice", "Charlie", "Bob"],
    "React": ["Alice"],
    "Angular": ["Bob"],
    "TypeScript": ["Alice", "Bob"],
    "Vue": ["Charlie"],
    "CSS": ["Alice, "Charlie"]
}
```

## Requirements:
1. The function should take an array of user objects as an argument and return an object.
2. The function should be able to handle any number of users and skills in the input array.
3. Update the `usersToSkills` function in `./skills.ts` with your solution. 

