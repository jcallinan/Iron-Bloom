import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

const COLORS = {
  primary: '#2D4A3E',
  background: '#FAF8F4',
  card: '#FFFFFF',
  text: '#1A1A1A',
  subtext: '#7A8C86',
  border: '#EDE8E0',
};

// route.params contains the workout object passed from the previous screen
export default function WorkoutDetailScreen({ route, navigation }) {
  const { workout } = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 50 }}>

      {/* Header with back button */}
      <View style={styles.header}>
        {/* Goes back to the previous screen */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>

        {/* Category badge */}
        <View style={styles.tag}>
          <Text style={styles.tagText}>{workout.category.toUpperCase()}</Text>
        </View>

        <Text style={styles.headerTitle}>{workout.title}</Text>
        <Text style={styles.headerMeta}>{workout.duration} · {workout.level}</Text>
      </View>

      {/* About section */}
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>ABOUT</Text>
        <View style={styles.card}>
          <Text style={styles.bodyText}>{workout.description}</Text>
        </View>
      </View>

      {/* Tips section */}
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>MOVEMENT TIPS</Text>
        <View style={styles.tipCard}>
          {/* Light bulb icon as a visual accent */}
          <Text style={styles.tipIcon}>💡</Text>
          <Text style={styles.bodyText}>{workout.tips}</Text>
        </View>
      </View>

      {/* Exercise list */}
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>EXERCISES</Text>

        {/* Loop through the exercises array */}
        {workout.exercises.map((ex, index) => (
          <View key={index} style={styles.exerciseRow}>
            {/* Number circle — borderRadius half of width/height makes it round */}
            <View style={styles.exerciseNum}>
              <Text style={styles.exerciseNumText}>{index + 1}</Text>
            </View>
            <Text style={styles.exerciseName}>{ex}</Text>
          </View>
        ))}
      </View>

      {/* Start workout button */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.startBtn}>
          <Text style={styles.startBtnText}>Begin Workout  ▶</Text>
        </TouchableOpacity>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },

  // Header
  header: {
    backgroundColor: COLORS.primary,
    padding: 28,
    paddingTop: 64,
    paddingBottom: 36,
  },
  backBtn: { marginBottom: 20 },
  backText: {
    color: '#A8C4B4',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.3,
  },
  tag: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.15)', // Semi-transparent white — glass effect
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginBottom: 14,
  },
  tagText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#A8C4B4',
    letterSpacing: 2,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.3,
  },
  headerMeta: {
    fontSize: 13,
    color: '#A8C4B4',
    marginTop: 8,
    letterSpacing: 0.3,
  },

  // Sections
  section: {
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  sectionLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.subtext,
    letterSpacing: 2,
    marginBottom: 12,
  },

  // Cards
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  tipCard: {
    backgroundColor: '#EAF2EE',  // Light green tint for the tips card
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  tipIcon: {
    fontSize: 18,
    marginRight: 12,
    marginTop: 2,
  },
  bodyText: {
    fontSize: 14,
    color: COLORS.text,
    lineHeight: 22,
    opacity: 0.8,
    flex: 1,
  },

  // Exercise rows
  exerciseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 1,
  },
  exerciseNum: {
    width: 30,
    height: 30,
    borderRadius: 15,           // Half of width/height = perfect circle
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  exerciseNumText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
  exerciseName: {
    fontSize: 15,
    color: COLORS.text,
    fontWeight: '500',
  },

  // Start button
  buttonContainer: {
    paddingHorizontal: 20,
    paddingTop: 28,
  },
  startBtn: {
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  },
  startBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});