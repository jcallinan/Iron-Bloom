import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { goals } from '../data/mockData';

const COLORS = {
  primary: '#2D4A3E',
  background: '#FAF8F4',
  card: '#FFFFFF',
  text: '#1A1A1A',
  subtext: '#7A8C86',
  border: '#EDE8E0',
};

export default function GoalSettingScreen() {

  // Tracks which goal card the user has tapped — starts as null (nothing selected)
  const [selectedGoal, setSelectedGoal] = useState(null);

  // Tracks whether the user has hit save — used to show the confirmation message
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    if (selectedGoal) setSaved(true);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.appName}>IRON BLOOM</Text>
        <Text style={styles.headerTitle}>Set Your Goal</Text>
        <Text style={styles.headerSub}>Choose what you want to focus on</Text>
      </View>

      {/* Instruction text */}
      <View style={styles.introRow}>
        <Text style={styles.introText}>Select one goal to personalize your experience</Text>
      </View>

      {/* Goal cards */}
      <View style={styles.section}>
        {goals.map((goal, index) => (
          <TouchableOpacity
            key={goal.id}
            // Apply active style if this goal is selected
            style={[styles.goalCard, selectedGoal?.id === goal.id && styles.goalCardActive]}
            onPress={() => {
              setSelectedGoal(goal);
              setSaved(false); // Reset confirmation if user switches goals
            }}
          >
            {/* Goal number */}
            <View style={styles.goalIndex}>
              <Text style={styles.goalIndexText}>{index + 1}</Text>
            </View>

            <Text style={[styles.goalText, selectedGoal?.id === goal.id && styles.goalTextActive]}>
              {goal.label}
            </Text>

            {/* Checkmark only shows on the selected goal */}
            {selectedGoal?.id === goal.id && (
              <View style={styles.checkCircle}>
                <Text style={styles.checkmark}>✓</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>

      {/* Save button — only shows once a goal is selected */}
      {selectedGoal && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
            <Text style={styles.saveBtnText}>Save Goal</Text>
          </TouchableOpacity>

          {/* Confirmation message — only shows after saving */}
          {saved && (
            <Text style={styles.savedMsg}>✅ Goal saved: {selectedGoal.label}</Text>
          )}
        </View>
      )}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },

  header: {
    backgroundColor: COLORS.primary,
    padding: 32,
    paddingTop: 64,
    paddingBottom: 36,
  },
  appName: {
    fontSize: 11,
    fontWeight: '700',
    color: '#7FB89A',
    letterSpacing: 4,
    marginBottom: 18,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.3,
  },
  headerSub: {
    fontSize: 13,
    color: '#A8C4B4',
    marginTop: 6,
  },

  introRow: {
    paddingHorizontal: 20,
    paddingTop: 22,
    paddingBottom: 4,
  },
  introText: {
    fontSize: 13,
    color: COLORS.subtext,
    letterSpacing: 0.2,
  },

  section: { paddingHorizontal: 20, paddingTop: 12 },

  // Goal cards
  goalCard: {
    backgroundColor: COLORS.card,
    borderRadius: 16,
    padding: 18,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: 'transparent', // Transparent so size doesn't shift when selected
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  goalCardActive: {
    borderColor: COLORS.primary,
    backgroundColor: '#F0F7F4', // Very light green tint when selected
  },
  goalIndex: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#EAF2EE',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },
  goalIndexText: {
    fontSize: 12,
    fontWeight: '700',
    color: COLORS.primary,
  },
  goalText: {
    fontSize: 16,
    color: COLORS.text,
    fontWeight: '500',
    flex: 1, // Takes up remaining space, pushes checkmark to the right
  },
  goalTextActive: {
    color: COLORS.primary,
    fontWeight: '700',
  },
  checkCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },

  // Save button
  buttonContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  saveBtn: {
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
  saveBtnText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  savedMsg: {
    textAlign: 'center',
    marginTop: 16,
    color: COLORS.primary,
    fontSize: 14,
    fontWeight: '600',
  },
});