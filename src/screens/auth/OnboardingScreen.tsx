import React, {useRef, useState} from 'react';
import {
  Dimensions,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {colors} from '../../utils/colors';

import OnboardingImage1 from '../../assets/images/onboarding/onboard_1.svg';
import OnboardingImage2 from '../../assets/images/onboarding/onboard_2.svg';
import OnboardingImage3 from '../../assets/images/onboarding/onboard_3.svg';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export default function OnboardingScreen({
  navigation,
}: NativeStackScreenProps<any, 'onboarding'>) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const slideRef = useRef<FlatList>(null);

  const {width} = Dimensions.get('window');

  const slides = [
    {
      id: 1,
      title: 'Manage your tasks',
      description:
        'You can easily manage all of your daily tasks in DoMe for free',
      image: <OnboardingImage1 />,
    },
    {
      id: 2,
      title: 'Create daily routine',
      description:
        'In Uptodo you can create your personalized routine to stay productive',
      image: <OnboardingImage2 />,
    },
    {
      id: 3,
      title: 'Orgonaize your tasks',
      description:
        'You can organize your daily tasks by adding your tasks into separate categories',
      image: <OnboardingImage3 />,
    },
  ];

  const handleNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;

    if (nextSlideIndex < slides.length) {
      slideRef.current?.scrollToIndex({index: nextSlideIndex});
      setCurrentSlideIndex(nextSlideIndex);
    }
  };

  const handlePrevSlide = () => {
    const prevSlideIndex = currentSlideIndex - 1;

    if (prevSlideIndex >= 0) {
      slideRef.current?.scrollToIndex({index: prevSlideIndex});
      setCurrentSlideIndex(prevSlideIndex);
    }
  };

  const updateCurrentScrollIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);

    setCurrentSlideIndex(currentIndex);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.onboardContainer}>
        <FlatList
          ref={slideRef}
          data={slides}
          onMomentumScrollEnd={updateCurrentScrollIndex}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => (
            <View
              style={{
                width,
                alignItems: 'center',
                paddingHorizontal: 24,
                paddingVertical: 12,
              }}>
              <View style={{marginBottom: 52}}>{item.image}</View>
              <View
                style={{
                  marginBottom: 50,
                  flexDirection: 'row',
                  justifyContent: 'center',
                  gap: 8,
                }}>
                {slides.map((_, index) => (
                  <View
                    key={index}
                    style={{
                      width: 27,
                      height: 4,
                      borderRadius: 100,
                      backgroundColor:
                        index === currentSlideIndex ? '#FFFFFF' : '#FFFFFF44',
                    }}
                  />
                ))}
              </View>
              <Text
                style={{
                  fontSize: 32,
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  marginBottom: 42,
                }}>
                {item.title}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  color: '#FFFFFF',
                  textAlign: 'center',
                }}>
                {item.description}
              </Text>
            </View>
          )}
        />
      </View>

      <View style={styles.buttonContainer}>
        {currentSlideIndex !== 0 ? (
          <TouchableOpacity
            activeOpacity={0.8}
            style={[
              styles.button,
              {
                backgroundColor: 'transparent',
              },
            ]}
            onPress={handlePrevSlide}>
            <Text
              style={[
                styles.buttonTitle,
                {
                  opacity: 0.44,
                },
              ]}>
              Back
            </Text>
          </TouchableOpacity>
        ) : (
          <View></View>
        )}
        {currentSlideIndex !== slides.length - 1 && (
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={handleNextSlide}>
            <Text style={styles.buttonTitle}>Next</Text>
          </TouchableOpacity>
        )}
        {currentSlideIndex === slides.length - 1 && (
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.button}
            onPress={() => {
              navigation.navigate('start');
            }}>
            <Text style={styles.buttonTitle}>Get Started</Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    justifyContent: 'space-between',
  },
  onboardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 4,
  },
  buttonTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    textTransform: 'uppercase',
  },
});
