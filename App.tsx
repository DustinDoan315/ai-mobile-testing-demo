import { useState } from "react";
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { notes } from "./src/notes";
import { filterNotes } from "./src/search.mjs";

export default function App() {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const results = filterNotes(notes, query);
  function search(value: string) {
    setInput(value);
    setQuery(value);
  }
  function clear() {
    setInput("");
    Keyboard.dismiss();
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safe}>
        <StatusBar style="dark" />
        <KeyboardAvoidingView
          style={styles.page}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <View style={styles.brandRow}>
            <Text style={styles.brand}>DUSTIN BUILDS</Text>
            <Text style={styles.edition}>DEMO / 01</Text>
          </View>
          <Text accessibilityRole="header" style={styles.title}>
            Field Notes
          </Text>
          <Text style={styles.subtitle}>Ideas worth keeping.</Text>
          <View style={styles.searchRow}>
            <TextInput
              testID="search-input"
              accessibilityLabel="Search notes"
              placeholder="Search notes"
              placeholderTextColor="#77776e"
              value={input}
              onChangeText={search}
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="search"
              onSubmitEditing={Keyboard.dismiss}
              style={styles.input}
            />
            <Pressable
              testID="clear-search"
              accessibilityRole="button"
              accessibilityLabel="Clear search"
              onPress={clear}
              style={({ pressed }) => [styles.clear, pressed && styles.pressed]}
            >
              <Text style={styles.clearText}>Clear</Text>
            </Pressable>
          </View>
          <View style={styles.listHeading}>
            <Text style={styles.label}>YOUR COLLECTION</Text>
            <Text
              testID="results-count"
              accessibilityLabel={`${results.length} of ${notes.length} notes`}
              style={styles.count}
            >
              {results.length} of {notes.length} notes
            </Text>
          </View>
          <FlatList
            testID="notes-list"
            data={results}
            keyExtractor={(item) => item.id}
            keyboardShouldPersistTaps="handled"
            contentContainerStyle={styles.list}
            ListEmptyComponent={
              <Text style={styles.empty}>
                No notes found. Try another search.
              </Text>
            }
            renderItem={({ item }) => (
              <View testID={`note-${item.id}`} style={styles.note}>
                <View style={styles.noteTop}>
                  <Text style={styles.category}>
                    {item.category.toUpperCase()}
                  </Text>
                  <Text style={styles.number}>{item.id}</Text>
                </View>
                <Text style={styles.noteTitle}>{item.title}</Text>
                <Text style={styles.summary}>{item.summary}</Text>
              </View>
            )}
          />
          <Text style={styles.footer}>LOCAL NOTES · NO ACCOUNT REQUIRED</Text>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#f7f5ee" },
  page: { flex: 1, paddingHorizontal: 24 },
  brandRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 18,
    marginBottom: 26,
  },
  brand: {
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 2,
    color: "#344b37",
  },
  edition: { fontSize: 10, letterSpacing: 1, color: "#727368" },
  title: {
    fontSize: 42,
    fontWeight: "800",
    letterSpacing: -1.5,
    color: "#20271f",
  },
  subtitle: { fontSize: 17, color: "#666c61", marginTop: 4, marginBottom: 26 },
  searchRow: { flexDirection: "row", gap: 10 },
  input: {
    flex: 1,
    minHeight: 52,
    borderWidth: 1,
    borderColor: "#cacdc0",
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 17,
    color: "#20271f",
    backgroundColor: "#fffef8",
  },
  clear: {
    minWidth: 68,
    minHeight: 52,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#344b37",
    borderRadius: 12,
  },
  clearText: { color: "#fffef8", fontWeight: "700", fontSize: 15 },
  pressed: { opacity: 0.7 },
  listHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 27,
    marginBottom: 12,
  },
  label: {
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1.6,
    color: "#666c61",
  },
  count: { fontSize: 13, fontWeight: "600", color: "#344b37" },
  list: { paddingBottom: 16 },
  note: { borderTopWidth: 1, borderColor: "#d6d8cc", paddingVertical: 18 },
  noteTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  category: {
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1.2,
    color: "#647449",
  },
  number: { fontSize: 11, color: "#858779" },
  noteTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#20271f",
    marginBottom: 6,
  },
  summary: { fontSize: 14, lineHeight: 21, color: "#666c61" },
  empty: { paddingVertical: 32, color: "#666c61", fontSize: 16 },
  footer: {
    fontSize: 9,
    letterSpacing: 1.5,
    color: "#727368",
    textAlign: "center",
    paddingVertical: 12,
  },
});
