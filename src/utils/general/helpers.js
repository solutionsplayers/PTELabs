// export const replacePlaceholders = (text, correctArray) => {
//   const parts = text.split(/(=====)/g);
//   let correctIndex = 0;

//   return parts.map((part, index) => {
//     if (part === "=====") {
//       const correctAnswer =
//         correctIndex < correctArray.length ? correctArray[correctIndex] : "";
//       correctIndex++;
//       return (
//         <span
//           key={index}
//           style={{
//             backgroundColor: "lightblue",
//             padding: "2px 4px",
//             borderRadius: "4px",
//           }}
//         >
//           {correctAnswer.toUpperCase()}
//         </span>
//       );
//     }
//     return part;
//   });
// };

export const processQuestions = (data, replacePlaceholders, correct) =>
  data.map((question) => {
    const optionsArray = correct ? question.correct : question.ans;
    const quesParts = question.ques.split(/(=====)/g);
    const processedQues = replacePlaceholders(quesParts.join(""), optionsArray);

    return {
      ...question,
      ques: processedQues,
    };
  });
