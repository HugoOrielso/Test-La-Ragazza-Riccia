export async function getAllquestions() {
    const res = await fetch("http://localhost:5173/test.json")
    const { responses } = await res.json()
    const questions = responses
    return questions
}