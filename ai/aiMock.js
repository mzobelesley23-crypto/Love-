// ai/aiMock.js

export async function getSolution({ grade, subject, language, problem_text }) {
    const knownInputs = {
        "5th grade": {
            "math": {
                "en": {
                    "What is 2 + 2?": { "solution": 4 },
                },
            },
        },
        // Add more known inputs as needed
    };

    const gradeData = knownInputs[grade];
    if (gradeData) {
        const subjectData = gradeData[subject];
        if (subjectData) {
            const languageData = subjectData[language];
            if (languageData) {
                return languageData[problem_text] || { "error": "Unknown problem text" };
            }
        }
    }

    return { "error": "Input not recognized" };
}