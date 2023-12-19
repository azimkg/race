import React, { ReactElement } from 'react';
import NewLetter from 'common/newLetter/NewLetter';
import CodingExersice from 'components/common/codingLesson/CodingExersice';
import StandartExersice from 'components/common/standartLesson/StandartExersice';
import TestExersice from 'components/common/testLesson/TestExersice';
import ExerciseLetterFall from 'components/lesson/exerciseLetterFall/ExerciseLetterFall';
import NavbarLesson from 'components/lesson/navbarLesson/NavbarLesson';
import NewLetterStart from 'components/lesson/newLetterStart/NewLetterStart';
import { getExerciseType } from 'models/exercise/selectors/exerciseSelectors';
import { ExerciseType } from 'models/exercise/types/exerciseSchema';
import { useParams } from 'next/navigation';
import { useSelector } from 'react-redux';
import ProgressExecuted from '../progressExecuted/ProgressExecuted';
import ProgressTimer from '../progressTimer/ProgressTimer';


const contentPage = new Map<ExerciseType, ReactElement>([
  [ ExerciseType.NEW_LETTER_START, <NewLetterStart key={1} /> ],
  [ ExerciseType.NEW_LETTER, <NewLetter key={2} /> ],
  [ ExerciseType.STANDARD, <StandartExersice key={3} /> ],
  [ ExerciseType.DROP_LETTER, <ExerciseLetterFall key={4} /> ],
  [ ExerciseType.CODING, <CodingExersice key={5} /> ],
  [ ExerciseType.TEST, <TestExersice key={6} /> ]
]);
const ExerciseTypeContent = () => {
  const { type: routeType, lesson } = useParams<{ type: string, lesson: string }>();
  const exerciseType = useSelector(getExerciseType);
  const component = contentPage.get(exerciseType);
  return (
    <div>
      <NavbarLesson />
      {lesson === '5' ?
        <ProgressTimer time={60} /> :
        <ProgressExecuted />}
      {component}
    </div>
  );
};

export default ExerciseTypeContent;
