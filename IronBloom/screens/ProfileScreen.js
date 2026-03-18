import React, { useState } from 'react';
// TextInput is the component that lets users type into a field
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const COLORS = {
  primary: '#2D4A3E',
  background: '#FAF8F4',
  card: '#FFFFFF',
  text: '#1A1A1A',
  subtext: '#7A8C86',
  border: '#EDE8E0',
};

export default function ProfileScreen() {

  // State for the name text field — empty string = blank input
  const [name, setName] = useState('');

  // State for the age text field
  const [age, setAge] = useState('');

  // Tracks if the user has saved — used to show confirmation and update header
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    // .trim() removes any leading/trailing spaces before checking
    if (name.trim()) setSaved(true);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>

      {/* Header — shows user's name once saved */}
      <View style={styles.header}>
        <Text style={styles.appName}>IRON BLOOM</Text>

        {/* Avatar circle with initial — shows first letter of name once saved */}
        <View style={styles.avatarCircle}>
          <Text style={styles.avatarText}>
            {saved && name ? name.charAt(0).toUpperCase() : '?'}
          </Text>
        </View>

        {/* Shows saved name in header, or default text if not yet saved */}
        <Text style={styles.headerTitle}>{saved && name ? name : 'Your Profile'}</Text>
        <Text style={styles.headerSub}>Manage your personal info</Text>
      </View>

      {/* Form section */}
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>PERSONAL INFO</Text>

        <View style={styles.card}>
          {/* Name field */}
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor={COLORS.subtext}
            value={name}                  // Controlled input — tied to state
            onChangeText={(text) => {     // Fires every time user types a character
              setName(text);
              setSaved(false);            // Reset saved status if they edit
            }}
          />

          {/* Divider between fields */}
          <View style={styles.fieldDivider} />

          {/* Age field */}
          <Text style={styles.label}>Age</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your age"
            placeholderTextColor={COLORS.subtext}
            keyboardType="numeric"        // Shows number pad on mobile
            value={age}
            onChangeText={(text) => {
              setAge(text);
              setSaved(false);
            }}
          />
        </View>

        {/* Save button */}
        <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
          <Text style={styles.saveBtnText}>Save Profile</Text>
        </TouchableOpacity>

        {/* Confirmation — only visible after saving */}
        {saved && (
          <Text style={styles.savedMsg}>✅ Profile saved!</Text>
        )}
      </View>

      {/* About section */}
      <View style={styles.section}>
        <Text style={styles.sectionLabel}>ABOUT</Text>
        <View style={styles.aboutCard}>
          <Text style={styles.aboutTitle}>Iron Bloom</Text>
          <Text style={styles.aboutText}>
            Designed for women of all body types and abilities to begin and grow
            their fitness journey — free, accessible, and at their own pace. 💚
          </Text>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },

  // Header
  header: {
    backgroundColor: COLORS.primary,
    padding: 32,
    paddingTop: 64,
    paddingBottom: 36,
    alignItems: 'center',   // Centers everything horizontally
  },
  appName: {
    fontSize: 11,
    fontWeight: '700',
    color: '#7FB89A',
    letterSpacing: 4,
    marginBottom: 20,
    alignSelf: 'flex-start', // Keeps the app name left-aligned even though header is centered
  },
  avatarCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,           // Half of width/height = circle
    backgroundColor: 'rgba(255,255,255,0.15)', // Glass effect
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
    borderWidth: 1.5,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  avatarText: {
    fontSize: 26,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.3,
  },
  headerSub: {
    fontSize: 13,
    color: '#A8C4B4',
    marginTop: 6,
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

  // Form card
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
  label: {
    fontSize: 11,
    fontWeight: '700',
    color: COLORS.subtext,
    letterSpacing: 1,
    marginBottom: 8,
  },
  input: {
    fontSize: 15,
    color: COLORS.text,
    paddingVertical: 10,
    fontWeight: '500',
  },
  fieldDivider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginVertical: 14,
  },

  // Save button
  saveBtn: {
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: 'center',
    marginTop: 14,
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

  // About card
  aboutCard: {
    backgroundColor: '#EAF2EE',
    borderRadius: 16,
    padding: 20,
  },
  aboutTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: COLORS.primary,
    letterSpacing: 0.5,
    marginBottom: 8,
  },
  aboutText: {
    fontSize: 14,
    color: COLORS.text,
    lineHeight: 22,
    opacity: 0.8,
  },
});