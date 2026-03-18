import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { workouts } from '../data/mockData';

const colors = {
    primary: '#2D4A3E',
    background: '#FAF8F4',
    card: '#FFFFFF',
    text: '#1A1A1A',
    subtext: '#7A8C86',
    border: '#EDE8E0',

};

//Category filter options
const categories = ['All', 'Strength', 'Cardio', 'Core'];

export default function WorkoutLibraryScreen ({ navigation }) {
    //UseState teacks which filter button is currently selected
    const [ selectedCategory, setSelectedCategory] = useState ('All');

    //Filter workouts based on selected category 
    //if 'All' show everything, otherwise match by category name
    const filtered = selectedCategory === 'All' /// category is exactyly all
    ? workouts 
    : workouts.filter((w) => w.category === selectedCategory);

    return (
        <ScrollView style= {styles.container} contentContainerStyle= {{ paddingBottom: 30 }}>
            {/* Header*/}
            <View style= {styles.header}>
                <Text style= { styles.appName}> IRON BLOOM </Text>
                <Text style= { styles.headerTitle}>Movement Library</Text>
                <Text style= {styles.headerSub}>Find the right exercise for you !</Text>
            </View>

            {/*Category filter pills*/}
            <View style= {styles.filterRow}>
                {categories.map((cat) => (
                    <TouchableOpacity
                    key={cat}
                    //apply active syle if this selected
                    style={[styles.filterBtn, selectedCategory === cat && styles.filterBtnActive]}onPress={() => setSelectedCategory(cat)}
                    >
                    <Text style={[styles.filterText, selectedCategory === cat && styles.filterTextActive]}>
                    {cat}
                    </Text>
                </TouchableOpacity>
            ))}
            </View>


{/* Results count — updates dynamically as filter changes */}
      <View style={styles.resultsRow}>
        <Text style={styles.resultsText}>{filtered.length} workouts</Text>
      </View>

      {/* Workout cards */}
      <View style={styles.list}>
        {filtered.map((workout) => (
          <TouchableOpacity
            key={workout.id}
            style={styles.card}
            onPress={() => navigation.navigate('WorkoutDetail', { workout })}
          >
            <View style={styles.cardHeader}>
              {/* Category badge */}
              <View style={styles.cardBadge}>
                <Text style={styles.badgeText}>{workout.category.toUpperCase()}</Text>
              </View>
              <Text style={styles.cardDuration}>{workout.duration}</Text>
            </View>

            <Text style={styles.cardTitle}>{workout.title}</Text>
            <Text style={styles.cardLevel}>{workout.level}</Text>

            {/* Divider line */}
            <View style={styles.divider} />

            {/* Description with 2 line limit */}
            <Text style={styles.cardDesc} numberOfLines={2}>{workout.description}</Text>
          </TouchableOpacity>
        ))}
      </View>

    </ScrollView>
  );
}

    const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor:  colors },

    header: {
        backgroundColor: colors.primary,
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

    // Filter buttons
    filterRow: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingTop: 20,
        gap: 8,
    },
    filterBtn: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 20,
        backgroundColor: colors.card,
        borderWidth: 1,
        borderColor: colors.border,
    },
    filterBtnActive: {
        backgroundColor: colors.primary,
        borderColor: colors.primary,
    },
    filterText: {
        fontSize: 13,
        color: colors.subtext,
        fontWeight: '500',
    },
    filterTextActive: {
        color: '#FFFFFF',
        fontWeight: '700',
    },

    // Results count
    resultsRow: {
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 4,
    },
    resultsText: {
        fontSize: 12,
        color: colors.subtext,
        letterSpacing: 0.5,
    },

    // Workout cards
    list: { paddingHorizontal: 20, paddingTop: 8 },
    card: {
        backgroundColor: colors.card,
        borderRadius: 18,
        padding: 20,
        marginBottom: 14,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.06,
        shadowRadius: 12,
        elevation: 3,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    cardBadge: {
        backgroundColor: '#EAF2EE',
        borderRadius: 6,
        paddingHorizontal: 10,
        paddingVertical: 4,
    },
    badgeText: {
        fontSize: 10,
        fontWeight: '700',
        color: colors.primary,
        letterSpacing: 1.5,
    },
    cardDuration: {
        fontSize: 12,
        color: colors.subtext,
        fontWeight: '500',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: colors.text,
        letterSpacing: 0.2,
    },
    cardLevel: {
        fontSize: 12,
        color: colors.subtext,
        marginTop: 4,
        letterSpacing: 0.3,
    },
    divider: {
        height: 1,
        backgroundColor: colors.border,
        marginVertical: 12,
    },
    cardDesc: {
        fontSize: 13,
        color: colors.text,
        lineHeight: 20,
        opacity: 0.7,
    },
    });


