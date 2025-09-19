import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
//DONE
export function getPublishedQuestions(questions: Question[]): Question[] {
    let retArr: Question[] = questions.filter(
        (q: Question): boolean => q.published,
    );
    return retArr;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
//DONE
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    let retArr: Question[] = questions.filter(
        (q: Question): boolean =>
            !(q.body === "" && q.expected === "" && q.options.length === 0),
    );
    return retArr;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
//DONE
export function findQuestion(
    questions: Question[],
    id: number,
): Question | null {
    const retQ = questions.find((q: Question): boolean => q.id === id);
    if (retQ) return retQ;
    return null;
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
//DONE
export function removeQuestion(questions: Question[], id: number): Question[] {
    let retArr: Question[] = questions.filter(
        (q: Question): boolean => !(q.id === id),
    );
    return retArr;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
//DONE
export function getNames(questions: Question[]): string[] {
    let retArr: string[] = questions.map((q: Question): string => q.name);
    return retArr;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
//DONE
export function sumPoints(questions: Question[]): number {
    let sum: number = questions.reduce(
        (current: number, q: Question) => current + q.points,
        0,
    );
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
//DONE
export function sumPublishedPoints(questions: Question[]): number {
    let sum: number = questions.reduce(
        (current: number, q: Question) =>
            q.published ? current + q.points : current + 0,
        0,
    );
    return sum;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
//DONE
export function toCSV(questions: Question[]): string {
    const retStr = questions
        .map(
            (q: Question): string =>
                `${q.id},${q.name},${q.options.length},${q.points},${q.published}`,
        )
        .join("\n");
    return "id,name,options,points,published\n" + retStr;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
//DONE
export function makeAnswers(questions: Question[]): Answer[] {
    let retArr: Answer[] = questions.map(
        (q: Question): Answer => ({
            questionId: q.id,
            text: "",
            submitted: false,
            correct: false,
        }),
    );
    return retArr;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
//DONE
export function publishAll(questions: Question[]): Question[] {
    let retArr: Question[] = questions.map(
        (q: Question): Question => ({ ...q, published: true }),
    );
    return retArr;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
//DONE
export function sameType(questions: Question[]): boolean {
    let Arr: Question[] = questions.filter(
        (q: Question): boolean => q.type === questions[0].type,
    );
    if (Arr.length === questions.length) {
        return true;
    }
    return false;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
//DONE
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType,
): Question[] {
    let retArr: Question[] = [...questions, makeBlankQuestion(id, name, type)];

    return retArr;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
//DONE
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string,
): Question[] {
    /*const t = questions.find((q: Question): boolean => q.id === targetId);
    t.name = newName;*/
    let retArr: Question[] = questions.map(
        (q: Question): Question =>
            q.id === targetId ? { ...q, name: newName } : { ...q },
    );

    return retArr;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
//DONE
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType,
): Question[] {
    let retArr: Question[] = questions.map(
        (q: Question): Question =>
            q.id === targetId ?
                newQuestionType != "multiple_choice_question" ?
                    { ...q, type: newQuestionType, options: [] }
                :   { ...q, type: newQuestionType }
            :   { ...q },
    );
    return retArr;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
//DONE
export function helperFunc(
    opt: string[],
    targetOptionIndex: number,
    newOption: string,
): string[] {
    return targetOptionIndex === -1 ?
            [...opt, newOption]
        :   opt.map((o, i) => (i === targetOptionIndex ? newOption : o));
}
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string,
): Question[] {
    let retArr: Question[] = questions.map(
        (q: Question): Question =>
            q.id != targetId ?
                { ...q }
            :   {
                    ...q,
                    options: helperFunc(
                        q.options,
                        targetOptionIndex,
                        newOption,
                    ),
                },
    );
    return retArr;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
//DONE
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number,
): Question[] {
    return questions.reduce((acc: Question[], q: Question) => {
        acc.push(q);
        if (q.id === targetId) {
            acc.push(duplicateQuestion(newId, q));
        }
        return acc;
    }, []);
}
