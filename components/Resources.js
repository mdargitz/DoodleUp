import React from 'react';
import { Text, ImageBackground, View, ScrollView } from 'react-native';
import ResourceCard from './ResourceCard';

export default class Resources extends React.Component {
  render() {
    return (
      <ImageBackground
        source={{ uri: 'https://image.ibb.co/cJfEwd/mesh_1430107_640.png' }}
        style={{ height: '100%', width: '100%' }}
      >
        <View style={styles.viewStyle}>
          <Text style={styles.headerText}> Need to brush up on some skills?</Text>
          <Text style={styles.subtitleText}>Take a look at our currated list of tutorials!</Text>
        </View>
        <ScrollView>
          <Text style={styles.sectionTitle}>Gesture Drawing</Text>
          <ResourceCard
            title='Introduction to Gessture Drawing'
            url='https://www.sophia.org/tutorials/introduction-to-gesture-drawing'
            image='https://sophialearning.s3.amazonaws.com/packet_logos/202783/large/Quick_gesture_drawings.jpg'
          />
          <ResourceCard
            title='Beginner Gesture Drawing'
            url='https://www.youtube.com/watch?v=qdtw6JCQxx8'
            image='http://th09.deviantart.net/fs70/PRE/i/2010/125/0/b/Gesture_Drawing_Studies_by_studionap.jpg'
          />
          <Text style={styles.sectionTitle}> Drawing from Life</Text>
          <ResourceCard
            title='How to Draw What You See'
            url='http://emptyeasel.com/2006/12/08/how-to-draw-what-you-see-techniques-and-tips-to-improve-your-drawing-skills/'
            image='http://emptyeasel.com/wp-content/uploads/2013/08/sketch9-full-range-of-values-large-1.jpg'
          />
          <ResourceCard
            title='Still Life with Pencil'
            url='http://www.artyfactory.com/still-life/still_life_pencil.html'
            image='http://www.artyfactory.com/still-life/images/still_life_pencil_8.jpg'
          />
          <Text style={styles.sectionTitle}>Artistic Concepts</Text>
          <ResourceCard
            title='How to Draw What You See'
            url='http://emptyeasel.com/2006/12/08/how-to-draw-what-you-see-techniques-and-tips-to-improve-your-drawing-skills/'
            image='https://cms-assets.tutsplus.com/uploads/users/108/posts/24486/final_image/think-with-forms-final.png'            
          />
          <ResourceCard
            title='The Beginning Artists Guide to Perspective Drawing'
            url='https://www.artistsnetwork.com/art-mediums/drawing/learn-to-draw-perspective/'
            image='https://www.artistsnetwork.com/wp-content/uploads/2017/06/OnePointPerspectiveReference.png'
          />
          <ResourceCard
            title='A Theory of Light and Shade'
            url='http://www.artinstructionblog.com/drawing-lesson-a-theory-of-light-and-shade'
            image='http://www.artinstructionblog.com/wp-content/uploads/2009/08/values-sheridoty-2009_img_4-300x184.jpg'
          />
          <ResourceCard
            title='The Human Face'
            url='https://design.tutsplus.com/tutorials/human-anatomy-fundamentals-basics-of-the-face--cms-20417'
            image='https://cms-assets.tutsplus.com/uploads/users/110/posts/20417/image/face-front.jpg'
          />
        </ScrollView>
      </ImageBackground>

    );
  }
}

const styles = {
  viewStyle: {
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  headerText: {
    textAlign: 'center',
    color: '#fff',
    paddingTop: 10,
    fontSize: 30,
    fontWeight: '800'
  },
  subtitleText: {
    textAlign: 'center',
    color: '#fff',
    paddingBottom: 10,
    fontSize: 20
  },
  sectionTitle: {
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,.5)',
    fontSize: 25,
    padding: 10,
    textAlign: 'center'
  }
};