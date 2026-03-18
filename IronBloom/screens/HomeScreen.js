import React from 'react';
import { View,Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { workouts } from '../data/mockData';


//Color palette
const colors = {
    primary : '#2D4A3E',
    background: '#FAF8F4',
    card: '#FFFFFF',
    text: '#1A1A1A',
    subtext: '#7A8C86',
    accent: '#4A7A6A',
    border: '#EDE8E0',
};

export default function HomeScreen ({navigation}) {
    //Puts the first workout at the top of the home screen 
    const featuredWorkout = workouts[0];

    return (
        <ScrollView style= {styles.container} contentContainerStyle = {{paddingBottom:30}}>

            {/* hearder section */}
            <View style= {styles.header}>
                <Text style= {styles.appName}> IRON BLOOM</Text>
                <Text style= {styles.greeting}>WELCOME LADIES</Text>
                <Text style= {styles.subtitle}>ARE YOU READY TO BLOSSOM?</Text>
            </View>

        {/* Workout card */}
        <View style= {styles.section}>
            <Text style= {styles.sectionLabel}>Featured Workout</Text>

            <TouchableOpacity
                style = {styles.featuredCard}
                onPress= {()=> navigation.navigate('Workouts',{
                    screen: 'WorkoutDetail',
                    params: { workout : featuredWorkout},
                })}                
            >
                {/* tag showing workout level*/}
                <View style= {styles.tag}>
                    <Text style= {styles.featuredTitle}>{featuredWorkout.title}</Text>
                    <Text style= {styles.featuredMeta}>{featuredWorkout.description}</Text>
                </View>

                <Text style= {styles.featuredTitle}>{featuredWorkout.title}</Text>
                <Text style= {styles.featuredMeta}>{featuredWorkout.duration} . {featuredWorkout.category}</Text>
                <Text styles= {styles.featuredDesc}>{featuredWorkout.description}</Text>

                {/*Start Button*/}
                <View style= {styles.section}>
                    <Text style= {styles.startBtn}>Let' Get Started</Text>
                    <Text style= {styles.arrow}> → </Text>
                </View>
            </TouchableOpacity>
        </View>

        <View style= {styles.section}>
            <Text style= {styles.sectionLabel}>Next</Text>

            {/* .slice(1) skips the first workout since its already featured above*/}
            {workouts.slice(1).map((w) => (
                <TouchableOpacity 
                    key={ w. id} //React needs a uniique key when rendering lists
                    style = {styles.listCard}
                    onPress={ () => navigation.navigate('Workouts' , {
                        screen : 'WorkoutDetail',
                        paramas : {workout: w},
                    })}
                >
                    <View style = { styles.listCardLeft}>
                        {/*colored dots that indicate the category*/}
                        <View style = {styles.dot} />
                        <View>
                            <Text style = {styles.lsitTitile}>{w.title}</Text>
                            <Text style = { styles.listMeta}>{w.category} . {w.duration} </Text>
                        </View>
                    </View>
                    <Text stlye= { styles.listArrow}> → </Text> 
                </TouchableOpacity>
            ))}
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  // Header styles
  header: {
    backgroundColor: colors.primary,
    padding: 32,
    paddingTop: 64,
    paddingBottom: 36,
  },
  appName: {
    fontSize: 13,
    fontWeight: '700',
    color: '#7FB89A',       // Lighter green for the app name 
    letterSpacing: 4,       // Wide letter spacing 
    marginBottom: 20,
  },
  greeting: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.3,
  },
  subtitle: {
    fontSize: 14,
    color: '#A8C4B4',
    marginTop: 6,
    letterSpacing: 0.2,
  },
  // Section styles
  section: {
    paddingHorizontal: 20,
    paddingTop: 28,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.subtext,
    letterSpacing: 2,       // Wide tracking gives it that editorial magazine look
    marginBottom: 14,
  },

  // Featured card styles
  featuredCard: {
    backgroundColor: colors.card,
    borderRadius: 20,
    padding: 24,
    // Shadow creates the floating glass panel effect
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 16,
    elevation: 4,
  },
  tag: {
    alignSelf: 'flex-start',
    backgroundColor: '#EAF2EE',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginBottom: 14,
  },
  tagText: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.primary,
    letterSpacing: 1,
  },
  featuredTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.text,
    letterSpacing: 0.2,
  },
  featuredMeta: {
    fontSize: 13,
    color: colors.subtext,
    marginTop: 6,
    letterSpacing: 0.3,
  },
  featuredDesc: {
    fontSize: 14,
    color: colors.text,
    marginTop: 12,
    lineHeight: 22,
    opacity: 0.75,
  },
  featuredFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  startBtn: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
    letterSpacing: 0.5,
  },
  arrow: {
    fontSize: 16,
    color: colors.primary,
    marginLeft: 8,
  },

  // List card styles
  listCard: {
    backgroundColor: colors.card,
    borderRadius: 14,
    padding: 18,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  listCardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,            // Perfect circle
    backgroundColor: colors.primary,
    marginRight: 14,
    opacity: 0.6,
  },
  listTitle: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
    letterSpacing: 0.1,
  },
  listMeta: {
    fontSize: 12,
    color: colors.subtext,
    marginTop: 3,
    letterSpacing: 0.2,
  },
  listArrow: {
    fontSize: 20,
    color: colors.subtext,
  },
});