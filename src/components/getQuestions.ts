export async function getAllquestions() {
    const res = await fetch("https://test-la-ragazza-riccia.vercel.app/test.json")
    const { responses } = await res.json()
    const questions = responses
    return questions
}