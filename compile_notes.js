const fs = require('fs');
const path = require('path');

// Mock window object for Node.js eval
global.window = {};

// Read static data JS files
let notesCode = fs.readFileSync(path.join(__dirname, 'static/js/course_notes_data.js'), 'utf8');
let quiz1Code = fs.readFileSync(path.join(__dirname, 'static/js/quiz_data_1.js'), 'utf8');
let quiz2Code = fs.readFileSync(path.join(__dirname, 'static/js/quiz_data_2.js'), 'utf8');
let quiz3Code = fs.readFileSync(path.join(__dirname, 'static/js/quiz_data_3.js'), 'utf8');

// Assign to global scope instead of local block scope
notesCode = notesCode.replace('const courseNotesMap', 'global.courseNotesMap');
quiz1Code = quiz1Code.replace('const quizData1', 'global.quizData1');
quiz2Code = quiz2Code.replace('const quizData2', 'global.quizData2');
quiz3Code = quiz3Code.replace('const quizData3', 'global.quizData3');

// Evaluate them in global scope so we can access variables
eval(notesCode);
eval(quiz1Code);
eval(quiz2Code);
eval(quiz3Code);

// courseNotesMap, quizData1, quizData2, quizData3 are now defined
const mergedQuizzes = {
    ...(typeof quizData1 !== 'undefined' ? quizData1 : (global.quizData1 || {})),
    ...(typeof quizData2 !== 'undefined' ? quizData2 : (global.quizData2 || {})),
    ...(typeof quizData3 !== 'undefined' ? quizData3 : (global.quizData3 || {}))
};

const finalNotesMap = typeof courseNotesMap !== 'undefined' ? courseNotesMap : global.courseNotesMap;
for (const courseTitle of Object.keys(finalNotesMap)) {
    const courseData = finalNotesMap[courseTitle];
    const modules = [];

    for (const mod of courseData.modules) {
        const questions = (mergedQuizzes[courseTitle] && mergedQuizzes[courseTitle][mod.title]) || [];
        modules.push({
            title: mod.title,
            badge: mod.badge || 'Topic',
            notes: mod.notes || [],
            questions: questions.map(q => ({
                question: q.question,
                options: q.options || [],
                correct: q.correct,
                explanation: q.explanation || ''
            }))
        });
    }

    finalData[courseTitle] = { modules };
}

fs.writeFileSync(
    path.join(__dirname, 'notes_and_quizzes.json'), 
    JSON.stringify(finalData, null, 2), 
    'utf8'
);

console.log('Compiled notes_and_quizzes.json successfully!');
