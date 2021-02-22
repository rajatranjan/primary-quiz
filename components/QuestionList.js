import React, { useRef, useState } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Carousel from "react-native-snap-carousel";
import RadioButtonRN from "radio-buttons-react-native";

const { width } = Dimensions.get("window");

const RenderQuestion = ({ item, index, onSelection }) => {
  // const [Result, setResult] = useState();
  let resultColor = "blue";
  if (item.selectionState === true) {
    resultColor = "green";
  } else if (item.selectionState === false) {
    resultColor = "red";
  }

  return (
    <View key={item.question}>
      <Text>{item.question}</Text>

      {/* <RadioButtonRN data={item.answers} selectedBtn={(e) => console.log(e)} /> */}
      <RadioButtonRN
        data={item.answers}
        // selectedBtn={(e) => answerHandler(e)}
        // selectedBtn={(e) => setResult(e.isCorrect)}
        selectedBtn={(e) => {
          console.log(JSON.stringify(e));
          onSelection(e.isCorrect, index);
        }}
      />
      <View
        style={{ width: 40, height: 50, backgroundColor: resultColor }}
      ></View>
    </View>
  );
};

const QuestionList = ({ questions }) => {
  const ref = useRef(null);

  const mappedQuestions = questions.map((q) => ({
    ...q,
    selectionState: null,
  }));
  const [questionsWithSelection, setQuestionsWithSelection] = useState(
    mappedQuestions
  );
  const handleSelection = (selectionState, index) => {
    const dup = [...questionsWithSelection];
    dup[index].selectionState = selectionState;
    setQuestionsWithSelection(dup);
  };

  return (
    <Carousel
      layout={"default"}
      ref={ref}
      data={questionsWithSelection}
      sliderWidth={width}
      itemWidth={width}
      renderItem={({ item, index }) => (
        <RenderQuestion
          item={item}
          index={index}
          onSelection={handleSelection}
        />
      )}
      //   onSnapToItem={(index) => this.setState({ activeIndex: index })}
    />
  );
};

// const QuestionList = ({ questions }) => {
//   return (
//     <View>
//       {questions.map((q) => {
//         return (
//           <View key={q.question}>
//             <Text>{q.question}</Text>
//             {q.answers.map((a) => (
//               <View key={a.text}>
//                 <Text>{a.text}</Text>
//               </View>
//             ))}
//           </View>
//         );
//       })}
//     </View>
//   );
// };

export default QuestionList;

const styles = StyleSheet.create({});
