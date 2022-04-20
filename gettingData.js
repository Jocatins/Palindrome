const Questions_Api_Base_Url = "https://www.algoexpert.io/apo/fe/questions";

async function fetchQuestions() {
  const response = await fetch(Questions_Api_Base_Url);
  const questions = await response.json();
  return questions;
}
function getQuestionsByCategory(questions) {
  const getQuestionsByCategory = {};
  questions.forEach((question) => {
    if (questionsByCategory.hasOwnProperty(question.category)) {
      questionsByCategory[question.category].push(question);
    } else {
      questionsByCategory[question.category] = [question];
    }
  });
  return questionsByCategory;

  // Creating divs and classes with js codes
  function createCategory(category, questions) {
      const categoryDiv = document.createElement('div')
      categoryDiv.classList.add('category')
      const h2 = document.createElement('h2')
      h2.textContent = category
      
      questions.forEach(question => {
          const questionDiv = document.createElement('div')
          questionDiv.classList.add('question')
          const h3 = document.createElement('h3')
          h3.textContent = question.name
          questionDiv.append(h3)
          categoryDiv.append(questionDiv)
      })
      return categoryDiv;
}
// wrapper function
// async function fetchAndAppendQuestions() {
//     const questions =await fetchQuestions()
//     const questionsByCategory = getQuestionsByCategory(questions)
// }
 