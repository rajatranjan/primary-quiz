import React, { useRef } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import Carousel from "react-native-snap-carousel";

const { width } = Dimensions.get("window");

const RenderQuestion = ({ item, index }) => {
  return (
    <View key={item.question}>
      <Text>{item.question}</Text>
      {item.answers.map((a) => (
        <View key={a.text}>
          <Text>{a.text}</Text>
        </View>
      ))}
    </View>
  );
};

const QuestionList = ({ questions }) => {
  const ref = useRef(null);
  return (
    <Carousel
      layout={"default"}
      ref={ref}
      data={questions}
      sliderWidth={width}
      itemWidth={width}
      renderItem={RenderQuestion}
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
